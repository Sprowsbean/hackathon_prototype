var S = window.AttaStore;
var T = {
  en: {
    back:'Back', authTagline:'ID card and passport services in one app', signIn:'Sign in', signUp:'Create account',
    signInTitle:'Welcome back', signInSub:'Sign in with your phone number. We will send you a one-time code.',
    signUpTitle:'Create your account', signUpSub:'Enter your name and phone number to receive a one-time verification code.',
    fullName:'Full name', fullNamePlaceholder:'Enter your full name', phone:'Phone number', sendOtp:'Send code', otpLabel:'Verification code', otpSentTo:'Code sent to', otpDemo:'Prototype code: 123456', verifyOtp:'Verify & continue', changeNumber:'Change number',
    otpWrong:'Wrong code. Use 123456 for this demo.', needFields:'Please fill in all fields.', noAccount:'New here?', haveAccount:'Already have an account?', authFoot:'Prototype only. No real SMS is sent.', signOut:'Sign out',
    hello:'Hello,', userName:'Sok Dara', helloSub:'What would you like to do today?',
    expTitle:'Your passport expires in 5 months', expBody:'It expires on 18/04/2027. Renew early so you can travel without delays.', renewNow:'Renew now',
    myApps:'My applications', noApps:'No applications yet. Start one below.', seeAll:'See all',
    services:'Services', svc_newId:'New ID card', svc_renewId:'Renew ID card', svc_newPass:'New passport', svc_renewPass:'Renew passport',
    firstTime:'First time', expiredLost:'Expired, damaged or lost',
    myDocuments:'My documents', showMyId:'Show my ID', showMyPassport:'Show my passport', viewDocument:'View digital copy', documentNumber:'Document number', expiryDate:'Expiry date', documentDemoNote:'Demo document only. A real service would show a verified secure copy.', printId:'Print ID on A4', printPassport:'Print passport on A4',
    appsIntro:'Tap an application to see its progress.', newApp:'Start a new application',
    step1:'Documents', step2:'Review', step3:'Submit',
    docsIntro:'Upload clear photos of required documents. Conditional or recommended items are marked optional.',
    renewReasonId:'Why are you renewing your ID card?', renewReasonPass:'Why are you renewing your passport?',
    reasonExpired:'Expired / near expiry', reasonLost:'Lost', reasonDamaged:'Damaged',
    note_expiredId:'Renew when the card has expired or has less than 180 days of validity remaining. Bring your current or expired card.',
    note_expiredPass:'Renew when less than 6 months remain (up to 1 year early for certain travel cases). Bring your previous passport and age-appropriate identity documents.',
    note_lost:'Upload the official police loss report. ID-card replacements also require a duplicate/reprint form certified by the local administrative police post.',
    note_damaged:'Bring the original damaged ID card or passport in person; a photo alone does not replace the original.',
    docsNote:'You still need to visit once to scan your fingerprints and take your photo.',
    tapUpload:'Upload', uploaded:'Uploaded', notUploaded:'Not uploaded yet', replace:'Change', scanFill:'Scan & auto-fill',
    reading:'Reading Khmer text…', readingSub:'Extracting your details from the documents (OCR).',
    ocrDone:'8 fields filled in', ocrDoneSub:'1 field needs you to check it.', reviewForm:'Review the form',
    autoNote:'These details were filled in from your documents. Please check them before you submit.',
    checkField:'Please check this field. The text was hard to read.',
    f_nameKm:'Name (Khmer)', f_nameEn:'Name (Latin)', f_dob:'Date of birth', f_sex:'Sex', f_pob:'Place of birth', f_addr:'Current address', f_father:"Father's name", f_mother:"Mother's name",
    confirm:'I confirm that the information above is correct.', submit:'Submit application',
    submitted:'Application submitted', appNo:'Application no.', submittedSub:'We will notify you when an officer has reviewed it.',
    service:'Service', status:'Status', track:'Track application', backHome:'Back to home', progress:'Progress',
    st0:'Submitted', st1:'Under review', st2:'Accepted – visit within 1 week', st3:'Biometrics done – please pay', st4:'Paid', st5:'In progress', st6:'Ready for pickup',
    s0:'Submitted', s1:'Under review', s2:'Verified & accepted', s3:'On-site: fingerprint & photo', s4:'Payment', s5:'In progress', s6:'Ready for pickup',
    s1d:'An officer is checking your details', s2d:'Officer approved. You receive a QR code.', s3d:'Come on-site within 1 week after you receive your QR code', s3dBy:'Come on-site within 1 week, by',
    s4d:'Pay online or in cash at the counter', s5d:'Your document is being printed', s6d:'Pick up at AEON MALL 2 once it is ready', s6dBy:'Can pick up now at AEON MALL 2',
    qrRowTitle:'Your on-site QR code', validUntil:'Valid until', daysLeft:'days left',
    qrExpiredTitle:'Your QR code has expired', qrExpiredBody:'QR codes are valid for 1 week. Renew here; each started late day costs $1.',
    lateDaysAt:'late days at', qrLateDaysLabel:'Late days', qrLatePerDay:'$1 per started day', renewQr:'Pay late fee and renew QR',
    qrRenewalPaymentNote:'The late fee is paid to the KH-ID app, not to GDI. Prototype only: KHQR or card simulates the payment. Regular document fees are still due after your on-site visit.',
    qrRenewalDoneTitle:'Your QR code was renewed', qrRenewalDoneSub:'Your new QR code is valid for one week.',
    qrRenewalDoneStatus:'Late fee paid and QR renewed', payLateFee:'Pay late fee',
    passportAgeGroup:'Applicant age', passportAge15Plus:'15 or older', passportAgeUnder15:'Under 15',
    passportAgeUploadHint:'Select the applicant’s age to see the correct passport document checklist.',
    passportAdultReqNote:'Applicants aged 15 or older must provide a valid Khmer National ID card.',
    passportChildReqNote:'For applicants under 15, use the birth certificate and parent/legal guardian documents shown below.',
    optional:'Optional', optionalUpload:'Optional',
    checkedIn:'Checked in. Your queue no.',
    payTitle:'Biometrics captured', payBody:'Pay the fee online, or in cash at the counter.', payNow:'Pay now',
    cashPending:'You chose to pay in cash. Pay at the counter and the officer will confirm it.',
    readyTitle:'Your document is ready', readyBody:'Collect it at', pickNow:'Can pick up now at AEON MALL 2, same floor as the GDI office', pickQrTitle:'Show this QR code when you pick up', pickQrSub:'A different QR code from your on-site visit. The officer scans it to hand over your document.',
    demoNote:'Prototype: simulate the officer’s next update', demoBtn:'Next step',
    fee:'Fee', serviceFee:'Service fee', total:'Total', free:'Free', payFree:'Free – no payment needed', amountToPay:'Amount to pay', applicantAge:'Applicant age (from date of birth)', yearsWord:'years', validityLbl:'Validity', processingLbl:'Processing', processStd:'Standard, about 15 working days', feeId:'ID card fee', feePass6:'Passport fee · age 6 and above', feePassU6:'Passport fee · under 6', feeNote:'Standard processing fee. Confirm the latest fees with GDI.', ageUnknown:'Not clear – check your date of birth', payMethod:'Payment method',
    m_khqr:'KHQR (any bank app)', m_khqrSub:'Updates automatically after you pay', m_card:'Debit / credit card', m_cardSub:'Visa, Mastercard, UnionPay', m_cash:'Cash at the counter', m_cashSub:'The officer confirms your payment',
    qrNote:'Open your banking app and scan this code. [Placeholder QR]',
    payOnline:'Pay [TOTAL]', payCash:'Confirm – pay at the counter',
    paidTitle:'Payment successful', paidSub:'Your document is now being processed. We will notify you when it is ready.',
    cashTitle:'Pay at the counter', cashSub:'Pay the fee in cash at the counter. The officer will confirm your payment.',
    payStatus:'Payment', paidOnline:'Paid online', payAtOffice:'Cash at counter (not confirmed yet)', paidCash:'Paid in cash', unpaid:'Not paid',
    visitQrTitle:'Show this QR code to the officer', visitQrSub:'It contains your full name and application number.',
    validNote:'Valid for 1 week. Come on-site before it expires.', queueLater:'You get your queue number when the officer scans this code.', queueNo:'Queue no.',
    whereToGo:'Where to go', onsiteTitle:'What happens on-site', bioFinger:'Fingerprints', bioPhoto:'Photo', bioHeight:'Height', bioMark:'Special features',
    bring:'Please bring', bringList:'Your original documents and this QR code.', directions:'Directions', needHelp:'Need help? Call the hotline',
    locAeon:'AEON Mall Sen Sok City (AEON 2)', locAeonSub:'Identification & Passport Office',
    tagId:'ID card', tagPass:'Passport',
    hours:'Working hours', monFri:'Monday – Friday', lunch:'Lunch break', weekend:'Weekends & public holidays', closed:'Closed', openNow:'Open now',
    where:'Where to apply', reqDocs:'Required documents', reqId:'ID card', reqPass:'Passport',
    r_new:'New (first time)', r_expired:'Renewal – expired or eligible for early renewal', r_lost:'Replacement – lost', r_damaged:'Replacement – damaged',
    reqIdNote:'ID cards are available from age 15. Renew when expired or when less than 180 days remain. For lost cards, bring the certified duplicate/reprint form and police report.',
    reqPassNote:'Ordinary passports are available from birth. Renew before expiration when less than 6 months remain; certain travel cases allow renewal up to 1 year early. Bring the original damaged passport for damaged-document cases.',
    validityTitle:'Eligibility and validity',
    idValidity:'National ID card: available from age 15; valid 10 years for ages 15–59 and permanently for ages 60+.',
    passportValidity:'Ordinary passport: available from birth; valid 5 years under age 6 and 10 years from age 6.',
    reqVerify:'Requirements are a guide based on the supplied GDI information. Confirm the latest rules with the General Department of Identification before applying.',
    faq:'Frequently asked questions', contact:'Contact us', hotline:'Hotline', hotlineFree:'Free GDI inquiry hotline during working hours', hotlineAlt:'Alternative GDI inquiry line', email:'Email', telegram:'Telegram', officialTelegram:'Official General Department of Identification channel', facebook:'Facebook', officialFacebook:'General Department of Identification', office:'Office',
    q1:'Do I still need to go to the office?', a1:'Yes, once, within 1 week after your application is accepted. Show your QR code. Fingerprints, photo, height and special features are captured in person.',
    q2:'Which documents do I need?', a2:'See “Required documents” above. The app also shows the exact list before you start.',
    q3:'How can I pay?', a3:'After your biometrics are captured: online with KHQR or card (updates automatically), or in cash at the counter (the officer confirms it).',
    q4:'When can I renew my document?', a4:'Renew an ID card when under 180 days remain. Renew a passport when under 6 months remain; some travel cases allow renewal up to 1 year early.',
    q5:'How long is my QR code valid?', a5:'For 1 week after an officer accepts your application. After it expires, renew it in the app; each started late day costs $1.',
    q6:'How long do I have to pick up my document?', a6:'Pick it up within 1 week after we notify you that it is ready.',
    navHome:'Home', navApps:'Applications', navInfo:'Info', navAlerts:'Alerts',
    t_home:'ID & Passport', t_apps:'My applications', t_info:'Information', t_alerts:'Notifications', t_review:'Review details', t_ocr:'Scanning documents', t_pay:'Payment', t_visit:'On-site visit', t_track:'Application', t_done:'Submitted',
    n_expT:'Passport expiring soon', n_expB:'Your passport expires on 18/04/2027 (in 5 months). Renew now.',
    nt0:'Application received', nt1:'Under review', nt2:'Accepted – your QR code is ready', nt3:'Biometrics captured', nt4:'Payment received', nt5:'Your document is being printed', nt6:'Ready for pickup',
    nb0:'Submitted successfully.', nb1:'An officer is checking your details.', nb2:'Come on-site within 1 week. QR valid until', nb3:'Please pay the fee to continue.', nb4:'Thank you. Processing has started.', nb5:'We will notify you when it is ready.', nb6:'You can pick it up now at AEON MALL 2, same floor as the GDI office.',
    nEditT:'An officer corrected your application', nEditB:'Corrected:', nEditNone:'No action needed.',
    d_birth:'Birth certificate or birth registration certificate', d_birthCertified:'Certified birth or birth-registration certificate showing Khmer nationality',
    d_birthCheck:'Birth certificate copy (recommended if record verification is needed)',
    d_family:'Family book', d_familyOrRes:'Family book, residence book, or commune residence certificate',
    d_familyOrResUpdate:'Family/residence document (if updating personal details or address)',
    d_familyOrResDamaged:'Family/residence document (if updating details or the damaged card is unreadable)',
    d_familyOrResRecommended:'Family/residence document (recommended for record verification)',
    d_guardianId:'Parent/legal guardian’s valid National ID or passport',
    d_guardianAuthorization:'Parent/legal guardian’s written authorization/request',
    d_lostIdDuplicate:'Duplicate/reprint application form certified by the local administrative police post',
    d_id:'Valid Khmer National ID card', d_oldId:'Current or expired National ID card', d_oldPass:'Current/previous passport',
    d_policeLoss:'Official police report of loss', d_damagedId:'Original damaged National ID card (bring it in person)',
    d_damagedPass:'Original damaged passport (bring it in person)', d_oldPassCopy:'Copy of lost passport (if available)',
    d_sub:'Photo or PDF'
  },
  km: {
    back:'ត្រឡប់ក្រោយ', authTagline:'សេវាអត្តសញ្ញាណប័ណ្ណ និងលិខិតឆ្លងដែន ក្នុងកម្មវិធីតែមួយ', signIn:'ចូលគណនី', signUp:'បង្កើតគណនី',
    signInTitle:'សូមស្វាគមន៍', signInSub:'ចូលដោយប្រើលេខទូរស័ព្ទ។ យើងនឹងផ្ញើលេខកូដប្រើម្ដងទៅអ្នក។',
    signUpTitle:'បង្កើតគណនី', signUpSub:'បញ្ចូលឈ្មោះ និងលេខទូរស័ព្ទ ដើម្បីទទួលលេខកូដផ្ទៀងផ្ទាត់។',
    fullName:'ឈ្មោះពេញ', fullNamePlaceholder:'បញ្ចូលឈ្មោះពេញ', phone:'លេខទូរស័ព្ទ', sendOtp:'ផ្ញើលេខកូដ', otpLabel:'លេខកូដផ្ទៀងផ្ទាត់', otpSentTo:'បានផ្ញើលេខកូដទៅ', otpDemo:'លេខកូដសាកល្បង៖ 123456', verifyOtp:'ផ្ទៀងផ្ទាត់ និងបន្ត', changeNumber:'ប្ដូរលេខ',
    otpWrong:'លេខកូដមិនត្រឹមត្រូវ។ សូមប្រើ 123456 សម្រាប់ការសាកល្បង។', needFields:'សូមបំពេញព័ត៌មានទាំងអស់។', noAccount:'ទើបប្រើលើកដំបូង?', haveAccount:'មានគណនីរួចហើយ?', authFoot:'គំរូសាកល្បងប៉ុណ្ណោះ។ មិនមានការផ្ញើ SMS ពិតទេ។', signOut:'ចាកចេញ',
    hello:'សួស្តី,', userName:'សុខ ដារា', helloSub:'តើអ្នកចង់ធ្វើអ្វីនៅថ្ងៃនេះ?',
    expTitle:'លិខិតឆ្លងដែនរបស់អ្នកនឹងផុតសុពលភាពក្នុងរយៈពេល ៥ ខែទៀត', expBody:'ផុតសុពលភាពនៅថ្ងៃទី ១៨/០៤/២០២៧។ សូមបន្តឱ្យបានឆាប់ ដើម្បីធ្វើដំណើរដោយគ្មានការពន្យារពេល។', renewNow:'បន្តឥឡូវនេះ',
    myApps:'ពាក្យស្នើសុំរបស់ខ្ញុំ', noApps:'មិនទាន់មានពាក្យសុំនៅឡើយ។ សូមចាប់ផ្ដើមខាងក្រោម។', seeAll:'មើលទាំងអស់',
    services:'សេវាកម្ម', svc_newId:'ធ្វើអត្តសញ្ញាណប័ណ្ណថ្មី', svc_renewId:'បន្តអត្តសញ្ញាណប័ណ្ណ', svc_newPass:'ធ្វើលិខិតឆ្លងដែនថ្មី', svc_renewPass:'បន្តលិខិតឆ្លងដែន',
    firstTime:'ធ្វើលើកដំបូង', expiredLost:'ផុតកំណត់ ខូច ឬបាត់',
    myDocuments:'ឯកសាររបស់ខ្ញុំ', showMyId:'បង្ហាញអត្តសញ្ញាណប័ណ្ណ', showMyPassport:'បង្ហាញលិខិតឆ្លងដែន', viewDocument:'មើលច្បាប់ចម្លងឌីជីថល', documentNumber:'លេខឯកសារ', expiryDate:'ថ្ងៃផុតសុពលភាព', documentDemoNote:'ឯកសារសាកល្បង។ ប្រព័ន្ធពិតនឹងបង្ហាញឯកសារដែលបានផ្ទៀងផ្ទាត់ដោយសុវត្ថិភាព។', printId:'បោះពុម្ពអត្តសញ្ញាណប័ណ្ណលើក្រដាស A4', printPassport:'បោះពុម្ពលិខិតឆ្លងដែនលើក្រដាស A4',
    appsIntro:'ចុចលើពាក្យស្នើសុំ ដើម្បីមើលដំណើរការ។', newApp:'ចាប់ផ្ដើមពាក្យស្នើសុំថ្មី',
    step1:'ឯកសារ', step2:'ពិនិត្យ', step3:'ដាក់ស្នើ',
    docsIntro:'សូមបញ្ចូលរូបថតឯកសារដែលតម្រូវឱ្យច្បាស់។ ឯកសារដែលមានលក្ខខណ្ឌ ឬណែនាំ នឹងសម្គាល់ថាជាជម្រើស។',
    renewReasonId:'មូលហេតុនៃការបន្តអត្តសញ្ញាណប័ណ្ណ', renewReasonPass:'មូលហេតុនៃការបន្តលិខិតឆ្លងដែន',
    reasonExpired:'ផុតសុពលភាព / ជិតផុតសុពលភាព', reasonLost:'បាត់', reasonDamaged:'ខូច',
    note_expiredId:'សូមបន្តនៅពេលប័ណ្ណផុតសុពលភាព ឬនៅសល់សុពលភាពតិចជាង ១៨០ ថ្ងៃ។ សូមយកប័ណ្ណបច្ចុប្បន្ន ឬផុតសុពលភាពមកជាមួយ។',
    note_expiredPass:'សូមបន្តនៅពេលនៅសល់សុពលភាពតិចជាង ៦ ខែ (ករណីធ្វើដំណើរខ្លះអាចបន្តមុនដល់ ១ ឆ្នាំ)។ សូមយកលិខិតឆ្លងដែនចាស់ និងឯកសារអត្តសញ្ញាណតាមអាយុមកជាមួយ។',
    note_lost:'សូមបញ្ចូលរបាយការណ៍បាត់បង់ផ្លូវការពីនគរបាល។ ការធ្វើអត្តសញ្ញាណប័ណ្ណជំនួសត្រូវមានពាក្យស្នើសុំទុតិយតាដែលប៉ុស្តិ៍នគរបាលរដ្ឋបាលបញ្ជាក់។',
    note_damaged:'សូមយកអត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែនដើមដែលខូចមកដោយផ្ទាល់។ រូបថតមិនអាចជំនួសឯកសារដើមបានទេ។',
    docsNote:'អ្នកនៅតែត្រូវមកម្ដង ដើម្បីស្កេនស្នាមម្រាមដៃ និងថតរូប។',
    tapUpload:'បញ្ចូល', uploaded:'បានបញ្ចូល', notUploaded:'មិនទាន់បញ្ចូល', replace:'ប្ដូរ', scanFill:'ស្កេន និងបំពេញស្វ័យប្រវត្តិ',
    reading:'កំពុងអានអក្សរខ្មែរ…', readingSub:'កំពុងទាញយកព័ត៌មានរបស់អ្នកពីឯកសារ (OCR)។',
    ocrDone:'បានបំពេញព័ត៌មាន ៨ ចំណុច', ocrDoneSub:'មាន ១ ចំណុចដែលអ្នកត្រូវពិនិត្យ។', reviewForm:'ពិនិត្យទម្រង់',
    autoNote:'ព័ត៌មានទាំងនេះត្រូវបានបំពេញពីឯកសាររបស់អ្នក។ សូមពិនិត្យមុនពេលដាក់ស្នើ។',
    checkField:'សូមពិនិត្យចំណុចនេះ — អក្សរពិបាកអាន។',
    f_nameKm:'ឈ្មោះ (អក្សរខ្មែរ)', f_nameEn:'ឈ្មោះ (អក្សរឡាតាំង)', f_dob:'ថ្ងៃខែឆ្នាំកំណើត', f_sex:'ភេទ', f_pob:'ទីកន្លែងកំណើត', f_addr:'អាសយដ្ឋានបច្ចុប្បន្ន', f_father:'ឈ្មោះឪពុក', f_mother:'ឈ្មោះម្ដាយ',
    confirm:'ខ្ញុំសូមបញ្ជាក់ថា ព័ត៌មានខាងលើពិតជាត្រឹមត្រូវ។', submit:'ដាក់ស្នើពាក្យសុំ',
    submitted:'បានដាក់ស្នើពាក្យសុំ', appNo:'លេខពាក្យសុំ', submittedSub:'យើងនឹងជូនដំណឹងអ្នក នៅពេលមន្ត្រីបានពិនិត្យរួច។',
    service:'សេវាកម្ម', status:'ស្ថានភាព', track:'តាមដានពាក្យសុំ', backHome:'ត្រឡប់ទៅទំព័រដើម', progress:'ដំណើរការ',
    st0:'បានដាក់ស្នើ', st1:'កំពុងពិនិត្យ', st2:'បានទទួលយក – សូមមកក្នុង ១ សប្ដាហ៍', st3:'បានថតជីវមាត្រ – សូមបង់ប្រាក់', st4:'បានបង់ប្រាក់', st5:'កំពុងដំណើរការ', st6:'រួចរាល់សម្រាប់ទទួល',
    s0:'បានដាក់ស្នើ', s1:'កំពុងពិនិត្យ', s2:'បានផ្ទៀងផ្ទាត់ និងទទួលយក', s3:'នៅការិយាល័យ៖ ស្នាមម្រាមដៃ និងរូបថត', s4:'ការបង់ប្រាក់', s5:'កំពុងដំណើរការ', s6:'រួចរាល់សម្រាប់ទទួល',
    s1d:'មន្ត្រីកំពុងពិនិត្យព័ត៌មានរបស់អ្នក', s2d:'មន្ត្រីបានអនុម័ត។ អ្នកទទួលបានកូដ QR។', s3d:'សូមមកការិយាល័យក្នុងរយៈពេល ១ សប្ដាហ៍ បន្ទាប់ពីទទួលបានកូដ QR', s3dBy:'សូមមកការិយាល័យក្នុងរយៈពេល ១ សប្ដាហ៍ យ៉ាងយូរត្រឹមថ្ងៃ',
    s4d:'បង់តាមអនឡាញ ឬជាសាច់ប្រាក់នៅបញ្ជរ', s5d:'ឯកសាររបស់អ្នកកំពុងត្រូវបានបោះពុម្ព', s6d:'មកទទួលនៅអ៊ីអុន ២ នៅពេលរួចរាល់', s6dBy:'អាចមកទទួលបានឥឡូវនេះ នៅអ៊ីអុន ២',
    qrRowTitle:'កូដ QR សម្រាប់មកការិយាល័យ', validUntil:'មានសុពលភាពដល់', daysLeft:'ថ្ងៃទៀត',
    qrExpiredTitle:'កូដ QR របស់អ្នកបានផុតសុពលភាព', qrExpiredBody:'កូដ QR មានសុពលភាព ១ សប្ដាហ៍។ សូមបន្តនៅទីនេះ ដោយគិតថ្លៃ $1 សម្រាប់រាល់ថ្ងៃដែលចាប់ផ្ដើមយឺត។',
    lateDaysAt:'ថ្ងៃយឺត ក្នុងតម្លៃ', qrLateDaysLabel:'ចំនួនថ្ងៃយឺត', qrLatePerDay:'$1 ក្នុងមួយថ្ងៃ', renewQr:'បង់ថ្លៃយឺត និងបន្តកូដ QR',
    qrRenewalPaymentNote:'ថ្លៃយឺតត្រូវបង់ទៅកម្មវិធី KH-ID មិនមែនទៅ GDI ទេ។ គំរូសាកល្បងប៉ុណ្ណោះ៖ KHQR ឬកាតគ្រាន់តែធ្វើត្រាប់ការបង់ប្រាក់។ ថ្លៃឯកសារធម្មតាត្រូវបង់ក្រោយពេលមកការិយាល័យ។',
    qrRenewalDoneTitle:'កូដ QR របស់អ្នកត្រូវបានបន្តហើយ', qrRenewalDoneSub:'កូដ QR ថ្មីរបស់អ្នកមានសុពលភាពមួយសប្ដាហ៍។',
    qrRenewalDoneStatus:'បានបង់ថ្លៃយឺត និងបន្ត QR រួច', payLateFee:'បង់ថ្លៃយឺត',
    passportAgeGroup:'អាយុអ្នកស្នើសុំ', passportAge15Plus:'អាយុ ១៥ ឆ្នាំឡើង', passportAgeUnder15:'ក្រោម ១៥ ឆ្នាំ',
    passportAgeUploadHint:'សូមជ្រើសរើសអាយុអ្នកស្នើសុំ ដើម្បីបង្ហាញបញ្ជីឯកសារលិខិតឆ្លងដែនត្រឹមត្រូវ។',
    passportAdultReqNote:'អ្នកស្នើសុំអាយុ ១៥ ឆ្នាំឡើង ត្រូវមានអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរមានសុពលភាព។',
    passportChildReqNote:'សម្រាប់អ្នកស្នើសុំក្រោមអាយុ ១៥ ឆ្នាំ សូមប្រើសំបុត្រកំណើត និងឯកសារឪពុកម្ដាយ/អាណាព្យាបាលខាងក្រោម។',
    optional:'ជាជម្រើស', optionalUpload:'ជាជម្រើស',
    checkedIn:'បានចុះឈ្មោះ។ លេខរង់ចាំរបស់អ្នក',
    payTitle:'បានថតជីវមាត្ររួចរាល់', payBody:'សូមបង់ថ្លៃសេវាតាមអនឡាញ ឬជាសាច់ប្រាក់នៅបញ្ជរ។', payNow:'បង់ប្រាក់ឥឡូវ',
    cashPending:'អ្នកបានជ្រើសរើសបង់ជាសាច់ប្រាក់។ សូមបង់នៅបញ្ជរ ហើយមន្ត្រីនឹងបញ្ជាក់។',
    readyTitle:'ឯកសាររបស់អ្នករួចរាល់ហើយ', readyBody:'សូមមកទទួលនៅ', pickNow:'អាចមកទទួលបានឥឡូវនេះ នៅផ្សារទំនើបអ៊ីអុន ២ ត្រង់ជាន់ជាមួយការិយាល័យ GDI', pickQrTitle:'សូមបង្ហាញកូដ QR នេះនៅពេលមកទទួល', pickQrSub:'ជាកូដ QR ផ្សេងពីកូដសម្រាប់មកការិយាល័យ។ មន្ត្រីស្កេនកូដនេះដើម្បីប្រគល់ឯកសារជូនអ្នក។',
    demoNote:'គំរូសាកល្បង៖ ធ្វើត្រាប់ការធ្វើបច្ចុប្បន្នភាពបន្ទាប់របស់មន្ត្រី', demoBtn:'ជំហានបន្ទាប់',
    fee:'ថ្លៃសេវា', serviceFee:'ថ្លៃសេវា', total:'សរុប', free:'ឥតគិតថ្លៃ', payFree:'ឥតគិតថ្លៃ – មិនចាំបាច់បង់ប្រាក់', amountToPay:'ចំនួនទឹកប្រាក់ត្រូវបង់', applicantAge:'អាយុអ្នកស្នើសុំ (ពីថ្ងៃខែឆ្នាំកំណើត)', yearsWord:'ឆ្នាំ', validityLbl:'សុពលភាព', processingLbl:'ការដំណើរការ', processStd:'ធម្មតា ប្រហែល ១៥ ថ្ងៃធ្វើការ', feeId:'ថ្លៃអត្តសញ្ញាណប័ណ្ណ', feePass6:'ថ្លៃលិខិតឆ្លងដែន · អាយុ ៦ ឆ្នាំឡើង', feePassU6:'ថ្លៃលិខិតឆ្លងដែន · ក្រោម ៦ ឆ្នាំ', feeNote:'ថ្លៃដំណើរការធម្មតា។ សូមបញ្ជាក់ថ្លៃថ្មីបំផុតជាមួយ GDI។', ageUnknown:'មិនច្បាស់ – សូមពិនិត្យថ្ងៃខែឆ្នាំកំណើត', payMethod:'វិធីបង់ប្រាក់',
    m_khqr:'KHQR (កម្មវិធីធនាគារណាមួយ)', m_khqrSub:'ធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិក្រោយពេលបង់', m_card:'កាតឥណពន្ធ / ឥណទាន', m_cardSub:'Visa, Mastercard, UnionPay', m_cash:'សាច់ប្រាក់នៅបញ្ជរ', m_cashSub:'មន្ត្រីនឹងបញ្ជាក់ការបង់ប្រាក់របស់អ្នក',
    qrNote:'បើកកម្មវិធីធនាគាររបស់អ្នក ហើយស្កេនកូដនេះ។ [QR គំរូ]',
    payOnline:'បង់ [TOTAL]', payCash:'បញ្ជាក់ – បង់នៅបញ្ជរ',
    paidTitle:'ការបង់ប្រាក់បានជោគជ័យ', paidSub:'ឯកសាររបស់អ្នកកំពុងដំណើរការ។ យើងនឹងជូនដំណឹងនៅពេលរួចរាល់។',
    cashTitle:'សូមបង់នៅបញ្ជរ', cashSub:'សូមបង់ថ្លៃជាសាច់ប្រាក់នៅបញ្ជរ។ មន្ត្រីនឹងបញ្ជាក់ការបង់ប្រាក់របស់អ្នក។',
    payStatus:'ការបង់ប្រាក់', paidOnline:'បានបង់តាមអនឡាញ', payAtOffice:'សាច់ប្រាក់នៅបញ្ជរ (មិនទាន់បញ្ជាក់)', paidCash:'បានបង់ជាសាច់ប្រាក់', unpaid:'មិនទាន់បង់',
    visitQrTitle:'សូមបង្ហាញកូដ QR នេះដល់មន្ត្រី', visitQrSub:'កូដនេះមានឈ្មោះពេញ និងលេខពាក្យសុំរបស់អ្នក។',
    validNote:'មានសុពលភាព ១ សប្ដាហ៍។ សូមមកមុនពេលផុតសុពលភាព។', queueLater:'អ្នកនឹងទទួលបានលេខរង់ចាំ នៅពេលមន្ត្រីស្កេនកូដនេះ។', queueNo:'លេខរង់ចាំ',
    whereToGo:'ទីកន្លែងត្រូវទៅ', onsiteTitle:'អ្វីដែលត្រូវធ្វើនៅការិយាល័យ', bioFinger:'ស្នាមម្រាមដៃ', bioPhoto:'រូបថត', bioHeight:'កម្ពស់', bioMark:'សញ្ញាសម្គាល់ពិសេស',
    bring:'សូមយកមកជាមួយ', bringList:'ឯកសារដើមរបស់អ្នក និងកូដ QR នេះ។', directions:'ផ្លូវទៅ', needHelp:'ត្រូវការជំនួយ? សូមទូរស័ព្ទមកលេខ',
    locAeon:'ផ្សារទំនើបអ៊ីអុន សែនសុខស៊ីធី (អ៊ីអុន ២)', locAeonSub:'ការិយាល័យអត្តសញ្ញាណកម្ម និងលិខិតឆ្លងដែន',
    tagId:'អត្តសញ្ញាណប័ណ្ណ', tagPass:'លិខិតឆ្លងដែន',
    hours:'ម៉ោងធ្វើការ', monFri:'ច័ន្ទ – សុក្រ', lunch:'សម្រាកថ្ងៃត្រង់', weekend:'ចុងសប្ដាហ៍ និងថ្ងៃបុណ្យ', closed:'បិទ', openNow:'កំពុងបើក',
    where:'ទីកន្លែងដាក់ពាក្យ', reqDocs:'ឯកសារដែលត្រូវការ', reqId:'អត្តសញ្ញាណប័ណ្ណ', reqPass:'លិខិតឆ្លងដែន',
    r_new:'ធ្វើថ្មី (លើកដំបូង)', r_expired:'បន្ត – ផុតសុពលភាព ឬអាចបន្តមុនផុតកំណត់', r_lost:'ជំនួស – បាត់', r_damaged:'ជំនួស – ខូច',
    reqIdNote:'អត្តសញ្ញាណប័ណ្ណអាចធ្វើបានចាប់ពីអាយុ ១៥ ឆ្នាំ។ បន្តពេលផុតសុពលភាព ឬនៅសល់តិចជាង ១៨០ ថ្ងៃ។ ករណីបាត់ ត្រូវមានពាក្យស្នើសុំទុតិយតាដែលបានបញ្ជាក់ និងរបាយការណ៍នគរបាល។',
    reqPassNote:'លិខិតឆ្លងដែនធម្មតាអាចធ្វើបានចាប់ពីកំណើត។ បន្តមុនផុតកំណត់នៅពេលនៅសល់តិចជាង ៦ ខែ; ករណីធ្វើដំណើរខ្លះអាចបន្តមុនដល់ ១ ឆ្នាំ។ ករណីខូច ត្រូវយកលិខិតឆ្លងដែនដើមមក។',
    validityTitle:'សិទ្ធិទទួលបាន និងសុពលភាព',
    idValidity:'អត្តសញ្ញាណប័ណ្ណ៖ អាចធ្វើបានចាប់ពីអាយុ ១៥ ឆ្នាំ; មានសុពលភាព ១០ ឆ្នាំ សម្រាប់អាយុ ១៥–៥៩ ឆ្នាំ និងអចិន្ត្រៃយ៍ចាប់ពីអាយុ ៦០ ឆ្នាំឡើង។',
    passportValidity:'លិខិតឆ្លងដែនធម្មតា៖ អាចធ្វើបានចាប់ពីកំណើត; មានសុពលភាព ៥ ឆ្នាំ ក្រោមអាយុ ៦ ឆ្នាំ និង ១០ ឆ្នាំ ចាប់ពីអាយុ ៦ ឆ្នាំឡើង។',
    reqVerify:'តម្រូវការនេះជាព័ត៌មានណែនាំផ្អែកលើព័ត៌មាន GDI ដែលបានផ្ដល់។ សូមបញ្ជាក់បទប្បញ្ញត្តិចុងក្រោយជាមួយអគ្គនាយកដ្ឋានអត្តសញ្ញាណកម្ម មុនដាក់ពាក្យ។',
    faq:'សំណួរដែលសួរញឹកញាប់', contact:'ទំនាក់ទំនងយើង', hotline:'ទូរស័ព្ទ', hotlineFree:'លេខសួរព័ត៌មាន GDI ឥតគិតថ្លៃ ក្នុងម៉ោងធ្វើការ', hotlineAlt:'លេខទំនាក់ទំនង GDI ជំនួស', email:'អ៊ីមែល', telegram:'តេឡេក្រាម', officialTelegram:'ឆានែលផ្លូវការរបស់អគ្គនាយកដ្ឋានអត្តសញ្ញាណកម្ម', facebook:'ហ្វេសប៊ុក', officialFacebook:'អគ្គនាយកដ្ឋានអត្តសញ្ញាណកម្ម', office:'ការិយាល័យ',
    q1:'តើខ្ញុំនៅតែត្រូវទៅការិយាល័យឬទេ?', a1:'បាទ/ចាស ម្ដង ក្នុងរយៈពេល ១ សប្ដាហ៍ បន្ទាប់ពីពាក្យសុំត្រូវបានទទួលយក។ សូមបង្ហាញកូដ QR។ ស្នាមម្រាមដៃ រូបថត កម្ពស់ និងសញ្ញាសម្គាល់ពិសេស ត្រូវថតដោយផ្ទាល់។',
    q2:'តើខ្ញុំត្រូវការឯកសារអ្វីខ្លះ?', a2:'សូមមើល «ឯកសារដែលត្រូវការ» ខាងលើ។ កម្មវិធីក៏បង្ហាញបញ្ជីច្បាស់លាស់ មុនពេលអ្នកចាប់ផ្ដើមដែរ។',
    q3:'តើខ្ញុំអាចបង់ប្រាក់ដោយរបៀបណា?', a3:'បន្ទាប់ពីថតជីវមាត្រ៖ បង់តាមអនឡាញជាមួយ KHQR ឬកាត (ធ្វើបច្ចុប្បន្នភាពស្វ័យប្រវត្តិ) ឬបង់ជាសាច់ប្រាក់នៅបញ្ជរ (មន្ត្រីបញ្ជាក់)។',
    q4:'តើពេលណាខ្ញុំអាចបន្តឯកសារបាន?', a4:'អាចបន្តអត្តសញ្ញាណប័ណ្ណនៅពេលនៅសល់សុពលភាពតិចជាង ១៨០ ថ្ងៃ។ អាចបន្តលិខិតឆ្លងដែននៅពេលនៅសល់តិចជាង ៦ ខែ ហើយករណីធ្វើដំណើរខ្លះអាចបន្តមុនដល់ ១ ឆ្នាំ។',
    q5:'តើកូដ QR របស់ខ្ញុំមានសុពលភាពប៉ុន្មានថ្ងៃ?', a5:'១ សប្ដាហ៍ បន្ទាប់ពីមន្ត្រីទទួលយកពាក្យសុំរបស់អ្នក។ បើផុតសុពលភាព អ្នកអាចបន្តក្នុងកម្មវិធី ដោយបង់ $1 សម្រាប់រាល់ថ្ងៃយឺតដែលចាប់ផ្ដើម។',
    q6:'តើខ្ញុំមានពេលប៉ុន្មានដើម្បីមកទទួលឯកសារ?', a6:'សូមមកទទួលក្នុងរយៈពេល ១ សប្ដាហ៍ បន្ទាប់ពីយើងជូនដំណឹងថាឯកសាររួចរាល់។',
    navHome:'ទំព័រដើម', navApps:'ពាក្យសុំ', navInfo:'ព័ត៌មាន', navAlerts:'ដំណឹង',
    t_home:'អត្តសញ្ញាណប័ណ្ណ និងលិខិតឆ្លងដែន', t_apps:'ពាក្យស្នើសុំរបស់ខ្ញុំ', t_info:'ព័ត៌មាន', t_alerts:'ការជូនដំណឹង', t_review:'ពិនិត្យព័ត៌មាន', t_ocr:'កំពុងស្កេនឯកសារ', t_pay:'ការបង់ប្រាក់', t_visit:'ការមកការិយាល័យ', t_track:'ពាក្យសុំ', t_done:'បានដាក់ស្នើ',
    n_expT:'លិខិតឆ្លងដែនជិតផុតសុពលភាព', n_expB:'លិខិតឆ្លងដែនរបស់អ្នកផុតសុពលភាពថ្ងៃទី ១៨/០៤/២០២៧ (៥ ខែទៀត)។ សូមបន្តឥឡូវនេះ។',
    nt0:'បានទទួលពាក្យសុំ', nt1:'កំពុងពិនិត្យ', nt2:'បានទទួលយក – កូដ QR របស់អ្នករួចរាល់', nt3:'បានថតជីវមាត្រ', nt4:'បានទទួលការបង់ប្រាក់', nt5:'ឯកសាររបស់អ្នកកំពុងបោះពុម្ព', nt6:'រួចរាល់សម្រាប់ទទួល',
    nb0:'បានដាក់ស្នើដោយជោគជ័យ។', nb1:'មន្ត្រីកំពុងពិនិត្យព័ត៌មានរបស់អ្នក។', nb2:'សូមមកការិយាល័យក្នុង ១ សប្ដាហ៍។ កូដ QR មានសុពលភាពដល់', nb3:'សូមបង់ថ្លៃសេវា ដើម្បីបន្ត។', nb4:'សូមអរគុណ។ ដំណើរការបានចាប់ផ្ដើម។', nb5:'យើងនឹងជូនដំណឹងនៅពេលរួចរាល់។', nb6:'អ្នកអាចមកទទួលបានឥឡូវនេះ នៅផ្សារទំនើបអ៊ីអុន ២ ត្រង់ជាន់ជាមួយការិយាល័យ GDI។',
    nEditT:'មន្ត្រីបានកែតម្រូវពាក្យសុំរបស់អ្នក', nEditB:'បានកែ៖', nEditNone:'អ្នកមិនចាំបាច់ធ្វើអ្វីទេ។',
    d_birth:'សំបុត្រកំណើត ឬលិខិតបញ្ជាក់ការចុះបញ្ជីកំណើត', d_birthCertified:'ច្បាប់ចម្លងសំបុត្រកំណើត ឬលិខិតចុះបញ្ជីកំណើតដែលបញ្ជាក់សញ្ជាតិខ្មែរ',
    d_birthCheck:'ច្បាប់ចម្លងសំបុត្រកំណើត (ណែនាំប្រសិនបើត្រូវផ្ទៀងផ្ទាត់ព័ត៌មាន)', d_family:'សៀវភៅគ្រួសារ',
    d_familyOrRes:'សៀវភៅគ្រួសារ សៀវភៅស្នាក់នៅ ឬលិខិតបញ្ជាក់ទីលំនៅពីឃុំ/សង្កាត់',
    d_familyOrResUpdate:'ឯកសារគ្រួសារ/ទីលំនៅ (បើកែព័ត៌មានផ្ទាល់ខ្លួន ឬអាសយដ្ឋាន)',
    d_familyOrResDamaged:'ឯកសារគ្រួសារ/ទីលំនៅ (បើកែព័ត៌មាន ឬប័ណ្ណដែលខូចអានមិនច្បាស់)',
    d_familyOrResRecommended:'ឯកសារគ្រួសារ/ទីលំនៅ (ណែនាំសម្រាប់ផ្ទៀងផ្ទាត់ព័ត៌មាន)',
    d_guardianId:'អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែនមានសុពលភាពរបស់ឪពុកម្ដាយ/អាណាព្យាបាល',
    d_guardianAuthorization:'លិខិតអនុញ្ញាត/សំណើជាលាយលក្ខណ៍អក្សររបស់ឪពុកម្ដាយ/អាណាព្យាបាល',
    d_lostIdDuplicate:'ពាក្យស្នើសុំទុតិយតា ដែលប៉ុស្តិ៍នគរបាលរដ្ឋបាលបញ្ជាក់',
    d_id:'អត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរមានសុពលភាព', d_oldId:'អត្តសញ្ញាណប័ណ្ណបច្ចុប្បន្ន ឬផុតសុពលភាព',
    d_oldPass:'លិខិតឆ្លងដែនបច្ចុប្បន្ន/ចាស់', d_policeLoss:'របាយការណ៍បាត់បង់ផ្លូវការពីនគរបាល',
    d_damagedId:'អត្តសញ្ញាណប័ណ្ណដើមដែលខូច (ត្រូវយកមកដោយផ្ទាល់)',
    d_damagedPass:'លិខិតឆ្លងដែនដើមដែលខូច (ត្រូវយកមកដោយផ្ទាល់)',
    d_oldPassCopy:'ច្បាប់ចម្លងលិខិតឆ្លងដែនដែលបាត់ (បើមាន)',
    d_sub:'រូបថត ឬ PDF'
  }
};
var FIELDS = [
  ['nameKm','f_nameKm','សុខ ដារា',false],['nameEn','f_nameEn','SOK DARA',false],['dob','f_dob','12/04/2001',false],['sex','f_sex','ប្រុស / M',false],
  ['pob','f_pob','រាជធានីភ្នំពេញ',false],['addr','f_addr','សង្កាត់ទឹកល្អក់ ១, ខណ្ឌទួលគោក, ភ្នំពេញ',false],['father','f_father','សុខ សំណាង',false],['mother','f_mother','ចាន់ សុភា',true]
];
var KMD = '០១២៣៤៥៦៧៨៩';
var BACK = { docs:'home', ocr:'docs', review:'docs', done:'home', track:'apps', pay:'track', payDone:'track', visit:'track', myId:'home', myPassport:'home' };
var ROOT = { home:1, apps:1, info:1, alerts:1 };

function freshForm() { var form = {}; FIELDS.forEach(function (f) { form[f[0]] = f[2]; }); return form; }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    var self = this;
    this.state = {
      lang: null, screen: 'auth', authMode: 'signin', authName: '', authPhone: '', authOtp: '', otpSent: false, authErr: '', user: null,
      svc: 'renewPass', reason: 'expired', uploaded: {}, scanning: false, form: freshForm(), agree: false, qrRenewal: false,
      apps: S.load(), curId: 'c1', lastId: null, method: 'khqr', faqOpen: 0, reqKind: 'id',
      reqPassportUnder15: false, applicantUnder15: false
    };
    S.subscribe(function (apps) { self.setState({ apps: apps }); });
  }
  go(s) { this.setState({ screen: s }); }
  startSvc(svc) { this.setState({ svc: svc, reason: 'expired', uploaded: {}, agree: false, applicantUnder15: false, form: freshForm(), screen: 'docs' }); }
  upd(id, patch) { this.setState({ apps: S.update(id, patch) }); }
  renderVals() {
    var self = this, st = this.state;
    var lang = st.lang || this.props.startLanguage || 'km';
    var t = T[lang];
    var kn = function (s) { s = String(s); return lang === 'km' ? s.replace(/[0-9]/g, function (d) { return KMD[+d]; }) : s; };
    var D = function (ms) { return kn(S.fmt(ms)); };
    var pillFor = function (a) { return a.stage === 6 ? 'pill green' : (a.stage === 2 || a.stage === 3 ? 'pill amber' : 'pill blue'); };
    var payLabel = function (a) { return a.pay === 'free' ? t.free : a.pay === 'online' ? t.paidOnline : (a.pay === 'cashPaid' ? t.paidCash : (a.pay === 'cash' ? t.payAtOffice : t.unpaid)); };
    var mine = st.apps.filter(function (a) { return a.mine; }).sort(function (x, y) { return y.createdAt - x.createdAt; });
    var apps = mine.map(function (a) {
      return { svcName: t['svc_' + a.svc], no: a.no, date: D(a.createdAt), status: t['st' + a.stage], pillCls: pillFor(a),
        open: function () { self.setState({ curId: a.id, screen: 'track' }); } };
    });

    /* Current application (track / visit / pay screens) */
    var c = mine.filter(function (a) { return a.id === st.curId; })[0] || mine[0] || null;
    var cur = null;
    if (c) {
      var until = S.qrUntil(c), valid = S.qrValid(c);
      var qrLateDays = c.stage === 2 && c.qrAt && !valid ? Math.max(1, Math.ceil((Date.now() - until) / 864e5)) : 0;
      var steps = [0, 1, 2, 3, 4, 5, 6].map(function (i) {
        var sub = t['s' + i + 'd'];
        if (i === 0) sub = D(c.createdAt);
        if (i === 3 && c.qrAt) sub = t.s3dBy + ' ' + D(until);
        if (i === 6 && c.readyAt) sub = t.s6dBy;
        return { num: i < c.stage ? '✓' : kn(i + 1), label: t['s' + i], sub: sub, cls: 'st ' + (i < c.stage || c.stage === 6 ? 'done' : (i === c.stage ? 'cur' : 'todo')), notLast: i < 6 };
      });
      var fee = S.feeFor(c), isPass = fee.kind !== 'id';
      cur = {
        feeText: fee.amount ? kn('$' + fee.amount.toFixed(2)) : t.free, isFree: fee.amount === 0, feeIsPass: isPass,
        feeLabel: fee.kind === 'id' ? t.feeId : (fee.kind === 'passU6' ? t.feePassU6 : t.feePass6),
        feeAge: fee.age === null ? t.ageUnknown : kn(fee.age) + ' ' + t.yearsWord, feeValidity: kn(fee.years) + ' ' + t.yearsWord,
        svcName: t['svc_' + c.svc], no: c.no, date: D(c.createdAt), status: t['st' + c.stage], pillCls: pillFor(c), steps: steps,
        name: c.form.nameEn, payLabel: payLabel(c), qrLateDays: kn(qrLateDays), qrLatePerDay: t.qrLatePerDay,
        qrLateFeeDue: '$' + qrLateDays.toFixed(2),
        atQr: c.stage === 2, qrOk: c.stage === 2 && valid, qrExpired: c.stage === 2 && !valid,
        qrSrc: c.qrAt ? S.qrImage(S.qrText(c)) : '', validUntil: D(until), daysLeft: kn(S.daysLeft(until)) + ' ' + t.daysLeft,
        hasQueue: !!c.queue, queue: c.queue, noQueue: !c.queue,
        needPay: c.stage === 3 && c.pay !== 'cash', cashPending: c.stage === 3 && c.pay === 'cash',
        ready: c.stage === 6, pickQr: c.stage === 6 ? S.qrImage(S.pickupQrText(c)) : '', pickedUp: !!c.pickedUpAt, notPickedUp: !c.pickedUpAt,
        canSim: c.stage < 6 && !(c.stage === 3 && c.pay !== 'cash')
      };
    }

    /* Documents step */
    var isRenew = st.svc === 'renewId' || st.svc === 'renewPass';
    var isPassport = st.svc.indexOf('Pass') > 0;
    var docKeys = S.docsFor(st.svc, isRenew ? st.reason : null, isPassport && st.applicantUnder15);
    var docs = docKeys.map(function (k) {
      var ok = !!st.uploaded[k];
      var required = !S.isOptionalDoc(k);
      return {
        name: t[k], ok: ok, notOk: !ok, optional: !required, required: required, cls: ok ? 'doc ok' : 'doc',
        sub: (!required ? t.optional + ' · ' : '') + (ok ? (t.uploaded + ' · IMG_' + kn(k.length * 317) + '.jpg') : t.notUploaded),
        action: ok ? t.replace : t.tapUpload, aria: (ok ? t.replace : t.tapUpload) + ' – ' + t[k],
        toggle: function () { var u = Object.assign({}, self.state.uploaded); u[k] = !u[k]; self.setState({ uploaded: u }); }
      };
    });
    var reasonNote = st.reason === 'expired' ? (st.svc === 'renewId' ? t.note_expiredId : t.note_expiredPass) : t['note_' + st.reason];
    var pickReason = function (r) { return function () { self.setState({ reason: r, uploaded: {} }); }; };
    var fields = FIELDS.map(function (f) {
      var key = f[0];
      return { id: 'f-' + key, label: t[f[1]], value: st.form[key], warn: f[3], cls: f[3] ? 'field warn' : 'field',
        onChange: function (e) { var fm = Object.assign({}, self.state.form); fm[key] = e.target.value; self.setState({ form: fm }); } };
    });
    var methodOptions = [['khqr', t.m_khqr, t.m_khqrSub], ['card', t.m_card, t.m_cardSub], ['cash', t.m_cash, t.m_cashSub]];
    if (st.qrRenewal) methodOptions = methodOptions.slice(0, 2);
    var methods = methodOptions.map(function (m) {
      return { name: m[1], sub: m[2], on: st.method === m[0], cls: st.method === m[0] ? 'pm on' : 'pm', pick: function () { self.setState({ method: m[0] }); } };
    });

    /* Info page */
    var faqs = [1, 2, 3, 4, 5, 6].map(function (i) {
      var open = st.faqOpen === i;
      return { q: t['q' + i], a: t['a' + i], open: open, sign: open ? '–' : '+', toggle: function () { self.setState({ faqOpen: open ? 0 : i }); } };
    });
    var reqGroups = ['new', 'expired', 'lost', 'damaged'].map(function (r) {
      return {
        title: t['r_' + r],
        items: S.requirements(st.reqKind, r, st.reqKind === 'pass' && st.reqPassportUnder15).map(function (k) {
          return { name: t[k], optional: S.isOptionalDoc(k) };
        })
      };
    });

    /* Notifications are generated from the shared application data */
    var notifs = [];
    mine.slice().sort(function (x, y) { return y.updatedAt - x.updatedAt; }).forEach(function (a) {
      var body = t['nb' + a.stage];
      if (a.stage === 2) body += ' ' + D(S.qrUntil(a)) + '.';
      var ic = a.stage === 6 || a.stage === 4 ? 'ic green' : (a.stage === 2 || a.stage === 3 ? 'ic amber' : 'ic blue');
      notifs.push({ title: t['nt' + a.stage], body: a.no + ' · ' + body, when: D(a.updatedAt), icCls: ic, open: function () { self.setState({ curId: a.id, screen: 'track' }); } });
      var edits = Object.keys(a.edited || {});
      if (edits.length) {
        var labels = edits.map(function (k) { var f = FIELDS.filter(function (x) { return x[0] === k; })[0]; return f ? t[f[1]] : k; }).join(', ');
        notifs.push({ title: t.nEditT, body: a.no + ' · ' + t.nEditB + ' ' + labels + '. ' + t.nEditNone, when: D(a.updatedAt), icCls: 'ic blue', open: function () { self.setState({ curId: a.id, screen: 'track' }); } });
      }
    });
    notifs.push({ title: t.n_expT, body: t.n_expB, when: '', icCls: 'ic amber', open: function () { self.startSvc('renewPass'); } });

    var s = st.screen;
    var is = {}; ['auth', 'home', 'apps', 'docs', 'ocr', 'review', 'done', 'track', 'pay', 'payDone', 'visit', 'info', 'alerts', 'myId', 'myPassport'].forEach(function (k) { is[k] = s === k; });
    var titles = { auth: '', home: S.BRAND, apps: t.t_apps, info: t.t_info, alerts: t.t_alerts, review: t.t_review, ocr: t.t_ocr, pay: t.t_pay, payDone: t.t_pay, visit: t.t_visit, track: t.t_track, done: t.t_done, docs: t['svc_' + st.svc], myId: t.showMyId, myPassport: t.showMyPassport };
    var navActive = function (k) { return (s === k || (k === 'apps' && (s === 'track' || s === 'pay' || s === 'payDone' || s === 'visit'))) ? 'on' : ''; };
    var last = st.apps.filter(function (a) { return a.id === st.lastId; })[0];
    var signUp = st.authMode === 'signup';

    return {
      t: t, is: is, title: titles[s], subtitle: s === 'home' ? t.t_home : '', hasSubtitle: s === 'home', brand: S.BRAND,
      topCls: s === 'auth' ? 'top bare' : 'top',
      showBack: s !== 'auth' && !ROOT[s], showLogo: !!ROOT[s], showNav: !!ROOT[s] || s === 'track' || s === 'visit',
      kmCls: lang === 'km' ? 'on' : '', enCls: lang === 'en' ? 'on' : '', isKm: lang === 'km', isEn: lang === 'en',
      setKm: function () { self.setState({ lang: 'km' }); }, setEn: function () { self.setState({ lang: 'en' }); },
      goBack: function () { self.go(BACK[s] || 'home'); },
      goHome: function () { self.go('home'); }, goApps: function () { self.go('apps'); }, goInfo: function () { self.go('info'); }, goAlerts: function () { self.go('alerts'); },
      nav: { home: navActive('home'), apps: navActive('apps'), info: navActive('info'), alerts: navActive('alerts') },
      notifCount: kn(notifs.length),

      /* auth */
      signUp: signUp, signInMode: !signUp, authTitle: signUp ? t.signUpTitle : t.signInTitle, authSub: signUp ? t.signUpSub : t.signInSub,
      tabInCls: signUp ? '' : 'on', tabUpCls: signUp ? 'on' : '', isSignIn: !signUp, isSignUp: signUp,
      tabIn: function () { self.setState({ authMode: 'signin', otpSent: false, authOtp: '', authErr: '' }); },
      tabUp: function () { self.setState({ authMode: 'signup', otpSent: false, authOtp: '', authErr: '' }); },
      switchHint: signUp ? t.haveAccount : t.noAccount, switchCta: signUp ? t.signIn : t.signUp,
      switchMode: function () { self.setState({ authMode: signUp ? 'signin' : 'signup', otpSent: false, authOtp: '', authErr: '' }); },
      authName: st.authName, authPhone: st.authPhone, authOtp: st.authOtp, otpSent: st.otpSent, otpNotSent: !st.otpSent, authErr: st.authErr, hasAuthErr: !!st.authErr,
      onAuthName: function (e) { self.setState({ authName: e.target.value }); },
      onAuthPhone: function (e) { self.setState({ authPhone: e.target.value }); },
      onAuthOtp: function (e) { self.setState({ authOtp: e.target.value, authErr: '' }); },
      sendOtp: function () {
        var s2 = self.state;
        if (!s2.authPhone || (s2.authMode === 'signup' && !s2.authName)) { self.setState({ authErr: t.needFields }); return; }
        self.setState({ otpSent: true, authErr: '' });
      },
      changeNumber: function () { self.setState({ otpSent: false, authOtp: '', authErr: '' }); },
      verifyOtp: function () {
        var s2 = self.state;
        if (s2.authOtp !== '123456') { self.setState({ authErr: t.otpWrong }); return; }
        self.setState({ user: { name: s2.authMode === 'signup' ? s2.authName : '', phone: s2.authPhone }, screen: 'home', authErr: '' });
      },
      signOut: function () { self.setState({ user: null, screen: 'auth', authMode: 'signin', authOtp: '', otpSent: false, authErr: '' }); },

      /* home */
      userName: (st.user && st.user.name) || t.userName,
      showExpiry: this.props.showExpiryAlert !== false,
      apps: apps, homeApps: apps.slice(0, 2), hasApps: apps.length > 0, noApps: apps.length === 0, moreApps: apps.length > 2,
      showMyId: function () { self.go('myId'); }, showMyPassport: function () { self.go('myPassport'); },
      printId: function () { window.location.href = './print-document.html?type=id'; },
      printPassport: function () { window.location.href = './print-document.html?type=passport'; },
      startNewId: function () { self.startSvc('newId'); }, startRenewId: function () { self.startSvc('renewId'); },
      startNewPass: function () { self.startSvc('newPass'); }, startRenewPass: function () { self.startSvc('renewPass'); },

      /* documents / OCR / review */
      svcName: t['svc_' + st.svc], isRenew: isRenew, reasonTitle: st.svc === 'renewId' ? t.renewReasonId : t.renewReasonPass, reasonNote: reasonNote,
      reasonExpiredCls: st.reason === 'expired' ? 'on' : '', reasonLostCls: st.reason === 'lost' ? 'on' : '', reasonDamagedCls: st.reason === 'damaged' ? 'on' : '',
      chooseExpired: pickReason('expired'), chooseLost: pickReason('lost'), chooseDamaged: pickReason('damaged'),
      docs: docs, docsIncomplete: docs.some(function (d) { return d.required && !d.ok; }),
      isPassport: isPassport, applicantUnder15: st.applicantUnder15,
      passportAge15Plus: !st.applicantUnder15, passportAgeUnder15: st.applicantUnder15,
      passportAdultApplicantCls: st.applicantUnder15 ? '' : 'on',
      passportChildApplicantCls: st.applicantUnder15 ? 'on' : '',
      chooseAdultApplicant: function () { if (self.state.applicantUnder15) self.setState({ applicantUnder15: false, uploaded: {} }); },
      chooseChildApplicant: function () { if (!self.state.applicantUnder15) self.setState({ applicantUnder15: true, uploaded: {} }); },
      startOcr: function () {
        self.setState({ screen: 'ocr', scanning: true });
        setTimeout(function () { self.setState({ scanning: false }); }, 2200);
      },
      scanning: st.scanning, scanDone: !st.scanning, goReview: function () { self.go('review'); },
      fields: fields, agree: st.agree, notAgree: !st.agree,
      toggleAgree: function () { self.setState({ agree: !self.state.agree }); },
      submit: function () {
        var all = S.load(), now = Date.now(), id = 'c' + now;
        var form = Object.assign({}, self.state.form);
        S.add({ id: id, mine: true, no: 'KH-2611-0' + (143 + all.length), svc: st.svc, reason: isRenew ? st.reason : null,
          under15: isPassport && st.applicantUnder15,
          createdAt: now, updatedAt: now, stage: 0, pay: null, qrAt: null, queue: '', readyAt: null, verified: {}, edited: {}, warn: 'mother', form: form });
        self.setState({ apps: S.load(), lastId: id, curId: id, screen: 'done' });
      },
      lastNo: last ? last.no : '', openLast: function () { self.setState({ curId: st.lastId, screen: 'track' }); },

      /* track / visit / pay */
      cur: cur, hasCur: !!cur,
      simulate: function () {
        if (!c) return;
        var p = null;
        if (c.stage === 0) p = { stage: 1 };
        else if (c.stage === 1) { var v = {}; S.FIELD_KEYS.forEach(function (k) { v[k] = true; }); p = { stage: 2, qrAt: Date.now(), verified: v }; }
        else if (c.stage === 2 && !S.qrValid(c)) p = { qrAt: Date.now() };
        else if (c.stage === 2) p = S.feeFor(c).amount === 0 ? { stage: 4, pay: 'free', queue: c.queue || S.nextQueue(S.load()) } : { stage: 3, queue: c.queue || S.nextQueue(S.load()) };
        else if (c.stage === 3 && c.pay === 'cash') p = { stage: 4, pay: 'cashPaid' };
        else if (c.stage === 4) p = { stage: 5 };
        else if (c.stage === 5) p = { stage: 6, readyAt: Date.now() };
        if (p) self.upd(c.id, p);
      },
      goPay: function () { self.setState({ qrRenewal: false, screen: 'pay' }); },
      goRenewQr: function () {
        self.setState({ qrRenewal: true, method: 'khqr', screen: 'pay' });
      },
      goVisit: function () { self.go('visit'); },
      backToTrack: function () { self.setState({ qrRenewal: false, screen: st.qrRenewal ? 'visit' : 'track' }); },
      methods: methods, payQr: st.method === 'khqr',
      isQrRenewal: st.qrRenewal, isRegularPayment: !st.qrRenewal,
      payCta: st.qrRenewal ? t.payLateFee + ' ' + (cur ? cur.qrLateFeeDue : '') : (st.method === 'cash' ? t.payCash : t.payOnline.replace('[TOTAL]', cur ? cur.feeText : '')),
      confirmPay: function () {
        if (!c) return;
        if (st.qrRenewal) {
          var renewedAt = Date.now();
          var lateDays = Math.max(1, Math.ceil((renewedAt - S.qrUntil(c)) / 864e5));
          self.upd(c.id, { qrAt: renewedAt, qrRenewalPaidAt: renewedAt, qrRenewalFee: lateDays, qrRenewalMethod: self.state.method });
          self.go('payDone');
          return;
        }
        if (self.state.method === 'cash') self.upd(c.id, { pay: 'cash' });
        else self.upd(c.id, { stage: 4, pay: 'online' });
        self.go('payDone');
      },
      payDoneCash: !!c && c.pay === 'cash', payDoneOnline: !c || c.pay !== 'cash',
      payDoneStatus: st.qrRenewal ? t.qrRenewalDoneStatus : (cur ? cur.payLabel : t.unpaid),
      payDoneTitle: st.qrRenewal ? t.qrRenewalDoneTitle : (c && c.pay === 'cash' ? t.cashTitle : t.paidTitle),
      payDoneSub: st.qrRenewal ? t.qrRenewalDoneSub : (c && c.pay === 'cash' ? t.cashSub : t.paidSub),
      payDoneCta: st.qrRenewal ? t.visitQrTitle : t.track,

      /* info */
      faqs: faqs, reqGroups: reqGroups, reqIsId: st.reqKind === 'id', reqIsPass: st.reqKind === 'pass',
      reqIdCls: st.reqKind === 'id' ? 'on' : '', reqPassCls: st.reqKind === 'pass' ? 'on' : '',
      reqPassportUnder15: st.reqPassportUnder15,
      reqPassportAdultCls: st.reqPassportUnder15 ? '' : 'on', reqPassportChildCls: st.reqPassportUnder15 ? 'on' : '',
      reqPassportAdult: !st.reqPassportUnder15, reqPassportChild: st.reqPassportUnder15,
      pickReqId: function () { self.setState({ reqKind: 'id' }); }, pickReqPass: function () { self.setState({ reqKind: 'pass' }); },
      pickReqPassportAdult: function () { self.setState({ reqPassportUnder15: false }); },
      pickReqPassportChild: function () { self.setState({ reqPassportUnder15: true }); },
      notifs: notifs
    };
  }
}
