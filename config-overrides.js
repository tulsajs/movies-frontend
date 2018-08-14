const { rewireEmotion } = require('react-app-rewire-emotion');

/* config-overrides.js */
module.exports = function override(config, env) {
  config.resolve.modules = [...config.resolve.modules, 'components'];
  return rewireEmotion(config, env, { inline: true });
};
