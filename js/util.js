//вспомогательные функции

//рандомное положительное число в переданном диапазоне
const getRandomNumber = (firstNumber, secondNumber) => {
  if (firstNumber < 0 || secondNumber < 0) {
    return NaN;
  }

  const minNumber = Math.ceil(Math.min(firstNumber, secondNumber));
  const maxNumber = Math.floor(Math.max(firstNumber, secondNumber));
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;

  return Math.floor(randomNumber);
};

//рандомный элемент по индексу из массива
const getRandomArrayElement = (someArray) => {
  return someArray[getRandomNumber(0, someArray.length - 1)];
};

//проверка комментария
const checkStringLength = (string, length) => {
  return string.length <= length;
};

export {getRandomNumber, getRandomArrayElement};
