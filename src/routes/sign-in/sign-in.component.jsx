import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
// import { async } from "@firebase/util";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // async function effectFunction() {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }

  // useEffect(() => {
  //   effectFunction();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  // const logGoogleRedirectUser = async () => {
  //   await signInWithGoogleRedirect();
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};
export default SignIn;
