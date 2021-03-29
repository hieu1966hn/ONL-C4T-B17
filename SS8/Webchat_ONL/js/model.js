const model = {};

//// Viết lại model.register
model.register = async (data) => {
    // bắt đầu sử dụng firebase. 
    //=> bắt buộc phải đợi firebase gửi trả về kết quả thành công
    // Cú pháp xử lý bất đồng bộ thành đồng bộ như sau:

    try {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);
        // server đã tạo cho mình xong tk và pass để đăng nhập


        // cập nhật lại thông tin của người dùng hiện tại
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + " " + data.lastName
        });



        // gửi mail thông báo xác thực email đã đăng ký
        firebase.auth().currentUser.sendEmailVerification();
        // hiển thị thong báo cho người dùng là:
        alert('Your email has been registed, please check your email ');
        /// sau khi thông báo xong. => chuyển người dùng về màn hình đăng nhập
        view.setActiveScreen('loginScreen');
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }

}


model.login = async (dataLogin) => {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
    }
    catch (err) {
        if (err.code == 'auth/user-not-found' || err.code == 'auth/invalid-email') {
            document.getElementById('email-error').innerText = `*${err.message}`
        } else if (err.code == 'auth/wrong-password') {
            document.getElementById('password-error').innerText = `*${err.message}`
        }
    }
}

model.chat = async ()=>{
    
}