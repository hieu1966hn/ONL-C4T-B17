const thediv = document.getElementById("thediv")
var inputNumber = prompt("enter a positive integer n")
while (inputNumber <0 || inputNumber%1 !== 0 || inputNumber >= 40){
    inputNumber = prompt("Oof,Pls use smaller positive Integer")
}
console.log("Enter "+ inputNumber+ "The number is:")
var count = 0
for (i=1; i<=inputNumber;i++){
    let num = prompt("Enter a number")
    if (num%2==0){
        count++
        console.log(num+" => is even number")
    }
    else{
        console.log(num)
    }
}
console.log("So there are " + count + " even numbers")
thediv.innerText="Pls press F12 to check it" 