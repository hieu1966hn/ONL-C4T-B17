const displayer = document.getElementById("displayer")
var inputNumber = prompt("Nhập vào số nguyên dương N")
while (inputNumber <0 || inputNumber%1 !== 0){
    inputNumber = prompt("Lỗi, vui lòng nhập lại số nguyên dương N")
}

function isPrime(num){ //thuật toán kiểm tra tính nguyên tố, trích SGK tin học 10 :D
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) {return false} 
    } 
    return num > 1;
}
function nearestPrime(n){
    // if (isPrime(n) == true){ //Số N chính là số nguyên tố
    //     return n
    // }
    while (isPrime(n) ==false){
        n++
    }
    return n
}
let so_nguyen_to_gan_nhat = nearestPrime(inputNumber)

displayer.innerText = "Nhập vào số nguyên dương N = " + inputNumber + ", ta có số nguyên tố lớn hơn gần nhất của N là: " + so_nguyen_to_gan_nhat

