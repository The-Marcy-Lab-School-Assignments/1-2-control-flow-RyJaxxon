const measureRain = (inches) => {
  switch (true) {
    case inches < 2:
      console.log("dry");
      break;
    case inches < 4:
      console.log('average');
      break;
    case inches < 6:
      console.log('rainy')
      break;
    case inches >= 6:
      console.log('flood')
      break;
  }
};
measureRain(4);

const happyBirthdayPet = () => {
};

const funTypes = () => {
};

const rounder = () => {
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
