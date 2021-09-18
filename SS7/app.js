// khai báo hàm (chương trình con trong js)

// C1: 
function sayHello() {
  console.log("Hello World!");
}

// console.log(sayHello());

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


// function getSum(a, b, c) {
//   return a + b + c;
// }


// console.log(getSum(1, 1, 1));


/**
 * Bài tập: Người tạo ra 1 mảng có tên là menu chứa sẵn ban đầu là 3 món ăn:
 * a) Khi nguoi dùng mới vào web,
 * hiển thị thông báo mời người dùng nhập vào: C,R,U,D
 *  + C: -> người dùng nhập món ăn muốn thêm vào mảng
 *  + R: -> người dung sẽ thấy toàn món ăn trong menu
 *  + U: -> Người dùng nhập vào vào tên món muốn update
 *  => người nhập tên món ăn mới (món này thay thế cho tên món cũ)
 *  + D: -> Người dùng nhập vào món ăn muốn xóa.
 * b) Sau khi nhập xong các yêu cầu trên, lại hỏi người dùng nhập vào C,R,U,D
 * -> Nếu nhập chữ khác -> dừng vòng lặp.
 */

let menu = ["thịt chó", "lẩu cá lăng", "đậu lướt ván"];


let input = prompt("Mời người dùng nhập vào: C,R,U,D");
if (input === 'c') {
  menu.push(
    prompt("Mời người dùng nhập món ăn mới")
  )
}

else if (input === 'r') {
  alert(`Menu nhà hàng là ${menu}`);
}

else if (input === "u") {
  let tenMonMuonUpdate = prompt("Mời người dùng nhập vào món ăn muốn update");
  let viTriUpdate = menu.indexOf(tenMonMuonUpdate);
  menu[viTriUpdate] = prompt("Mời người dùng nhập vào món ăn mới");
}
else if (input === "d") {
  let tenMonMuonDelete = prompt("Mời người dùng nhập vào món ăn muốn Delete");
  let viTriDelete = menu.indexOf(tenMonMuonDelete);
  // xóa 1 phần tử trong mảng
  menu.splice(viTriDelete, 1);
}

else {
  alert("Không tồn tại yêu cầu, chấm dứt vòng lặp");
}

