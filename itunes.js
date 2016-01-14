/**
 * @providesModule react-native-itunes
 */

var React = require('react-native');

var {
  RNiTunes
} = require('react-native').NativeModules;

module.exports = {
  getTracks: function() {
    return new Promise((resolve) => {
      RNiTunes.getTracks((tracks) => {
        resolve(tracks);
      });
    });
  }
};
