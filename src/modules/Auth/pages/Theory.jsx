// Làm việc với form thì cái khó nhất chính là validation form đó

// Khi mà submit cái form thì cũng phải duyệt qua tất cả các ô input xem có ô nào lỗi ko để hiển thị ra cho người dùng thấy
// Nên thông thường ít ai mà tự xử lý các validation của form cả người ta sẽ sử dụng thư viện của react hỗ trợ làm việc với form một cách nhanh chống.
// Thì một trong những libary người ta hay sử dụng là formik và gần đây react cho ra mất hooks mới để hỗ trợ trong việc xây dựng form là react hook form
//        - Thằng formik thì về cơ bản nó vẫn sử dụng cơ chế state để quản lí các ô input
//        - Ưu điểm của react hook form là nó dựa vào cơ chế ref để quản lí form