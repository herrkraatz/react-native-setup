# React Native Setup

This tutorial shall help setting up your React Native environment and running your first React Native App.


## Table of Contents

1. [Getting Started](#chapter1)
    1. [Quickstart with Create React Native App + Expo Client](#chapter1a)
    2. [For most convenience: Expo Development Server (as GUI or CLI) + Expo Client](#chapter1b)
    3. [Advanced: With react-native-cli + Xcode + Android Studio/Genymotion](#chapter1c)
2. [Example React Native App with Firebase backend](#chapter2)
    1. [Clone repository and preparation](#chapter2a)
    2. [Setup your own Firebase account](#chapter2b)
    3. [Run app on iOS Simulator](#chapter2c)
3. [Links](#chapter3)


## <a id="chapter1"></a>1. Getting Started

*Notes:*

- No Mac needed, but tutorial was created using

    - Mac OS X version High Sierra, 10.13.4 (`sw_vers`)
    - Xcode Version 9.3
    - Node.js version v9.11.1 (`node -v`)
    - Watchman version 4.9.0 (`watchman -v`)
    - React Native CLI version 2.0.1 (`react-native -v`)

### What do you like to achieve? 3 Options.

- For a quickstart use 
    - `Create React Native App` (https://github.com/react-community/create-react-native-app) for a structured sample App to be used as your base AND
    - `Expo Client` (https://expo.io/) to do testing on your iOS / Android device
    - Setting up testing on iOS Simulators / Android Emulators: See https://facebook.github.io/react-native/docs/getting-started.html
    - To once leave the path of standard React Native Components / APIs you can "eject" from `Create React Native App`
- For most convenience (pre-configured Components like Camera, Push Notifications, etc) and if you're sure that you DO NOT leave the path of standard React Native Components / APIs, use 
    - `Expo Development Server as GUI or CLI` (https://expo.io/),
        - as GUI: Download `Expo XDE` (https://github.com/expo/xde/releases)
        - as CLI: Install `Expo CLI` using `npm install exp --global`
    - `Expo Client` (https://expo.io/) to do testing on your iOS / Android device
    - Setting up testing on iOS Simulators / Android Emulators: See https://docs.expo.io/versions/v28.0.0/workflow/debugging
- Advanced: If you need to integrate React Native into an existing native iOS / Android application OR want to create custom native modules beyond the standard React Native Components / APIs, 
    - you need to use `react-native-cli` along with Xcode and Android tools: See Tab "Building Projects with Native Code" on https://facebook.github.io/react-native/docs/getting-started.html
    - you need to "eject" from `Create React Native App` in case you initially started with `Create React Native App`


### Node.js installed ? Needed for all 3 options !

If you haven't Node.js installed on your machine, please install current (latest) version of Node.js ([By download](https://nodejs.org/en/download/), [By package manager](https://nodejs.org/en/download/package-manager/)).

*Note: LTS version is more stable, but better use latest version as React Native is under permanent development, and chances are pretty high that RN developers use (at least partly) latest Node.js features instead of taking care of time consuming regression tests for all older Node.js versions. RN developers, please forgive me if I'm wrong.*

This will install Node.js (JavaScript engine) on your machine, and allows JavaScript code to execute not only in your browser.
Node.js also ships with npm package manager we will need below.


## <a id="chapter1a"></a>i. Quickstart with Create React Native App + Expo Client

### Install Create React Native App

Now we follow this tutorial: https://facebook.github.io/react-native/docs/getting-started.html

Open a Terminal window and run:

```
> npm install -g create-react-native-app
```

When done, cd into your preferred projects root folder, and run:

```
> create-react-native-app AwesomeProject
```

When done, run:

```
> cd AwesomeProject
> npm start
```

This will start a development server for you.

### Install the Expo Client App on your iOS or Android phone

iOS: Search for Expo Client in App Store and install it.

Android: Search for Expo Client in Play Store and install it.

Both: Connect to the same wireless network as your computer. 

On Android, use the Expo app to scan the QR code from your terminal to open your project. 
On iOS, follow on-screen instructions to get a link.

### Testing

Open App.js in your text editor of choice and edit some lines. 
The application should reload automatically once you save your changes.

More details: See https://facebook.github.io/react-native/docs/getting-started.html


## <a id="chapter1b"></a>ii. For most convenience: Expo Development Server (as GUI or CLI) + Expo Client

### First install the Expo Client App on your iOS or Android phone

iOS: Search for Expo Client in App Store and install it.

Android: Search for Expo Client in Play Store and install it.

### Install the Expo Development Server (as GUI or CLI) on your machine and run a first React Native App on your device

*Note: Your device should be on the same WiFi connection as your machine to make Live Reloads fast. Also works with 3G on device, but is much slower.*

We should try out both ways of starting our Development Server:

1. The `Expo CLI` first:

    ```
    > npm install exp --global
    ```

    We shouldn't worry about the warnings: https://forums.expo.io/t/installing-exp-without-warnings/8132/4

    Now create your first project, cd into the project folder, and run `exp start`

    ```
    > exp init my-new-project
    > cd my-new-project
    > exp start
    [12:40:12] Using project at /Users/User1/Projects/react-native-setup/my-new-project
    [12:40:22] Starting Metro Bundler on port 19001.
    [12:40:22] Metro Bundler ready.
    [12:40:26] Tunnel ready.
    [12:40:26] Expo is ready.
    
    QR - CODE HERE
    QR - CODE HERE                                                           
    QR - CODE HERE                                                           
    QR - CODE HERE                                                           
    QR - CODE HERE                                                           
    QR - CODE HERE                                                           
    
    [12:40:28] Your URL is: exp://ne-bhr.herrkraatz.my-new-project.exp.direct:80
    
    [12:40:28] Instructions to open this project on a physical device
    [12:40:28] Android devices: scan the above QR code.
    [12:40:28] iOS devices: run exp send -s <your-phone-number-or-email> in this project directory in another terminal window to send the URL to your device.
    
    [12:40:28] Instructions to open this project on a simulator
    [12:40:28] If you already have the simulator installed, run exp ios or exp android in this project directory in another terminal window.
    
    [12:40:28] Logs for your project will appear below. Press Ctrl+C to exit.
    
    ```
    
    Testing on your Device:
    
    - `iOS Device`: 
    
        Run `exp send -s +49151.....` in the same project directory, but in another terminal window (DON'T CLOSE the window above !) to send the URL to your device. 
        When the message arrived at your device, just click on the link and your first app gets opened within the Expo Client. 
    
    - `Android Device`:
    
        - Open Expo Client and scan the QR - CODE above
        - Or connect your Android device with an USB cable to your machine and run `exp android` in the same project directory, but in another terminal window (DON'T CLOSE the window above !).
    
    - `Both`: 
    
        Shaking your device shows the menu. Enable Live Reloading, so that each change in, e.g. in screens/HomeScreen.js will 
        automatically be reloaded on device for debugging.

    Testing on Simulators / Emulators:
    
    - `iOS Simulator`: 
    
        Run `exp ios` in the same project directory, but in another terminal window (DON'T CLOSE the window above !).
        
        You need to have Xcode installed. 
        
        Then `Expo Client` gets installed on the Simulator, and opens the app within it.
           
    - `Android Emulator`:
    
        Run `exp android` in the same project directory, but in another terminal window (DON'T CLOSE the window above !).
        
        You need to have have `Genymotion` or `Android Studio` installed (IMPORTANT: see https://docs.expo.io/versions/latest/workflow/genymotion). 
        
        Then `Expo Client` gets installed on the Emulator, and opens the app within it.

2. Now the GUI `Expo XDE` (https://github.com/expo/xde/releases)

    Download and install the GUI, then sign in if you have signed up within the Expo Client already, otherwise sign up here.
    
    Then hit Project >> New Project >> Choose Blank or Tab Navigation and hit CREATE
    
    Testing on your Device:
        
    - `iOS Device`: 
    
        Hit Share button (upper right corner) and hit "Send Link" to your mobile number `+49151.....`
        When the message arrived at your device, just click on the link and your first app gets opened within the Expo Client. 
    
    - `Android Device`:
    
        - Open Expo Client and scan the QR - CODE shown when you hit the Share button (upper right corner)
        - Or connect your Android device with an USB cable to your machine and hit Device button (upper right corner) >> "Open on Android"
    
    - `Both`: 
    
        Shaking your device shows the menu. Enable Live Reloading, so that each change in, e.g. in screens/HomeScreen.js will 
        automatically be reloaded on device for debugging.
    
    Testing on Simulators / Emulators:
    
    - `iOS Simulator`: 
    
        Hit Device button (upper right corner) >> "Open on iOS Simulator"
        
        You need to have Xcode installed. 
        
        Then `Expo Client` gets installed on the Simulator, and opens the app within it.
           
    - `Android Emulator`:
    
        Hit Device button (upper right corner) >> "Open on Android"
        
        You need to have have `Genymotion` or `Android Studio` installed (IMPORTANT: see https://docs.expo.io/versions/latest/workflow/genymotion). 
        
        Then `Expo Client` gets installed on the Emulator, and opens the app within it.
    

## <a id="chapter1c"></a>iii. Advanced: With react-native-cli + Xcode + Android Studio/Genymotion


### Before you start !

- iOS Setup: If you have Xcode installed, upgrade to latest version.

- Android Setup: If you have Android Studio installed, upgrade to latest version. It can also work WITHOUT Android Studio. Think about Genymotion, too.

- Both: Upgrade Node.js to latest version.


### Android Setup

Hit Tab "Building Projects with Native Code" on https://facebook.github.io/react-native/docs/getting-started.html

Choose Target OS: Android

Follow instructions :)

You will need Watchman, JDK >= 8, React Native CLI, and either Android Studio or Genymotion

- Android Studio: Follow Tab "Building Projects with Native Code" on https://facebook.github.io/react-native/docs/getting-started.html
- Genymotion: Follow https://medium.com/surabayadev/setting-up-react-native-android-without-android-studio-35a496e1dfa3


### iOS Setup

iOS Projects are a bit easier to set up than Android Projects:

1. Install Watchman (also from facebook)

    ```
    > brew install watchman
    ```
    
    *Note:*
    This failed initially: https://stackoverflow.com/questions/47513024/how-to-fix-permissions-on-home-brew-on-macos-high-sierra/47721925)
    Needed to run `sudo mkdir /usr/local/Frameworks` first.


2. Install React Native CLI

    ```
    > npm install -g react-native-cli
    ```


### Create first React Native App with React Native CLI

Now where all is set up, we can create our first React Native project using the React Native CLI.

CD into your preferred projects folder and let's call the app "my_rn_cli_project" (only alphanumeric values are allowed, no dashes)

```
> react-native init my_rn_cli_project
```

This will create another folder structure than Expo above.

### Testing

Testing on Simulators / Emulators first:

- `iOS Simulator`: 
    
    To try it out on iOS Simulator first, cd into `my_rn_cli_project` and run:
    
    ```
    > cd my_rn_cli_project
    > react-native run-ios
    ```
    
    *Note:*
    This failed initially: 
    xcrun: error: unable to find utility "instruments", not a developer tool or in PATH (https://stackoverflow.com/questions/39778607/error-running-react-native-app-from-terminal-ios)
    Needed to set Command Line Tools Path in Xcode >> Preferences >> Locations
    
    Also see Tab "Building Projects with Native Code" on https://facebook.github.io/react-native/docs/getting-started.html
           
- `Android Emulator`:

    Setup for Android is a bit tricky. You can either use
    
    - Android Studio: Follow Tab "Building Projects with Native Code" on https://facebook.github.io/react-native/docs/getting-started.html
    - Genymotion: Follow https://medium.com/surabayadev/setting-up-react-native-android-without-android-studio-35a496e1dfa3


Testing on your Device:

- `iOS Device`: 
    
    Easiest for me and most safe for you is to just provide this link :)
    https://facebook.github.io/react-native/docs/running-on-device.html
    
    Suggestions:
    
    To have production conditions (or higher performance of you app) on your device, you should either 
    
    - disable Warnings, see https://codedaily.io/tutorials/5/Disable-the-Yellow-Box-in-React-Native
    - set Build Configuration to "Release" (Product >> Scheme >> Edit Scheme >> Run Tab)
    
- `Android Device`:

    Easiest for me and most safe for you is to just provide this link :)
    https://facebook.github.io/react-native/docs/running-on-device.html
    

## <a id="chapter2"></a>2. Example React Native App with Firebase backend

The following app is a simple shift manager/planning app which includes

- Login/Signup Screen checked against Firebase backend
- An Employee List
- Shift Planning Screen
- Top Navigation

It is based on `react-native-cli`, but can easily be ported to Expo as we don't use any customized React Native Components.

Great many thanks to Stephen Grider who showed in his Udemy Course how to 
setup Firebase and Authentication with his React Native App "Manager" which is the basis of this repo (see links below).


### <a id="chapter2a"></a>i Clone repository and preparation

1. First clone this repo into your preferred projects directory.

    Open a Terminal window and cd into your preferred projects directory, then run:
    
    ```
    > git clone https://github.com/herrkraatz/react-native-setup.git
    ```

2. When repo cloned successfully, cd into folder `react-native-setup` and run

    ```
    > react-native init manager_app
    ```

3. When done, copy `manager_app_src/src` into `manager_app` folder:

    ```
    > cp -R manager_app_src/src manager_app
    ```

4. Then copy `manager_app_src/package.json` into `manager_app` folder (replacing existing `package.json` file)

    ```
    > cp manager_app_src/package.json manager_app
    ```
    
5. Finally cd into `manager_app` folder and run:

    ```
    > npm install
    ```

### <a id="chapter2b"></a>ii. Setup your own Firebase account

Steps:

1. First go to https://firebase.google.com/ and create an account.

2. Then go to Console, and add a Project.

3. Enable "Email/Password" under Authentication >> Sign-in method

4. Add Rules to Realtime Database to protect your database from public inserting of data !

    Open Database >> Rules and insert
    
    ```
    {
      "rules": {
        "users": {
          "$uid": {
            ".read": "$uid === auth.uid",
        		".write": "$uid === auth.uid"
          }
        }
      }
    }
    ```

5. Go to Project Overview >> "Add Firebase to your web app" and copy the config parameters

    ```
    config = {
        apiKey: "AIzaSyD_bli",
        authDomain: "bli.firebaseapp.com",
        databaseURL: "https://bli.firebaseio.com",
        projectId: "bli",
        storageBucket: "bli.appspot.com",
        messagingSenderId: "bla"
    };
    ```
    
    Then replace the config parameters in `manager_app/src/app.js` with the above copied config parameters.

  
### <a id="chapter2c"></a>iii. Run app on iOS Simulator

Now let's try it out on iOS Simulator !

Cd into `manager-app` and just run:
    
```
> react-native run-ios
```

A cool side effect in Firebase is the visualization of live updates in its Realtime Database

Each time you insert/edit an employee, the employee pops up yellow under Database >> Realtime Database >> Data
        
Have fun being manager ! But don't fire too many of your peers !


## <a id="chapter3"></a>3. Links

### Have a look !

Getting started: 
- Facebook: https://facebook.github.io/react-native/docs/getting-started.html
- Facebook: https://facebook.github.io/react-native/docs/running-on-device.html

Boilerplates & Examples:
- Stephen Grider Repo: https://github.com/StephenGrider/ReactNativeReduxCasts
- Stephen Grider Udemy Course: "The Complete React Native and Redux Course": https://www.udemy.com/the-complete-react-native-and-redux-course/
- Stephen Grider Udemy Course: "React Native: Advanced Concepts": https://www.udemy.com/react-native-advanced/
- McNamee: https://github.com/mcnamee/react-native-starter-kit
- Facebook's Create React Native App: https://github.com/react-community/create-react-native-app

Styling:
- Maximilian Schwarzmüller: Udemy Courses: "React Native - The Practical Guide": https://www.udemy.com/react-native-the-practical-guide/

React Native Components used:

- Navigation / Routing
    - https://reactnavigation.org/
    - https://github.com/aksonov/react-native-router-flux
    - https://medium.com/@Laurens_Lang/react-native-migrating-from-react-native-router-flux-to-react-navigation-7c47b1cc679c

- Communication (not working in iOS Simulator)
    - https://github.com/anarchicknight/react-native-communications

### Credits to the authors of above links ! Thank you very much !

### And credits to the reader: Thanks for your visit !