let a,n;
n = Number(prompt("Nhập số nguyên dương bạn muốn"));
while(n !== parseInt(n) || n < 0){
    alert("Nội dung bạn nhập không phải số nguyên dương, vui lòng nhập lại")
    n = Number(prompt("Nhập số nguyên dương bạn muốn"));
}

n = String(n);
a = n.length;
document.writeln("Số đó có: " + a + " chữ số");