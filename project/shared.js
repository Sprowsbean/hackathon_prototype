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
  var BRAND = 'KH-ID';
  var KEY = 'atta-demo-v2';
  var ACCOUNTS_KEY = 'atta-officers-v1';
  var DAY = 864e5;
  var QR_DAYS = 7;      // QR code validity after the officer accepts
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
      'new': ['d_birthCertified', 'd_familyOrRes'],
      expired: ['d_oldId', 'd_familyOrResUpdate'],
      lost: ['d_policeLoss', 'd_lostIdDuplicate', 'd_birthCheck', 'd_familyOrResRecommended'],
      damaged: ['d_damagedId', 'd_familyOrResDamaged']
    },
    pass: {
      'new': ['d_id', 'd_familyOrRes'],
      expired: ['d_oldPass', 'd_id', 'd_familyOrRes'],
      lost: ['d_policeLoss', 'd_id', 'd_familyOrRes', 'd_oldPassCopy'],
      damaged: ['d_damagedPass', 'd_id', 'd_familyOrRes']
    },
    passUnder15: {
      'new': ['d_birth', 'd_familyOrRes', 'd_guardianId', 'd_guardianAuthorization'],
      expired: ['d_oldPass', 'd_birth', 'd_familyOrRes', 'd_guardianId', 'd_guardianAuthorization'],
      lost: ['d_policeLoss', 'd_birth', 'd_familyOrRes', 'd_guardianId', 'd_guardianAuthorization', 'd_oldPassCopy'],
      damaged: ['d_damagedPass', 'd_birth', 'd_familyOrRes', 'd_guardianId', 'd_guardianAuthorization']
    }
  };
  var OPTIONAL_DOCS = {
    d_familyOrResUpdate: true,
    d_familyOrResDamaged: true,
    d_birthCheck: true,
    d_familyOrResRecommended: true,
    d_oldPassCopy: true
  };
  function requirements(kind, reason, under15) {
    var docs = kind === 'pass' && under15 ? REQ.passUnder15[reason] : REQ[kind][reason];
    return docs || [];
  }
  function docsFor(svc, reason, under15) {
    var kind = svc.indexOf('Pass') > 0 ? 'pass' : 'id';
    var key = svc.indexOf('new') === 0 ? 'new' : (reason || 'expired');
    return requirements(kind, key, under15);
  }
  function isOptionalDoc(key) { return !!OPTIONAL_DOCS[key]; }

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
      base({ id: 'c1', mine: true, no: 'KH-2611-0131', svc: 'renewId', reason: 'expired', createdAt: ago(14), updatedAt: ago(9), stage: 2, qrAt: ago(9), form: dara }),
      base({ id: 'c2', mine: true, no: 'KH-2611-0142', svc: 'renewPass', reason: 'expired', createdAt: ago(0), stage: 1, form: dara }),
      base({ id: 'o2', no: 'KH-2611-0139', svc: 'newId', createdAt: ago(1), warn: 'pob', form: person('ចាន់ ស្រីមុំ', 'Chan Sreymom', '03/09/2008', 'F', 'ចាន់ វុទ្ធី', 'លី សុគន្ធា') }),
      base({ id: 'o3', no: 'KH-2611-0135', svc: 'newPass', createdAt: ago(1), warn: 'addr', form: person('ពៅ សុវណ្ណ', 'Pov Sovann', '21/01/1995', 'M', 'ពៅ សារិន', 'ម៉ម សុខា', 'សង្កាត់ស្ទឹងមានជ័យ, ខណ្ឌមានជ័យ, ភ្នំពេញ') }),
      base({ id: 'o4', no: 'KH-2611-0129', svc: 'renewId', reason: 'damaged', createdAt: ago(12), stage: 2, qrAt: ago(9), form: person('កែវ វិសាល', 'Keo Visal', '30/06/1990', 'M', 'កែវ សុផល', 'ទេព ចន្ថា') }),
      base({ id: 'o5', no: 'KH-2611-0127', svc: 'newPass', createdAt: ago(8), stage: 3, pay: 'cash', qrAt: ago(3), queue: 'A-021', form: person('លឹម សុភ័ក្ត្រ', 'Lim Sopheak', '15/02/1999', 'F', 'លឹម ហុង', 'សៀង ណារី') }),
      base({ id: 'o6', no: 'KH-2611-0120', svc: 'renewPass', reason: 'expired', createdAt: ago(13), stage: 6, pay: 'online', qrAt: ago(9), queue: 'A-012', readyAt: ago(2), form: person('ហេង រតនា', 'Heng Rathana', '08/11/1987', 'M', 'ហេង សុខុម', 'ប៊ុន សាវឿន') }),
      base({ id: 'o7', no: 'KH-2611-0118', svc: 'renewId', reason: 'lost', createdAt: ago(1), stage: 1, warn: 'dob', form: person('ម៉ៅ សុភ័ក្រ', 'Mao Sopheak', '09/05/1992', 'M', 'ម៉ៅ ចាន់', 'សុខ លក្ខិណា') }),
      base({ id: 'o8', no: 'KH-2611-0115', svc: 'renewId', reason: 'damaged', createdAt: ago(2), form: person('វ៉ាន់ រស្មី', 'Van Rasmey', '18/08/1996', 'F', 'វ៉ាន់ សុធា', 'អ៊ុំ ស្រីពៅ') }),
      base({ id: 'o9', no: 'KH-2611-0112', svc: 'renewPass', reason: 'lost', createdAt: ago(10), stage: 4, pay: 'online', qrAt: ago(6), queue: 'A-018', form: person('អ៊ុក ចិន្តា', 'Ouk Chenda', '27/03/1985', 'F', 'អ៊ុក សារុន', 'ជា សុភាព') }),
      base({ id: 'o10', no: 'KH-2611-0109', svc: 'newId', createdAt: ago(11), stage: 5, pay: 'free', qrAt: ago(7), queue: 'A-015', form: person('ស៊ឹម បុប្ផា', 'Sim Bopha', '14/12/2009', 'F', 'ស៊ឹម វណ្ណា', 'ឈិន ម៉ាលី') }),
      base({ id: 'o11', no: 'KH-2611-0137', svc: 'newPass', under15: true, createdAt: ago(4), stage: 2, qrAt: ago(2), form: person('ទូច វណ្ណា', 'Touch Vanna', '02/07/2021', 'M', 'ទូច សំអាត', 'គង់ សុផាត') })
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
  function qrText(a) {
    return BRAND.toUpperCase() + ' ON-SITE QR\nApplication: ' + a.no + '\nName: ' + a.form.nameEn + '\nValid until: ' + fmt(qrUntil(a));
  }
  /* Pickup QR: separate from the on-site QR, no expiry (the document can be collected any time once ready). */
  function pickupQrText(a) {
    return BRAND.toUpperCase() + ' PICKUP QR\nApplication: ' + a.no + '\nName: ' + a.form.nameEn;
  }
  /* QR late fee: $1 per started late day. Paid inside the KH-ID app (never to GDI). */
  function qrLateDays(a) { return a.qrAt && !qrValid(a) ? Math.max(1, Math.ceil((Date.now() - qrUntil(a)) / DAY)) : 0; }
  /* Fees: ID card is free. Passport (standard, ~15 working days): $100 age 6+ (10-year validity), $80 under 6 (5-year validity).
     Age comes from the date of birth in the application form (DD/MM/YYYY, Latin or Khmer digits), measured on the submission date. */
  var KHD = '០១២៣៤៥៦៧៨៩';
  function ageOn(dob, ms) {
    var str = String(dob || '').replace(/[០-៩]/g, function (c) { return KHD.indexOf(c); });
    var m = /^\s*(\d{1,2})\D+(\d{1,2})\D+(\d{4})\s*$/.exec(str);
    if (!m) return null;
    var d = +m[1], mo = +m[2], y = +m[3], now = new Date(ms || Date.now());
    if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
    var age = now.getFullYear() - y;
    if (now.getMonth() + 1 < mo || (now.getMonth() + 1 === mo && now.getDate() < d)) age--;
    return age < 0 ? null : age;
  }
  function feeFor(a) {
    if (a.svc.indexOf('Pass') < 0) return { kind: 'id', amount: 0, age: null, years: 0 };
    var age = ageOn(a.form && a.form.dob, a.createdAt), under6 = age !== null && age < 6;
    return { kind: under6 ? 'passU6' : 'pass6', amount: under6 ? 80 : 100, age: age, years: under6 ? 5 : 10 };
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
    BRAND: BRAND, DAY: DAY, QR_DAYS: QR_DAYS, FIELD_KEYS: FIELD_KEYS, REQ: REQ,
    fmt: fmt, fmtShort: fmtShort, docsFor: docsFor, requirements: requirements, isOptionalDoc: isOptionalDoc, load: load, save: save, update: update, add: add, reset: reset,
    subscribe: subscribe, nextQueue: nextQueue, qrUntil: qrUntil, qrValid: qrValid, daysLeft: daysLeft,
    pickupQrText: pickupQrText, feeFor: feeFor, ageOn: ageOn, qrLateDays: qrLateDays, qrText: qrText, qrImage: qrImage, accounts: accounts, addAccount: addAccount, DEMO_OFFICER: DEMO_OFFICER
  };
})();
