// // Đề bài : tính tổng của số có 2 ký số

// // Bài làm:
// //B1: tạo và gán giá trị
// var num = 56;
// var ten = 0;
// var unit = 0;

// // B2 : lấy ký số hàng chục
// ten = Math.floor(num / 10);

// // B3: lấy ký số hàng đơn vị
// unit = num % 10;

// //B4 : tính tổng của 2 số
// sum = ten + unit;

// // in kết quả ra màn hình
// console.log(
//   "Số hàng chục là: " + ten,
//   ";",
//   "Số hàng đơn vị là: " + unit,
//   ";",
//   "Tổng 2 số là: " + sum
// );

// JS Buoi 2&3
//********** */ Thiết kế UI và viết hàm tính tổng của số có 2 ký số; Hiển thị kết quả tông2 2 ký sií cho người dùng **********
//Phần khai báo hàm
function tong2KySo() {
  //B1 : khai báo và gắn biến "lay2KySo" để lấy giá trị người dùng nhập vào
  var lay2KySo = parseInt(document.getElementById("input2KySo").value);

  //B2: điều kiện nếu nhập vào số hoặc kí tự thì sẽ thông báo ngươiì dùng chỉ nhập số
  if (!lay2KySo) {
    alert("vui lòng điền số");
  } else {
    // B3: ngược lại nếu người dùng nhập đúng giá trị thì :

    // - Tách 2 ký số ra :
    // + phần chục = Math.floor(số nhập vào / 10)
    var ten = Math.floor(lay2KySo / 10);
    // + phần đơn vị = số nhập vào % 10
    var unit = lay2KySo % 10;
    console.log(lay2KySo, ten, unit);

    //B4: tổng 2 số = số phần chục + số phần đơn vị
    var tong2KySo = ten + unit;
    //B5: hiển thị kết quả cho người dùng :
    document.getElementById("notifi5").innerHTML =
      "<span style='color:blue'> Tổng 2 ký số là: </span>" + tong2KySo;
  }
}

//Phần gọi hàm , gắn sự kiện onclick khi người dùng nhấn nút " Tính"
document.getElementById("btn2KySo").onclick = tong2KySo;
