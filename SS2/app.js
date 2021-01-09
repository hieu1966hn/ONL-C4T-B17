// var b = 2;
/** JS Basic: 
 * kiểu dữ liệu cơ bản: 
 *  - Number: Kiểu Số trong js ( không chia ra là int, float ) => chỉ cần hiểu là cứ số => Number
 *  - String: Kiểu chữ trong JS
 *  - Array: Mảng là kiểu cấu trúc dữ liệu: dùng để tạo các ô nhớ và lưu trữ lại các giá trị trong ô nhớ đó
 *  - Object:
 *  - Boolean:TRUE, False
 * 
 */


// Number  khai bao Number: let, var, const

// console.log("in ra bien a", a); // trên trình duyệt hiển thị gì: 1

// console.log("in ra bien b",b);

// let a = 1; // biến mất khi mình thực hiện 1 hàm, khai báo đến đâu thì mới xuất hiện ở đó
// // console.log("in ra bien a", a);


// var b = 2; // luôn luon đẩy lên đầu ( tính chất hoisting: em khai báo ở đâu thì biến đều được đem lên đầu trước khi code được thực hiện)
// // dễ bị lỗi logic code (ít sử dụng)

// const c = 3; // giá trị khong doi => không bao giờ bị mất.
// // c = 4; // in ra gì trên màn hinh web: 
// console.log(c);


/**
 * String
 */

// let name = "Hieu";
// let age = "";
// let number = 18;
// // in ra màn hình console là:        Tên: Hieu, age: 18;
// // console.log("name: " + name, "age:", number);
// console.log(typeof (1 + "1")); // ket quả: 11

/**
 * Boolean: true false : toán tử: [>,<,==,===,!=, ||, &&]
 */
// console.log(1 + 1 == 2);
// console.log(1 > 2); // false

// Toan tu 3 ngoi
// if (2 > 3) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

// (1 > 2) ? console.log("true") : console.log("false"); 

/** : là tham số: dùng để Biếnlưu trữ giá trị: Biến có thể lưu trữ được những gì: [tất cả các kiểu dữ liệu]
 * 
 */
// let a = prompt("mời người dùng nhập vào giá trị")
// console.log(a);
// let a;
// var b;
// const c;
// Bien co the luu tru html thông qua DOM

const index = document.getElementById('header');
// // index.innerHTML = `<div class = "hello"></div>`;
// // console.log(index.innerHTML);
// index.style.color = "orange";
// index.style.backgroundColor = "black"

/** Hàm: sinh ra để mình tận dụng nó
 * 
 */

function sum(a, b) {
    //  console.log("ham dang duoc goi");
    return (a + b);
}
//  let ham = sum(1,2);
//  console.log(sum(1,2)); // 3
// console.log(ham);

function sayHello() {
    alert("hello guy");
}

/// tao 1 nut button hien thi trên trình duyệt, khi bấm vào nút đó thì sẽ hiện thị ra thông báo trong hàm sayHello

// 1. sử dung onclick và gọi hàm
// 2. Sử dụng addEventListener() để tạo sự kiện và gọi hàm đi kèm khi thực thi sự kiện đó: mouseover: khi di chuot qua thi thuc hien ham


// index.addEventListener('mouseover', function () {
//     index.style.display = 'none';
// })
// index.addEventListener('mouseout', function () {
//     index.style.display = 'block';
// })



/** Tạo 1 trang web Tỏ tình cơ bản:
 *      khi mà người dùng ( bạn gái) truy cập vào sẽ có 2 lựa chọn được hiển thị
 *                        Có                          Không
 *  mục đích:+ nếu như bạn ý thích mình; => chọn vào nút có => alert("Mình cũng thích cậu lắm")
 *           + nếu như bạn ý không thích:=> chọn vào nút không=> thì nội dung nút 
 * => Chuyển từ "không" -> "có".
 */
    function sayAgree(){
        alert("I love You tooo");
    }




const no = document.getElementById('no'); // gán thẻ cho biến no
const yes = document.getElementById("yes");// gán thẻ cho biến yes

console.log(no);
console.log(yes);

const flex = document.querySelector('.flex'); // cu phap goi toi the co class
console.log(flex);



no.addEventListener('mouseover', () => {
    // flex.style.flexDirection = "row-reverse";
    no.innerText = "Có";
    yes.innerText = "Không";
});

yes.addEventListener("mouseover", () => {
    no.innerText = "Không";
    yes.innerText = "Có";
})

// Tham khảo thêm và sử dụng mouseover: 