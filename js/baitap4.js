// // Đề bài : tính chu vi và diện tích hình chữ nhật

// // Bài làm :

// /*B1:khai báo và gán giá trị cho 2 cạnh a , b tương ứng lần lượt chiều dài , chiều rộng;
//     chu vi = p
//     diện tích = S
// */
// var a = 12 , b = 4  ,
//     S = 0 , P = 0
// ;

// /* B2: viết công thức tính chu vi (chiều dài + chiều rộng )*2 :
//  P = (a + b)*2   **/
// var P = (a+b)*2;

// /* B3: viết công thức tính diện tích (chiều dài * chiều rộng ) :
//  S =(a*b)   **/
// var S = a*b;

// /*B4: in 2 kết quả ra màn hình  */
// console.log("chu vi hình chữ nhật là: "+(P), ';' , "diện tích hình chữ nhật là: " +(S))

// ------------------------------
// JS Buoi 2&3
//********** */ Thiết kế UI và viết hàm tính chu vi và diện tích hình chữ nhật khi người dùng nhập chiều dài và chiều rộng , và hiện kết quả**********

//Phần khai báo hàm:
function chuViDienTich() {
  //B1 : khai báo biến " Length" và "Width" lần lượt là độ dài và độ rộng hình chữ nhật , sau đó tìm đến id có chứa ô nhập giá trị để lấy giá trị
  var length = parseFloat(document.getElementById("chieuDai").value);
  var width = parseFloat(document.getElementById("chieuRong").value);
  //B2: điều kiện nếu 2 giá trị  nhập vào có chữ hoặc kí tự hoặc chỉ nhập 1 kí tự thì sẽ thông báo cho người dùng là điền đủ 2 giá trị
  if (!length || !width) {
    alert("Vui lòng điền đầy đủ thông tin");
  }
  // B3: ngược lại nếu người dùng nhập đúng 2 giá trị thì sẽ có công thức tính chu vi và công thức tính diện tích
  // S: diện tích (S= a*b)
  //P: chu vi(P = (a+b)*2)
  //trong đó a,b là độ dài và độ rộng của hình chữ nhật đã khai báo ở trên
  else {
    var S = length * width;
    var P = (length + width) * 2;
    console.log(
      "chiều dài là: " + length,
      "chiều rộng là: " + width,
      "diện tích là: " + S,
      "chu vi là: " + P
    );

    //B5: sau khi tính xong in kết quả ra ô kết quả cho người dùng
    document.getElementById("notifi4").innerHTML =
      "Diện tích hình chữ nhật là: " + S + "<br> Chu vi hình chữ nhật là: " + P;
  }
}

// Phần gọi hàm gắn sự kiện onclick khi nhấn nút "Tính"
document.getElementById("btnChuviDientich").onclick = chuViDienTich;
