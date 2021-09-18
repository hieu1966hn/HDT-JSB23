- Khai báo đối tượng:
  cú pháp
  let <tênđốitượng> = {}

- Khai báo biến: let, var, const

- Toán tử trong JS: =, +,-,\*,/ \_\_\_\_ <,>,==, ===

- Câu điều kiện: if - (else if) - else

- 3 vòng lặp cơ bản: while, do - while, for

- Mảng: Array: let arr = [ ];

- Đối tượng: Object: let obj = { };

- Function: hàm trong Javascript

  - Định nghĩa hàm; Chức năng, gọi chung là 1 chương trình con có thể được gọi tới ở bên ngoài hoặc bên trong chính nó.

  - Khai báo hàm: sử dụng từ khóa "function", theo sau nó là:

    - Tên hàm
    - Danh sách các tham số truyền vào hàm, được đặt trong ngoặc đơn và cách nhau bởi dấu ","
    - Các câu lệnh JS để tạo ra 1 hàm, được đặt trong ngoặc nhọn {...}

    VD

  - Gọi hàm: Việc khai báo hàm sẽ ko thực thi nó. Định nghĩa đơn giản chỉ là đặt tên cho hàm và chỉ định việc cụ thể sẽ làm khi hàm được gọi.

  * VD gọi hàm:

    function sayHello() {
    console.log("Hello World!");
    }

    sayHello(); // gọi hàm

  - Hàm có và không trả về giá trị
    Trong JS có 2 loại hàm như trên

    - Đối với hàm có giá trị trả về thì phải dùng từ khóa return
    - Đối với hàm không có giá trị trả về thì không dùng từ khóa return
    - Sau khi chạy câu lệnh return: Lập tức thoát khỏi hàm.

    VD:
    function getSum(a, b) {
    return a + b;
    }

  - Toán tử:
    - ||: toán tử hoặc: chỉ cần 1 trường hợp đúng là được
    - && : toán tử và: Cần 2 trương cùng đúng, hoặc cùng sai
