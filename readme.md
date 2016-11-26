# iTunes React Native

[![npm version](https://badge.fury.io/js/react-native-itunes.svg)](https://badge.fury.io/js/react-native-itunes)

Access your iTunes library (iOS only)

## [Example project](https://github.com/kadiks/rnitunesdemo)

## Installation

In the command line, first you need to install react-native-itunes:

```shell
npm install react-native-itunes --save
```

## Automatically link

#### With React Native 0.27+

```shell
react-native link react-native-itunes
```

#### With older versions of React Native

You need [`rnpm`](https://github.com/rnpm/rnpm) (`npm install -g rnpm`)

```shell
rnpm link react-native-itunes
```

## Manually link

In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name] Go to node_modules ➜ react-native-itunes and add the .xcodeproj file

In XCode, in the project navigator, select your project. Add the lib*.a from the react-native-itunes project to your project's Build Phases ➜ Link Binary With Libraries Click .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). Look for Header Search Paths and make sure it contains both ```$(SRCROOT)/../react-native/React``` and ```$(SRCROOT)/../../React``` - mark both as recursive.

Run your project (Cmd+R)

## Example

### Get all tracks
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks().then((tracks) => {
  console.log(tracks);
});

```
### Get all tracks and extract only genre and title
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  fields: ['title', 'genre']
}).then((tracks) => {
  console.log(tracks);
});

```
### Filter track by title and album artist
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  query: {
    title: 'digital',
    albumArtist: 'daft'
  }
}).then((tracks) => {
  console.log(tracks);
});

```

### Play searched track
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  query: {
    title: 'digital',
    albumArtist: 'daft'
  }
}).then((tracks) => {
  iTunes.playTrack(tracks[0])
    .then(res => {
      console.log('is playing');
    })
    .catch(err => {
      alert('err');
    });
});

```

### Show album cover
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  fields: ['title', 'artwork']
}).then((tracks) => {
  this.setState({
    track: tracks[0],
  });
});

...

render() {
  return <Image source={{uri: this.state.track.artwork }} style={{ width: 100, height: 100 }} />
}

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

## Changelog

### 0.3.1

- Access artwork as base64

### 0.3.0

- Play track from TrackItem.title & TrackItem.albumTitle
- Play/Pause

### 0.2.0

- Query tracks
- Filter tracks
- Get specific fields

### 0.1.0

- Search all tracks

## Roadmap

- [ ] Add tests
- [ ] Refactor to have one function dealing with queries
- [ ] Refactor #getTracks to always return TrackItem.title & TrackItem.albumTitle
- [x] Change all code and examples to ES6
- [ ] Get playlist?

### Player

- [x] Play from searched items
- [x] play()/pause()

### getTracks(params)

- [x] Object [params.query={}]
- [x] Object [params.fields={}]

## Known bugs

### Unplayable tracks

For some reasons some tracks are not playing while they can be searched. If you have a clue why, please share.
