//B1:Lấy các elements sử dụng DOM
var image = document.getElementById("image")
var username = document.getElementById("name")
var dob = document.getElementById("dob")
var gender = document.getElementById("gender")
//B2:Tạo các function
function changeImage(){
    let alt_image = prompt("Nhập link ảnh bạn muốn thay đổi vào đây")
    image.src = alt_image
}
function changeName(){
    let alt_name = prompt("Nhập tên mà bạn muốn thay đổi")
    username.innerHTML = alt_name
}
function changeDOB(){
    let alt_dob = prompt("Nhập ngày sinh mà bạn muốn thay đổi")
    dob.innerHTML = alt_dob
}
function changeGender(){
    let alt_gender = prompt("Nhập giới tính của bạn")
    gender.innerHTML = alt_gender
}
