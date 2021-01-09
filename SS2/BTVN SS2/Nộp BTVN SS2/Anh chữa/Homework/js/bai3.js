let n,count;
count = 0;
n = Number(prompt(""));
while(n !== parseInt(n) || n < 0){
    alert("Nội dung bạn nhập không phải số nguyên dương, vui lòng nhập lại")
    n = Number(prompt("Hãy điền số lượng số bạn muốn nhập"));
}
for (let a=1;a<=n;a++){
    let b = Number(prompt("Hãy điền số thứ " + a));
    if (a%2==0){
        count++;
    }
}
document.writeln("Có " + count + " số chẵn");