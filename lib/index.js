const translate = require('node-google-translate-skidz');

const getTranslate = ({ source = 'en', target, text }) => new Promise((resolve, reject) => {
  translate({ text, source, target }, (result) => {
    resolve(result);
  });
});

module.exports = (source, target, text) => new Promise((resolve, reject) => {
  getTranslate({ source, target, text })
    .then((result) => {
      if (result.spell) {
        return getTranslate({ target: source, text: 'Did you mean' })
          .then(translated => resolve(`${translated}: '${result.spell.spell_res}'`))
          .catch(reject);
      }
      resolve(result.translation);
    })
    .catch(reject);
});
