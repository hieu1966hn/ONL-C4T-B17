const displayer = document.getElementById("thediv")
let inputString = prompt("")
function reverseString(str){
    var splitString = str.split("") 
    var reverseArray = splitString.reverse() 
    var joinArray = reverseArray.join("") 
    return joinArray
}
let reversedString = reverseString(inputString)

displayer.innerText = "InputString: "+ inputString + " ReversedString: " + reversedString