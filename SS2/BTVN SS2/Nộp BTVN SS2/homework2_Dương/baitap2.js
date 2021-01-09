const displayer = document.getElementById("displayer")
var inputNumber = prompt("Nhập vào số nguyên dương N")
while (inputNumber <0 || inputNumber%1 !== 0){
    inputNumber = prompt("Lỗi, vui lòng nhập lại số nguyên dương N")
}
function DigitsCheck(num){
    let count = 0
    while (num > 0){
        num = Math.floor(num/10)
        count++
    }
    return count
}
let sochuso = DigitsCheck(inputNumber)
displayer.innerText = "Nhập vào số nguyên dương N = "+inputNumber+" ,số chữ số của số N là: "+sochuso