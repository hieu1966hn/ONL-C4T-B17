const model ={};
model.register = (data)=>{ // hàm nhận vào 1 data
    firebase.auth()
    .createUserWithEmailAndPassword(data.email, data.password) // truyền vào email và pass
    .catch(err => {
        console.log(err);
    });
    // catch để bắt lỗi 

}