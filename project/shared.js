/*
 * Shared demo data for the citizen and officer apps.
 *
 * Both apps are served from the same origin, so they read and write the same
 * localStorage key. An officer action (accept, scan, payment, done) shows up in
 * the citizen app automatically through the browser's `storage` event.
 * If storage is blocked (private window, preview), each app falls back to an
 * in-memory copy and still works on its own.
 */
(function () {
  var BRAND = 'Atta';
  var KEY = 'atta-demo-v2';
  var ACCOUNTS_KEY = 'atta-officers-v1';
  var DAY = 864e5;
  var QR_DAYS = 7;      // QR code validity after the officer accepts
  var PICKUP_DAYS = 7;  // pick-up window after "ready for pickup"
  var memory = null;

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmt(ms) {
    if (!ms) return '';
    var d = new Date(ms);
    return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear();
  }
  function fmtShort(ms) { var d = new Date(ms); return pad(d.getDate()) + '/' + pad(d.getMonth() + 1); }

  /* Required documents by service and reason (see Info page in the citizen app). */
  var REQ = {
    id: {
      'new': ['d_birth', 'd_familyOrRes'],
      expired: ['d_oldId', 'd_familyOrRes'],
      lost: ['d_policeLoss', 'd_familyOrRes', 'd_birth'],
      damaged: ['d_damagedId', 'd_familyOrRes']
    },
    pass: {
      'new': ['d_id', 'd_birth', 'd_family'],
      expired: ['d_oldPass', 'd_id'],
      lost: ['d_policeLoss', 'd_id', 'd_oldPassCopy'],
      damaged: ['d_damagedPass', 'd_id']
    }
  };
  function docsFor(svc, reason) {
    var kind = svc.indexOf('Pass') > 0 ? 'pass' : 'id';
    var key = svc.indexOf('new') === 0 ? 'new' : (reason || 'expired');
    return REQ[kind][key] || REQ[kind].expired;
  }

  var FIELD_KEYS = ['nameKm', 'nameEn', 'dob', 'sex', 'pob', 'addr', 'father', 'mother'];

  function person(km, en, dob, sex, father, mother, addr) {
    return {
      nameKm: km, nameEn: en.toUpperCase(), dob: dob, sex: sex === 'F' ? 'ស្រី / F' : 'ប្រុស / M',
      pob: 'រាជធានីភ្នំពេញ', addr: addr || 'សង្កាត់ទឹកល្អក់ ១, ខណ្ឌទួលគោក, ភ្នំពេញ', father: father, mother: mother
    };
  }

  function seed() {
    var now = Date.now();
    var ago = function (d) { return now - d * DAY; };
    var dara = person('សុខ ដារា', 'Sok Dara', '12/04/2001', 'M', 'សុខ សំណាង', 'ចាន់ សុភា');
    var base = function (o) {
      return Object.assign({ mine: false, reason: null, stage: 0, pay: null, qrAt: null, queue: '', readyAt: null,
        verified: {}, edited: {}, warn: 'mother', updatedAt: o.createdAt }, o);
    };
    return [
      base({ id: 'c1', mine: true, no: 'KH-2611-0131', svc: 'renewId', reason: 'expired', createdAt: ago(6), stage: 2, qrAt: ago(1), form: dara }),
      base({ id: 'c2', mine: true, no: 'KH-2611-0142', svc: 'renewPass', reason: 'expired', createdAt: ago(0), stage: 1, form: dara }),
      base({ id: 'o2', no: 'KH-2611-0139', svc: 'newId', createdAt: ago(1), warn: 'pob', form: person('ចាន់ ស្រីមុំ', 'Chan Sreymom', '03/09/2008', 'F', 'ចាន់ វុទ្ធី', 'លី សុគន្ធា') }),
      base({ id: 'o3', no: 'KH-2611-0135', svc: 'newPass', createdAt: ago(1), warn: 'addr', form: person('ពៅ សុវណ្ណ', 'Pov Sovann', '21/01/1995', 'M', 'ពៅ សារិន', 'ម៉ម សុខា', 'សង្កាត់ស្ទឹងមានជ័យ, ខណ្ឌមានជ័យ, ភ្នំពេញ') }),
      base({ id: 'o4', no: 'KH-2611-0129', svc: 'renewId', reason: 'damaged', createdAt: ago(12), stage: 2, qrAt: ago(9), form: person('កែវ វិសាល', 'Keo Visal', '30/06/1990', 'M', 'កែវ សុផល', 'ទេព ចន្ថា') }),
      base({ id: 'o5', no: 'KH-2611-0127', svc: 'newPass', createdAt: ago(8), stage: 3, pay: 'cash', qrAt: ago(3), queue: 'A-021', form: person('លឹម សុភ័ក្ត្រ', 'Lim Sopheak', '15/02/1999', 'F', 'លឹម ហុង', 'សៀង ណារី') }),
      base({ id: 'o6', no: 'KH-2611-0120', svc: 'renewPass', reason: 'expired', createdAt: ago(13), stage: 6, pay: 'online', qrAt: ago(9), queue: 'A-012', readyAt: ago(2), form: person('ហេង រតនា', 'Heng Rathana', '08/11/1987', 'M', 'ហេង សុខុម', 'ប៊ុន សាវឿន') }),
      base({ id: 'o7', no: 'KH-2611-0118', svc: 'renewId', reason: 'lost', createdAt: ago(1), stage: 1, warn: 'dob', form: person('ម៉ៅ សុភ័ក្រ', 'Mao Sopheak', '09/05/1992', 'M', 'ម៉ៅ ចាន់', 'សុខ លក្ខិណា') }),
      base({ id: 'o8', no: 'KH-2611-0115', svc: 'renewId', reason: 'damaged', createdAt: ago(2), form: person('វ៉ាន់ រស្មី', 'Van Rasmey', '18/08/1996', 'F', 'វ៉ាន់ សុធា', 'អ៊ុំ ស្រីពៅ') }),
      base({ id: 'o9', no: 'KH-2611-0112', svc: 'renewPass', reason: 'lost', createdAt: ago(10), stage: 4, pay: 'online', qrAt: ago(6), queue: 'A-018', form: person('អ៊ុក ចិន្តា', 'Ouk Chenda', '27/03/1985', 'F', 'អ៊ុក សារុន', 'ជា សុភាព') }),
      base({ id: 'o10', no: 'KH-2611-0109', svc: 'newId', createdAt: ago(11), stage: 5, pay: 'cashPaid', qrAt: ago(7), queue: 'A-015', form: person('ស៊ឹម បុប្ផា', 'Sim Bopha', '14/12/2009', 'F', 'ស៊ឹម វណ្ណា', 'ឈិន ម៉ាលី') }),
      base({ id: 'o11', no: 'KH-2611-0137', svc: 'newPass', createdAt: ago(4), stage: 2, qrAt: ago(2), form: person('ទូច វណ្ណា', 'Touch Vanna', '02/07/1998', 'M', 'ទូច សំអាត', 'គង់ សុផាត') })
    ];
  }

  function readKey(key) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function writeKey(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
  }

  function load() {
    var stored = readKey(KEY);
    if (Array.isArray(stored)) { memory = stored; return stored; }
    if (memory) return memory;
    memory = seed();
    writeKey(KEY, memory);
    return memory;
  }
  function save(apps) { memory = apps; writeKey(KEY, apps); return apps; }
  function update(id, patch) {
    patch = Object.assign({ updatedAt: Date.now() }, patch);
    return save(load().map(function (a) { return a.id === id ? Object.assign({}, a, patch) : a; }));
  }
  function add(app) { return save(load().concat([app])); }
  function reset() { memory = null; try { localStorage.removeItem(KEY); } catch (e) {} return load(); }
  function subscribe(fn) {
    window.addEventListener('storage', function (e) {
      if (e.key === KEY || e.key === null) { memory = null; fn(load()); }
    });
  }

  function nextQueue(apps) {
    var max = 0;
    apps.forEach(function (a) { var m = /A-0*(\d+)/.exec(a.queue || ''); if (m) max = Math.max(max, +m[1]); });
    var n = max + 1;
    return 'A-' + (n < 100 ? ('00' + n).slice(-3) : n);
  }

  /* QR helpers. Validity: QR_DAYS from the moment the officer accepts. */
  function qrUntil(a) { return a.qrAt ? a.qrAt + QR_DAYS * DAY : 0; }
  function qrValid(a) { return !!a.qrAt && Date.now() <= qrUntil(a); }
  function daysLeft(until) { return Math.max(0, Math.ceil((until - Date.now()) / DAY)); }
  function pickupUntil(a) { return a.readyAt ? a.readyAt + PICKUP_DAYS * DAY : 0; }
  function qrText(a) {
    return BRAND.toUpperCase() + ' ON-SITE QR\nApplication: ' + a.no + '\nName: ' + a.form.nameEn + '\nValid until: ' + fmt(qrUntil(a));
  }
  var qrCache = {};
  function qrImage(text) {
    if (qrCache[text]) return qrCache[text];
    if (typeof window.qrcode !== 'function') return '';
    var q = window.qrcode(0, 'M');
    q.addData(text);
    q.make();
    qrCache[text] = q.createDataURL(6, 2);
    return qrCache[text];
  }

  /* Officer accounts for the demo login/sign-up. */
  var DEMO_OFFICER = { id: 'OF-1024', pw: '1234', name: 'Chea Sokha', office: 0 };
  function accounts() { var list = readKey(ACCOUNTS_KEY); return [DEMO_OFFICER].concat(Array.isArray(list) ? list : []); }
  function addAccount(acc) {
    var list = readKey(ACCOUNTS_KEY); list = Array.isArray(list) ? list : [];
    list.push(acc); writeKey(ACCOUNTS_KEY, list);
  }

  window.AttaStore = {
    BRAND: BRAND, DAY: DAY, QR_DAYS: QR_DAYS, PICKUP_DAYS: PICKUP_DAYS, FIELD_KEYS: FIELD_KEYS, REQ: REQ,
    fmt: fmt, fmtShort: fmtShort, docsFor: docsFor, load: load, save: save, update: update, add: add, reset: reset,
    subscribe: subscribe, nextQueue: nextQueue, qrUntil: qrUntil, qrValid: qrValid, daysLeft: daysLeft,
    pickupUntil: pickupUntil, qrText: qrText, qrImage: qrImage, accounts: accounts, addAccount: addAccount, DEMO_OFFICER: DEMO_OFFICER
  };
})();
