const {names} = require('./assets/names');

const {generateRandomNumber, NAMES_RECORD_LENGTH} = require('./utils/helper');

const fakeStarWarsName = (nameParts = 2) => {
  if (nameParts > 5 || nameParts < 2) {
    return 'nameParts must be between 2 and 5';
  }

  let name = '';
  Array(nameParts)
    .fill('')
    .forEach(() => {
      name += ` ${names[generateRandomNumber(NAMES_RECORD_LENGTH)]}`;
    });

  return name;
};

module.exports = {
  fakeStarWarsName,
};
