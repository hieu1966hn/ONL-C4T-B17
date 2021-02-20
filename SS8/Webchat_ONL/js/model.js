const model ={};
model.register = (data)=>{ // hàm nhận vào 1 data
    firebase.auth()
    .createUserWithEmailAndPassword(data.email, data.password); // truyền vào email và pass

    
}