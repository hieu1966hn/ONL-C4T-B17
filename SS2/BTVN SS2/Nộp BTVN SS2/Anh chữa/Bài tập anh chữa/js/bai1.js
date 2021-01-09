let a, b;

a = prompt('Hay nhap chuoi bạn muốn'); // a ="abcd"

b = "";

for (let i = a.length - 1; i >= 0; i--) {
    b = b + a[i]; // b="d",b="dc",b="dcb"
}
console.log("string dao nguoc la: ", b);

