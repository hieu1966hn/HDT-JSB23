- Javascript (JS) là gì?

* Là ngôn ngữ lập trình bậc cao, và nó thường được sử đụng cho web (cụ thể hơn là được nhúng vào HTML).

Các lợi thế của Javascript

- Sự tương tác Server ít hơn:
- Phản hồi ngay lập tức tới khách truy cập:
- Khả năng tương tác tăng lên:
- Giao diện phong phú hơn:
- Nhẹ, nhanh

Lưu ý:

- File JS có đuoi .js
- Để file.js hoạt động, ta phải nhúng file.js vào HTML thông qua thẻ script với thuộc tính là src (vị trí nhúng file.js: trước thẻ đóng body)
- Màu của số là màu tím đậm
- Màu của chuỗi là màu trắng

- Khai báo biến trong Javascript: Biến dùng để lưu trữ dữ liệu trong đó (số,chuỗi, mảng, ....)

  - Có 3 cách khai báo biến như sau:
    - let <tênbiến>; Nên dùng
    - var <tênbiến>; Hạn chế dùng
    - const <tênbiến>; :Hằng số không thay đổi. Nên dùng

- Toán tử trong JS

  - "+": phép cộng
  - "-": phép trừ
  - "\*": phép nhân
  - "/": phép chia

    <!-- Toán tử điều kiện -->

  - ">": phép so sánh lớn
  - "<": phép so sánh nhỏ
  - "==": phép so sánh bằng (so sánh tương đối)
  - "===": phép so sánh bằng (so sánh tuyệt đối)
  - "! =": phép so sánh khác.
    ==> Tất các các phép toán trên đều trả về kết quả: đúng hoặc sai

- Câu điều kiện: if - (else if) - else: Sử dụng để lọc giá trị, loại bỏ,...

  - Cú pháp:
    if(<biểu thức điều kiện>){
    ... thực hiện code tại đây
    }
    else if(đk){
    .... thực hiện code nếu điều kiện đúng và thoát khỏi if - else
    }
    else{
    ... thực hiện code khi điều kiện trả về sai
    }

    ==> Nếu <điều kiện>: đúng => thực hiện code trong if
    sai => bỏ qua code trong if
