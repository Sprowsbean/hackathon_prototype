# ID & Passport App Prototype (Khmer / English)

A clickable mobile prototype with two apps:

- `project/Main.dc.html`: citizen app (OTP demo authentication, digital ID/passport copies, expiry reminders, ID renewal reason/evidence, documents, OCR auto-fill, review, submit, tracking, payment, appointment/queue, info, assistant, alerts)
- `project/Main.dc.css`: citizen app styles
- `project/Main.dc.js`: citizen app logic and translations
- `project/Officer.dc.html`: government officer app (dashboard including lost/damaged ID analytics, application queue, review/verify, scheduling with queue number, payments, on-site biometrics, ready for pickup)
- `project/Officer.dc.css`: officer app styles
- `project/Officer.dc.js`: officer app logic and translations
- `project/canvas.json`: the canvas layout (frame positions and titles)

## How the files work

Each `.dc.html` file is one screen-set written in the Claude Design canvas format:

- The HTML markup inside `<x-dc>` is the UI. `{{name}}` holes pull values from `renderVals()`.
- `<sc-if value="{{...}}">` shows or hides a block. `<sc-for list="{{...}}" as="item">` repeats a block.
- The citizen app's logic and translations are in `project/Main.dc.js`. The texts for both languages are in the `T` object (`T.en` and `T.km`).
- The citizen app's styles are in `project/Main.dc.css`; the officer app's logic and styles are in `project/Officer.dc.js` and `project/Officer.dc.css`.

## Run the local demo

The local demo includes a lightweight `support.js` runtime for these prototype templates. From a terminal, serve the `project` folder:

```sh
python3 -m http.server 8000 --directory project
```

Then open `http://localhost:8000` and choose the citizen or officer app. Keep the HTML, CSS, JS, and `support.js` files together in `project`. Use the citizen demo OTP `123456`.

The `.dc.html` files retain the canvas-style templates, while `support.js` provides the runtime needed to preview this prototype locally. It is a demo runtime, not a production framework.

## Run with Docker

With Docker Compose installed, run this from the repository folder:

```sh
docker compose up --build
```

Open `http://localhost:8080` and choose the citizen or officer app. Stop the demo with `Ctrl+C`; if you started it in the background, use `docker compose down`.

To share the source, send the project folder including `Dockerfile` and `docker-compose.yml`; teammates can run the same command to build and start it.

To share the built image instead, create an archive:

```sh
docker compose build
docker save -o id-passport-demo.tar id-passport-demo:latest
```

Send `id-passport-demo.tar` to teammates. They can load and run it with:

```sh
docker load -i id-passport-demo.tar
docker run --rm -p 8080:80 id-passport-demo:latest
```

## Placeholders to fill in

Search for `[` to find them: `[FEE]`, `[TOTAL]`, `[OFFICE NAME]`, `[PHONE]`, `[EMAIL]`, `[CHANNEL]`, `[DISTANCE]`, and the working hours.

## Notes

- All names and applications are sample data.
- The citizen app and officer app don't share data. The "Next step" demo button in the citizen app simulates the officer's actions.
- Have a native speaker review the Khmer text before presenting.

## Added hackathon prototype features

- Citizen registration uses full name and phone number; the OTP is simulated. Demo code: `123456`.
- The sample passport expiry is within six months, so the citizen dashboard displays a renewal reminder.
- `Show my ID` and `Show my passport` screens display mock digital document copies.
- ID renewal supports `Expired`, `Lost`, and `Damaged` reasons. Lost/damaged cases require a simulated evidence attachment before continuing.
- Officer dashboard counts sample lost and damaged ID renewal cases separately.

These are demonstration interactions and do not connect to government records, real SMS, real document uploads, or production eKYC.
