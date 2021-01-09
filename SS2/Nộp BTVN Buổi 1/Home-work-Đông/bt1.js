function inputavt () {
   let a = prompt ("Nhập link ảnh mà bạn cần thay đổi !!")

    document.querySelector("#avt").src = a;
};

function inputname () {
    let b = prompt ("Nhập tên bạn cần thay đổi !!")
    document.querySelector("#name").innerHTML = b
}

function inputdob () {
    let c = prompt ("Nhập ngày tháng năm sinh cần thay đổi !! vd: 17/09/2004")
    document.querySelector("#dob").innerHTML = c
}

function inputgender () {
    let d = prompt ("Nhập giới tính cần thay đổi !!")
    document.querySelector("#gender").innerHTML = d
}
