// // Ôn tập lại về đối tượng:
// // Khai báo 1 đối tượng
// let Nguoi = {};

// /**
//  * Thuộc tính:
//  * - name
//  * - age
//  * - id (cccd/ cmtnd)
//  * - 
//  * Phương thức:
//  * - đi
//  * - nói
//  *
//  */

// // Thêm thuộc tính vào cho đối tượng:
// Nguoi.name = "Thắng";
// Nguoi.age = 15;
// Nguoi.id = "0123456789"
// console.log(Nguoi);
// // Thêm phương thức (hàm) vào cho đối tượng;
// Nguoi.go = function () {
//   alert("go go go"); // câu lệnh thông báo trên web
// }

// Nguoi.say = function () {
//   alert("Hello World");
// }

// // gọi tới phương thức trong obj (Object: đối tượng)
// Nguoi.say();
// Nguoi.go();


// Sơ lược lại về hàm: Đặt tên hàm theo quy tắc camel case 
// khai báo hàm
// function sayHelloWorld() {
//   alert("Hello World!!");
// }

// // Call back function: Gọi tới hàm đã khai báo:
// sayHelloWorld();




// Thao tác với DOM
// Khai báo 1 biến: biến này sẽ chứa thẻ lấy được từ bên HTML
// let id = "heading"
// let h1 = document.getElementById(id);

// console.log(h1);



// // Khai báo hàm đổi màu đỏ
// function changeRedColor() {
//   h1.style.color = "red";
//   h1.innerText = "Đã sử dụng DOM để thay đổi ND thẻ H1"
// }

///// getElementByTagName()
// let arrH1 = document.getElementsByTagName('h1'); // Khai báo 1 biến để chứa toàn bộ thẻ h1 bên trong HTML
// console.log(arrH1);

//// querySelector()

// lưu ý; với class ta thêm dấu ".", còn với id ta thêm dấu "#" vào trước tên chuỗi
// let query = document.querySelector('.item2');
// console.log(query); // in ra để xem

// function changeColorQuery() {
//   query.style.color = "blue"
// }


//addEventListener

// let h1 = document.querySelector("#heading");

// /// bắt sự kiện dành cho thẻ h1 , ta sử dụng phương thức addEventListener
// h1.addEventListener("click", function () {
//   h1.style.color = "blue"
// })


let form = document.getElementById("formSignUp");
form.addEventListener("submit", function (event) {
  // Sự kiện reload lại trang khi submit là sự kiện default của broswer
  event.preventDefault();// Phương thức ngăn trình duyệt tự động reload
  // console.log("đã submit form thành công");

  // tạo 1 đối tượng user với các từ khóa và giá trị tương ứng
  const user = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
  }

  console.log(user);
})


const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");

// định nghĩa hàm toLogin();
function toLogin() {
  signUpForm.classList.add('displayNone');
  signInForm.classList.remove('displayNone');
}

// hàm quay về trang đăng ký
function toRegister() {
  signInForm.classList.add('displayNone');
  signUpForm.classList.remove('displayNone');
}