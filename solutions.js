/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function welcome() {
  console.log('welcome');
};

function delayedGreet() {
  setTimeout(welcome, 3000)
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function hello() { 
  console.log('hello')
};

function goodBye() {console.log('good bye')};

function helloGoodbye() {
  // ADD CODE HERE
  setTimeout(goodBye, 2000);
  hello();
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */


function hiAgain() {
  console.log('hi again');
};

function brokenRecord() {
  setInterval(hiAgain, 1000)
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function hiForNow() {
  console.log('hi for now');
};

function limitedRepeat() {
  // ADD CODE HERE
  const hiTimer = setInterval(hiForNow, 1000);
  
  const clearTimer = () => {
    clearInterval(hiTimer);
  };
  
  setTimeout(clearTimer, 5000);
}
// Uncomment the following line to check your work!
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  const timer = setInterval(func, interval*1000);
  
  const clearTimer = () => {
  	clearInterval(func);
  }
  
  setTimeout(clearTimer, duration*1000)
  // ADD CODE HERE
}
// Uncomment the following lines to check your work!
 function theEnd() {
  console.log('This is the end!');
 }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let intervalId;
  let counter = 0;
  
  function inner() {
    if (counter === 0) {
      counter++;
      intervalId = setInterval(() => console.log(inner()), wait) 
    } else if (counter === target) {
      clearInterval(intervalId)
      return counter;
    } else {
      return counter++;
    }
  }
  
  return inner();
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 //const countLogger = delayCounter(3, 1000)
//countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val);
    }, 2000)
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const createPromise = promised('wait for it...');
//createPromise.then((val) => console.log(val)); 
//will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {

  constructor(cb) {
    this.cb = cb;
    this.seconds = 0;
    this.id = null;
  }
  
  start() {
    this.id = setInterval(() => {
      this.seconds++;
      this.cb(this.seconds % 60);
    }, 1000)
  }

	reset() {
    this.seconds = 0;
    clearInterval(this.id)
  }


}

// UNCOMMENT THESE TO TEST YOUR WORK!
 //const clock = new SecondClock((val) => { console.log(val) });
 //console.log("Started Clock.");
 //clock.start();
 //setTimeout(() => {
     //clock.reset();
   //  console.log("Stopped Clock after 6 seconds.");
 //}, 6000);

/* CHALLENGE 10 */



function debounce(callback, interval) {
  let counter = 0;
  let hasRan = false;
  function closureFn() {
    let id = undefined;
    if (!hasRan) {
      ///this is the first run
      id = setInterval(() => counter++, 1);
      hasRan = true;
      return callback();
    } else {
      //for subsequent runs
      if (counter < interval) {
        // Not enough time has elapsed
        counter = 0;
        clearInterval(id);
        id = setInterval(() => counter++, 1);
        return undefined;
      } else {
        //Enough time has elapsed
        counter = 0;
        clearInterval(id);
        id = setInterval(() => counter++, 1);
        return callback();
      }
    }
  }
  return closureFn;
}


// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
