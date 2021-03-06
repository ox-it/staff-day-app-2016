# Phonegap application template
A template to be used as a starting point for hybrid applications using Phonegap, built upon the [yeoman cordova scaffold](https://github.com/dangeross/generator-cordova).

This template follows the structure and style used in applications such as [Sensing Evolution](https://github.com/ox-it/sensing-evolution) and the [University Museums App](https://github.com/ox-it/uma-client)

### Features
* **Backbone**
* **LayoutManager**
* **Handlebars** templating
* **Grunt** task runner
* **Sass** for styling
* **JQuery**
* **RequireJS** module management
* **Jasmine** testing

### Installation
Assumes bower is installed, if not run `npm install -g bower`

Clone the project:
```
git clone https://github.com/ox-it/phonegap-app-template
cd phonegap-app-template
```
install dependencies:
```
npm install
bower install
```
initialise cordova:
```
grunt setup
```
This grunt command adds all platforms and plugins listed in the arrays in Gruntfile.js

### Run
Build & run on device or emulator with the following grunt tasks
```
grunt package
cordova run ios --device

```

or for android

```
grunt package
cordova run android --device
```
