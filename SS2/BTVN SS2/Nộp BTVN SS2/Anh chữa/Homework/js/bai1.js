let a,b;
a = prompt("Hãy nhập chuỗi bạn muốn");
b = ""
for (var i = a.length - 1; i >= 0; i--) { 
    b += a[i];
}
document.writeln("String đảo ngược là: " + b);