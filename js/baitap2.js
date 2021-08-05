// // Đề Bài : nhập vào 5 số thực và tính giá trị trung bình của 5 số

// // Bài làm :

// /* B1: tạo và gán 5 giá trị cho 5 biến a b c d e , khai báo biến Tổng và biến Trung bình*/
// var a = 6,
//   b = 2.4,
//   c = 9,
//   d = 26,
//   e = 36.6;

// var sum = 0,
//   average = 0;

// /* B2: tính tổng của 5 số */
// var sum = a + b + c + d + e;

// /* B3: tính giá trị trung bình của 5 số */
// var average = sum / 5;

// /* B4: in ra màn hình kết quả*/
// console.log(
//   "Tổng của 5 số là: " + sum,
//   ";",
//   "Giá trị trung bình của 5 số là: " + average
// );

// JS Buoi 2&3
//********** */ Thiết kế UI và viết hàm trung bình cộng 5 số đã nhập, và hiện kết quả**********

//Phần khai báo hàm
function averageCalc() {
  //B1: khai báo 5 biến từ takeNum1 -> takeNum5 để lấy 5 giá trị ở 5 ô mà người dùng nhập vào
  var takeNum1 = parseFloat(document.getElementById("num1").value);
  var takeNum2 = parseFloat(document.getElementById("num2").value);
  var takeNum3 = parseFloat(document.getElementById("num3").value);
  var takeNum4 = parseFloat(document.getElementById("num4").value);
  var takeNum5 = parseFloat(document.getElementById("num5").value);

  // B2: Dùng câu điều kiện nếu 1 trong các số được lấy không giống với type hoặc chưa điền , thì hiển kết quả ở ô kết quả cho người dùng biết

  if (!takeNum1 || !takeNum2 || !takeNum3 || !takeNum4 || !takeNum5) {
    document.getElementById("resultAverage").innerHTML =
      "<p style='color:red'>Please enter all number</p>";
    return;
  }

  // B3: nếu người dùng đã nhập đúng và đầy đủ 5 số thì khai báo biến "sum5Num " để cộng tổng 5 số đã nhập
  var sum5Num = takeNum1 + takeNum2 + takeNum3 + takeNum4 + takeNum5;
  //B4: sau khi có tổng 5 số rồi thì tạo 1 biến "average5Num" để tíh giá trị trung bình = tổng 5 số / 5
  var average5Num = sum5Num / 5;
  // B5: hiển thị ra console để kiểm tra giá trị nhập vào  ,và kết quả đã đúng chưa
  console.log(
    takeNum1,
    takeNum2,
    takeNum3,
    takeNum4,
    takeNum5,
    sum5Num,
    average5Num
  );
  //B6:nếu đã đúng hết tìm đến id của ô chưa kết quả để in ra kết quả tính trung bình
  document.getElementById("resultAverage").innerHTML = average5Num;
  document.getElementById("reusultBg").style.backgroundColor = "#1e88e5";
}

//Phần gọi hàm : viết hàm gắn sự kiện Onclick vào nút "Tính" thì sẽ chạy hàm khai báo ở trên
document.getElementById("btnReset").onclick = reset;

// phần tạo thm nút xóa kết quả để nhập phép tính mới
document.getElementById("btnAverage").onclick = averageCalc;
function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("num3").value = "";
  document.getElementById("num4").value = "";
  document.getElementById("num5").value = "";
  document.getElementById("resultAverage").innerHTML = "";
  document.getElementById("reusultBg").style.backgroundColor = "#546e7a";
}
