# iTunes React Native

[![npm version](https://badge.fury.io/js/react-native-itunes.svg)](https://badge.fury.io/js/react-native-itunes)
![npm dl](https://img.shields.io/npm/dw/react-native-itunes.svg)

Access your iTunes library (iOS only)

## [Example project](https://github.com/kadiks/rnitunesdemo)

For RN older than 0.40.0, use the release 0.4.2+ of this library

If you have questions, ask them on Twitter [@kadiks](https://twitter.com/kadiks)

## Installation

In the command line, first you need to install react-native-itunes:

```shell
npm install react-native-itunes --save
```

### Permissions - iOS 10

- Add the key *Privacy - Apple Music usage Description* `NSAppleMusicUsageDescription` in your Info.plist with a description: `$(PRODUCT_NAME) wants access to your Music library`

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

## Examples

Note: it works on the device (it even shows on the cloud Apple Music saved songs)

# Get all tracks
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks().then((tracks) => {
  console.log(tracks);
});

```

# Get all playlists
Beware, check other examples for better performances
```js
import iTunes from 'react-native-itunes';

iTunes.getPlaylists().then(playlists => {
  console.log(playlists);
});
```

# Play searched track
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  query: {
    title: 'digital',
    albumArtist: 'daft',
  },
}).then((tracks) => {
  iTunes.playTracks(tracks)
    .then(res => {
      console.log('is playing');
    })
    .catch(err => {
      alert('err');
    });
});

```

More [examples](./examples.md)

Note: it works on the device (it even shows on the cloud Apple Music saved songs)

## API

### getArtists()

Returns [String] of artists

### getAlbums()

Returns [TrackItem]

### getCurrentPlayTime()

`[DEPRECATED]` use `getCurrentTrack()` instead

### getCurrentTrack()

Returns TrackItem with additional properties: currentPlayTime and artwork

### getPlaylists({ fields = [], query = {} })

Returns [PlaylistItem]

- fields: Array
  - name
  - tracks
  - playCount
- query: Object
  - name

### getTracks({ fields = [], query = {}, type: '' })

Returns [TrackItem]

- fields: Array https://developer.apple.com/library/ios/documentation/MediaPlayer/Reference/MPMediaItem_ClassReference/
- query: Object
  - title
  - albumArtist
  - albumTitle
  - artist
  - genre
- type: String
  - default to `''` and will return songs
  - `audiobooks` will return the list of audiobooks
  - `podcasts` will return the list of podcasts

### next()

### playTrack(Track)

### playTracks([Track])

### pause()

### previous()

### seekTo(seconds)

## PlaylistItem

- name
- playCount
- tracks: [TrackItem]

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

### 0.5.0

- Play list of searched items `playTracks()`
- Get current playing track `getCurrentTrack()`
- Play next item in playlist `next()`
- Play previous item in playlist `previous()`

### 0.4.5

Thanks to [Haggai Shapira](https://github.com/Haggaish)

- Get the current play time `getCurrentPlayTime()`
- Seek to functionality `seekTo()`

### 0.4.4

Thanks to [kurokky](https://github.com/kurokky)

- Get all albums `getAlbums()`
- Get all artists `getArtists()`
- Get audiobooks and podcasts

### 0.4.2

- Field validation and conversion

### 0.4.0

- Get playlists 

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
- [ ] Create a query builder function to be called from all public methods
- [ ] Refactor #getTracks to always return TrackItem.title & TrackItem.albumTitle
- [ ] Remove default `artwork` property in `getAlbums()` to avoid performances issues
- [ ] Change `getArtists()` to return [TrackItem] and not [String]
- [ ] Add same filtering capabilities from `getTracks()` to `getAlbums()` & `getArtists()`
- ~~Remove playable capabilities all together (now with iOS11, it needs a new authorization process)~~
- [x] Change all code and examples to ES6
- [ ] Change all code and examples to ES7 (async/await)
- [x] Get playlist
- [ ] Query tracks from Apple Music [#19](/../../issues/19) 

### Player

- [x] Play a searched item
- [x] play()/pause()
- [x] Play a list of searched items
- [x] Play next item in playlist
- [x] Play previous item in playlist

### getTracks(params)

- [x] Object [params.query={}]
- [x] Object [params.fields={}]

## Known bugs

### Unplayable tracks

For some reasons some tracks are not playing while they can be searched. If you have a clue why, please share.

### Playlist tracks

Some playlist tracks cannot be played. Maybe those which are not cached.
Might be related to first bug, but the first bug does not through a warning
Investigating to flag them as unplayable before getting an error...

### Negative persistent IDs

Persistent IDs are `uint64_t (unsigned long long)`, a basic conversion to int turn them into negative number.

## Thanks to

[Malone Hedges](https://twitter.com/malonehedges) for the getPlaylists(). I discovered that some Apple Music songs are only available via playlists
Gracias a [Indesign Colombia](https://www.indesigncolombia.com/) for this PR that fixes a lot of obvious and preventable mistakes
