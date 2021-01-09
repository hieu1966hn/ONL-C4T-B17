//nhap so nguyen duong [n>=0]: nguyen duong => n.length = ?

let a, n;

n = Number(prompt("Nhap so nguyen duong ban muon")); // n = 1.08;

// neu anh nhap so <0 => nhap lai

// xet xem so nhap vao co hop le hay khong
while (n !== parseInt(n) || n < 0) {
    alert("noi dung ban nhap khong phai la so nguyen, vui long nhap lai");
    n = Number(prompt("Nhap so nguyen duong ban muon"));
}
console.log(n);
a = String(n);

console.log("so do co " + a.length + " chu so");

