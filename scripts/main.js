import {
  authClickHandler,
  changeLoginType,
  loginInputChangeHandler,
} from "./loginAndRegister.js";

$("document").ready(function () {
  changeLoginType();
  loginInputChangeHandler();
  authClickHandler();
});
