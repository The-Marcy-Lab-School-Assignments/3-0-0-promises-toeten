//q 1 with .resolve

const resolvedWrapper = (value) => {
  return Promise.resolve(value)
};


//q 6

const crypto = require('crypto');

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
  return getRandomBytes()
    .then(buffer1 => {
      const color1 = numsToRGBColor(buffer1);
      return getRandomBytes().then(buffer2 => [color1, numsToRGBColor(buffer2)]);
    })
    .then(([color1, color2]) => {
      return getRandomBytes().then(buffer3 => [color1, color2, numsToRGBColor(buffer3)]);
    })
    .then(([color1, color2, color3]) => {
      return getRandomBytes().then(buffer4 => [color1, color2, color3, numsToRGBColor(buffer4)]);
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
return4RandomColors().then(console.log);