// khai báo hàm (chương trình con trong js)

// C1: 
function sayHello() {
  console.log("Hello World!");
}

console.log(sayHello());

//C2: Hàm trong biến
// const sayHello = function () {
//   console.log("Hello World!");
// }


//// Hàm có tham số truyền vào
// let a = 1;
// let b = 2;
// // khai báo hàm getSum
// function getSum(a, b) {
//   console.log("Tổng: ", a + b);
// }

// // Gọi tới hàm
// getSum(10, 10);


function getSum(a, b, c) {
  return a + b + c;
}


console.log(getSum(1, 1, 1));
