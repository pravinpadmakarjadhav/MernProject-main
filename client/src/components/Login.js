import React,{useState} from "react";
import loginpic from "../images/login.svg";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

const [email,setEmail] = useState();
const [password,setPassword] = useState();

const loginUser = async (e)=>{
  e.preventDefault();
  const res = await fetch('/signin',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },body: JSON.stringify({ email, password

    })
  });

  const data = res.json();
  if(data.status === 400 || !data){
    window.alert("Invalid email or password");

  }else{
    window.alert("Login successful");
    history.push('/');
  }
}
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="sign-in-content">
            <div className="signin-image">
              <figure>
                <img src={loginpic} className="" alt="registration pic" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">
                Create a new account
              </NavLink>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
               
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="off"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
