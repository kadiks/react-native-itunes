# iTunes React Native

Access your iTunes library (iOS only)

## Installation

First you need to install react-native-device-info:

```javascript
npm install react-native-itunes --save
```

### Installation

In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name] Go to node_modules ➜ react-native-itunes and add the .xcodeproj file

In XCode, in the project navigator, select your project. Add the lib*.a from the deviceinfo project to your project's Build Phases ➜ Link Binary With Libraries Click .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). Look for Header Search Paths and make sure it contains both ```$(SRCROOT)/../react-native/React``` and ```$(SRCROOT)/../../React``` - mark both as recursive.

Run your project (Cmd+R)

## Example

```js
var iTunes = require('react-native-itunes');
iTunes.getTracks().then((tracks) => {
  console.log(tracks);
});

```

## API

### getTracks()

## Track item

- albumArtist
- albumTitle
- duration (in seconds)
- genre
- playCount
- title


## Links

- The Apple documentation on the MPMediaItem used: https://developer.apple.com/library/ios/documentation/MediaPlayer/Reference/MPMediaItem_ClassReference/

	- If you need more info, check out those properties list and do not hesitate doing a pull request (PR) with your addition

## Roadmap

### getTracks(params)

- [ ] Object [params.query={}]
- [ ] Object [params.fields={}]
