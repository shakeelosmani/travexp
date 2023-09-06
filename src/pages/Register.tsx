import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, UserCredential } from "@firebase/auth";
import { auth } from "../utils/Firebase";
import './register.css'

const Register = () => {
  // const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login-page" className="row">
      <div className="col s12 m6 offset-m5">
        <form className="login-form">
          <div className="row">
            <div className="input-field col s12 center">
              <h4>Register</h4>
              <p className="center">Join TravExp now!</p>
            </div>
          </div>
          <div className="row margin">
            <div className="input-field col s12">
              <i className="mdi-social-person-outline prefix"></i>
              <i className="material-icons prefix">account_circle</i>
              <input id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
					<div className="row margin">
            <div className="input-field col s12">
              <i className="mdi-social-person-outline prefix"></i>
              <i className="material-icons prefix">account_circle</i>
              <input id="lastName" name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row margin">
            <div className="input-field col s12">
              <i className="mdi-social-person-outline prefix"></i>
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                name="email"
                type="text"
                style={{ cursor: "auto" }}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

					<div className="row margin">
            <div className="input-field col s12">
              <i className="mdi-social-person-outline prefix"></i>
              <i className="material-icons prefix">phone_iphone</i>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                style={{ cursor: "auto" }}
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
          </div>

          <div className="row margin">
            <div className="input-field col s12">
              <i className="mdi-action-lock-outline prefix"></i>
              <i className="material-icons prefix">vpn_key</i>
              <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row margin">
            <div className="input-field col s12">
              <i className="mdi-action-lock-outline prefix"></i>
              <i className="material-icons prefix">vpn_key</i>
              <input id="password_a" name="cpassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <label htmlFor="password_a">Confirm Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <button
                type="submit"
                className="btn waves-effect waves-light col s12"
								onClick={onSubmit}
              >
                REGISTER NOW
              </button>
            </div>
            <div className="input-field col s12">
              <p className="margin center medium-small sign-up">
                Already have an account? <a href="./login">Login</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
