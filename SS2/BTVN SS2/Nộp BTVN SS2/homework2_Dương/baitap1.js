const displayer = document.getElementById("displayer")
let inputString = prompt("Nhập vào String mà bạn muốn đảo ngược")
function reverseString(str){
    var splitString = str.split("") //Tách cách thành phần của string và chuyển nó vào 1 array
    var reverseArray = splitString.reverse() //Đảo ngược các phần tử của array
    var joinArray = reverseArray.join("") //Kết nối các phần tử của array đã được đảo ngược thành 1 string
    return joinArray
}
let reversedString = reverseString(inputString)

displayer.innerText = "String nhập vào là: "+ inputString + " và String đảo ngược là: " + reversedString