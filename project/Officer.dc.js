var S = window.AttaStore;
var T = {
  en: {
    back:'Back', oTagline:'Officer portal · ID card and passport services', logIn:'Log in', signUp:'Sign up',
    loginTitle:'Officer log in', loginSub:'Use your officer ID and password.', signupTitle:'Create an officer account', signupSub:'A supervisor approves new accounts. In this demo they are approved right away.',
    officerId:'Officer ID', password:'Password', fullName:'Full name', workplace:'Workplace', phone:'Phone number', demoCreds:'Demo account: OF-1024 / 1234',
    loginErr:'Officer ID or password is wrong.', needFields:'Please fill in all fields.', idTaken:'This officer ID is already registered.', createAcc:'Create account', logOut:'Log out',
    noAccount:'No account yet?', haveAccount:'Already registered?',
    off0:'AEON Mall Sen Sok City (AEON 2)',
    t_dash:'Dashboard', t_queue:'Applications', t_detail:'Review application', t_issue:'Accept & issue QR', t_scan:'Scan QR code', t_payments:'Payments',
    k_pending:'Pending review', k_new:'New applications', k_renew:'Renewals', k_unpaid:'Awaiting payment', k_lost:'Lost', k_damaged:'Damaged', kId:'ID', kPass:'Passport',
    pipeline:'Application pipeline', pipelineSub:'Applications at each step right now', svcMix:'Applications by service', week:'Submitted in the last 7 days', today:'Today', total:'Total',
    reviewPending:'Review pending applications', scanQr:'Scan a QR code', sampleNote:'Figures are counted from the sample applications in this prototype.',
    search:'Search name or application no.', empty:'No applications here.',
    f_all:'All', f_pending:'Pending', f_accepted:'QR issued', f_onsite:'Biometrics & payment', f_progress:'In progress', f_ready:'Ready',
    svc_newId:'New ID card', svc_renewId:'ID card renewal', svc_newPass:'New passport', svc_renewPass:'Passport renewal',
    r_expired:'Expired / near expiry', r_lost:'Lost', r_damaged:'Damaged',
    cp0:'New', cp1:'Review', cp2:'QR sent', cp3:'Unpaid', cp4:'Paid', cp5:'Printing', cp6:'Ready',
    sh0:'New', sh1:'Reviewing', sh2:'QR issued', sh3:'Unpaid', sh4:'Paid', sh5:'In progress', sh6:'Ready',
    st0:'Submitted', st1:'Under review', st2:'Accepted – QR issued', st3:'Biometrics done – awaiting payment', st4:'Paid', st5:'In progress', st6:'Ready for pickup',
    appNo:'Application no.', service:'Service', reason:'Reason', submittedOn:'Submitted', payment:'Payment', queueNo:'Queue no.', stepOf:'Step', of:'of',
    paidOnline:'Paid online (automatic)', payAtOffice:'Cash at counter (not paid yet)', paidCash:'Paid in cash', unpaid:'Not paid',
    reviewTitle:'Check each field against the documents', verifiedOf:'verified', verifyAllOk:'Verify all fields',
    flagged:'Low OCR confidence – check carefully', from:'From', edit:'Edit all fields', save:'Save changes', cancel:'Cancel', verify:'Verify', verified:'Verified',
    editedBy:'Edited by officer · was', editNote:'If something is wrong, correct it here. The citizen does not need to resubmit.',
    uploadedDocs:'Uploaded documents', tapToView:'Pick a document, then check each field on the form.', fieldsFromDoc:'Fields read from this document', close:'Close', docDemo:'Document preview (demo)',
    autoChecks:'Automatic checks', c1:'Name matches across documents', c2:'Date of birth matches', c4:'No duplicate application found',
    evidence_lost:'Official police loss report attached', evidence_damaged:'Bring the original damaged ID card or passport in person.',
    acceptQr:'Accept & issue QR code', acceptHint:'Verify every field to accept.',
    applicant:'Applicant', qrPreview:'QR code the citizen receives', qrContains:'Contains the full name and application number', validFor:'Valid for 1 week, until',
    issueNote:'The citizen is notified and must come on-site within 1 week. The queue number is given when you scan the QR code on-site.', confirmNotify:'Confirm & notify citizen',
    qrIssued:'QR code issued', waitVisit:'Waiting for the citizen to come on-site.', daysLeft:'days left', validUntil:'Valid until',
    qrExpired:'QR code expired on', scanBtn:'Scan citizen’s QR code',
    onsite:'On-site biometrics', checkedInQ:'Checked in · queue no.', bio1:'Fingerprints scanned', bio2:'Photo taken', bio3:'Height measured', bio4:'Special features recorded', updateBio:'Update biometrics',
    payTitle:'Payment', waitOnline:'Waiting for payment. Online payments (KHQR / card) update automatically.', cashChosen:'The citizen will pay cash at the counter.', markCash:'Mark cash received',
    paidNote:'Payment confirmed', toProgress:'Move to In progress', progressNote:'The document is being printed.', markDone:'Done – ready for pickup',
    allDone:'Complete. The citizen can pick up now at AEON MALL 2, same floor as the GDI office.', details:'Application details',
    f_nameKm:'Name (Khmer)', f_nameEn:'Name (Latin)', f_dob:'Date of birth', f_sex:'Sex', f_pob:'Place of birth', f_addr:'Current address', f_father:"Father's name", f_mother:"Mother's name",
    scanTitle:'Scan the citizen’s QR code', scanSub:'Point the camera at the QR code on the citizen’s phone.', scanning:'Reading QR code…',
    demoPick:'Demo: choose the QR code in front of the camera', noWaiting:'No citizens are waiting with a QR code.', manual:'Or enter the application number', find:'Find',
    resValid:'QR code valid', resExpired:'QR code expired', resExpiredSub:'QR codes are valid for 1 week only. This one expired on', resNotFound:'No application found for this code.',
    resWrongStage:'This application is not waiting for an on-site visit.', resChecked:'Already checked in', checkIn:'Check in & assign queue no.', openApp:'Open application', scanAgain:'Scan another',
    k_paidOnline:'Paid online', k_paidCash:'Paid in cash', payAuto:'Online payments update automatically. Mark cash payments when the citizen pays at the counter.',
    toastReview:'Moved to “Under review”.', toastAccept:'Accepted. QR code sent to the citizen.', toastCheckIn:'Checked in. Queue no. ',
    toastBio:'Biometrics updated. Waiting for payment.', toastCash:'Cash payment recorded.', toastProgress:'Moved to In progress.', toastDone:'Done. Citizen notified: can pick up now at AEON MALL 2.',
    toastSaved:'Changes saved.', toastWelcome:'Welcome, ',
    navDash:'Dashboard', navQueue:'Applications', navScan:'Scan', navPay:'Payments',
    d_birth:'Birth certificate or birth registration certificate', d_birthCertified:'Certified birth/birth-registration certificate showing Khmer nationality',
    d_birthCheck:'Birth certificate copy (recommended for verification)', d_family:'Family book',
    d_familyOrRes:'Family book, residence book, or commune residence certificate',
    d_familyOrResUpdate:'Family/residence document (if details or address change)',
    d_familyOrResDamaged:'Family/residence document (if details change or damaged card is unreadable)',
    d_familyOrResRecommended:'Family/residence document (recommended)',
    d_guardianId:'Parent/legal guardian’s valid National ID or passport',
    d_guardianAuthorization:'Parent/legal guardian’s written authorization/request',
    d_lostIdDuplicate:'Duplicate/reprint form certified by local administrative police post',
    d_id:'Valid National ID card', d_oldId:'Current or expired National ID', d_oldPass:'Current/previous passport',
    d_policeLoss:'Official police loss report', d_damagedId:'Original damaged National ID card',
    d_damagedPass:'Original damaged passport', d_oldPassCopy:'Copy of lost passport (if available)',
    optional:'Optional', view:'View', free:'Free', fee:'Fee', toastBioFree:'Biometrics updated. No fee for ID card, moved to Paid.', payFree:'Free (no fee)',
    dshort_birth:'Birth certificate', dshort_family:'Family book', dshort_id:'National ID', zoomIn:'Zoom in', zoomOut:'Zoom out', hideDoc:'Hide', showDoc:'Show document',
    qrExpiredNote:'The citizen renews the QR code in the KH-ID app by paying the late fee. The new QR code is issued automatically after payment. Officers cannot reissue it.',
    lateFeeDue:'Late fee due', lateDaysLbl:'late days', lateFeeToApp:'The late fee is paid to the KH-ID app, not to GDI.', lateFeePaid:'QR late fee (paid to KH-ID app)', lateFeeIncome:'QR late fees collected by the KH-ID app',
    pickupQr:'Pickup QR', onsiteQr:'On-site QR', scanPickupBtn:'Scan pickup QR code', waitPickup:'Waiting for the citizen to collect the document with the pickup QR code (no deadline).',
    resPickValid:'Pickup QR code valid', resPickDone:'Already collected', confirmHandover:'Confirm handover', collected:'Collected', collectedOn:'Collected on', toastHandover:'Handover recorded.'
  },
  km: {
    back:'ត្រឡប់ក្រោយ', oTagline:'ផតថលមន្ត្រី · សេវាអត្តសញ្ញាណប័ណ្ណ និងលិខិតឆ្លងដែន', logIn:'ចូល', signUp:'ចុះឈ្មោះ',
    loginTitle:'ការចូលសម្រាប់មន្ត្រី', loginSub:'ប្រើលេខសម្គាល់មន្ត្រី និងពាក្យសម្ងាត់របស់អ្នក។', signupTitle:'បង្កើតគណនីមន្ត្រី', signupSub:'ប្រធានអនុម័តគណនីថ្មី។ ក្នុងការសាកល្បងនេះ គណនីត្រូវបានអនុម័តភ្លាមៗ។',
    officerId:'លេខសម្គាល់មន្ត្រី', password:'ពាក្យសម្ងាត់', fullName:'ឈ្មោះពេញ', workplace:'កន្លែងធ្វើការ', phone:'លេខទូរស័ព្ទ', demoCreds:'គណនីសាកល្បង៖ OF-1024 / 1234',
    loginErr:'លេខសម្គាល់ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។', needFields:'សូមបំពេញព័ត៌មានទាំងអស់។', idTaken:'លេខសម្គាល់នេះត្រូវបានចុះឈ្មោះរួចហើយ។', createAcc:'បង្កើតគណនី', logOut:'ចាកចេញ',
    noAccount:'មិនទាន់មានគណនី?', haveAccount:'បានចុះឈ្មោះរួចហើយ?',
    off0:'ផ្សារទំនើបអ៊ីអុន សែនសុខស៊ីធី (អ៊ីអុន ២)',
    t_dash:'ផ្ទាំងគ្រប់គ្រង', t_queue:'ពាក្យស្នើសុំ', t_detail:'ពិនិត្យពាក្យសុំ', t_issue:'ទទួលយក និងចេញកូដ QR', t_scan:'ស្កេនកូដ QR', t_payments:'ការបង់ប្រាក់',
    k_pending:'រង់ចាំការពិនិត្យ', k_new:'ពាក្យសុំធ្វើថ្មី', k_renew:'ពាក្យសុំបន្ត', k_unpaid:'រង់ចាំការបង់ប្រាក់', k_lost:'បាត់', k_damaged:'ខូច', kId:'អត្តសញ្ញាណប័ណ្ណ', kPass:'លិខិតឆ្លងដែន',
    pipeline:'លំហូរពាក្យសុំ', pipelineSub:'ចំនួនពាក្យសុំនៅជំហាននីមួយៗ ពេលនេះ', svcMix:'ពាក្យសុំតាមប្រភេទសេវា', week:'ពាក្យសុំដែលបានដាក់ក្នុង ៧ ថ្ងៃចុងក្រោយ', today:'ថ្ងៃនេះ', total:'សរុប',
    reviewPending:'ពិនិត្យពាក្យសុំដែលកំពុងរង់ចាំ', scanQr:'ស្កេនកូដ QR', sampleNote:'តួលេខត្រូវបានរាប់ពីពាក្យសុំគំរូក្នុងគំរូសាកល្បងនេះ។',
    search:'ស្វែងរកឈ្មោះ ឬលេខពាក្យសុំ', empty:'មិនមានពាក្យសុំនៅទីនេះទេ។',
    f_all:'ទាំងអស់', f_pending:'រង់ចាំ', f_accepted:'បានចេញ QR', f_onsite:'ជីវមាត្រ និងបង់ប្រាក់', f_progress:'កំពុងដំណើរការ', f_ready:'រួចរាល់',
    svc_newId:'ធ្វើអត្តសញ្ញាណប័ណ្ណថ្មី', svc_renewId:'បន្តអត្តសញ្ញាណប័ណ្ណ', svc_newPass:'ធ្វើលិខិតឆ្លងដែនថ្មី', svc_renewPass:'បន្តលិខិតឆ្លងដែន',
    r_expired:'ផុតសុពលភាព / ជិតផុតសុពលភាព', r_lost:'បាត់', r_damaged:'ខូច',
    cp0:'ថ្មី', cp1:'ពិនិត្យ', cp2:'ចេញ QR', cp3:'មិនទាន់បង់', cp4:'បានបង់', cp5:'បោះពុម្ព', cp6:'រួចរាល់',
    sh0:'ថ្មី', sh1:'កំពុងពិនិត្យ', sh2:'បានចេញ QR', sh3:'មិនទាន់បង់', sh4:'បានបង់', sh5:'កំពុងធ្វើ', sh6:'រួចរាល់',
    st0:'បានដាក់ស្នើ', st1:'កំពុងពិនិត្យ', st2:'បានទទួលយក – បានចេញ QR', st3:'បានថតជីវមាត្រ – រង់ចាំការបង់ប្រាក់', st4:'បានបង់ប្រាក់', st5:'កំពុងដំណើរការ', st6:'រួចរាល់សម្រាប់ទទួល',
    appNo:'លេខពាក្យសុំ', service:'សេវាកម្ម', reason:'មូលហេតុ', submittedOn:'ថ្ងៃដាក់ស្នើ', payment:'ការបង់ប្រាក់', queueNo:'លេខរង់ចាំ', stepOf:'ជំហាន', of:'នៃ',
    paidOnline:'បានបង់តាមអនឡាញ (ស្វ័យប្រវត្តិ)', payAtOffice:'សាច់ប្រាក់នៅបញ្ជរ (មិនទាន់បង់)', paidCash:'បានបង់ជាសាច់ប្រាក់', unpaid:'មិនទាន់បង់',
    reviewTitle:'ផ្ទៀងផ្ទាត់ព័ត៌មាននីមួយៗជាមួយឯកសារ', verifiedOf:'បានផ្ទៀងផ្ទាត់', verifyAllOk:'ផ្ទៀងផ្ទាត់ព័ត៌មានទាំងអស់',
    flagged:'OCR មិនសូវច្បាស់ – សូមពិនិត្យដោយប្រុងប្រយ័ត្ន', from:'ពី', edit:'កែព័ត៌មានទាំងអស់', save:'រក្សាទុកការផ្លាស់ប្តូរ', cancel:'បោះបង់', verify:'ផ្ទៀងផ្ទាត់', verified:'បានផ្ទៀងផ្ទាត់',
    editedBy:'កែដោយមន្ត្រី · មុននេះ', editNote:'បើមានព័ត៌មានខុស សូមកែនៅទីនេះ។ ពលរដ្ឋមិនចាំបាច់ដាក់ស្នើម្ដងទៀតទេ។',
    uploadedDocs:'ឯកសារដែលបានបញ្ចូល', tapToView:'ជ្រើសរើសឯកសារ ហើយផ្ទៀងផ្ទាត់ព័ត៌មាននីមួយៗលើទម្រង់។', fieldsFromDoc:'ព័ត៌មានដែលបានអានពីឯកសារនេះ', close:'បិទ', docDemo:'មើលឯកសារ (សាកល្បង)',
    autoChecks:'ការត្រួតពិនិត្យស្វ័យប្រវត្តិ', c1:'ឈ្មោះដូចគ្នាក្នុងឯកសារទាំងអស់', c2:'ថ្ងៃខែឆ្នាំកំណើតត្រូវគ្នា', c4:'រកមិនឃើញពាក្យសុំស្ទួន',
    evidence_lost:'បានភ្ជាប់របាយការណ៍បាត់បង់ផ្លូវការពីនគរបាល', evidence_damaged:'សូមយកអត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែនដើមដែលខូចមកដោយផ្ទាល់។',
    acceptQr:'ទទួលយក និងចេញកូដ QR', acceptHint:'សូមផ្ទៀងផ្ទាត់ព័ត៌មានទាំងអស់ ដើម្បីទទួលយក។',
    applicant:'អ្នកស្នើសុំ', qrPreview:'កូដ QR ដែលពលរដ្ឋនឹងទទួលបាន', qrContains:'មានឈ្មោះពេញ និងលេខពាក្យសុំ', validFor:'មានសុពលភាព ១ សប្ដាហ៍ ដល់ថ្ងៃ',
    issueNote:'ពលរដ្ឋនឹងទទួលដំណឹង ហើយត្រូវមកការិយាល័យក្នុងរយៈពេល ១ សប្ដាហ៍។ លេខរង់ចាំនឹងត្រូវផ្ដល់ជូននៅពេលអ្នកស្កេនកូដ QR នៅការិយាល័យ។', confirmNotify:'បញ្ជាក់ និងជូនដំណឹងពលរដ្ឋ',
    qrIssued:'បានចេញកូដ QR', waitVisit:'កំពុងរង់ចាំពលរដ្ឋមកការិយាល័យ។', daysLeft:'ថ្ងៃទៀត', validUntil:'មានសុពលភាពដល់',
    qrExpired:'កូដ QR បានផុតសុពលភាពនៅថ្ងៃ', scanBtn:'ស្កេនកូដ QR របស់ពលរដ្ឋ',
    onsite:'ការថតជីវមាត្រនៅការិយាល័យ', checkedInQ:'បានចុះឈ្មោះ · លេខរង់ចាំ', bio1:'បានស្កេនស្នាមម្រាមដៃ', bio2:'បានថតរូប', bio3:'បានវាស់កម្ពស់', bio4:'បានកត់ត្រាសញ្ញាសម្គាល់ពិសេស', updateBio:'ធ្វើបច្ចុប្បន្នភាពជីវមាត្រ',
    payTitle:'ការបង់ប្រាក់', waitOnline:'កំពុងរង់ចាំការបង់ប្រាក់។ ការបង់តាមអនឡាញ (KHQR / កាត) ធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ។', cashChosen:'ពលរដ្ឋនឹងបង់ជាសាច់ប្រាក់នៅបញ្ជរ។', markCash:'កត់ត្រាថាបានទទួលសាច់ប្រាក់',
    paidNote:'បានបញ្ជាក់ការបង់ប្រាក់', toProgress:'ផ្លាស់ទៅ «កំពុងដំណើរការ»', progressNote:'ឯកសារកំពុងបោះពុម្ព។', markDone:'រួចរាល់ – អាចមកទទួលបាន',
    allDone:'បានបញ្ចប់។ ពលរដ្ឋអាចមកទទួលបានឥឡូវនេះ នៅផ្សារទំនើបអ៊ីអុន ២ ត្រង់ជាន់ជាមួយការិយាល័យ GDI។', details:'ព័ត៌មានលម្អិត',
    f_nameKm:'ឈ្មោះ (អក្សរខ្មែរ)', f_nameEn:'ឈ្មោះ (អក្សរឡាតាំង)', f_dob:'ថ្ងៃខែឆ្នាំកំណើត', f_sex:'ភេទ', f_pob:'ទីកន្លែងកំណើត', f_addr:'អាសយដ្ឋានបច្ចុប្បន្ន', f_father:'ឈ្មោះឪពុក', f_mother:'ឈ្មោះម្ដាយ',
    scanTitle:'ស្កេនកូដ QR របស់ពលរដ្ឋ', scanSub:'តម្រង់កាមេរ៉ាទៅកូដ QR នៅលើទូរស័ព្ទរបស់ពលរដ្ឋ។', scanning:'កំពុងអានកូដ QR…',
    demoPick:'សាកល្បង៖ ជ្រើសរើសកូដ QR នៅមុខកាមេរ៉ា', noWaiting:'មិនមានពលរដ្ឋកំពុងរង់ចាំជាមួយកូដ QR ទេ។', manual:'ឬបញ្ចូលលេខពាក្យសុំ', find:'ស្វែងរក',
    resValid:'កូដ QR មានសុពលភាព', resExpired:'កូដ QR ផុតសុពលភាព', resExpiredSub:'កូដ QR មានសុពលភាពតែ ១ សប្ដាហ៍ប៉ុណ្ណោះ។ កូដនេះបានផុតនៅថ្ងៃ', resNotFound:'រកមិនឃើញពាក្យសុំសម្រាប់កូដនេះទេ។',
    resWrongStage:'ពាក្យសុំនេះមិនមែនកំពុងរង់ចាំការមកការិយាល័យទេ។', resChecked:'បានចុះឈ្មោះរួចហើយ', checkIn:'ចុះឈ្មោះ និងផ្ដល់លេខរង់ចាំ', openApp:'បើកពាក្យសុំ', scanAgain:'ស្កេនម្ដងទៀត',
    k_paidOnline:'បានបង់តាមអនឡាញ', k_paidCash:'បានបង់ជាសាច់ប្រាក់', payAuto:'ការបង់តាមអនឡាញធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ។ សូមកត់ត្រាការបង់ជាសាច់ប្រាក់ នៅពេលពលរដ្ឋបង់នៅបញ្ជរ។',
    toastReview:'បានផ្លាស់ទៅ «កំពុងពិនិត្យ»។', toastAccept:'បានទទួលយក។ បានផ្ញើកូដ QR ទៅពលរដ្ឋ។', toastCheckIn:'បានចុះឈ្មោះ។ លេខរង់ចាំ ',
    toastBio:'បានធ្វើបច្ចុប្បន្នភាពជីវមាត្រ។ កំពុងរង់ចាំការបង់ប្រាក់។', toastCash:'បានកត់ត្រាការបង់ជាសាច់ប្រាក់។', toastProgress:'បានផ្លាស់ទៅ «កំពុងដំណើរការ»។', toastDone:'រួចរាល់។ បានជូនដំណឹងពលរដ្ឋ៖ អាចមកទទួលបានឥឡូវនេះនៅអ៊ីអុន ២។',
    toastSaved:'បានរក្សាទុកការផ្លាស់ប្តូរ។', toastWelcome:'សូមស្វាគមន៍ ',
    navDash:'ផ្ទាំងគ្រប់គ្រង', navQueue:'ពាក្យសុំ', navScan:'ស្កេន', navPay:'ការបង់ប្រាក់',
    d_birth:'សំបុត្រកំណើត ឬលិខិតបញ្ជាក់ការចុះបញ្ជីកំណើត', d_birthCertified:'ច្បាប់ចម្លងសំបុត្រកំណើត/លិខិតចុះបញ្ជីកំណើតដែលបញ្ជាក់សញ្ជាតិខ្មែរ',
    d_birthCheck:'ច្បាប់ចម្លងសំបុត្រកំណើត (ណែនាំសម្រាប់ផ្ទៀងផ្ទាត់)', d_family:'សៀវភៅគ្រួសារ',
    d_familyOrRes:'សៀវភៅគ្រួសារ សៀវភៅស្នាក់នៅ ឬលិខិតបញ្ជាក់ទីលំនៅពីឃុំ/សង្កាត់',
    d_familyOrResUpdate:'ឯកសារគ្រួសារ/ទីលំនៅ (បើកែព័ត៌មាន ឬអាសយដ្ឋាន)',
    d_familyOrResDamaged:'ឯកសារគ្រួសារ/ទីលំនៅ (បើកែព័ត៌មាន ឬប័ណ្ណដែលខូចអានមិនច្បាស់)',
    d_familyOrResRecommended:'ឯកសារគ្រួសារ/ទីលំនៅ (ណែនាំ)', d_guardianId:'អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែនមានសុពលភាពរបស់ឪពុកម្ដាយ/អាណាព្យាបាល',
    d_guardianAuthorization:'លិខិតអនុញ្ញាត/សំណើជាលាយលក្ខណ៍អក្សររបស់ឪពុកម្ដាយ/អាណាព្យាបាល',
    d_lostIdDuplicate:'ពាក្យស្នើសុំទុតិយតា ដែលប៉ុស្តិ៍នគរបាលរដ្ឋបាលបញ្ជាក់',
    d_id:'អត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរមានសុពលភាព', d_oldId:'អត្តសញ្ញាណប័ណ្ណបច្ចុប្បន្ន ឬផុតសុពលភាព',
    d_oldPass:'លិខិតឆ្លងដែនបច្ចុប្បន្ន/ចាស់', d_policeLoss:'របាយការណ៍បាត់បង់ផ្លូវការពីនគរបាល',
    d_damagedId:'អត្តសញ្ញាណប័ណ្ណដើមដែលខូច', d_damagedPass:'លិខិតឆ្លងដែនដើមដែលខូច',
    d_oldPassCopy:'ច្បាប់ចម្លងលិខិតឆ្លងដែនដែលបាត់ (បើមាន)', optional:'ជាជម្រើស', view:'មើល', free:'ឥតគិតថ្លៃ', fee:'ថ្លៃសេវា', toastBioFree:'បានធ្វើបច្ចុប្បន្នភាពជីវមាត្រ។ អត្តសញ្ញាណប័ណ្ណឥតគិតថ្លៃ បានផ្លាស់ទៅ «បានបង់»។', payFree:'ឥតគិតថ្លៃ',
    dshort_birth:'សំបុត្រកំណើត', dshort_family:'សៀវភៅគ្រួសារ', dshort_id:'អត្តសញ្ញាណប័ណ្ណ', zoomIn:'ពង្រីក', zoomOut:'បង្រួម', hideDoc:'លាក់', showDoc:'បង្ហាញឯកសារ',
    qrExpiredNote:'ពលរដ្ឋបន្តកូដ QR នៅក្នុងកម្មវិធី KH-ID ដោយបង់ថ្លៃយឺត។ កូដ QR ថ្មីនឹងត្រូវចេញដោយស្វ័យប្រវត្តិក្រោយការបង់ប្រាក់។ មន្ត្រីមិនអាចចេញកូដ QR ថ្មីបានទេ។',
    lateFeeDue:'ថ្លៃយឺតត្រូវបង់', lateDaysLbl:'ថ្ងៃយឺត', lateFeeToApp:'ថ្លៃយឺតត្រូវបង់ទៅកម្មវិធី KH-ID មិនមែនទៅ GDI ទេ។', lateFeePaid:'ថ្លៃយឺត QR (បានបង់ទៅកម្មវិធី KH-ID)', lateFeeIncome:'ថ្លៃយឺត QR ដែលកម្មវិធី KH-ID ប្រមូលបាន',
    pickupQr:'QR ទទួលឯកសារ', onsiteQr:'QR មកការិយាល័យ', scanPickupBtn:'ស្កេនកូដ QR ទទួលឯកសារ', waitPickup:'កំពុងរង់ចាំពលរដ្ឋមកទទួលឯកសារដោយប្រើកូដ QR ទទួលឯកសារ (គ្មានកំណត់ថ្ងៃ)។',
    resPickValid:'កូដ QR ទទួលឯកសារ មានសុពលភាព', resPickDone:'បានទទួលឯកសាររួចហើយ', confirmHandover:'បញ្ជាក់ការប្រគល់ឯកសារ', collected:'បានទទួលរួច', collectedOn:'បានទទួលនៅថ្ងៃ', toastHandover:'បានកត់ត្រាការប្រគល់ឯកសារ។'
  }
};
var KMD = '០១២៣៤៥៦៧៨៩';
var FIELD_LABEL = { nameKm:'f_nameKm', nameEn:'f_nameEn', dob:'f_dob', sex:'f_sex', pob:'f_pob', addr:'f_addr', father:'f_father', mother:'f_mother' };
var FILTERS = { all:null, pending:[0,1], accepted:[2], onsite:[3,4], progress:[5], ready:[6] };
var SVCS = ['newId', 'renewId', 'newPass', 'renewPass'];
var SVC_COLORS = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100']; /* validated categorical slots 1–4 */
var DOC_IMG = {
  birth: './doc-birth-certificate.jpg',
  family: './doc-family-book.jpg',
  id: './id-card-sample.png'
};
var ZOOMS = [100, 150, 200, 300];
function docKind(d) {
  if (/^d_birth/.test(d)) return 'birth';
  if (/^d_family/.test(d)) return 'family';
  if (d === 'd_id' || d === 'd_oldId' || d === 'd_damagedId') return 'id';
  return '';
}
var ID_DOCS = ['d_oldId', 'd_oldPass', 'd_id', 'd_birth', 'd_damagedId', 'd_damagedPass'];

function srcFor(key, docs) {
  var pick = function (list) { for (var i = 0; i < list.length; i++) { if (docs.indexOf(list[i]) >= 0) return list[i]; } return docs[0]; };
  if (key === 'addr') return pick(['d_familyOrRes', 'd_family']);
  if (key === 'father' || key === 'mother') return pick(['d_family', 'd_familyOrRes', 'd_birth']);
  return pick(ID_DOCS);
}
function shortDoc(t, d) { var k = docKind(d); return k ? t['dshort_' + k] : t[d]; }
function titleCase(s) { return String(s || '').toLowerCase().replace(/(^|\s)\S/g, function (c) { return c.toUpperCase(); }); }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    var self = this;
    this.state = {
      lang: null, screen: 'login', authMode: 'login', loginId: '', loginPw: '', suName: '', suId: '', suOffice: 0, suPhone: '', suPw: '', authErr: '', officer: null,
      filter: 'all', search: '', selId: null, apps: S.load(), bio: {}, toast: '', editingAll: false, editForm: null, docSel: null, docZoom: 100, docHidden: false,
      scanPhase: 'idle', scanId: null, scanNo: ''
    };
    S.subscribe(function (apps) { self.setState({ apps: apps }); });
  }
  upd(id, patch) { this.setState({ apps: S.update(id, patch) }); }
  flash(msg) {
    var self = this; this.setState({ toast: msg });
    clearTimeout(this._tt); this._tt = setTimeout(function () { self.setState({ toast: '' }); }, 2600);
  }
  open(a, t) {
    if (a.stage === 0) { this.upd(a.id, { stage: 1 }); this.flash(t.toastReview); }
    this.setState({ selId: a.id, screen: 'detail', bio: {}, editingAll: false, editForm: null, docSel: null, docZoom: 100, docHidden: false });
  }
  renderVals() {
    var self = this, st = this.state;
    var lang = st.lang || this.props.startLanguage || 'km';
    var t = T[lang];
    var kn = function (s) { s = String(s); return lang === 'km' ? s.replace(/[0-9]/g, function (d) { return KMD[+d]; }) : s; };
    var D = function (ms) { return kn(S.fmt(ms)); };
    var pillFor = function (s) { return s <= 1 ? 'pill blue' : (s === 2 || s === 3 ? 'pill amber' : (s === 6 ? 'pill green' : 'pill violet')); };
    var payLabel = function (a) { return a.pay === 'free' ? t.payFree : a.pay === 'online' ? t.paidOnline : (a.pay === 'cashPaid' ? t.paidCash : (a.pay === 'cash' ? t.payAtOffice : t.unpaid)); };
    var apps = st.apps;
    var view = function (a) {
      var name = lang === 'km' ? a.form.nameKm : titleCase(a.form.nameEn);
      return {
        id: a.id, name: name, nameAlt: lang === 'km' ? a.form.nameEn : a.form.nameKm,
        initials: titleCase(a.form.nameEn).split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2),
        no: a.no, svcName: t['svc_' + a.svc], date: D(a.createdAt), short: a.pickedUpAt ? t.collected : t['sh' + a.stage], status: a.pickedUpAt ? t.collected : t['st' + a.stage], pillCls: pillFor(a.stage),
        hasReason: a.reason === 'lost' || a.reason === 'damaged', reasonLabel: a.reason ? t['r_' + a.reason] : '', reasonCls: 'tag ' + (a.reason || ''),
        payLabel: payLabel(a), payCls: (a.pay === 'online' || a.pay === 'cashPaid' || a.pay === 'free') ? 'pill green' : 'pill amber',
        feeText: S.feeFor(a).amount ? kn('$' + S.feeFor(a).amount.toFixed(2)) : t.free,
        hasQueue: !!a.queue, queue: a.queue,
        open: function () { self.open(a, t); }
      };
    };
    var count = function (fn) { return apps.filter(fn).length; };

    /* ---------- Dashboard ---------- */
    var lostId = count(function (a) { return a.reason === 'lost' && a.svc === 'renewId'; }), lostPass = count(function (a) { return a.reason === 'lost' && a.svc === 'renewPass'; });
    var dmgId = count(function (a) { return a.reason === 'damaged' && a.svc === 'renewId'; }), dmgPass = count(function (a) { return a.reason === 'damaged' && a.svc === 'renewPass'; });
    var kpis = [
      { label: t.k_pending, value: kn(count(function (a) { return a.stage <= 1; })), cls: 'kpi hl', sub: '', hasSub: false },
      { label: t.k_new, value: kn(count(function (a) { return a.svc.indexOf('new') === 0; })), cls: 'kpi', sub: '', hasSub: false },
      { label: t.k_renew, value: kn(count(function (a) { return a.svc.indexOf('renew') === 0; })), cls: 'kpi', sub: '', hasSub: false },
      { label: t.k_unpaid, value: kn(count(function (a) { return a.stage === 3; })), cls: 'kpi', sub: '', hasSub: false },
      { label: t.k_lost, value: kn(lostId + lostPass), cls: 'kpi warn', sub: t.kId + ' ' + kn(lostId) + ' · ' + t.kPass + ' ' + kn(lostPass), hasSub: true },
      { label: t.k_damaged, value: kn(dmgId + dmgPass), cls: 'kpi warn', sub: t.kId + ' ' + kn(dmgId) + ' · ' + t.kPass + ' ' + kn(dmgPass), hasSub: true }
    ];
    var stageCounts = [0, 1, 2, 3, 4, 5, 6].map(function (s) { return count(function (a) { return a.stage === s; }); });
    var stageMax = Math.max.apply(null, stageCounts.concat([1]));
    var pipeline = stageCounts.map(function (n, s) {
      return { label: t['cp' + s], count: kn(n), h: 'height:' + Math.round(n / stageMax * 100) + '%', zero: n === 0, tip: t['st' + s] + ': ' + kn(n),
        open: function () { var f = s <= 1 ? 'pending' : (s === 2 ? 'accepted' : (s <= 4 ? 'onsite' : (s === 5 ? 'progress' : 'ready'))); self.setState({ screen: 'queue', filter: f }); } };
    });
    var total = apps.length || 1;
    var svcMix = SVCS.map(function (s, i) {
      var n = count(function (a) { return a.svc === s; });
      return { name: t['svc_' + s], count: kn(n), pct: Math.round(n / total * 100), seg: 'flex-grow:' + n + ';background:' + SVC_COLORS[i], dot: 'background:' + SVC_COLORS[i], show: n > 0, tip: t['svc_' + s] + ': ' + kn(n) };
    });
    svcMix.forEach(function (m) { m.pctLabel = kn(m.pct) + '%'; });
    var startToday = new Date(); startToday.setHours(0, 0, 0, 0); startToday = startToday.getTime();
    var weekCounts = [6, 5, 4, 3, 2, 1, 0].map(function (d) {
      var from = startToday - d * S.DAY, to = from + S.DAY;
      return { d: d, from: from, n: count(function (a) { return a.createdAt >= from && a.createdAt < to; }) };
    });
    var weekMax = Math.max.apply(null, weekCounts.map(function (w) { return w.n; }).concat([1]));
    var week = weekCounts.map(function (w) {
      var label = w.d === 0 ? t.today : kn(S.fmtShort(w.from));
      return { label: label, count: kn(w.n), h: 'height:' + Math.round(w.n / weekMax * 100) + '%', zero: w.n === 0, tip: label + ': ' + kn(w.n), cls: w.d === 0 ? 'col today' : 'col' };
    });
    var weekTotal = kn(weekCounts.reduce(function (sum, w) { return sum + w.n; }, 0));

    /* ---------- Queue ---------- */
    var filters = ['all', 'pending', 'accepted', 'onsite', 'progress', 'ready'].map(function (f) {
      return { label: t['f_' + f], on: st.filter === f, cls: st.filter === f ? 'on' : '', pick: function () { self.setState({ filter: f }); } };
    });
    var fs = FILTERS[st.filter], q = st.search.trim().toLowerCase();
    var list = apps.filter(function (a) {
      if (fs && fs.indexOf(a.stage) < 0) return false;
      if (!q) return true;
      return (a.no + ' ' + a.form.nameEn + ' ' + a.form.nameKm).toLowerCase().indexOf(q) >= 0;
    }).sort(function (x, y) { return x.stage - y.stage || y.createdAt - x.createdAt; }).map(view);

    /* ---------- Selected application ---------- */
    var a = apps.filter(function (x) { return x.id === st.selId; })[0] || apps[0];
    var sel = view(a);
    var docKeys = S.docsFor(a.svc, a.reason, a.under15);
    var verified = a.verified || {}, edited = a.edited || {};
    var selDoc = (st.docSel && docKeys.indexOf(st.docSel) >= 0) ? st.docSel : docKeys[0];
    var keys = S.FIELD_KEYS.slice().sort(function (x, y) { return (x === a.warn ? -1 : 0) - (y === a.warn ? -1 : 0); });
    var fields = keys.map(function (k) {
      var isV = !!verified[k], flagged = k === a.warn && !isV, editing = st.editingAll;
      return {
        key: k, label: t[FIELD_LABEL[k]], value: editing ? (st.editForm || a.form)[k] : a.form[k], src: shortDoc(t, srcFor(k, docKeys)), flagged: flagged, isVerified: isV, notVerified: !isV,
        edited: edited.hasOwnProperty(k), was: edited[k], editing: editing, notEditing: !editing,
        rowCls: 'frow' + (flagged ? ' flag' : '') + (isV ? ' ok' : '') + (editing ? ' editing' : '') + (srcFor(k, docKeys) === selDoc ? ' insrc' : ''),
        onEdit: function (e) { var form = Object.assign({}, self.state.editForm || a.form); form[k] = e.target.value; self.setState({ editForm: form }); }
      };
    });
    var vCount = fields.filter(function (f) { return f.isVerified; }).length;
    sel.fields = fields;
    sel.vProgress = kn(vCount) + ' / ' + kn(fields.length) + ' ' + t.verifiedOf;
    sel.vBar = 'width:' + Math.round(vCount / fields.length * 100) + '%';
    sel.allVerified = vCount === fields.length; sel.notAllVerified = !sel.allVerified;
    sel.editingAll = st.editingAll; sel.notEditingAll = !st.editingAll;
    sel.verifyAllLabel = sel.allVerified ? t.verified : t.verifyAllOk;
    var docFull = function (d) { return t[d] + (S.isOptionalDoc(d) ? ' (' + t.optional + ')' : ''); };
    sel.docTabs = docKeys.map(function (d) {
      var kind = docKind(d), on = d === selDoc;
      return { label: shortDoc(t, d), full: docFull(d), on: on, cls: on ? 'tab on' : 'tab', pick: function () { self.setState({ docSel: d }); } };
    });
    sel.docName = docFull(selDoc);
    sel.docSrc = DOC_IMG[docKind(selDoc)] || '';
    sel.docHasImg = !!sel.docSrc; sel.docNoImg = !sel.docSrc;
    sel.splitCls = a.stage <= 1 ? 'split review' : 'split';
    sel.reasonEvidence = a.reason === 'lost' ? t.evidence_lost : (a.reason === 'damaged' ? t.evidence_damaged : '');
    sel.hasEvidence = !!sel.reasonEvidence;
    sel.checks = [t.c1, t.c2, t.c4];
    sel.stepText = t.stepOf + ' ' + kn(a.stage + 1) + ' ' + t.of + ' ' + kn(7) + ' · ' + t['st' + a.stage];
    sel.stepDots = [0, 1, 2, 3, 4, 5, 6].map(function (i) { return { cls: i < a.stage ? 'sd done' : (i === a.stage ? 'sd cur' : 'sd') }; });
    sel.details = S.FIELD_KEYS.map(function (k) { return { label: t[FIELD_LABEL[k]], value: a.form[k], edited: edited.hasOwnProperty(k) }; });
    sel.payLabel = payLabel(a);
    var qrUntil = S.qrUntil(a), qrOk = S.qrValid(a);
    sel.atReview = a.stage <= 1;
    sel.atQr = a.stage === 2 && !a.queue; sel.qrOk = qrOk; sel.qrBad = !qrOk;
    sel.qrIssuedOn = D(a.qrAt); sel.qrUntil = D(qrUntil); sel.qrDaysLeft = kn(S.daysLeft(qrUntil)) + ' ' + t.daysLeft;
    sel.atBio = a.stage === 2 && !!a.queue;
    sel.atPay = a.stage === 3; sel.cashChosen = a.pay === 'cash'; sel.onlineWait = a.pay !== 'cash';
    sel.atPaid = a.stage === 4; sel.atProgress = a.stage === 5; sel.atReady = a.stage === 6;
    var lateDays = S.qrLateDays(a);
    sel.lateFeeDue = '$' + lateDays.toFixed(2) + ' · ' + kn(lateDays) + ' ' + t.lateDaysLbl;
    sel.hasLateFeePaid = !!a.qrRenewalFee;
    sel.lateFeePaid = a.qrRenewalFee ? '$' + Number(a.qrRenewalFee).toFixed(2) + ' · ' + D(a.qrRenewalPaidAt) : '';
    sel.pickedUp = !!a.pickedUpAt; sel.notPickedUp = !a.pickedUpAt; sel.pickedOn = D(a.pickedUpAt);
    sel.showDetails = a.stage >= 2;
    var bioItems = [1, 2, 3, 4].map(function (i) {
      return { label: t['bio' + i], on: !!st.bio[i], toggle: function () { var b = Object.assign({}, self.state.bio); b[i] = !b[i]; self.setState({ bio: b }); } };
    });

    /* QR the citizen receives (issue screen preview) */
    var previewApp = Object.assign({}, a, { qrAt: a.qrAt && a.stage === 2 ? a.qrAt : Date.now() });
    var issueQr = S.qrImage(S.qrText(previewApp));

    /* ---------- Scan ---------- */
    var waiting = apps.filter(function (x) { return (x.stage === 2 && !x.queue) || (x.stage === 6 && !x.pickedUpAt); }).sort(function (x, y) { return x.stage - y.stage; }).map(function (x) {
      var v = view(x), isPick = x.stage === 6;
      v.qr = S.qrImage(isPick ? S.pickupQrText(x) : S.qrText(x));
      v.kind = isPick ? t.pickupQr : t.onsiteQr;
      v.validity = isPick ? '' : (S.qrValid(x) ? t.validUntil + ' ' + D(S.qrUntil(x)) : t.resExpired);
      v.hasValidity = !isPick;
      v.vCls = S.qrValid(x) ? 'v ok' : 'v bad';
      v.pick = function () {
        self.setState({ scanPhase: 'scanning', scanId: x.id });
        clearTimeout(self._st); self._st = setTimeout(function () { self.setState({ scanPhase: 'result' }); }, 1300);
      };
      return v;
    });
    var scanned = st.scanId ? apps.filter(function (x) { return x.id === st.scanId; })[0] : null;
    var res = { kind: 'none' };
    if (st.scanPhase === 'result') {
      if (!scanned) res.kind = 'missing';
      else if (scanned.stage === 6) res.kind = scanned.pickedUpAt ? 'pickDone' : 'pickup';
      else if (scanned.stage === 2 && scanned.queue) res.kind = 'checked';
      else if (scanned.stage !== 2) res.kind = scanned.stage > 2 ? 'checked' : 'wrong';
      else if (!S.qrValid(scanned)) res.kind = 'expired';
      else res.kind = 'valid';
    }
    var scan = {
      idle: st.scanPhase === 'idle', scanning: st.scanPhase === 'scanning', result: st.scanPhase === 'result',
      valid: res.kind === 'valid', pickValid: res.kind === 'pickup', pickDone: res.kind === 'pickDone', okBadge: res.kind === 'valid' || res.kind === 'pickup', expired: res.kind === 'expired', missing: res.kind === 'missing', wrong: res.kind === 'wrong', checked: res.kind === 'checked',
      app: scanned ? view(scanned) : null, until: scanned ? D(S.qrUntil(scanned)) : '', lateFee: scanned ? '$' + S.qrLateDays(scanned).toFixed(2) + ' · ' + kn(S.qrLateDays(scanned)) + ' ' + t.lateDaysLbl : '', pickedOn: scanned ? D(scanned.pickedUpAt) : '', queue: scanned ? scanned.queue : '',
      waiting: waiting, noWaiting: waiting.length === 0, no: st.scanNo
    };

    /* ---------- Payments ---------- */
    var payList = apps.filter(function (x) { return x.stage >= 3; }).sort(function (x, y) { return x.stage - y.stage; }).map(function (x) {
      var v = view(x);
      v.canCash = x.stage === 3;
      v.markCash = function () { self.upd(x.id, { stage: 4, pay: 'cashPaid' }); self.flash(t.toastCash); };
      return v;
    });

    var s = st.screen;
    var is = {}; ['login', 'dash', 'queue', 'detail', 'issue', 'scan', 'payments'].forEach(function (k) { is[k] = s === k; });
    var titles = { login: '', dash: t.t_dash, queue: t.t_queue, detail: t.t_detail, issue: t.t_issue, scan: t.t_scan, payments: t.t_payments };
    var root = s === 'dash' || s === 'queue' || s === 'payments' || s === 'scan';
    var navOn = function (k2) { return (s === k2 || (k2 === 'queue' && (s === 'detail' || s === 'issue'))) ? 'on' : ''; };
    var officer = st.officer;
    var isSignup = st.authMode === 'signup';

    return {
      t: t, is: is, title: titles[s], brand: S.BRAND, topCls: s === 'login' ? 'top bare' : 'top',
      officerSub: officer ? officer.name + ' · ' + t.off0 : '', hasOfficer: !!officer && s !== 'login',
      showBack: s === 'detail' || s === 'issue', showLogo: root, showNav: s !== 'login',
      kmCls: lang === 'km' ? 'on' : '', enCls: lang === 'en' ? 'on' : '', isKm: lang === 'km', isEn: lang === 'en',
      setKm: function () { self.setState({ lang: 'km' }); }, setEn: function () { self.setState({ lang: 'en' }); },
      goBack: function () { self.setState({ screen: s === 'issue' ? 'detail' : 'queue', editingAll: false, editForm: null }); },
      goDash: function () { self.setState({ screen: 'dash' }); }, goQueue: function () { self.setState({ screen: 'queue' }); },
      goPayments: function () { self.setState({ screen: 'payments' }); },
      goScan: function () { self.setState({ screen: 'scan', scanPhase: 'idle', scanId: null, scanNo: '' }); },
      goQueuePending: function () { self.setState({ screen: 'queue', filter: 'pending' }); },
      nav: { dash: navOn('dash'), queue: navOn('queue'), scan: navOn('scan'), payments: navOn('payments') },

      /* auth */
      isSignup: isSignup, isLogin: !isSignup, tabLoginCls: isSignup ? '' : 'on', tabSignupCls: isSignup ? 'on' : '',
      authTitle: isSignup ? t.signupTitle : t.loginTitle, authSub: isSignup ? t.signupSub : t.loginSub,
      switchHint: isSignup ? t.haveAccount : t.noAccount, switchCta: isSignup ? t.logIn : t.signUp,
      tabLogin: function () { self.setState({ authMode: 'login', authErr: '' }); }, tabSignup: function () { self.setState({ authMode: 'signup', authErr: '' }); },
      switchMode: function () { self.setState({ authMode: isSignup ? 'login' : 'signup', authErr: '' }); },
      loginId: st.loginId, loginPw: st.loginPw, suName: st.suName, suId: st.suId, suPhone: st.suPhone, suPw: st.suPw,
      authErr: st.authErr, hasAuthErr: !!st.authErr,
      offices: [0].map(function (i) { return { label: t['off' + i], cls: st.suOffice === i ? 'on' : '', on: st.suOffice === i, pick: function () { self.setState({ suOffice: i }); } }; }),
      onLoginId: function (e) { self.setState({ loginId: e.target.value, authErr: '' }); }, onLoginPw: function (e) { self.setState({ loginPw: e.target.value, authErr: '' }); },
      onSuName: function (e) { self.setState({ suName: e.target.value }); }, onSuId: function (e) { self.setState({ suId: e.target.value }); },
      onSuPhone: function (e) { self.setState({ suPhone: e.target.value }); }, onSuPw: function (e) { self.setState({ suPw: e.target.value }); },
      doLogin: function () {
        var s2 = self.state, id = s2.loginId.trim().toUpperCase();
        var acc = S.accounts().filter(function (x) { return x.id.toUpperCase() === id && x.pw === s2.loginPw; })[0];
        if (!acc) { self.setState({ authErr: t.loginErr }); return; }
        self.setState({ officer: acc, screen: 'dash', loginPw: '', authErr: '' });
        self.flash(t.toastWelcome + acc.name);
      },
      doSignup: function () {
        var s2 = self.state, id = s2.suId.trim().toUpperCase();
        if (!s2.suName.trim() || !id || !s2.suPhone.trim() || !s2.suPw) { self.setState({ authErr: t.needFields }); return; }
        if (S.accounts().some(function (x) { return x.id.toUpperCase() === id; })) { self.setState({ authErr: t.idTaken }); return; }
        var acc = { id: id, pw: s2.suPw, name: s2.suName.trim(), office: s2.suOffice, phone: s2.suPhone.trim() };
        S.addAccount(acc);
        self.setState({ officer: acc, screen: 'dash', suPw: '', authErr: '' });
        self.flash(t.toastWelcome + acc.name);
      },
      logOut: function () {
        clearTimeout(self._tt);
        clearTimeout(self._st);
        self.setState({
          officer: null,
          screen: 'login',
          authMode: 'login',
          loginId: '',
          loginPw: '',
          suName: '',
          suId: '',
          suOffice: 0,
          suPhone: '',
          suPw: '',
          authErr: '',
          filter: 'all',
          search: '',
          selId: null,
          bio: {},
          toast: '',
          editingAll: false,
          editForm: null,
          docSel: null,
          docZoom: 100,
          docHidden: false,
          scanPhase: 'idle',
          scanId: null,
          scanNo: ''
        });
      },

      /* dashboard */
      kpis: kpis, pipeline: pipeline, svcMix: svcMix, week: week, weekTotal: weekTotal, totalApps: kn(apps.length),

      /* queue */
      filters: filters, list: list, listEmpty: list.length === 0, search: st.search,
      onSearch: function (e) { self.setState({ search: e.target.value }); },

      /* detail */
      sel: sel, bodyCls: s === 'detail' ? 'body wide' : 'body',
      docShown: !st.docHidden, docToggleLabel: st.docHidden ? t.showDoc : t.hideDoc, toggleDoc: function () { self.setState({ docHidden: !self.state.docHidden }); },
      docImgStyle: 'width:' + st.docZoom + '%', docZoomLabel: kn(st.docZoom) + '%',
      zoomIn: function () { var i = ZOOMS.indexOf(self.state.docZoom); self.setState({ docZoom: ZOOMS[Math.min(ZOOMS.length - 1, i + 1)] }); },
      zoomOut: function () { var i = ZOOMS.indexOf(self.state.docZoom); self.setState({ docZoom: ZOOMS[Math.max(0, i - 1)] }); },
      bioItems: bioItems, bioIncomplete: bioItems.some(function (b) { return !b.on; }),
      startEditAll: function () { self.setState({ editingAll: true, editForm: Object.assign({}, a.form) }); },
      cancelEditAll: function () { self.setState({ editingAll: false, editForm: null }); },
      saveEditAll: function () {
        var draft = self.state.editForm || a.form, form = Object.assign({}, a.form), ed = Object.assign({}, edited), v = Object.assign({}, verified), changed = false;
        S.FIELD_KEYS.forEach(function (k) {
          var val = String(draft[k] == null ? '' : draft[k]).trim();
          if (val && val !== a.form[k]) {
            if (!ed.hasOwnProperty(k)) ed[k] = a.form[k];
            form[k] = val; v[k] = true; changed = true;
          }
        });
        self.upd(a.id, { form: form, edited: ed, verified: v });
        self.setState({ editingAll: false, editForm: null });
        if (changed) self.flash(t.toastSaved);
      },
      verifyAll: function () { var v = Object.assign({}, verified); S.FIELD_KEYS.forEach(function (k) { v[k] = true; }); self.upd(a.id, { verified: v }); },
      goIssue: function () { self.setState({ screen: 'issue', editingAll: false, editForm: null }); },
      issueQr: issueQr, issueUntil: D(previewApp.qrAt + S.QR_DAYS * S.DAY),
      confirmIssue: function () { self.upd(a.id, { stage: 2, qrAt: Date.now(), queue: '' }); self.setState({ screen: 'detail' }); self.flash(t.toastAccept); },
      scanFromDetail: function () { self.setState({ screen: 'scan', scanPhase: 'idle', scanId: null, scanNo: '' }); },
      markBio: function () {
        var free = S.feeFor(a).amount === 0;
        self.upd(a.id, free ? { stage: 4, pay: 'free' } : { stage: 3 });
        self.setState({ bio: {} }); self.flash(free ? t.toastBioFree : t.toastBio);
      },
      markCash: function () { self.upd(a.id, { stage: 4, pay: 'cashPaid' }); self.flash(t.toastCash); },
      toProgress: function () { self.upd(a.id, { stage: 5 }); self.flash(t.toastProgress); },
      markDone: function () { self.upd(a.id, { stage: 6, readyAt: Date.now(), pickedUpAt: null }); self.flash(t.toastDone); },
      confirmHandover: function () {
        if (!scanned) return;
        self.upd(scanned.id, { pickedUpAt: Date.now() });
        self.flash(t.toastHandover);
      },

      /* scan */
      scan: scan,
      onScanNo: function (e) { self.setState({ scanNo: e.target.value }); },
      findNo: function () {
        var n = self.state.scanNo.trim().toUpperCase(); if (!n) return;
        var hit = apps.filter(function (x) { return x.no.toUpperCase() === n || x.no.toUpperCase().slice(-n.length) === n; })[0];
        self.setState({ scanPhase: 'result', scanId: hit ? hit.id : null });
      },
      checkIn: function () {
        if (!scanned) return;
        var qn = S.nextQueue(S.load());
        self.upd(scanned.id, { queue: qn });
        self.setState({ selId: scanned.id, screen: 'detail', bio: {}, scanPhase: 'idle', scanId: null, scanNo: '' });
        self.flash(t.toastCheckIn + qn);
      },
      openScanned: function () { if (scanned) self.open(scanned, t); },
      scanAgain: function () { self.setState({ scanPhase: 'idle', scanId: null, scanNo: '' }); },

      /* payments */
      payList: payList,
      kUnpaid: kn(count(function (x) { return x.stage === 3; })),
      kPaidOnline: kn(count(function (x) { return x.pay === 'online'; })),
      kPaidCash: kn(count(function (x) { return x.pay === 'cashPaid'; })),
      lateFeeTotal: '$' + apps.reduce(function (sum, x) { return sum + (Number(x.qrRenewalFee) || 0); }, 0).toFixed(2),
      toast: st.toast
    };
  }
}
