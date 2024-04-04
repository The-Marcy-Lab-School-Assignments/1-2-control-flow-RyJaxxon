const measureRainSwitch = (inches) => {
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

const rounderSwitch = (float, roundSetting) => {
  switch (true) {
    case roundSetting === 'up':
      return Math.ceil(float);
      break;
    case roundSetting === 'down':
      return Math.floor(float);
      break;
    case roundSetting === 'honest':
      return (float - Math.floor(float) < 0.5 ? Math.floor(float) : Math.ceil(float))

  }
}

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
