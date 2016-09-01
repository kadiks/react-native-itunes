# iTunes React Native

Access your iTunes library (iOS only)

## Installation

In the command line, first you need to install react-native-itunes:

```javascript
npm install react-native-itunes --save
```

In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name] Go to node_modules ➜ react-native-itunes and add the .xcodeproj file

In XCode, in the project navigator, select your project. Add the lib*.a from the deviceinfo project to your project's Build Phases ➜ Link Binary With Libraries Click .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). Look for Header Search Paths and make sure it contains both ```$(SRCROOT)/../react-native/React``` and ```$(SRCROOT)/../../React``` - mark both as recursive.

Run your project (Cmd+R)

## Example

### Get all tracks
```js
var iTunes = require('react-native-itunes');
iTunes.getTracks().then((tracks) => {
  console.log(tracks);
});

```
### Get all tracks and extract only genre and title
```js
var iTunes = require('react-native-itunes');
iTunes.getTracks({
  fields: ['title', 'genre']
}).then((tracks) => {
  console.log(tracks);
});

```
### Filter track by title and album artist
```js
var iTunes = require('react-native-itunes');
iTunes.getTracks({
  query: {
    title: 'digital',
    albumArtist: 'daft'
  }
}).then((tracks) => {
  console.log(tracks);
});

```

Note: it works on the device (it even shows on the cloud Apple Music saved songs)

## API

### getTracks({ fields, query })

Returns [TrackItem]

- fields: Array https://developer.apple.com/library/ios/documentation/MediaPlayer/Reference/MPMediaItem_ClassReference/
- query: Object
  - title
  - albumArtist
  - albumTitle
  - artist
  - genre

## TrackItem

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


- [ ] Add tests
- [ ] Play from searched items

### getTracks(params)

- [x] Object [params.query={}]
- [x] Object [params.fields={}]
