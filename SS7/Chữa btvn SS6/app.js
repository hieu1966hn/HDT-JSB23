// chữa bài 1:
// let arr = [1, 2, 3];

// let Hieu = {
//   name: "Nguyễn Trung Hiếu",
//   age: 25,
//   address: "Tây Hồ, Hà Nội"

// }

// console.log(Hieu.name);
// console.log(Hieu.age);
// console.log(Hieu.address);
let x = "tuoi"
let fruits = [
  ["Nho", 15],
  ["Dưa hấu", 10],
  ["Dưa leo", 1],
]



for (let i = 0; i < fruits.length; i = i + 1) {
  console.log(`Tôi có ${fruits[i][1]} quả ${fruits[i][0]}`);
}

for (let key in fruits) {
  // console.log(key);
  console.log(`Tôi có ${fruits[key][1]} quả ${fruits[key][0]}`);
}

for (let key of fruits) {
  // console.log(key);
  console.log(`Tôi có ${key[1]} quả ${key[0]}`);
}

