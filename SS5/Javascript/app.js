//  trong này mình sẽ viết code Javascript

// console.log("Hello World!!");


// khai báo thành công biến x (x không có giá trị gì cả)
// let x = "Hello Guys"; // gán x = 1
// console.log(x); // in ra thành công biến x


// // Khai báo = var
// var y = "12";
// console.log(y); // in ra gì nhỉ: 12 theo dạng chuỗi



// const pi = 3.14; // => Mình có 1 hằng số vĩnh viễn không thay đổi: 

// // console.log(pi);// kết quả in ra là gì? 
// // console.log(pi * 3);

// if (1 + 1 > 2) { //  2 > 2 ==> điều kiện sai
//   console.log("đk này đúng!!");
// }
// else {
//   console.log("đk này sai!!!"); // Nhật Minh
// }


// Có lớp 10 đang tuyền sinh những bạn có độ tuổi >= 15 thì đạt tiêu chuẩn vào lớp 10
// let Vinh = 14;
// let GiaKhanh = 15;
// let Hai = 16;

// if (Hai > 15) {
//   console.log("lớn hơn độ tuổi vào lớp 10");
// }
// else if (Hai == 15) { // so sánh bằng
//   console.log("đạt chuẩn độ tuổi vào lớp 10");
// }
// else { // trường hợp còn lại ==> Code chạy vào đây
//   console.log("Không đủ điều kiện vào lớp 10");
// }


// console.log(1);
// console.log(2);
// console.log(3);
// console.log("...");
// // .....
// console.log(1000);

/// Vòng lặp while: in ra từ 1 -> 1000
let i = 1;
while (i <= 1000) {
  console.log("lặp lần thứ " + i);
  i = i + 1;// tăng giá trị i lên 1 đơn vị. => hiện tại i = 2;
}
