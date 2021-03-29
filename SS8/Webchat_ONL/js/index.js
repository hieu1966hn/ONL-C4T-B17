const init = () => {

  // khai báo cài đặt của firebase
  let firebaseConfig = {
    apiKey: "AIzaSyB3T25FCSEGdfcGJH9A-y9UiSx0swpE3ek",
    authDomain: "chat-app-cf019.firebaseapp.com",
    projectId: "chat-app-cf019",
    storageBucket: "chat-app-cf019.appspot.com",
    messagingSenderId: "282957813640",
    appId: "1:282957813640:web:6078b644d6c345a2100c3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // để xem mình đã nhúng được firebase chưa 
  console.log(firebase.app().name); // in ra đc chữ default là nhúng xong firebase

  // let db = firebase.fireStore();
  // console.log(db);

  console.log("window loaded");


  ///// nâng cao: Hàm kiểm tra xem User đã đăng nhập hay chưa

  // firebase.auth().onAuthStateChanged(function (user) {
  //   console.log(user);// in ra các thuộc tính của user sau khi đăng nhập
  //   if (user && user.emailVerified) {
  //     model.currentUser = { // lưu trữ thông tin người dùng trên firebase
  //       displayName: user.displayName,
  //       email: user.email
  //     };
  //     view.setActiveScreen('chatScreen'); // đã đăng nhập rồi thì mình vào màn hình 
  //     // chatScreen thôi
  //     // User is signed in.
  //   } else {
  //     view.setActiveScreen('loginScreen'); // chưa đăng nhập => vào màn đăng nhập (nhập tk + pass)
  //     // alert("Please check your email"); check cc
  //   }
  // });


  firestoreFunction(); // để thực hiện C,R,U,D với database

};

window.onload = init; // khi hệ thống load xong trang web thì -> load nd bên trong




firestoreFunction = async () => {


  // get one document
  // const documentId = '';
  const response = await firebase.firestore().collection('users').doc(documentId).get();

  const user = getDataFormDoc(response);
  // user.id = response.id
  console.log(user);




  //get many document
  const response2 = await firebase.firestore().collection('users').where('phoneNumber', 'array-contains', 0979365355).get();

  const listUser = getDataFormDocs(response2.docs);
  console.log(listUser);



  //////////=> từ đây chỉ có thể thao tác với 1 document được thôi
  //add document
  // const userToAdd = {
  //   name: "faker",
  //   email: "abcxyz@gmail.com",
  //   age: 20
  // }
  // firebase.firestore().collection("users").add(userToAdd)

  // update document
  // phải copy id của nó vào
  documentIdUpdate = '1poqCBGcTR8kNvYK5IrN';
  const dataToUpdate = {
    name: "Abcxyz",
    age: 30,
    address: "HA NOI Viet Nam",
    phoneNumber: firebase.firestore.FieldValue.arrayUnion('099999')
  }
  firebase.firestore().collection('users').doc(documentIdUpdate).update(dataToUpdate);
  // delete document
  // const docToDelete = 
}

getDataFormDoc = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  return data
}

// hàm lấy data từ nhiều docs
getDataFormDocs = (docs) => {
  const listData = docs.map((item) => { return getDataFormDoc(item) });
  // for (let index = 0; index < docs.length; index++) {
  //   const element = getDataFormDoc(docs[index]);
  //   listData.push(element)

  // }

  return listData;
}