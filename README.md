# chessdotcom-expanded-themes
Chrome browser extension adding extra board and piece themes for chessdotcom (chess.com). Includes all lichess themes with plans for additional expansion in the future.

![example](images/ccThemes_example_1.png)

## Installing the extension

The extension can either be downloaded from the [Releases](https://github.com/x64squared/chessdotcom-expanded-themes/releases) page, or [built from source](#building-from-source).

1. Open `chrome://extensions`
2. Toggle [developer mode](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)
3. Click "Load unpacked"
4. If installing from a downloaded release:
   1. Unzip the downloaded file
   2. Select the unzipped folder
5. If building from source:
   1. Follow the steps in the [Building from source](#building-from-source) section
   2. Select the `build` directory created by the build command

## Building from source

1. Install dependencies
```bash
$ npm install
```

2. Create the build files
```bash
$ npm run build
```

3. Output will be in a `build` directory inside the repo
