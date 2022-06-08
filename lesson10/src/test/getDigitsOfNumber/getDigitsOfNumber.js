const getDigitsOfNumber = (userNumber) => {
  if (Number.isInteger(userNumber) && userNumber >=0 && userNumber < 1000) {
    return {
            unit: userNumber % 10,
            dozens: Math.trunc(userNumber / 10) % 10,
            hundreds: Math.trunc(userNumber / 100) % 10,
          }
  } else {
      console.log(userNumber)
      console.error("Error! Параметр функции не является целым положительным числом от 0 до 1000.");
      return {};
  }
}

module.exports = getDigitsOfNumber;