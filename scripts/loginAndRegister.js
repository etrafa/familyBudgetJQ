let LOGIN_TYPE = "";

let userLoginInformations = {
  email: "",
  password: "",
};

export const changeLoginType = () => {
  $(".suggestion-action").on("click", () => {
    if (LOGIN_TYPE === "LOGIN") {
      LOGIN_TYPE = "REGISTER";
      $(".login-form-header").text("LOGIN");
      $(".suggestion-text").text("Don't have an account");
      $(".suggestion-action").text("Register");
      $(".form-button").text("Login");
      $(".forgot-password").show();
    } else {
      LOGIN_TYPE = "LOGIN";
      $(".login-form-header").text("REGISTER");
      $(".form-button").text("Register");
      $(".suggestion-text").text("Have you an account?");
      $(".suggestion-action").text("Login");
      $(".forgot-password").hide();
    }
  });
};

export const loginInputChangeHandler = () => {
  $("#user-email").on("change", () => {
    let newEmailInput = $("#user-email").val();
    userLoginInformations.email = newEmailInput;
  });

  $("#user-password").on("change", () => {
    let newPasswordInput = $("#user-email").val();
    userLoginInformations.password = newPasswordInput;
  });
};
