# MeetFold Marketing Site

Static marketing, support, privacy, and terms site for Fold.

## Local Preview

Install dependencies, build the local Tailwind CSS file, then open `index.html` directly or run a tiny local server:

```sh
npm install --cache ./.npm-cache
npm run build
```

```sh
python3 -m http.server 8080
```

## Files

- `index.html` — marketing page
- `support.html` — App Store support URL
- `privacy.html` — App Store privacy policy URL
- `terms.html` — terms of use
- `assets/` — shared styles, local DM Sans fonts, light/dark app icons, and future screenshots

## Launch Follow-ups

- Optionally swap the App Store buttons for Apple’s official badge artwork.
- Review `assets/screenshots/` against the final App Store screenshot set; they are 660 px wide copies of Fold's fixture renders (sample content, no real publisher text).
