import React, { useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

import NavBar from "./components/universal/NavBar";

const navItems = [
    { navItemName: "Home", route: "/" },
    { navItemName: "Menu", route: "/menu" },
    { navItemName: "Find", route: "/find" }
];

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <>
            <NavBar navItems={navItems} isCustomer={false} />
            <GoogleOAuthProvider clientId="243604614412-hdjn1eb24blri85d9apimi9tts2pe15u.apps.googleusercontent.com">
                <div className='form-container' style={{ width: '50%', position: "absolute", top: "12%", left: "50%", transform: "translate(-50%, 050%)" }}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            navigate('/server');
                            // TODO: make sure to change based on who logged in
                            sessionStorage.setItem("role", "manager");
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        text={"Sign in with Google"}
                        shape={"pill"}
                        theme={'filled_blue'}
                        width={"500"}
                        size={"large"}
                    />
                    <form style={{ marginTop: '3%', padding: '5%', boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">Enter your employee assigned Chick-Fil-A email</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button type="submit" class="btn btn-primary btn-lg" style={{ backgroundColor: '#e60e33', border: 'none'}} onClick={() => { }}>Submit</button>
                        </div>
                    </form>
                </div>
            </GoogleOAuthProvider>;
        </>
    );
}

export default Login;