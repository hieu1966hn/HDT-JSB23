// // console.log("Hello World!!");

// ////// Chữa JSB sau buổi 5
// // Bài o1 :
// let lastName = "Nguyễn";
// let surName = 'Trung';
// let firstName = `Hiếu`;

// console.log(lastName + " " + surName + " " + firstName);
// // dấu cộng ở đây là cú pháp cộng chuỗi



// // Bai 02: 
// console.log(6 % 5); // in ra kết quả là: 


// // Bài 03: tính độ dài của String (chuỗi)
// console.log("Độ dài của biến lastName là:", lastName.length);
// console.log("Độ dài của biến surName là:", surName.length);
// console.log("Độ dài của biến firstName là:", firstName.length);


// Bài 05: Nhập số nguyên n bất kỳ.
//  Viết chương trình in các số chẵn/ Lẻ từ 1 đến n. 
//  (Các số chẵn 1 dòng. Các số lẻ 1 dòng). 

// Nhập số nguyên n bất kỳ: Sử dụng phương thức prompt để nhập giá trị (mặc định là chuỗi)
//  => giá trị được nhập vào ở dạng chuỗi: "3"
// => ép kiểu chuỗi về kiểu dữ liệu Number (kiểu số): Sử dụng phương thức Number(giá trị);
// let n = Number(prompt("Nhập vào số nguyên n!")); // => ép kiểu thành công chuỗi => số
// // VD: n = 4
// let dem = 1;

// // in ra số chẵn: 1 - 4
// console.log("in ra số chẵn");
// while (dem <= n) {
//   if (dem % 2 == 0) { // dể kiểm tra là số chẵn, ta sử dụng phép chia lấy dư: Dư 0 => số  chẵn
//     console.log(dem + " ");
//   }

//   dem = dem + 1; // gan lai gia tri cho bien  dem: || là: dem++;
// }

// // in ra so le
// console.log(" In ra số lẻ");
// dem = 1;
// while (dem <= n) {
//   if (dem % 2 != 0) { // dể kiểm tra là số lẻ, ta sử dụng phép chia lấy dư: Dư != 0 => số  lẻ
//     console.log(dem + " ");
//   }

//   dem = dem + 1; // gan lai gia tri cho bien  dem: || là: dem++;
// }


// Bài 06: Nhập một số n nguyên dương bất kỳ, 
// viết chương trình in các số nguyên tố từ 0 đến n bằng vòng lặp FOR.


// Số nguyên tố là số chia hết cho 1 và chính nó: (số nguyên tố bắt đầu tính từ 2 đổ lên)

