// Đề Bài : nhập vào 5 số thực và tính giá trị trung bình của 5 số

// /* B1: tạo và gán 5 giá trị cho 5 biến a b c d e , khai báo biến Tổng và biến Trung bình*/
// var a = 6,
//   b = 2.4,
//   c = 9,
//   d = 26,
//   e = 36.6;

/* B1: tạo và gán 5 giá trị cho 5 biến a b c d e , khai báo biến Tổng và biến Trung bình*/
var a = 6,
  b = 2.4,
  c = 9,
  d = 26,
  e = 36.6;

var sum = 0,
  average = 0;

/* B2: tính tổng của 5 số */
var sum = a + b + c + d + e;

/* B3: tính giá trị trung bình của 5 số */
var average = sum / 5;

/* B4: in ra màn hình kết quả*/
console.log(
  "Tổng của 5 số là: " + sum,
  ";",
  "Giá trị trung bình của 5 số là: " + average
);
