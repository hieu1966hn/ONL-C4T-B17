function signIn() {
    // Lấy dữ liệu từ local storage
    let isLoginSuccessful = false;
    let userNames = JSON.parse(localStorage.getItem("ListName"))
    let userEmails = JSON.parse(localStorage.getItem("ListEmail"))
    let userPass = JSON.parse(localStorage.getItem("ListPass"))
    let alertForUser = document.getElementById("alertForUser");
    let bt = document.getElementById("bt")
    let input_email = document.getElementById("input_email").value;
    let input_pass = document.getElementById("input_pass").value;
    let userName = "";

    console.log(input_email);
    console.log(input_pass);
    if (userEmails === null) {
        isLoginSuccessful = false;
    } else {
        for (let i = 0; i < userEmails.length; i++) {
            if (userEmails[i] === input_email) {
                if (userPass[i] === input_pass) {
                    isLoginSuccessful = true;
                    userName = userNames[i];
                    localStorage.setItem("currentUserName", userName)
                    localStorage.setItem("currentUserEmail", userEmails[i])
                }
            }
        }
    }

    if (isLoginSuccessful == true) {
        alert("sup ma dude " + input_email)
        bt.href="index.html"
    } else {
        alertForUser.innerHTML = "Đăng nhập không thành công, sai tài khoản hoặc mật khẩu";
        alertForUser.style.color = "red";
        bt.href="#"
    }
    if (input_email.length < 8){
        alertForUser.innerHTML = "Đăng nhập không thành công, không đủ ký tự (8 Ký tự trở lên)";
        alertForUser.style.color = "red";
        bt.href="#"
    }
}