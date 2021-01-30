function signUp() {
    // Lấy dữ liệu từ local storage
    let userNames = JSON.parse(localStorage.getItem("ListName"))
    let userEmails = JSON.parse(localStorage.getItem("ListEmail"))
    let userPass = JSON.parse(localStorage.getItem("ListPass"))

    let input_name = document.getElementById("input_name").value;
    let input_email = document.getElementById("input_email").value;
    let input_pass = document.getElementById("input_pass").value;
    let input_confirmPass = document.getElementById("input_confirmPass").value
    let alertForUser = document.getElementById("alertForUser");
    let isAccountExist = false;

    if (input_confirmPass !== input_pass) {
        alertForUser.innerHTML = "Mật khẩu không trùng nhau, xin vui lòng thử lại";
        alertForUser.style.color = "red";
    } else {
        if (userNames === null || userEmails === null || userPass === null) {
            userNames = [];
            userEmails = [];
            userPass = [];

            userNames.push(input_name);
            userEmails.push(input_email);
            userPass.push(input_pass);
        }
        else {
            for (let i = 0; i < userEmails.length; i++) {
                if (userEmails[i] === input_email) {
                    isAccountExist = true
                }
            }
            if (isAccountExist === false) {
                userNames.push(input_name);
                userEmails.push(input_email);
                userPass.push(input_pass);

                alertForUser.innerHTML = "Đã đăng ký thành công, xin cảm ơn quý khách";
                alertForUser.style.color = "green";
            } else {
                alertForUser.innerHTML = "Email đã tồn tại, xin vui lòng thử lại";
                alertForUser.style.color = "red";
                
            }
        }
    }
    
    if (input_name == "" || input_email == "" || input_pass == ""){
        alert ("error");
        
    }
    localStorage.setItem("ListName", JSON.stringify(userNames));
    localStorage.setItem("ListEmail", JSON.stringify(userEmails));
    localStorage.setItem("ListPass", JSON.stringify(userPass));

}
