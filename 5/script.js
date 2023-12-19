function sumMaxMin(arr) {

  const num = arr.filter(item => typeof item === 'number');

  if (num.length === 0) {
    return "No num found in the array.";
  }

  const max = Math.max(...num);
  const min = Math.min(...num);
  const sum = max + min;

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

const Array = [3, "five", 6, "eight", 11];
const result = sumMaxMin(Array);
console.log(result);