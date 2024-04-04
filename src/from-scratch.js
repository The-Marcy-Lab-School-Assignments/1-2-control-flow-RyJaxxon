const measureRain = (inches) => {
  switch (true) {
    case inches === 0:
      console.log('drought')
      break
    case inches < 2:
      console.log('dry');
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

const happyBirthdayPet = (breed, age) => {
  if (breed == 'snake') {
    console.log("Hiss hiss!")
  } else if (breed == 'cat') {
    if (age < 5) {
      console.log("Mew mew!")
    } else {
      console.log("Meow meow!")
    }
  } else if (breed == 'dog') {
    if (age < 5) {
      console.log("Arf arf!")
    } else if (age >= 5 && age < 10) {
      console.log("Woof woof!")
    } else {
      console.log("Boof!")
    }
  } else {
    console.log("Happy birthday!")
  };
};

const funTypes = (jsType) => {
  if (Number.isNaN(jsType)) {
    console.log("Well, now you're just showing off.");
  } else if (typeof jsType === 'number') {
    console.log("That's a good number.");
  } else if (typeof jsType === 'string') {
    console.log("That's just some text.");
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?");
  } else if (jsType === undefined) {
    console.log("Nothing, but I didn't set that.");
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.");
  } else if (Array.isArray(jsType)) {
    console.log("I order you to be indexed.")
  } else if (typeof jsType === 'object') {
    console.log("Anybody got the key?")
  }
};

// funTypes(NaN); // Output: Well, now you're just showing off.
// funTypes(42); // Output: That's a good number.
// funTypes("Hello"); // Output: That's just some text.
// funTypes(true); // Output: To bool, or not to bool?
// funTypes(undefined); // Output: Nothing, but I didn't set that.
// funTypes(null); // Output: Nothing, and I did set that.
// funTypes([1, 2, 3]); // Output: I order you to be indexed.
// funTypes({}); // Output: Anybody got the key?


const rounder = (float, roundSetting) => {
  let realRoundSetting = roundSetting.toLowerCase()
  if (realRoundSetting === "up") {
    return Math.ceil(float);
  } else if (realRoundSetting === "down") {
    return Math.floor(float);
  } else {
    if (float - Math.floor(float) < .5) {
      return (Math.floor(float));
    } else {
      return (Math.ceil(float));
    }
  };
}

// console.log(rounder(3.24, "UP"));
// console.log(rounder(4.67, "DOWN"));
// console.log(rounder(3.45, "HONEST"));

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
