const view = {};
view.setActiveScreen = (screenName) => { // hiểu đây là 1 function
  switch (screenName) {
    case "welcomeScreen":
        document.getElementById('app').innerHTML =
        components.welcomeScreen;
      break;
    case "registerScreen":
      document.getElementById('app').innerHTML=
      components.registerScreen;
  }
};
