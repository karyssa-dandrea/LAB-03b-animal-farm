// import functions
const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');
const dogSpan = document.getElementById('dog-span')

const catImg = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');
const catSpan = document.getElementById('cat-span');

const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
const horseSpan = document.getElementById('horse-span');

let dogClicks= 0;
let catClicks= 0;
let horseClicks= 0;


// reference needed DOM elements



// set event listeners 
dogImg.addEventListener('click', () => {

    dogSound.play();
    dogClicks ++; 
    dogSpan.textContent = dogClicks;
});

catImg.addEventListener('click', () => {

    catSound.play();
    catClicks ++;
    catSpan.textContent = catClicks;
});

horseImg.addEventListener('click', () => {

  horseSound.play();
  horseClicks ++;
  horseSpan.textContent = horseClicks;
});



  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
