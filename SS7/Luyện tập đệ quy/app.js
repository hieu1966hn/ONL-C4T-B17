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

///VD: de quy
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
