var T = {
  en: {
    back:'Back', officerName:'Officer · [OFFICE NAME]',
    t_dash:'Dashboard', t_queue:'Applications', t_detail:'Application', t_schedule:'Accept & schedule', t_payments:'Payments',
    k_pending:'Pending review', k_new:'New applications', k_renew:'Renewals', k_unpaid:'Awaiting payment', k_paid:'Paid',
    byService:'Applications by service', byStage:'Applications by status', lostDamagedAnalytics:'Lost and damaged ID analytics', lostIds:'Lost ID requests', damagedIds:'Damaged ID requests', lostDamagedNote:'Counts are based on submitted ID-renewal requests and their selected reason.', reviewPending:'Review pending applications',
    sampleNote:'Figures are counted from the sample applications in this prototype.',
    search:'Search name or application no.', empty:'No applications here.',
    f_all:'All', f_pending:'Pending', f_verified:'Awaiting payment', f_onsite:'On-site', f_ready:'Ready',
    svc_newId:'New ID card', svc_renewId:'ID card renewal', svc_newPass:'New passport', svc_renewPass:'Passport renewal',
    sh0:'New', sh1:'Reviewing', sh2:'Unpaid', sh3:'On-site', sh4:'Printing', sh5:'Ready',
    st0:'Submitted', st1:'Under review', st2:'Verified – awaiting payment', st3:'Paid – waiting for biometrics', st4:'Biometrics captured', st5:'Ready for pickup',
    appNo:'Application no.', service:'Service', submittedOn:'Submitted', dob:'Date of birth', pob:'Place of birth', pnh:'Phnom Penh', payment:'Payment', queueNo:'Queue no.',
    paidOnline:'Paid online', payAtOffice:'Cash at office (unpaid)', paidCash:'Paid in cash', unpaid:'Not paid',
    uploadedDocs:'Uploaded documents', autoChecks:'Automatic checks (OCR)',
    c1:'Name matches across documents', c1s:'Birth certificate, family book', c2:'Date of birth matches', c2s:'All documents agree',
    c3:"Mother's name – low OCR confidence", c3s:'Compare with the family book before verifying',
    c3ok:"Mother's name confirmed by officer", c3oks:'Checked against the family book', c4:'No duplicate application found', c4s:'Checked against active applications',
    startReview:'Start review', verifyAccept:'Verify & accept', requestFix:'Ask citizen to correct',
    awaitPay:'The citizen has been asked to pay. Online payments update automatically. Mark cash payments here.', markCash:'Mark cash received',
    onsite:'On-site capture', bio1:'Fingerprints scanned', bio2:'Photo taken', bio3:'Height measured', bio4:'Special features recorded', markBio:'Save biometrics',
    markReady:'Mark ready for pickup', allDone:'Complete. The citizen has been notified to collect the document.',
    applicant:'Applicant', pickDate:'On-site date', pickTime:'Time slot', autoQueue:'Queue number (auto)',
    notifyNote:'The citizen gets a notification with the date, time, queue number and the payment request.',
    confirmNotify:'Confirm & notify citizen',
    toastAccept:'Accepted. Citizen notified with queue no. ', toastFix:'Correction request sent to the citizen.', toastCash:'Payment recorded. Status updated.', toastBio:'Biometrics saved. Status updated.', toastReady:'Marked ready. Citizen notified.', toastReview:'Moved to “Under review”.',
    navDash:'Dashboard', navQueue:'Applications', navPay:'Payments',
    d_birth:'Birth certificate', d_family:'Family book', d_res:'Residence book', d_id:'National ID', d_oldId:'Current ID', d_oldPass:'Current passport', view:'View',
    mon:'Mon', tue:'Tue', wed:'Wed', thu:'Thu'
  },
  km: {
    back:'ត្រឡប់ក្រោយ', officerName:'មន្ត្រី · [ឈ្មោះការិយាល័យ]',
    t_dash:'ផ្ទាំងគ្រប់គ្រង', t_queue:'ពាក្យស្នើសុំ', t_detail:'ពាក្យសុំ', t_schedule:'ទទួលយក និងកំណត់ពេល', t_payments:'ការបង់ប្រាក់',
    k_pending:'រង់ចាំការពិនិត្យ', k_new:'ពាក្យសុំធ្វើថ្មី', k_renew:'ពាក្យសុំបន្ត', k_unpaid:'រង់ចាំការបង់ប្រាក់', k_paid:'បានបង់',
    byService:'ពាក្យសុំតាមប្រភេទសេវា', byStage:'ពាក្យសុំតាមស្ថានភាព', reviewPending:'ពិនិត្យពាក្យសុំដែលកំពុងរង់ចាំ',
    sampleNote:'តួលេខត្រូវបានរាប់ពីពាក្យសុំគំរូក្នុងគំរូសាកល្បងនេះ។',
    search:'ស្វែងរកឈ្មោះ ឬលេខពាក្យសុំ', empty:'មិនមានពាក្យសុំនៅទីនេះទេ។',
    f_all:'ទាំងអស់', f_pending:'រង់ចាំ', f_verified:'រង់ចាំបង់ប្រាក់', f_onsite:'នៅការិយាល័យ', f_ready:'រួចរាល់',
    svc_newId:'ធ្វើអត្តសញ្ញាណប័ណ្ណថ្មី', svc_renewId:'បន្តអត្តសញ្ញាណប័ណ្ណ', svc_newPass:'ធ្វើលិខិតឆ្លងដែនថ្មី', svc_renewPass:'បន្តលិខិតឆ្លងដែន',
    sh0:'ថ្មី', sh1:'កំពុងពិនិត្យ', sh2:'មិនទាន់បង់', sh3:'នៅការិយាល័យ', sh4:'កំពុងបោះពុម្ព', sh5:'រួចរាល់',
    st0:'បានដាក់ស្នើ', st1:'កំពុងពិនិត្យ', st2:'បានផ្ទៀងផ្ទាត់ – រង់ចាំការបង់ប្រាក់', st3:'បានបង់ – រង់ចាំថតជីវមាត្រ', st4:'បានថតជីវមាត្រ', st5:'រួចរាល់សម្រាប់ទទួល',
    appNo:'លេខពាក្យសុំ', service:'សេវាកម្ម', submittedOn:'ថ្ងៃដាក់ស្នើ', dob:'ថ្ងៃខែឆ្នាំកំណើត', pob:'ទីកន្លែងកំណើត', pnh:'ភ្នំពេញ', payment:'ការបង់ប្រាក់', queueNo:'លេខរង់ចាំ',
    paidOnline:'បានបង់តាមអនឡាញ', payAtOffice:'សាច់ប្រាក់នៅការិយាល័យ (មិនទាន់បង់)', paidCash:'បានបង់ជាសាច់ប្រាក់', unpaid:'មិនទាន់បង់',
    uploadedDocs:'ឯកសារដែលបានបញ្ចូល', autoChecks:'ការត្រួតពិនិត្យស្វ័យប្រវត្តិ (OCR)',
    c1:'ឈ្មោះដូចគ្នាក្នុងឯកសារទាំងអស់', c1s:'សំបុត្រកំណើត សៀវភៅគ្រួសារ', c2:'ថ្ងៃខែឆ្នាំកំណើតត្រូវគ្នា', c2s:'ឯកសារទាំងអស់ស្របគ្នា',
    c3:'ឈ្មោះម្ដាយ – OCR មិនសូវច្បាស់', c3s:'សូមផ្ទៀងជាមួយសៀវភៅគ្រួសារ មុនពេលផ្ទៀងផ្ទាត់',
    c3ok:'ឈ្មោះម្ដាយត្រូវបានបញ្ជាក់ដោយមន្ត្រី', c3oks:'បានផ្ទៀងជាមួយសៀវភៅគ្រួសារ', c4:'រកមិនឃើញពាក្យសុំស្ទួន', c4s:'បានពិនិត្យជាមួយពាក្យសុំសកម្ម',
    startReview:'ចាប់ផ្ដើមពិនិត្យ', verifyAccept:'ផ្ទៀងផ្ទាត់ និងទទួលយក', requestFix:'ស្នើឱ្យពលរដ្ឋកែតម្រូវ',
    awaitPay:'ពលរដ្ឋត្រូវបានស្នើឱ្យបង់ប្រាក់។ ការបង់តាមអនឡាញនឹងធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ។ កត់ត្រាការបង់ជាសាច់ប្រាក់នៅទីនេះ។', markCash:'កត់ត្រាថាបានទទួលសាច់ប្រាក់',
    onsite:'ការថតនៅការិយាល័យ', bio1:'បានស្កេនស្នាមម្រាមដៃ', bio2:'បានថតរូប', bio3:'បានវាស់កម្ពស់', bio4:'បានកត់ត្រាសញ្ញាសម្គាល់ពិសេស', markBio:'រក្សាទុកជីវមាត្រ',
    markReady:'កំណត់ថារួចរាល់សម្រាប់ទទួល', allDone:'បានបញ្ចប់។ ពលរដ្ឋត្រូវបានជូនដំណឹងឱ្យមកទទួលឯកសារ។',
    applicant:'អ្នកស្នើសុំ', pickDate:'ថ្ងៃមកការិយាល័យ', pickTime:'ម៉ោង', autoQueue:'លេខរង់ចាំ (ស្វ័យប្រវត្តិ)',
    notifyNote:'ពលរដ្ឋនឹងទទួលបានការជូនដំណឹង រួមមានថ្ងៃ ម៉ោង លេខរង់ចាំ និងការស្នើសុំបង់ប្រាក់។',
    confirmNotify:'បញ្ជាក់ និងជូនដំណឹងពលរដ្ឋ',
    toastAccept:'បានទទួលយក។ បានជូនដំណឹងពលរដ្ឋជាមួយលេខរង់ចាំ ', toastFix:'បានផ្ញើសំណើកែតម្រូវទៅពលរដ្ឋ។', toastCash:'បានកត់ត្រាការបង់ប្រាក់។ ស្ថានភាពត្រូវបានធ្វើបច្ចុប្បន្នភាព។', toastBio:'បានរក្សាទុកជីវមាត្រ។ ស្ថានភាពត្រូវបានធ្វើបច្ចុប្បន្នភាព។', toastReady:'បានកំណត់ថារួចរាល់។ បានជូនដំណឹងពលរដ្ឋ។', toastReview:'បានផ្លាស់ទៅ «កំពុងពិនិត្យ»។',
    navDash:'ផ្ទាំងគ្រប់គ្រង', navQueue:'ពាក្យសុំ', navPay:'ការបង់ប្រាក់',
    d_birth:'សំបុត្រកំណើត', d_family:'សៀវភៅគ្រួសារ', d_res:'សៀវភៅស្នាក់នៅ', d_id:'អត្តសញ្ញាណប័ណ្ណ', d_oldId:'អត្តសញ្ញាណប័ណ្ណបច្ចុប្បន្ន', d_oldPass:'លិខិតឆ្លងដែនបច្ចុប្បន្ន', view:'មើល',
    mon:'ច័ន្ទ', tue:'អង្គារ', wed:'ពុធ', thu:'ព្រហស្បតិ៍'
  }
};
var DOCS = { newId:['d_birth','d_family','d_res'], renewId:['d_oldId','d_family'], newPass:['d_id','d_birth','d_family'], renewPass:['d_oldPass','d_id'] };
var KMD = '០១២៣៤៥៦៧៨៩';
var SEED = [
  { id:'o1', no:'KH-2611-0142', km:'សុខ ដារា', en:'Sok Dara', svc:'renewPass', date:'20/11/2026', dob:'12/04/2001', stage:1, pay:null, queue:'', apptDate:'' },
  { id:'o2', no:'KH-2611-0139', km:'ចាន់ ស្រីមុំ', en:'Chan Sreymom', svc:'newId', date:'19/11/2026', dob:'03/09/2008', stage:0, pay:null, queue:'', apptDate:'' },
  { id:'o3', no:'KH-2611-0135', km:'ពៅ សុវណ្ណ', en:'Pov Sovann', svc:'newPass', date:'18/11/2026', dob:'21/01/1995', stage:0, pay:null, queue:'', apptDate:'' },
  { id:'o4', no:'KH-2611-0131', km:'កែវ វិសាល', en:'Keo Visal', svc:'renewId', date:'14/11/2026', dob:'30/06/1990', stage:2, pay:'cash', queue:'A-027', apptDate:'27/11/2026' },
  { id:'o5', no:'KH-2611-0127', km:'លឹម សុភ័ក្ត្រ', en:'Lim Sopheak', svc:'newPass', date:'12/11/2026', dob:'15/02/1999', stage:3, pay:'online', queue:'A-021', apptDate:'24/11/2026' },
  { id:'o6', no:'KH-2611-0120', km:'ហេង រតនា', en:'Heng Rathana', svc:'renewPass', date:'07/11/2026', dob:'08/11/1987', stage:5, pay:'online', queue:'A-012', apptDate:'14/11/2026' },
  { id:'o7', no:'KH-2611-0118', km:'ម៉ៅ សុភ័ក្រ', en:'Mao Sopheak', svc:'renewId', date:'06/11/2026', dob:'09/05/1992', stage:1, pay:null, queue:'', apptDate:'', reason:'lost' },
  { id:'o8', no:'KH-2611-0115', km:'វ៉ាន់ រស្មី', en:'Van Rasmey', svc:'renewId', date:'05/11/2026', dob:'18/08/1996', stage:0, pay:null, queue:'', apptDate:'', reason:'damaged' }
];
var DATES = [['mon','24/11'],['tue','25/11'],['wed','26/11'],['thu','27/11']];
var TIMES = ['08:00 – 08:30','08:30 – 09:00','14:00 – 14:30','14:30 – 15:00'];
var FILTERS = { all:null, pending:[0,1], verified:[2], onsite:[3,4], ready:[5] };

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { lang:null, screen:'dash', filter:'all', selId:'o1', apps:SEED, date:3, time:1, bio:{}, toast:'', nextQ:32 };
  }
  upd(id, patch) { this.setState({ apps: this.state.apps.map(function (a) { return a.id === id ? Object.assign({}, a, patch) : a; }) }); }
  flash(msg) {
    var self = this; this.setState({ toast: msg });
    clearTimeout(this._tt); this._tt = setTimeout(function () { self.setState({ toast: '' }); }, 2600);
  }
  componentWillUnmount() { clearTimeout(this._tt); }
  renderVals() {
    var self = this, st = this.state;
    var lang = st.lang || this.props.startLanguage || 'km';
    var t = T[lang];
    var kn = function (s) { s = String(s); return lang === 'km' ? s.replace(/[0-9]/g, function (d) { return KMD[+d]; }) : s; };
    var pillFor = function (s) { return s <= 1 ? 'pill blue' : (s === 2 ? 'pill amber' : (s === 5 ? 'pill green' : 'pill violet')); };
    var payLabel = function (a) { return a.pay === 'online' ? t.paidOnline : (a.pay === 'cashPaid' ? t.paidCash : (a.pay === 'cash' ? t.payAtOffice : t.unpaid)); };
    var view = function (a) {
      var name = lang === 'km' ? a.km : a.en;
      return {
        name: name, nameAlt: lang === 'km' ? a.en.toUpperCase() : a.km, initials: a.en.split(' ').map(function (w) { return w[0]; }).join(''),
        no: a.no, svcName: t['svc_' + a.svc], date: kn(a.date), dob: kn(a.dob), short: t['sh' + a.stage], status: t['st' + a.stage], pillCls: pillFor(a.stage),
        payLabel: payLabel(a), payCls: (a.pay === 'online' || a.pay === 'cashPaid') ? 'pill green' : 'pill amber',
        hasQueue: !!a.queue, queue: a.queue, apptDate: kn(a.apptDate),
        open: function () { self.setState({ selId: a.id, screen: 'detail', bio: {} }); }
      };
    };
    var apps = st.apps;
    var count = function (fn) { return apps.filter(fn).length; };
    var k = {
      pending: kn(count(function (a) { return a.stage <= 1; })),
      newly: kn(count(function (a) { return a.svc === 'newId' || a.svc === 'newPass'; })),
      renew: kn(count(function (a) { return a.svc === 'renewId' || a.svc === 'renewPass'; })),
      unpaid: kn(count(function (a) { return a.stage === 2; })),
      paid: kn(count(function (a) { return a.pay === 'online' || a.pay === 'cashPaid'; })),
      lost: kn(count(function (a) { return a.svc === 'renewId' && a.reason === 'lost'; })),
      damaged: kn(count(function (a) { return a.svc === 'renewId' && a.reason === 'damaged'; }))
    };
    var max = apps.length || 1;
    var bySvc = ['newId', 'renewId', 'newPass', 'renewPass'].map(function (s) {
      var n = count(function (a) { return a.svc === s; });
      return { name: t['svc_' + s], count: kn(n), pct: Math.round(n / max * 100) + '%', color: s.indexOf('Pass') > 0 ? '#B91C1C' : '#1D3F8F' };
    });
    var byStage = [0, 1, 2, 3, 4, 5].map(function (s) {
      var n = count(function (a) { return a.stage === s; });
      return { name: t['st' + s], count: kn(n), pct: Math.round(n / max * 100) + '%' };
    });
    var filters = ['all', 'pending', 'verified', 'onsite', 'ready'].map(function (f) {
      return { label: t['f_' + f], on: st.filter === f, cls: st.filter === f ? 'on' : '', pick: function () { self.setState({ filter: f }); } };
    });
    var fs = FILTERS[st.filter];
    var list = apps.filter(function (a) { return !fs || fs.indexOf(a.stage) >= 0; }).map(view);
    var payList = apps.filter(function (a) { return a.stage >= 2; }).map(view);
    var a = apps.filter(function (x) { return x.id === st.selId; })[0] || apps[0];
    var sel = view(a);
    sel.docs = (DOCS[a.svc] || []).map(function (d) { return { name: t[d], aria: t.view + ' – ' + t[d] }; });
    sel.checks = [
      { title: t.c1, sub: t.c1s, ok: true, bad: false, icCls: 'ic ok' },
      { title: t.c2, sub: t.c2s, ok: true, bad: false, icCls: 'ic ok' },
      { title: t.c3, sub: t.c3s, ok: false, bad: true, icCls: 'ic warn' },
      { title: t.c4, sub: t.c4s, ok: true, bad: false, icCls: 'ic ok' }
    ];
    if (a.stage >= 2) { sel.checks[2] = { title: t.c3ok, sub: t.c3oks, ok: true, bad: false, icCls: 'ic ok' }; }
    sel.atSubmitted = a.stage === 0; sel.atReview = a.stage === 1;
    sel.atVerified = a.stage === 2 && a.pay !== 'online'; sel.atPaid = a.stage === 3 || (a.stage === 2 && a.pay === 'online');
    sel.atBio = a.stage === 4; sel.atReady = a.stage === 5;
    var bioItems = [1, 2, 3, 4].map(function (i) {
      return { label: t['bio' + i], on: !!st.bio[i], toggle: function () { var b = Object.assign({}, self.state.bio); b[i] = !b[i]; self.setState({ bio: b }); } };
    });
    var bioIncomplete = bioItems.some(function (b) { return !b.on; });
    var dates = DATES.map(function (d, i) { return { label: t[d[0]] + ' ' + kn(d[1]), on: st.date === i, cls: st.date === i ? 'on' : '', pick: function () { self.setState({ date: i }); } }; });
    var times = TIMES.map(function (d, i) { return { label: kn(d), on: st.time === i, cls: st.time === i ? 'on' : '', pick: function () { self.setState({ time: i }); } }; });
    var q = 'A-0' + st.nextQ;
    var s = st.screen;
    var is = { dash: s === 'dash', queue: s === 'queue', detail: s === 'detail', schedule: s === 'schedule', payments: s === 'payments' };
    var titles = { dash: t.t_dash, queue: t.t_queue, detail: t.t_detail, schedule: t.t_schedule, payments: t.t_payments };
    var root = s === 'dash' || s === 'queue' || s === 'payments';
    var navOn = function (k2) { return (s === k2 || (k2 === 'queue' && (s === 'detail' || s === 'schedule'))) ? 'on' : ''; };
    return {
      t: t, is: is, title: titles[s], showBack: !root, showLogo: root,
      kmCls: lang === 'km' ? 'on' : '', enCls: lang === 'en' ? 'on' : '', isKm: lang === 'km', isEn: lang === 'en',
      setKm: function () { self.setState({ lang: 'km' }); }, setEn: function () { self.setState({ lang: 'en' }); },
      goBack: function () { self.setState({ screen: s === 'schedule' ? 'detail' : 'queue' }); },
      goDash: function () { self.setState({ screen: 'dash' }); }, goQueue: function () { self.setState({ screen: 'queue' }); },
      goPayments: function () { self.setState({ screen: 'payments' }); },
      goQueuePending: function () { self.setState({ screen: 'queue', filter: 'pending' }); },
      nav: { dash: navOn('dash'), queue: navOn('queue'), payments: navOn('payments') },
      k: k, bySvc: bySvc, byStage: byStage, filters: filters, list: list, listEmpty: list.length === 0, payList: payList,
      sel: sel, bioItems: bioItems, bioIncomplete: bioIncomplete, dates: dates, times: times, nextQueue: q,
      startReview: function () { self.upd(a.id, { stage: 1 }); self.flash(t.toastReview); },
      goSchedule: function () { self.setState({ screen: 'schedule' }); },
      requestFix: function () { self.flash(t.toastFix); },
      confirmAccept: function () {
        self.upd(a.id, { stage: 2, pay: a.pay || 'cash', queue: q, apptDate: DATES[st.date][1] + '/2026' });
        self.setState({ screen: 'detail', nextQ: st.nextQ + 1 });
        self.flash(t.toastAccept + q);
      },
      markCash: function () { self.upd(a.id, { stage: 3, pay: 'cashPaid' }); self.flash(t.toastCash); },
      markBio: function () { self.upd(a.id, { stage: 4 }); self.setState({ bio: {} }); self.flash(t.toastBio); },
      markReady: function () { self.upd(a.id, { stage: 5 }); self.flash(t.toastReady); },
      toast: st.toast
    };
  }
}
