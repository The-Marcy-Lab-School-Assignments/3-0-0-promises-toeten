const resolvedWrapper = (value) => {
  return new Promise((resolve) => {
   resolve(value)
  })
};

const rejectedWrapper = (str) => {
  return Promise.reject(new Error(str));
};

const handleResolvedPromise = () => {
};

const handleResolvedOrRejectedPromise = () => {
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
