let n;
n = Number(prompt("Hãy điền độ cao tam giác bạn muốn"));
while(n !== parseInt(n) || n < 0){
    alert("Nội dung bạn nhập không phải số nguyên dương, vui lòng nhập lại")
    n = Number(prompt("Hãy điền độ cao tam giác bạn muốn"));
}
// xong buoc kiem tra so nguyen duong
// n =3 > hieu la co 3 hang va 3 cot

for (let i = 1; i <= n; i++){
let line = "";
    for (let j = 1; j <= i; j++){
        line = line + "* "
    }
    console.log(line);
}
document.writeln("Mở console có tam giác kìa :D");
// no bai 5