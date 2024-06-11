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

const pauseForMs = () => {
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
