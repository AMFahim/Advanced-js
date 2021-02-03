const student = [
  {id: 31, name:"Yakub"},
  {id: 32, name :"Mashraful"},
  {id: 33, name:"Fahim"},
  {id: 34, name:"Rahat"},
]
// const output = student;
// for (let output = 0; output < student.name; output++) {
//   const names = student[output];
//   const result =names.name;
//   output.push(result);
// }
// console.log(output)


const name = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 32);
const biggerOne = student.find(s =>s.id > 32)
console.log(biggerOne);