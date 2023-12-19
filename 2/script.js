function isValidNumber(num) {
  return !isNaN(num) && typeof num === 'number';
}

function calculateSum(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (!isValidNumber(numbers[i])) {
      console.error('Error: Invalid number found in the array!');
      return;
    }
  }

  const result = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
  console.log('Sum:', result);
}

const exampleNumbers = [1, 2, 3, 4, 5];
calculateSum(exampleNumbers);