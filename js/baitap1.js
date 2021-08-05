// Đề bài : viết chương trình tính lương, biết lương 1 ngày là : 100.000

// bài làm

/*khối 1 : input
 *lương một ngày
 *số ngày làm
 */
var luongMotNgay = 100000,
  soNgayLam = 30,
  tongLuong = 0;

/**khối 2: xử lý
 * viết công thức tính tổng lương : Tổng lương = lương một ngày * số ngày làm
 */
var tongLuong = luongMotNgay * soNgayLam;

/**khối 3:output
 * tổng lương
 */
console.log(
  "lương một ngày là: " + luongMotNgay + "số ngày làm là: " + soNgayLam,
  " tổng lương là: " + tongLuong + "vnđ"
);
