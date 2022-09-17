const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve) => {
    let count = 0;
    promiseTheaterIXX().then((value) => {
      value.forEach(element => {
        if (element.hasil === emosi) count+=1
      });
      // console.log(value)
      return promiseTheaterVGC()
    }).then((value) => {
      value.forEach(element => {
        if (element.hasil === emosi) count+=1
      });
      // console.log(value2)
      resolve(count)
    })
  })
}

module.exports = {
  promiseOutput,
};
