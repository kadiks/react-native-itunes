var React = require('react-native');

var {
  RNiTunes
} = require('react-native').NativeModules;

module.exports = {

  getPlaylists: function(params) {
    return new Promise((resolve) => {
      RNiTunes.getPlaylists(params || {}, (playlists) => {
        resolve(playlists);
      });
    });
  },

  getTracks: function(params) {
    return new Promise((resolve) => {
      RNiTunes.getTracks(params || {}, (tracks) => {
        resolve(tracks);
      });
    });
  },

  getArtists: function(params) {
    return new Promise((resolve) => {
      RNiTunes.getArtists(params || {}, (tracks) => {
        resolve(tracks);
      });
    });
  },

  getAlbums: function(params) {
    return new Promise((resolve) => {
      RNiTunes.getAlbums(params || {}, (tracks) => {
        resolve(tracks);
      });
    });
  },
  getCurrentPlayTime: function(params) {
    return new Promise((resolve) => {
      RNiTunes.getCurrentPlayTime((currentPlayTime) => {
        resolve(currentPlayTime);
      });
    });
  },
  
  pause: function() {
    RNiTunes.pause();
  },

  play: function() {
    RNiTunes.play();
  },

  playTrack: function(trackItem) {
    return new Promise((resolve, reject) => {
      if (!trackItem.hasOwnProperty('title') ||
        !trackItem.hasOwnProperty('albumTitle')) {
        reject('To play a track, you need to send the [title] and the [albumTtile] properties');
        return;
      }
      RNiTunes.playTrack(trackItem || {}, (err) => {
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
  }
};
