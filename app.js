// import functions
const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');

const catImg = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');

const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');



// reference needed DOM elements


// set event listeners 
dogImg.addEventListener('click', () => {

    dogSound.play();
});

catImg.addEventListener('click', () => {

  catSound.play();
});

horseImg.addEventListener('click', () => {

  horseSound.play();
});



  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
