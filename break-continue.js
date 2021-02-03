const numbers = [3, 4,-6, 6, -5, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] < 0){
   continue;
  }
  console.log(numbers[i]);
}

const numbers2 = [3, 4, 6, 8, 9];
for (let i = 0; i < numbers2.length; i++) {
  if(numbers[i] > 8){
   break;
  }
  console.log(numbers2[i]);
}

