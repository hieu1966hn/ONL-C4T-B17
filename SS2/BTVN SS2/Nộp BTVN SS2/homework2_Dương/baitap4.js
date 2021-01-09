const displayer = document.getElementById("displayer")
var inputNumber = prompt("Nhập vào số nguyên dương N")
while (inputNumber <0 || inputNumber%1 !== 0 ||inputNumber >= 1000 ){ //Giới hạn số N < 1000 để tránh crash máy
        inputNumber = prompt("Lỗi, vui lòng nhập lại số nguyên dương N")
}
for (i = 1;i <= inputNumber;i++){
    console.log("*".repeat(i))
}
displayer.innerText="Vui lòng kiểm tra console..."
