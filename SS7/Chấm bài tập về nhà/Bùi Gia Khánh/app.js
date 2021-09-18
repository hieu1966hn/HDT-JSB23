console.log("Bài1");
var fruits = [["Grapes, 10"], ["Banana, 5"], ["Mango, 7"], ["Papaya, 8"]];
console.log("I eat 2 bananas a day");
console.log("I'm seldom into grapes");
console.log("Mango's juicy");
console.log("Papaya has plentiful seeds");

console.log("Bài2");

console.log("Kiểu1");
var fruits= {
    fruit1: "Grapes",
    fruit2:"Banana",
    fruit3: "Mango",
    fruit4: "Papaya"
};

for (i=0; i<1; i++) {
    console.log("I have 10 grapes")
    console.log( "I have 5 bananas")
    console.log("I have 7 mangos")
    console.log("I have 8 papayas")
};

console.log("Kiểu 2");
var fruits2 = {
    fruit1 : "Grapes",
    fruit2 :"Banana",
    fruit3 : "Mango",
    fruit4 : "Papaya",
};

for ( var key in fruits2)  {
    console.log(key)
};

console.log("Kiểu 3");
var language = [
    "English", 
    "Tiếng Việt",
    "中文",
];

for (value of language) {
    console.log(value)
};



