const numbers = [1, 2, 3, 4, 5, 6, 7];
const part = numbers.slice(0, 6);

const remove = numbers.splice(2, 6);
console.log(remove);
console.log(numbers);

const numbers2 = [3, 6, 2, 32, 98, 33, 54];
const remove2 = numbers2.splice(1, 5, 34,36);
const part2 = numbers2.slice(1, 5);
console.log(remove2);
console.log(numbers2);


const together = numbers2.join("");
console.log(together);