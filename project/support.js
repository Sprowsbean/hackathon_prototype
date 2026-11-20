(function () {
  function readPath(path, context) {
    return path.split('.').reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, context);
  }

  function interpolate(value, context) {
    return value.replace(/\{\{\s*([\w.$]+)\s*\}\}/g, function (_, path) {
      var result = readPath(path, context);
      return result == null ? '' : String(result);
    });
  }

  function renderNodes(nodes, context) {
    var output = [];
    Array.prototype.forEach.call(nodes, function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        output.push(document.createTextNode(interpolate(node.nodeValue, context)));
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;

      var tag = node.tagName.toLowerCase();
      if (tag === 'helmet') return;
      if (tag === 'sc-if') {
        var condition = node.getAttribute('value');
        var conditionPath = condition && condition.match(/\{\{\s*([\w.$]+)\s*\}\}/);
        if (conditionPath && readPath(conditionPath[1], context)) {
          output = output.concat(renderNodes(node.childNodes, context));
        }
        return;
      }
      if (tag === 'sc-for') {
        var listAttr = node.getAttribute('list');
        var listPath = listAttr && listAttr.match(/\{\{\s*([\w.$]+)\s*\}\}/);
        var list = listPath ? readPath(listPath[1], context) : [];
        var itemName = node.getAttribute('as');
        if (Array.isArray(list)) {
          list.forEach(function (item) {
            var itemContext = Object.create(context);
            itemContext[itemName] = item;
            output = output.concat(renderNodes(node.childNodes, itemContext));
          });
        }
        return;
      }

      var element = node.cloneNode(false);
      Array.prototype.forEach.call(node.attributes, function (attribute) {
        var name = attribute.name;
        var value = attribute.value;
        var eventMatch = name.match(/^on(click|change)$/i);
        if (eventMatch) {
          element.removeAttribute(name);
          var handlerPath = value.match(/\{\{\s*([\w.$]+)\s*\}\}/);
          var handler = handlerPath && readPath(handlerPath[1], context);
          if (typeof handler === 'function') {
            var eventName = eventMatch[1].toLowerCase();
            if (eventName === 'change' && element.tagName === 'INPUT' && element.type !== 'checkbox' && element.type !== 'radio') {
              eventName = 'input';
            }
            element.addEventListener(eventName, handler);
          }
          return;
        }

        var expression = value.match(/^\{\{\s*([\w.$]+)\s*\}\}$/);
        var resolved = expression ? readPath(expression[1], context) : interpolate(value, context);
        var lowerName = name.toLowerCase();
        if (['checked', 'disabled', 'selected', 'multiple', 'required', 'readonly', 'hidden'].indexOf(lowerName) >= 0) {
          element[lowerName === 'readonly' ? 'readOnly' : lowerName] = Boolean(resolved);
          if (resolved) element.setAttribute(name, '');
          else element.removeAttribute(name);
          return;
        }
        if (resolved != null) element.setAttribute(name, String(resolved));
        if (lowerName === 'value' && 'value' in element) {
          element.value = resolved == null ? '' : String(resolved);
        }
      });
      element.append.apply(element, renderNodes(node.childNodes, context));
      output.push(element);
    });
    return output;
  }

  function showError(host, error) {
    console.error('Local prototype runtime failed:', error);
    host.replaceChildren();
    var message = document.createElement('pre');
    message.textContent = 'The prototype could not start.\n' + (error && error.message ? error.message : String(error));
    message.style.cssText = 'margin:24px;padding:16px;white-space:pre-wrap;color:#991b1b;background:#fef2f2;border:1px solid #fecaca;border-radius:12px;font:14px/1.5 system-ui,sans-serif';
    host.appendChild(message);
  }

  function addLocalPreviewStyles() {
    var style = document.createElement('style');
    style.textContent = 'body{min-height:100vh;display:grid;place-items:center;background:#e2e8f0}x-dc{display:block}';
    document.head.appendChild(style);
  }

  async function start() {
    var host = document.querySelector('x-dc');
    var script = document.querySelector('script[data-dc-script]');
    if (!host || !script) return;

    addLocalPreviewStyles();
    var helmet = host.querySelector('helmet');
    if (helmet) {
      Array.prototype.forEach.call(helmet.children, function (element) {
        document.head.appendChild(element.cloneNode(true));
      });
    }

    var response = await fetch(script.getAttribute('src'));
    if (!response.ok) throw new Error('Could not load ' + script.getAttribute('src') + ' (HTTP ' + response.status + ').');
    var source = await response.text();
    var Component = new Function('DCLogic', source + '\nreturn Component;')(DCLogic);
    var propDefinitions = JSON.parse(script.getAttribute('data-props') || '{}');
    var props = {};
    Object.keys(propDefinitions).forEach(function (name) {
      if (name.charAt(0) === '$') return;
      var definition = propDefinitions[name];
      props[name] = definition && typeof definition === 'object' && 'default' in definition
        ? definition.default
        : definition;
    });
    var component = new Component(props);
    var template = host.cloneNode(true);

    function render() {
      try {
        var active = document.activeElement;
        var controls = Array.prototype.slice.call(host.querySelectorAll('input,button,select,textarea'));
        var activeIndex = host.contains(active) ? controls.indexOf(active) : -1;
        var selection = null;
        if (activeIndex >= 0 && typeof active.selectionStart === 'number') {
          selection = [active.selectionStart, active.selectionEnd];
        }
        host.replaceChildren.apply(host, renderNodes(template.childNodes, component.renderVals()));
        if (activeIndex >= 0) {
          var nextActive = host.querySelectorAll('input,button,select,textarea')[activeIndex];
          if (nextActive) {
            nextActive.focus({ preventScroll: true });
            if (selection && typeof nextActive.setSelectionRange === 'function') {
              nextActive.setSelectionRange(selection[0], selection[1]);
            }
          }
        }
      } catch (error) {
        showError(host, error);
      }
    }

    component._render = render;
    render();
  }

  class DCLogic {
    constructor(props) {
      this.props = props;
    }
    setState(patch) {
      this.state = Object.assign({}, this.state, patch);
      if (this._render) this._render();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    start().catch(function (error) {
      var host = document.querySelector('x-dc');
      if (host) showError(host, error);
      else console.error('Local prototype runtime failed:', error);
    });
  }, { once: true });
})();
