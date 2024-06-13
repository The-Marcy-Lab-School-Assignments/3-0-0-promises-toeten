/** FEEDBACK: Great job getting all test cases to pass! */
const resolvedWrapper = (value) => {
  return new Promise((resolve) => {
   resolve(value)
  })
};

const rejectedWrapper = (str) => {
  return Promise.reject(new Error(str));
};

const handleResolvedPromise = (promise) => {
  return promise.then(valueFromProm => {
    console.log(valueFromProm)
    return valueFromProm
  })
};


const handleResolvedOrRejectedPromise = (promise) => {
    return promise
    .then(
      val => {
      console.log(val)
      return val
    },
    (error) => {
      console.error(`Your error message was: ${error.message}`)
      return null
  })
};

const pauseForMs = (numOfMs) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, numOfMs)
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
