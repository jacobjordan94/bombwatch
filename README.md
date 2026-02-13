<div align="center">
  <img src="public/icons/logo-color.svg" height="72" align="center">
</div>
&nbsp;
<p align="center">
  <strong style="font-size:2.5em;"> BombWatch</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.9-blue.svg" alt="TypeScript"></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61dafb.svg" alt="React"></a>
</p>

<p align="center">
  <a href="https://developer.chrome.com/docs/extensions/mv3/"><img src="https://img.shields.io/badge/Chrome-Supported-4285F4?logo=googlechrome&logoColor=white" alt="Chrome"></a>
  <a href="https://addons.mozilla.org/"><img src="https://img.shields.io/badge/Firefox-Supported-FF7139?logo=firefox&logoColor=white" alt="Firefox"></a>
  <a href="https://microsoftedge.microsoft.com/addons/"><img src="https://img.shields.io/badge/Edge-Supported-0078D7?logo=microsoftedge&logoColor=white" alt="Edge"></a>
  <a href="https://brave.com/"><img src="https://img.shields.io/badge/Brave-Supported-FB542B?logo=brave&logoColor=white" alt="Brave"></a>
  <a href="https://addons.opera.com/"><img src="https://img.shields.io/badge/Opera-Supported-FF1B2D?logo=opera&logoColor=white" alt="Opera"></a>
  <a href="https://vivaldi.com/"><img src="https://img.shields.io/badge/Vivaldi-Supported-EF3939?logo=vivaldi&logoColor=white" alt="Vivaldi"></a>
</p>

## About

A cross-browser extension that tracks Giant Bomb's live shows and upcoming schedule. Get notified when Giant Bomb goes live with a badge on the extension icon, and browse the upcoming schedule converted to your local timezone.

## Installation

<!-- ### Browser Stores

<p align="center">
  <a href="#"><img src="https://developer.chrome.com/static/docs/webstore/branding/image/UV4C4ybeBTsZt43U4xis.png" alt="Available in the Chrome Web Store" height="58"></a>
  <a href="#"><img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="Get the Add-on for Firefox" height="58"></a>
  <a href="#"><img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Get it from Microsoft Edge Add-ons" height="58"></a>
  <a href="#"><img src="https://img.shields.io/badge/Opera_Addons-Install-FF1B2D?style=for-the-badge&logo=opera&logoColor=white" alt="Get it from Opera Addons" height="58"></a>
</p>

*Links coming soon.* -->

### GitHub Releases

Download the latest `.zip` from the [Releases](https://github.com/jacobjordan94/bombwatch/releases) page, then load it as an unpacked extension (see below).

### Build from Source

```bash
git clone https://github.com/jacobjordan94/bombwatch.git
cd bombwatch
npm install
npm run build
```

Then load the `dist/` folder in your browser:

**Chrome / Edge**
1. Navigate to `chrome://extensions`
2. Enable *Developer mode*
3. Click *Load unpacked* and select the `dist/` folder

**Firefox**
1. Navigate to `about:debugging#/runtime/this-firefox`
2. Click *Load Temporary Add-on*
3. Select `manifest.json` inside `dist/`

## Development

```bash
npm run dev        # Start dev server with HMR
npm run build      # Production build to dist/
npm run lint       # Run ESLint
npm run deploy     # Runs build and creates .zip (requires 7z)
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Jacob Jordan**

- Website: [jacob-jordan.me](https://jacob-jordan.me)
- GitHub: [@jacobjordan94](https://github.com/jacobjordan94)
