// Đệ quy là gì
//  Xóa các phần tử trùng  trong  mảng
// let input = ["a", "b", "c", "d", "a", "a", "c"];
// // output = ["a", "b", "c", "d"];
// let output = [];
// for(let i=0;i<input.length;i++){
//     if(output[i] == input[i]){
//         continue;
//     }
//     else{
//         output.push(input[i]);
//     }
// }
// console.log(output);

// /VD: de quy
// function deQuy(num) {
//   // khôngg khuyến khích dùng nhiều (thật sự nắm chắc về nó thì nên dùng);
//   if (num < 0) { // -1<0 =>> true
//     // dừng
//     return;
//   }
//   console.log(num); // in ra num sau mỗi vòng lặp
//   num--;    // num = num -1; tương tự với num++;
//   // và giá trị của num sau dòng 24 là: 9 (num = 9)
//   deQuy(num); // lần lặp cuối num =0;
// }
// deQuy(10);

//Bài toán A: Loop(vòng lặp) -> Cpu
// Bài toán A: Đệ Quy -> Cpu (rất tốn cpu);

// đi kèm với gọn code, trình bày đẹp -> rất ngốn cpu

// => để sử dụng đệ quy -> phải có điểm dừng

// VD: Countdown (làm bằng đệ quy ( đếm từ 10->1))

// function countDown(num){ // countDown(0)
//     if(num>0){
//         console.log(num); // in ra 3
//         return countDown(num -1); // (3-1) = 2 => countDown(2); countDown(1);
//         // countDown(0);
//     }
//     // else{
//     //   return num;  // num =0 => kết thúc vòng lặp
//     // }
// }

// // countDown(3); // kết quả in ra màn hình:
// console.log(countDown(10));

// 3
// 2
// 1

/** VD: sử dụng đệ quy (hàm) để tính giai thừa của 1 số
 * 1. Biết n! = 1*2*...*(n-1)*n;
 * 2. VD: 3! = 6, 5! = 120,...
 * 3! = 1*2*3;
 */

// function tinhGiaiThua(n) {
//   let output = 1;
//   for (let i = n; i > 0; i--) {
//     output = output * i;
//   }
//   return output;
// }

// function deQuyGiaiThua(n) {
//   if (n > 0) { // cực kỳ quan trọng
//     return n*deQuyGiaiThua(n - 1); // kết quả trả về với đk  (N>=0) == 0
//   }
//   return 1; // dừng đệ quy
// }
// // console.log(tinhGiaiThua(3)); // kết quả là: 6
// console.log(deQuyGiaiThua(10));

// ES6(ECMAScript) là gì:  là một thương hiệu đặc tả ngôn ngữ kịch bản
// được tiêu chuẩn hóa bởi ECMA internation (Hiểu chung là 1 quy chuẩn ngôn ngữ, sinh ra để cho Javascript)

/**
 * 1. let, const: Câu lệnh khai báo (thay thế cho var [vì nó hay gây lỗi bất đồng bộ code])
 * 2. Arrow function: cú pháp khai báo hàm mới ( thay thế cho function (){} )
 * 3. Classes: ...
 */

/** phân biệt Var/ Let, Const:  (giống nhau: đều có thể khai báo biến)
 *
 *
 */
// if (true) {
//   {
//     {
//       {
//         var course = "Javascript Basic"; // trong 1 khối độc lập
//         // console.log(test); // in ra gì??
//         // console.log(PI); // in ra gì??
//         {
//           // test và PI đang nằm ở khối con (khối con của console.log())
//           let test = "Hello";
//           const PI = 3.14;
//           var demo = "demo"; // khác biệt
//         }
//       }
//     }
//   }
// //   console.log(demo);
// //   console.log(test);
// }

// console.log(course); // vẫn lấy được giá trị khởi tạo của var
// console.log(test); // test vẫn chưaa được khai báo

//  khác nhau:  (là phạm vi truy cập);
// khai bao bằng: var thì phạm vi truy cập trên toàn code
// khai bao bằng: let/const thì phạm vi truy cập chỉ ở trong khối đó || khối con nằm bên trong nó

// const a = 3; // hằng số không thể thay đổi
// // a = 1; // error tạm thời dừng code ở đây (không chạy code tất cả dòng dưới nó)
// console.log(a); // in ra gì ??

////////////////////////////////////////////////////////////
/// học về Arrow function (hàm mũi tên)

// let logger = function (log) { // hiểu logger thay thế cho tên hàm
//   // day la 1 ham co ban minh hay viet
//   console.log(log); // lệnh in ra
//   //và function này chưa có câu lệnh trả về giá trị (=> hàm không trả về gì)
//   return 1000; // giá trị trả về
// };
// // logger("Message...."); // gọi hàm logger
// console.log(logger(12345678910)); // kêt quả là gì:

//khởi tạo biến để lưu trữ hàm Arrow function
const logger = (log) => { // const thi khong doi (unchange)
  // Tại sao để là const vì hàm này sẽ không đổi nội dung
  // và nó giữ vững nhiệm vụ của mình khi được tạo ra


  // Arrow function: luyện tập kỹ (sau này đi làm sẽ hầu như chỉ sử dụng ()=>{ ... code.....})
  console.log(log);
};
// logger("đây là code Arrow function");


// gán giá trị mới cho biến logger ( tại sao lại gán được? Vì do khai báo biến là let => có thể gán)
// => cách giải quyết: Để không mất đi công dụng của hàm: (Mặc định khai báo tên hàm với cú pháp 'const')
// logger = 1;
// console.log(logger);

// logger("Như trên");// logger is not a function
// logger(['HI']); // cú pháp thực thi hàm


/**
 * Lưu ý: 
 * 1. sau này khi khai báo, sử dụng let/const để khai báo biến 
 * 2. const nên sử dụng để khai báo hàm (với hàm thông thường) && Arrow function: ()=>{}
 * 3. Đệ quy là gì? cách sử dụng để gọn code hơn (tối ưu hóa dòng) 
 * => ngốn cpu (dễ tràn bộ nhớ, Cần luyện tập nhiều) 
 * 4. Giới thiệu về ES6 là gì? 
 * 5. Class (lớp): để làm gì?? (nên ôn lại, tìm hiểu thêm nhiều)
 */

 //Cú pháp khai bao 1 lop(class)
class Person{ // kiểu dữ liệu Person( kiểu dữ liệu người-> mình đang khởi tạo 1 kiểu dữ liệu mới)
    //hàm khởi tạo (Khai sinh)
    constructor(name,age,address,cccd){
        this.cccd = cccd,
        this.name = name,
        this.age = age,
        this.address = address 
    }

    ///in ra toàn bộ thông tin của người đó
    //khởi tạo phương thức getInfo(); ...
    getInfo(){ // lấy ra thông tin của người đó
        return `Tên: ${this.name}\nTuổi: ${this.age}\nĐịa chỉ: ${this.address}\nCCCD: ${this.cccd}`;
    }
    sayheello(){

    }
}

///đi vào code sau khi xong phần khởi tạo class(lớp Người)
// khởi tạo bạn Dương với kiểu dữ liệu là Person(người)
let Duong = new Person('Dương',18,'Việt Nam', 012345);
console.log(Duong.getInfo());
console.log(typeof Duong);
