let a = prompt("Nhập vào số nguyên dương a")
let b = prompt("Nhập vào số nguyên dương b")
console.log("a =" + a)
console.log("b =" + b)

function USCLN(m,n){
    if(n===0){
        return m
    }
    return USCLN(n,m%n)
}

console.log("Ước số chung lớn nhất của a,b là " + USCLN(a,b))
//Mẹo: a x b = USCLN(a,b) x BSCNN(a,b)
function BSCNN(){
    return (a / USCLN(a, b)) * b
}
console.log("Bội số chúng nhỏ nhất của a,b là " + BSCNN(a,b) )
