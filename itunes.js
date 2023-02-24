var React = require("react-native");

var { RNiTunes } = require("react-native").NativeModules;

var defaultGetCurrentTrackOptions = {
  playerType: "application",
  includeArtwork: true,
}

module.exports = {
  getPlaylists: function(params) {
    return new Promise(resolve => {
      RNiTunes.getPlaylists(params || {}, playlists => {
        resolve(playlists);
      });
    });
  },

  getTracks: function(params) {
    return new Promise(resolve => {
      RNiTunes.getTracks(params || {}, tracks => {
        resolve(tracks);
      });
    });
  },

  getArtists: function(params) {
    return new Promise(resolve => {
      RNiTunes.getArtists(params || {}, tracks => {
        resolve(tracks);
      });
    });
  },

  getAlbums: function(params) {
    return new Promise(resolve => {
      RNiTunes.getAlbums(params || {}, tracks => {
        resolve(tracks);
      });
    });
  },

  getCurrentPlayTime: function(params) {
    return new Promise(resolve => {
      RNiTunes.getCurrentPlayTime(currentPlayTime => {
        resolve(currentPlayTime);
      });
    });
  },

  getCurrentTrack: function(opts) {
    return new Promise((resolve, reject) => {
      const mergedOptions = Object.assign({}, defaultGetCurrentTrackOptions , opts);
      RNiTunes.getCurrentTrack(mergedOptions, (err, track) => {
        if (!err) {
          if (track && track.artwork === "") {
            track.artwork = null
          }
          resolve(track);
        } else {
          reject(err);
        }
      });
    });
  },

  pause: function() {
    RNiTunes.pause();
  },

  play: function() {
    RNiTunes.play();
  },

  previous: function() {
    RNiTunes.previous();
  },

  next: function() {
    RNiTunes.next();
  },

  playTrack: function(trackItem) {
    return new Promise((resolve, reject) => {
      if (
        !trackItem.hasOwnProperty("title") ||
        !trackItem.hasOwnProperty("albumTitle")
      ) {
        reject(
          "To play a track, you need to send the [title] and the [albumTitle] properties"
        );
        return;
      }
      RNiTunes.playTrack(trackItem || {}, err => {
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      });
    });
  },

  playTracks: function(trackItems) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(trackItems) === false || trackItems.length === 0) {
        reject("No track item have been found");
        return;
      }
      const isValid = trackItems.every(
        t => t.hasOwnProperty("title") && t.hasOwnProperty("albumTitle")
      );
      if (isValid === false) {
        reject(
          "All track items should have [title] and [albumTitle] properties"
        );
      }
      RNiTunes.playTracks(trackItems || [], err => {
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      });
    });
  },

  seekTo: function(playingTime) {
    RNiTunes.seekTo(playingTime);
  },

  stop: function() {
    RNiTunes.stop();
  }
};
