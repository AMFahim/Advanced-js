const numbers = [1, 2, 3, 4, 5]
const output = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}
console.log(output)

const numbers = [1, 2, 3, 4, 5];
function square(element) {
  return element * element;
}
or
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(function(element) {
 return element * element;
})
console.log(result);

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(x => x * x);
console.log(result);

const numbers = [1, 2, 3, 4, 5];
const bigger = numbers.filter(x => x > 2);
console.log(bigger);

const numbers = [1, 2, 3, 4, 5];
const isThere = numbers.find(x => x > 3)
console.log(isThere)