# KH-ID – ID & Passport App Prototype (Khmer / English)

A clickable mobile prototype with two apps that share the same demo data:

- **Citizen app** (`project/Main.dc.html`): sign in or create an account (OTP demo), apply for or renew an ID card or passport, upload the documents required for the chosen reason (expired, lost or damaged), OCR auto-fill, review, submit, track a 7-step progress, show an on-site QR code, pay, and get alerts.
- **Officer app** (`project/Officer.dc.html`): log in or sign up, dashboard, review each application field by field (and correct it directly), accept and issue a QR code, scan the citizen's QR code on-site, capture biometrics, confirm payment, move to In progress, and mark Done.

Open `project/both.html` to see both apps side by side. Officer actions show up in the citizen app straight away.

## Demo logins

| App | How to sign in |
|---|---|
| Citizen | Any phone number, code `123456`. "Create account" also asks for a full name. |
| Officer | `OF-1024` / `1234`, or use "Sign up" to create a new officer account. |

## Application flow

| Step | Citizen sees | Officer does |
|---|---|---|
| 1 Submitted | Application received | Opens it (moves to Under review automatically) |
| 2 Under review | Officer is checking | Verifies every field against the documents. Low-confidence OCR fields are listed first. Wrong values are edited directly; the citizen does not need to resubmit. |
| 3 Verified & accepted | Gets a **QR code** (full name + application no.), valid for **1 week** | Accept & issue QR |
| 4 On-site: fingerprint & photo | Comes on-site within 1 week | **Scans the QR code** (expired codes are rejected; officers cannot reissue them), checks the citizen in with a queue number, then clicks **Update biometrics** |
| 5 Payment | Pays online (KHQR / card) or chooses cash | Online payments update automatically; cash is marked by the officer |
| 6 In progress | Document is being printed | Move to In progress |
| 7 Ready for pickup | Can pick up now at AEON MALL 2, same floor as the GDI office (no deadline). Shows a separate **pickup QR code** | Done – ready for pickup, then **scans the pickup QR** and confirms handover |

## Officer app notes

- **Review Application** shows the uploaded documents next to the form. On phones the document viewer stays pinned above the form (zoom, switch tabs, hide); on wide screens (tablet/desktop, 760px+) it is a true two-column layout. The sample images are `project/doc-birth-certificate.jpg` and `project/doc-family-book.jpg`; birth documents show the first and family/residence documents show the second.
- **Expired QR:** officers have no reissue button. The citizen renews it in the citizen app by paying the late fee ($1 per started day). The fee goes to the KH-ID app, not GDI, and the new QR is issued automatically (see `qrRenewalFee` on the application and the late-fee total on the Payments screen).
- **Pickup QR:** a second QR (`pickupQrText` in `shared.js`) with no expiry. The officer scans it from the Scan screen and taps **Confirm handover** (`pickedUpAt`).
- **Log out** is the last button in the footer, same as the citizen app.

## Fees

ID card: free. Passport (standard processing, about 15 working days): $100 for age 6 and above (10-year validity), $80 under 6 (5-year validity). The age comes from the date of birth in the application form (`feeFor` in `project/shared.js`, measured on the submission date). The price is shown on the citizen's track card and payment screen before paying and on the officer's Payments list. Free ID applications skip payment and go straight to Paid after biometrics. Confirm the amounts with GDI before presenting.

## Required documents (shown in the app)

| Service | New | Renewal – expired | Replacement – lost | Replacement – damaged |
|---|---|---|---|---|
| ID card | Birth certificate; family book or residence book | Current ID card; family book or residence book | Police certificate of loss; family book or residence book; birth certificate | Photo of the damaged ID card (hand in the card on-site); family book or residence book |
| Passport | Khmer national ID card; birth certificate; family book | Current passport; Khmer national ID card | Police certificate of loss; Khmer national ID card; copy of old passport (if available) | Photo of the damaged passport (hand it in on-site); Khmer national ID card |

These lists are based on public news and embassy sources, not an official checklist. **Check them with the General Department of Identification before presenting.** The rules are in `REQ` in `project/shared.js`.

## How the files work

- `project/shared.js`: the shared demo data (localStorage), required-document rules, QR helpers and the app name (`BRAND`).
- `project/Main.dc.*` and `project/Officer.dc.*`: each app's markup (Claude Design canvas format), logic + translations (`T.en`, `T.km`) and styles.
- `project/support.js`: a small runtime that renders the `.dc.html` templates locally. It is a demo runtime, not a production framework.
- `project/vendor/qrcode.min.js`: [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) 1.4.4 (MIT) for real, scannable QR codes.
- `project/index.html`: start page, with a **Reset demo data** button.

Template basics: `{{name}}` holes pull values from `renderVals()`, `<sc-if value="{{...}}">` shows or hides a block, and `<sc-for list="{{...}}" as="item">` repeats a block.

## Run the local demo

```sh
python3 -m http.server 8000 --directory project
```

Open `http://localhost:8000`. Keep all files in `project` together.

## Run with Docker

```sh
docker compose up --build
```

Open `http://localhost:8080`. Stop with `Ctrl+C` (or `docker compose down` if started in the background).

To share the built image:

```sh
docker compose build
docker save -o id-passport-demo.tar id-passport-demo:latest
# teammates:
docker load -i id-passport-demo.tar
docker run --rm -p 8080:80 id-passport-demo:latest
```

## Placeholders to fill in

Search for `[` to find remaining placeholders: `[FEE]`, `[TOTAL]`, `[DISTANCE]` and the working hours. The citizen app's Information page includes the GDI phone, email, Telegram and Facebook contacts.

## Notes

- All names and applications are sample data. Nothing connects to government records, real SMS, real uploads, real payments or production eKYC.
- Both apps must be opened from the same address (for example `localhost:8000`) to share data. If the browser blocks storage, each app still works on its own.
- The QR scan is simulated: the officer picks the QR code "in front of the camera" or types the application number.
- Have a native speaker review the Khmer text before presenting.
