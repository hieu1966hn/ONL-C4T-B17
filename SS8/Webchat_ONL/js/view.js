const view = {};
view.setActiveScreen = (screenName) => {
  // hiểu đây là 1 function
  switch (screenName) {
    case "welcomeScreen":
      document.getElementById("app").innerHTML = components.welcomeScreen;
      break;

    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;

      document
        .getElementById("redirect-to-register")
        .addEventListener("click", () => {
          view.setActiveScreen("registerScreen");
        });

      
      break;

    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        console.log(data);
        controller.register(data);
      });

      document
        .getElementById("redirect-to-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        });
      break;
  }
};
