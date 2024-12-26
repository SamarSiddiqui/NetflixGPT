import { useRef, useState } from "react";
import { checkValidator } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Netflix_Bg, User_Dp } from "../utils/constants";

const Login = () => {
  const [isSigned, setSigned] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  let [isPasswordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setSigned((prev) => !prev);
  };

  const handleSubmitBtn = () => {
    const message = checkValidator(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // Sign Up Logic
    if (!isSigned) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: User_Dp,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
      // Sign IN
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = "Invalid Credentials";
          setErrorMessage(errorCode);
        });
    }
  };

  const handleIconClass = () => {
    setPasswordVisible((prevClass) => !prevClass);
  };
  const IconClass = isPasswordVisible
    ? "fa-regular fa-eye-slash"
    : "fa-regular fa-eye";
  const inputType = isPasswordVisible ? "text" : "password";

  return (
    <div className="relative flex items-center bg-black ">
      {/*Background */}
      <img
        alt="background"
        className=" tablet:opacity-0 w-full h-[100vh]"
        src={Netflix_Bg}
      />

      {/* Login Form */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center   ">
        <div className="tablet:w-screen tablet:h-[100vh] tablet:bg-black/100 p-10 w-96   bg-black/85 tablet:flex tablet:flex-col tablet:justify-center">
          <h1 className="text-white text-3xl font-bold my-2 ">
            {isSigned ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" relative text-white  flex flex-col "
          >
            {/* Name Input for Sign-Up */}
            {!isSigned && (
              <input
                ref={name}
                className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white"
                type="text"
                placeholder="Full Name"
                aria-label="Full Name"
              />
            )}

            {/* Email Input */}
            <input
              ref={email}
              className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white"
              type="text"
              placeholder="Email"
              aria-label="Email"
            />

            {/* Password Input */}
            <div className="relative flex flex-col">
              <input
                ref={password}
                autoComplete="new password"
                type={inputType}
                className="py-3 px-3 my-2 border border-white bg-gray-900 rounded-sm text-white"
                placeholder="Password"
                aria-label="Password"
              />
              <span
                className="password-toggle-icon text-gray-500 absolute right-4 top-5 cursor-pointer"
                onClick={handleIconClass}
              >
                <i className={IconClass}></i>
              </span>
            </div>
            {/* Error Message */}
            <p className="text-red-700">{errorMessage}</p>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-3 px-3 my-2 bg-red-600 rounded-lg text-white hover:bg-red-700"
              onClick={handleSubmitBtn}
            >
              {isSigned ? "Sign In" : "Sign Up"}
            </button>

            {/* Additional Options */}
            {isSigned && (
              <div className="flex flex-col justify-center">
                <p className="text-center my-2 text-zinc-300">OR</p>
                <button
                  type="submit"
                  className="py-3 px-3 my-2  bg-zinc-500/30 rounded-lg text-white cursor-default"
                >
                  Use a sign-in code
                </button>
              </div>
            )}
            <p className="text-center my-2 font-bold">Forgot password?</p>
            <div className="my-2">
              <span className="text-gray-300">
                {isSigned ? "New to Netflix?" : "Already a User?"}
              </span>

              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={toggleSignUp}
              >
                {" "}
                {isSigned ? "Sign Up" : "Sign In"}
              </span>
            </div>
            <p className="font-extralight text-sm">
              Eat a hard-shell taco and instinctively tilt your head to the side
              to prove you're not a bot.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
