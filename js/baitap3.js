// // Đề bài : viết chương trình quy đổi từ USD sang VNĐ , biết 1USD = 23.500vnd

// // Bài làm :

// /* B1: tạo và gán giá trị cho USD , VND */
// var Vnd = 23500,
//   Usd = 20;

// /* B2: viết công thức tính sau khi đổi */
// var sauKhiDoi = Usd * Vnd;

// /*B3: in kết quả ra màn hình  */

// console.log("số tiền sau khi đổi là: " + sauKhiDoi + "vnđ");

// ------------------------------------

// JS Buoi 2&3
//********** */ thiết kế UI và viết công thức đổi tiền USD sang VND và hiển thị kết quả **********
//Phần khai báo hàm :
function changeMoney() {
  // B1: khai báo và gắn cho biến "oneDola" là tỷ giá tiền Việt của 1$
  var oneDola = 23500;
  //B2: khai báo biến "takeInputDola" để lấy giá trị ở ô tiền đô nhập vào
  var takeInputDola = parseFloat(document.getElementById("inputDola").value);
  //B3: điều kiện nếu ở ô tiền đô nhập vào để trống hoặc nhập kí tự("e", "." , "," ..)thì ô kết quả tiền Việt để trống
  if (!takeInputDola) {
    document.getElementById("inputVietNam").value = "";
    return;
  }
  // B4 : nếu đúng yêu cầu nhập vào là số thì kết quả sẽ bằng số tiền đô * tỷ giá 1$
  var resultChange = takeInputDola * oneDola;
  console.log(resultChange);
  //B5: in kết quả ra ô tiền Việt
  document.getElementById("inputVietNam").value = new Intl.NumberFormat(
    "vi-VI",
    { style: "currency", currency: "VND" }
  ).format(resultChange);
}

// Phần gọi hàm, gắn sự kiện onclick khi nhấn nút "Đổi"
document.getElementById("bntChange").onclick = changeMoney;
