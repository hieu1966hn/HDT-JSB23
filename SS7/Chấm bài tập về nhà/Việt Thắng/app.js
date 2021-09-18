// Bài 1
var manchesterunited = ["Ronaldo", 7]
console.log("Ronaldo số 7")
var manchesterunited = ["Pogba", 6]
console.log("Pogba số 6")
var manchesterunited = ["Rashford", 10]
console.log("Rashford sô 10")
// Bài 2

let dem = 1;
do {
    console.log("Ronaldo" + dem);
    dem = dem + 1;
    console.log("7" + dem);
    dem = dem + 1;
}
while (dem <= 1);

// let i = 1;
//  while (i <= 1) {
//    console.log("Pogba" + i);
//    i = i + 1;
//    console.log("6" + i);
//    i = i + 1;
//  }

var i = 1;
for (var i = 1; i < 2; i++) {
    console.log("Rashford")
    console.log("10")
}
// Bài 3
var myDog = {
    "name": "Ngáo",
    "legs": "4",
    "friends": ["everything!"]
}
delete myDog.friends;
console.log(myDog)
let arr = []
arr.push("color:brown")
console.log("myDog:", arr)