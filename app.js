'use strict'

console.log("Hello World!\n==========\n");

let watching = new Promise((resolve, reject) => {
  let userWatchingLiveStream = true;

  if (userWatchingLiveStream) {
    resolve('Thumbs up and Subscribe!');
  } else {
    reject('User left.');
  }
});

watching.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
