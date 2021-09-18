var fruits = [["Grape", 15], ["Apple", 3], ["Durian", 4]];
console.log("i have", fruits);

let loop = "";
for (let x = 0; x <= fruits.length; x++) {
    loop = fruits[x];
    console.log("i have", loop);
}

let loop1 = "";
for (const x in fruits) {
    loop1 = fruits[x] + "";
    console.log("i have", loop1);
}

let loop2 = "";
for (const x of fruits) {
    loop2 = x + ""
    console.log("i have", loop2);
}


let mydog = { name: "ngao", legs: "4", friends: "everything" };
console.log("cho cua minh ", mydog);
mydog.name = "Husky"
console.log("cho cua minh sau khi doi ten la:", mydog.name);
delete mydog.friends;
console.log("that ra cho cua minh ko co ban", mydog);
mydog.color = "brown";
console.log(mydog);