/**
 * @providesModule react-native-itunes
 */

var React = require('react-native');

var {
  RNiTunes
} = require('react-native').NativeModules;

module.exports = {
  getTracks: function(params) {
    return new Promise((resolve) => {
      RNiTunes.getTracks(params || {},(tracks) => {
        resolve(tracks);
      });
    });
  }
};
