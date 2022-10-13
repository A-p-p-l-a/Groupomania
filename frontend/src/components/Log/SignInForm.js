import React, { useState } from 'react';
import axios from 'axios';


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    const messageError = document.querySelector(".message.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          messageError.innerHTML = res.data.errors.email || res.data.errors.password ;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }

    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="password" name="password" id="password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
            />
            <div className="message error"></div>
            <br />
            <input type="submit" value="Se connecter" />
        </form>
    );
};

export default SignInForm;