import React from "react";
import { FcGoogle } from "react-icons/fc";
import Form from "./Form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../components/FireBaseData";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
function Section2() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      navigate("/home");
    });
  };
  
  return (
    <>
      <div className="topp">
        <img src="https://i.ibb.co/pL8pBN4/logo.png" alt="logo" />
        <span>Sign In</span>
      </div>
      <div className="section2_top">
        <div>
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
        </div>
        <div className="auth">
          <div className="google" onClick={signInWithGoogle}>
            <div>
              <FcGoogle />
            </div>
            <div>Sign in with Google</div>
          </div>
          <div className="google">
            <div>
              <FaApple />
            </div>
            <div>Sign in with Apple</div>
          </div>
        </div>
        <div>
          <Form />
        </div>
        <div className="part">
          Don't have an account? <span>Resister here</span>
        </div>
        <div className="media">
          <img src="https://i.ibb.co/DkBcv6t/medial.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Section2;
