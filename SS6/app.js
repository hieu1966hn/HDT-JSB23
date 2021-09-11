//  làm quen với khái niệm mảng: 
//  Bài toán lưu trữ menu nhà hàng

// let menu = "vịt quay, thịt chó"; // => không phù hợp để lưu trữ dạng list



// khai báo mảng menu
// let menu0 = []; // => khai báo thành công  1 mảng menu
// let menu1 = [1,2]// => tạo ra 1 mảng có sẵn 2 phần tử 
// let menu2 = [3,4,5] // => tạo ra 1 mảng có sẵn 3 phần tử 


let arr = [] // khởi tạo 1 mảng thành công

// *C: Thêm 1 phần tử vào mảng thông qua phương thức push(): 
arr.push("Hoàng Việt Thắng"); // dấu () biểu thị việc thực thi phương thức 
arr.push("Nguyễn Hải", "Nguyễn Nhật Minh");



/// *R: In ra các phần tử trong mảng
console.log("mảng arr sau khi thêm 1 phần tử là:", arr);

// *U: Sửa Nguyễn Hải -> Nguyễn Tiến Hải
arr[1] = "Nguyễn Tiến Hải"; // Gán vị trí thứ 1 trong mảng với giá trị là: 

console.log("mảng arr sau khi  Update là", arr);


//* Xóa 1 phần tử trong mảng: Sử dụng phương thức splice()
arr.splice(1, 2);// PHần tử ở vị trí thứ 2 => xóa 1 phần tử kể từ nó

console.log("mảng arr sau khi  Delete phần tử 2 là", arr);


