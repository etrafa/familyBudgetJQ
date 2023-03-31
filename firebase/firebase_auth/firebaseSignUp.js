import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

//* CREATE A NEW USER AND STORE IT IN THE DATABASE
export const firebaseSignUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });
    const userID = userCredential.user.uid;
    await setDoc(doc(db, "users", userID), {
      email: email,
      fullName: name,
    });
  } catch (err) {
    console.log(err);
  }
};
