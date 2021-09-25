// Ôn tập lại về đối tượng:
// Khai báo 1 đối tượng
let Nguoi = {};

/**
 * Thuộc tính:
 * - name
 * - age
 * - id (cccd/ cmtnd)
 * - 
 * Phương thức:
 * - đi
 * - nói
 *
 */

// Thêm thuộc tính vào cho đối tượng:
Nguoi.name = "Thắng";
Nguoi.age = 15;
Nguoi.id = "0123456789"
console.log(Nguoi);
// Thêm phương thức (hàm) vào cho đối tượng;
Nguoi.go = function () {
  alert("go go go"); // câu lệnh thông báo trên web
}

Nguoi.say = function () {
  alert("Hello World");
}

// gọi tới phương thức trong obj (Object: đối tượng)
Nguoi.say();
Nguoi.go();