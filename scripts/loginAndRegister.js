// // console.log(LOGIN_TYPE);
// // //ONCLICK CHANGE THE LOGIN_TYPE STATE
// // export const changeLoginType = () => {
// //   $(".suggestion-action").on("click", () => {
// //     console.log("hey");
// //     if (LOGIN_TYPE === "LOGIN") {
// //       LOGIN_TYPE = "REGISTER";
// //       CHANGE_HTML_FORM();
// //     }
// //     if (LOGIN_TYPE === "REGISTER") {
// //       LOGIN_TYPE = "LOGIN";
// //       CHANGE_HTML_FORM();
// //     }
// //   });
// // };

// // export const CHANGE_HTML_FORM = () => {
// //   //* CHANGE THE BUTTON TEXT
// //   //* CHANGE SUGGESTION TEXT
// //   if (LOGIN_TYPE === "LOGIN") {
// //     $(".form-button").text("Login");
// //     $(".login-form-header").text("Login");
// //     $(".suggestion-text").text("Don't have an account?");
// //     let suggestionActionText = $("<span></span>").text("Register");
// //     suggestionActionText.addClass("suggestion-action");
// //     $(".suggestion-text").append(suggestionActionText);
// //     changeLoginType();
// //   } else if (LOGIN_TYPE === "REGISTER") {
// //     $(".form-button").text("Register");
// //     $(".login-form-header").text("Register");
// //     $(".suggestion-text").text("Have you an account?");
// //     let suggestionActionText = $("<span></span>").text("Sign in");
// //     suggestionActionText.addClass("suggestion-action");
// //     $(".suggestion-text").append(suggestionActionText);
// //     changeLoginType();
// //   }
// // };
// let LOGIN_TYPE = "LOGIN";

// export const CHANGE_HTML_FORM = () => {
//   if (LOGIN_TYPE === "LOGIN") {
//     $(".login-form-header").text("Login");
//     $(".suggestion-text").text("Don't have an account?");
//     $(".suggestion-action").text("Login");
//     CHANGE_LOGIN_TYPE();
//   } else if (LOGIN_TYPE === "REGISTER") {
//     $(".login-form-header").text("Register");
//     $(".suggestion-text").text("Have you an account?");
//     $(".suggestion-action").text("Register");
//     CHANGE_LOGIN_TYPE();
//   }
// };

// export const CHANGE_LOGIN_TYPE = () => {
//   $(".suggestion-action").on("click", (e) => {
//     LOGIN_TYPE === "LOGIN" ? (LOGIN_TYPE = "REGISTER") : LOGIN_TYPE === "LOGIN";
//   });
// };

// console.log(LOGIN_TYPE);

let LOGIN_TYPE = "";

export const changeLoginType = () => {
  $(".suggestion-action").on("click", () => {
    if (LOGIN_TYPE === "LOGIN") {
      LOGIN_TYPE = "REGISTER";
      $(".login-form-header").text("LOGIN");
      $(".suggestion-text").text("Don't have an account");
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
