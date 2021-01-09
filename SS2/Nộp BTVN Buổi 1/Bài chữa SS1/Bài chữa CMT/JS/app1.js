let count = 0;
function name(){
    let a = prompt("Hãy điền tên của bạn");
    let b = a.toUpperCase();
    document.getElementById("name").innerHTML = "Họ tên: " + "<b>" + b + "</b>"; 
    count++;
}
function birth(){
    document.getElementById("birth").innerHTML = "Sinh ngày: " + "<b>" + prompt("Hãy điền ngày sinh của bạn") + "</b>"; 
    count++;
}
function home_town(){
    document.getElementById("home-town").innerHTML = "Nguyên quán: " + "<b>" + prompt("Hãy điền nguyên quán của bạn") + "</b>"; 
    count++;
}
function live(){
    document.getElementById("live").innerHTML = "Nơi ĐKHK thường trú: " + "<b>" + prompt("Hãy điền nơi ĐKHK thường trú của bạn") + "</b>"; 
    count++;
}
function number(){
    if(count<4){
        alert("Hãy điền đầy đủ thông tin để nhận một số CMND");
    }else{
        let output = "";
        for(let i = 1; i <= 9; i++){
            let j = Math.floor(Math.random() * 10);
            output += j;
        }
        document.getElementById("number").innerHTML = "Số " + output
    }
}

function changeHandler(events) {
    events.stopPropagation();
    events.preventDefault();
    let files = events.target.files;
    let file = files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(progressEvent) {
        var url = fileReader.result;
        document.getElementById("image").src = url;
    }
    fileReader.readAsDataURL(file);
}