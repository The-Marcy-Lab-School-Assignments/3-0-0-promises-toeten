const crypto = require('crypto');
const { resolve } = require('path');

const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomFill(new Uint8Array(3), (err, buffer) => {
    if (err) return reject(err);
    resolve([...buffer]);
  });
});

const return4RandomColors = () => {
  return Promise.all([
    getRandomBytes(),
    getRandomBytes(),
    getRandomBytes(),
    getRandomBytes()
  ])
    .then(colors => {
      return colors.map(numsToRGBColor)
    })
    .catch(error => {
      console.log(error)
      return []
    })
     
};

return4RandomColors().then(console.log);

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
