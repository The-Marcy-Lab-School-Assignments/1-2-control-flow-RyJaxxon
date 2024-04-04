const wildlyBiasedReview = (location) => {
  if (typeof location !== "string" || location.trim() === "") {
    return console.log("Your input needs to be a string with text.")
  }
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  } else {
    console.log('Yea that place is cool I guess');
  }
};

module.exports = {
  wildlyBiasedReview,
};

// wildlyBiasedReview("NYC");
// wildlyBiasedReview("Paris");
// wildlyBiasedReview(4);
// wildlyBiasedReview("");
