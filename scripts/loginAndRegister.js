let LOGIN_TYPE = "";

const DUMMY_USER_DATA = {
  email: "etem",
  password: "laura",
};

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
    $(".error-message").hide();
  });

  $("#user-password").on("change", () => {
    let newPasswordInput = $("#user-password").val();
    userLoginInformations.password = newPasswordInput;
    $(".error-message").hide();
  });
};

export const authClickHandler = () => {
  $(".form-button").on("click", (e) => {
    e.preventDefault();
    if (
      userLoginInformations.email === DUMMY_USER_DATA.email &&
      userLoginInformations.password === DUMMY_USER_DATA.password
    ) {
      window.location.replace("./home.html");
      console.log("correct");
    } else {
      $(".error-message").show();
      console.log(userLoginInformations);
    }
  });
};
