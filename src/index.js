let array = [
  {
    name: "LAVG",
    age: 28
  },
  {
    name: "MOAL",
    age: 28
  },
  {
    name: "SWAS",
    age: 32
  },
  {
    name: "SUMI",
    age: 32
  }
];

count = {};

for (let arr of array) {
  count[arr.age] = count[arr.age] ? count[arr.age] + 1 : 1;
  console.log(count[arr.age]);
}

console.log(count);
