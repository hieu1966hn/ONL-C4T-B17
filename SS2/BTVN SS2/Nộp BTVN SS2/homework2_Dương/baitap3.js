const displayer = document.getElementById("displayer")
var inputNumber = prompt("Nhập vào số nguyên dương N")
while (inputNumber <0 || inputNumber%1 !== 0 || inputNumber >= 50){ //giới hạn 50 số vì không muốn người dùng nhập nhiều -_-
    inputNumber = prompt("Lỗi, vui lòng nhập lại số nguyên dương N nhỏ hơn")
}
console.log("Nhập vào "+ inputNumber+ " số là:")
var count = 0
for (i=1; i<=inputNumber;i++){
    let num = prompt("Nhập vào 1 số")
    if (num%2==0){
        count++
        console.log(num+" => Là số chẵn")
    }
    else{
        console.log(num)
    }
}

console.log("Vậy, có tất cả " + count + " số chẵn")

displayer.innerText="Vui lòng kiểm tra console..."