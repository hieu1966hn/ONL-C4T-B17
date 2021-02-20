const components = {};
components.welcomeScreen = `
    <h1>This is my Screen</h1>
    <div>This is welcomeScreen to learn this web</div>
    <input type="text">
`;

// toan bộ code html sẽ ở trong components.js này
components.registerScreen = `
<div class="register-container">
<div class="aside-right">
  <div class="header">
    <h3>MindX Chat</h3>
  </div>

  <!-- code phan input -->
  <form id="register-form">
    <div class="input-name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="" placeholder="First name" />
        <div class="error" id="first-name-error"></div>
      </div>

      <div class="input-wrapper">
        <input type="text" name="" placeholder="Last name" />
        <div class="error" id="last-name-error"></div>
      </div>
    </div>

    <!-- code the email -->
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email..." />
      <div class="error" id="email-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name=""
        placeholder="Please input your password"
      />
      <div class="error" id="password-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name=""
        placeholder="Please input your password again"
      />
      <div class="error" id="confirm-password-error"></div>
    </div>

    <!-- da xong cac truong input -->
    <div class="form-action">
      <span id="redirect-to-login"> Already have an account? Login </span>

      <button class="btn" type="submit">Register</button>
    </div>
  </form>
</div>
</div>
`;
