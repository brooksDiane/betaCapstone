/**
 * promisified setTimeout, perfect for async/await functions
 */
export var setTimer = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
