const init = () => {

  // khai báo cài đặt của firebase
  var firebaseConfig = {
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


  console.log("window loaded");


  ///// nâng cao: Hàm kiểm tra xem User đã đăng nhập hay chưa

  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    if (user && user.emailVerified) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      };
      view.setActiveScreen('chatScreen');
      // User is signed in.
    } else {
      view.setActiveScreen('loginScreen');
      // alert("Please check your email"); check cc
    }


  });

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });
  //   firebase.analytics();
  // view.setAtiveScreen('registerScreen;')

};

window.onload = init;
