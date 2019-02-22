export const callAll = (...fns) => (...args) =>
  fns.forEach(fn => typeof fn === 'function' && fn(...args));
