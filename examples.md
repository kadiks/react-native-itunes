# Get all tracks
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks().then((tracks) => {
  console.log(tracks);
});

```
# Get all tracks and extract only genre and title
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  fields: ['title', 'genre'],
}).then((tracks) => {
  console.log(tracks);
});

```
# Filter track by title and album artist
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  query: {
    title: 'digital',
    albumArtist: 'daft',
  },
}).then((tracks) => {
  console.log(tracks);
});

```

# Get all podcasts
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  type: 'podcasts',
}).then((tracks) => {
  console.log(tracks);
});

```

# Get all audiobooks
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  type: 'audiobooks',
}).then((tracks) => {
  console.log(tracks);
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
  iTunes.playTrack(tracks[0])
    .then(res => {
      console.log('is playing');
    })
    .catch(err => {
      alert('err');
    });
});

```

# Show album cover
```js
import iTunes from 'react-native-itunes';

iTunes.getTracks({
  fields: ['title', 'artwork'],
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

# Get all playlists
```js
import iTunes from 'react-native-itunes';

iTunes.getPlaylists().then(playlists => {
  console.log(playlists);
});
```

# Get all playlists names
```js
import iTunes from 'react-native-itunes';

iTunes.getPlaylists({
  fields: ['name'], // more performant to filter by `fields`:name, and then `query`:name
}).then(playlists => {
  console.log(playlists);
});
```

# Search playlists
```js
import iTunes from 'react-native-itunes';

iTunes.getPlaylists({
  query: {
    name: 'recently',
  },
}).then(playlists => {
  console.log(playlists);
});
```

# Get all artists
```js
import iTunes from 'react-native-itunes';

iTunes.getArtists().then(artists => {
  console.log(artists); // ['Daft Punk', 'Pharell Williams', ...]
});
```

# Get all albums
```js
import iTunes from 'react-native-itunes';

iTunes.getAlbums().then(albums => {
  console.log(albums); // [TrackItem] with 3 properties: albumTitle, albumArtist and artwork
});
```
