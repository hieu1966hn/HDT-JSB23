//bài 1
let arr = []
arr.push("apple", 1)
arr.push("banana", 2)
arr.push('kiwi', 3)

console.log("i have:", arr);

//bài 2
let text = "";
for (let i = 0; i < arr.length; i++) {
  text += + i + arr[i];
}

for (let x in arr) {
  text += arr[x];
}

for (let x of arr) {
  text += x;
}

//bài 3
var myDog = {
  "name": "Ngáo",
  "legs": 4,
  "friends": ["everything!"]
}
console.log("mảng arr sau khi thêm 1 phần tử là:", myDog);
myDog[0] = "Husky";
// myDog.push( "color:brown")

