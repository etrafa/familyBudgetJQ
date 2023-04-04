import {
  authClickHandler,
  changeLoginType,
  loginInputChangeHandler,
} from "./loginAndRegister.js";

$(function () {
  changeLoginType();
  loginInputChangeHandler();
  authClickHandler();
});
