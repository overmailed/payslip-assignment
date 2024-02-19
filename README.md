# Payslips Cross Platform Application Assignment

This is a result of test assignment -  Payslips App, written in Ionic 7, running on iOS, Android and Web.

## What does it include?

* The app is built with Ionic 7 and can be built as iOS application, Android application and a web build to be served via http.
* Two views: Payslips List and Payslip Details.
* A mock payslip image is downloadable both in native environment (via @capacitor/filesystem +  @capacitor-community/file-opener plugins) and in web version (a quick and simple implementation).
* Slick UI with all the visual interactions and animations, provided by Ionic. With some fixes/adaptations for desktop width for web.

### Features and Clarifications

* Implemented fake API access for the sake of architectural realisticity.
* Added necessary repository tooling setup:
	* linting (with settings of my current preference),
	* pre-commit hook,
	* using (translatable) resources for on-screen texts.
* Demonstrated some basic simple branching (merge-commit-style). Commits history preserved.
* While the list uses infinite scroll, virtual scroll is not added for the sake of simplicity and straightforwardness.
* PWA hasn’t been set up, as this wasn’t a requirement and the usual production web build suits quite good for general web use.

## Installation and Usage

These generally follow the standard process for an Ionic app.

* Clone the `main` branch from the repository.
* `npm ci` or `npm install`
* `npm run build`
* [Assuming XCode and Android studio are already set up]
* Further as per https://capacitorjs.com/docs
	* `npx cap sync`
	* `npx cap run ios` or `npx cap open ios` for iOS
	* `npx cap run android` or `npx cap open android` for Android (the "run option" don't generally work well for me because of gradle setup issues on my local machine)
* For web you can use a simple [node HTTP Server](https://www.npmjs.com/package/http-server)
	* `npm i -g http-server` (will install the package globally)
	* `npx http-server ./dist -p 8081`
	* and open your browser at http://localhost:8081

Please don't hesitate to contact me in case of any unclarities or issues with the installation. I have tested this to run locally on all 3 platforms.
