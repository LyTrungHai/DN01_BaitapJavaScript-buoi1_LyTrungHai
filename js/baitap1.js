// // Đề bài : viết chương trình tính lương, biết lương 1 ngày là : 100.000

// // bài làm

// /*khối 1 : input
//  *lương một ngày
//  *số ngày làm
//  */
// var luongMotNgay = 100000,
//   soNgayLam = 30,
//   tongLuong = 0;

// /**khối 2: xử lý
//  * viết công thức tính tổng lương : Tổng lương = lương một ngày * số ngày làm
//  */
// var tongLuong = luongMotNgay * soNgayLam;

// /**khối 3:output
//  * tổng lương
//  */
// console.log("tổng lương là: " + tongLuong + "vnđ");

//------------------------------------------------------------------------

// JS Buoi 2&3
//********** */ Thiết kế UI và viết hàm tính lương ; Hiển thị lương đã tính cho User **********

//Phần khai báo hàm : viết hàm cho người dùng nhập số ngày làm và bấm nút tính lương thì mới bắt đầu tìm đến ID có giá trị số ngày làm và lương một ngày, sau đó nhân với nhau và in ra màn hình:
function payRoll() {
  //B1: trong hàm khai báo 2 biến "takeDayWork và TakeSalaryPerDay" để lấy giá trị nằm ở 2 ô lần lượt là "số ngày làm " và lương một ngày
  var takeDayWork = document.getElementById("dayWork").value;
  var takeSalaryPerDay = document.getElementById("salaryPerDay").value;
  //B2: khai báo "totalSalary" (Tổng lương) để chứa công thức tính lương = số ngày làm * lương một ngày
  var totalSalary = takeDayWork * takeSalaryPerDay;

  //B3: in kết quả ra Console để kiểm tra kết quả lấy giá trị đã đúng chưa
  console.log(
    "số ngày làm: " + takeDayWork,
    "lương một ngày: " + takeSalaryPerDay,
    "Tổng lương: " + totalSalary
  );
  //B4: viết hàm tìm đến thẻ p trong Html để hiện lên đoạn thông báo tính lương cho người dùng và chuyển thành đơn vị tiền Việt Nam
  document.getElementById("resultPayRoll").innerHTML =
    "Tổng lương của bạn là: " +
    new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
    }).format(totalSalary);
  // document.querySelector("form").reset();
}

//Phần gọi hàm: viết hàm gắn sự kiện Onclick vào nút tính lương thì sẽ chạy hàm khai báo ở trên
document.getElementById("btnSalary").onclick = payRoll;
