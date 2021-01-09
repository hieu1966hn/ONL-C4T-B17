let  n, count=0; // count la bien dem

n = Number(prompt("Nhap so nguyen duong ban muon")); // n = 1.08;

// neu anh nhap so <0 => nhap lai

// xet xem so nhap vao co hop le hay khong
while (n !== parseInt(n) || n < 0) {
    alert("noi dung ban nhap khong phai la so nguyen, vui long nhap lai");
    n = Number(prompt("Nhap so nguyen duong ban muon"));
}
console.log(n);




// n = 1234

for (let a = 1; a <= n; a++) {
    let b = Number(prompt("hay dien so thu" + a));
    if (a % 2 == 0) {
        count++; // khi nao gap so chan => count se tang len 1
    }
}
console.log("co " + count + " so chan");

