import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

//*LOGIN WITH EMAIL
export const firebaseSignIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (displayErrorMessage && errMessage) {
      if (err.code === "auth/user-not-found") errMessage("User not found.");
      else if (err.code === "auth/wrong-password") errMessage("Wrong password");
      else errMessage("An unexpected error happened. Please later try again.");
    }
  }
};
