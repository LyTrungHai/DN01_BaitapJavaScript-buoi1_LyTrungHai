// Đề bài : tính tổng của số có 2 ký số

// Bài làm:
//B1: tạo và gán giá trị
var num = 56;
var ten = 0;
var unit = 0;

// B2 : lấy ký số hàng chục
ten = Math.floor(num / 10);

// B3: lấy ký số hàng đơn vị
unit = num % 10;

//B4 : tính tổng của 2 số
sum = ten + unit;

// in kết quả ra màn hình
console.log(
  "Số hàng chục là: " + ten,
  ";",
  "Số hàng đơn vị là: " + unit,
  ";",
  "Tổng 2 số là: " + sum
);
