const {names} = require('./assets/names');

const {generateRandomNumber} = require('./utils/helper');

const fakeStarWarsName = (nameParts = 2) => {
  if (nameParts > 5 || nameParts < 2) {
    return 'nameParts must be between 2 and 5';
  }

  let name = '';
  Array(nameParts)
    .fill('')
    .forEach(() => {
      name += ` ${names[generateRandomNumber(178)]}`;
    });

  return name;
};

module.exports = {
  fakeStarWarsName,
};
