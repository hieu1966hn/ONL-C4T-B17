let n;
n = Number(prompt("Nhập số nguyên dương bạn muốn"));
while(n !== parseInt(n) || n < 0){
    alert("Nội dung bạn nhập không phải số nguyên dương, vui lòng nhập lại")
    n = Number(prompt("Nhập số nguyên dương bạn muốn"));
}
for(let j = n; j > 1; j++){
    let count = 0;
for(let i = 1; i<=j; i++){
    if(j%i==0){
    count++;
    }
}
    if(count == 2){
        document.writeln("Số nguyên tố gần nhất là: " + j);
        break;
    }
}