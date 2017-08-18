const translate = require('node-google-translate-skidz');

module.exports = (source, target, text) => new Promise((resolve, reject) => {
  translate({ text, source, target }, (result) => {
    resolve(result.translation);
  });
});
