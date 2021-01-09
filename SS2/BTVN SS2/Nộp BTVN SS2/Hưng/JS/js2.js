const displayer = document.getElementById("thediv")
var inputNumber = prompt("enter a positive integer n")
while (inputNumber <0 || inputNumber%1 !== 0){
    inputNumber = prompt("Oof,Something went wrong,pls enter a positive integer n again ")
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
displayer.innerText = "Positive integer = "+inputNumber+" ,Number of digits: "+sochuso