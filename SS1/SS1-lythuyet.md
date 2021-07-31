- 1 trang web được cấu thành từ 3 bộ ngôn ngữ cơ bản: HTML - CSS - Javascript (JS)
    - HTML: Ngôn ngữ đánh dấu siêu văn bản: Xây dựng khung trang web.
    - CSS: Trang trí trang web.

HTML + CSS ==> Web chưa có tính năng =>  Web tĩnh (web chết).. (VD: bấm đăng ký face=> but web đứng yên)..


    - Javascript: Xây dựng tính năng (đăng ký/ đăng nhập/ mở cam/ tắt cam...);
    like: Xây nhà: Khung nhà xong -> trang trí -> lắp đặt (điện, điều hòa, ...) 


- Lập trình web chia làm 2 ngành chính như sau: 
    + Front-end: Giao diện mà các em có thể nhìn thấy or tương tác được.
    + Back-end (server: JS): Phần xử lý bên trong trang web (Tính năng): VD: Xây dựng tính năng bật cam:


Chú ý: 
    - Trình tự chạy code trong HTML như sau:  Code chạy từ trên -> dưới và chạy từ trái -> phải.
    - Cú pháp chú thích code: ctrl + ?
    - Cú pháp sắp xếp code như sau: alt + shift + f
    - Cú pháp copy code trong Web: alt + shift + xuống (mũi tên xuống)



B1: Xây dựng khung trang web: (tạo file .html)
    - HTML: Được xây dựng bằng các bộ thẻ
    cú pháp thẻ như sau:
    <tênThẻ>..........................................</tênThẻ>
    Thẻ mở              Nội dung                        Thẻ đóng (có dấu "/" trước tên thẻ)
    - Tên thẻ HTML: Nằm ở bên trái ngoài cùng của "Thẻ mở"
        + h1-> h6: Tiêu để cấp 1 -> cấp 6. Thieo chiều cỡ chữ giảm dần.
        + D/Sách có thứ tự: cú pháp
            <ol>
                <li>Nội dung đầu mục</li>
            </ol>
B2: Trang trí trang web
    - Khi style cho 1 thẻ: => toàn bộ nội dung bên trong thẻ được hưởng cái style đó.
    - Cú pháp style:
        TênThẻ{
            thuộc-tính : giá trị ;
        }

    - class và id:
        + class: 1 nhóm đối tượng có chung thuộc tính: VD:
              .red {
                    color: red;
                  }
                * red: Trước dấu chấm là "red" => tên class
                * Khi các thẻ có thêm thuộc tinh là class ==> tất cả các "con" của thẻ đó đều được hưởng thuộc tính đó.