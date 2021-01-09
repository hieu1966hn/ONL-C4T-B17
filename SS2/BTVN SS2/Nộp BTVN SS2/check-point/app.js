let a = [];
function c(){
    a.push(prompt("Hãy thêm 1 món bạn muốn vào menu"));
}

function r(){
    console.log(a.join(","));
}

function u(){
let b = prompt("Hãy điền tên món muốn thay thế");
    if(a.indexOf(b) < 0){
        alert("Không tìm thấy món bạn muốn");
    }else {
        let c = prompt("Hãy điền tên món bạn muốn thay thế");
        a.splice(a.indexOf(b),1,c);
    }
}

function d(){
    let d = prompt("Nhập tên món bạn muốn xoá");
    if(a.indexOf(d) < 0){
        alert("Không tìm thấy món bạn muốn");
    }else {
        a.splice(a.indexOf(d)-1,1);
    }
}

for(let i = 0; ;i++){
    let e = prompt("Hãy điền hành động bạn muốn với menu nhà hàng \n C,R,U,D");
    if(e == "c" || e == "C"){
        c();
    }else if(e == "r" || e == "R"){
        r();
    }else if(e == "u" || e == "U"){
        u();
    }else if(e == "d" || e == "D"){
        d();
    }else{
        break;
    }
}