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
