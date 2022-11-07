import React, { useEffect } from "react";
import NavBar from "../components/universal/NavBar";
import Image from 'next/image';
import navbarlogo from '../assets/navbar-loog.png';
import Script from "next/script";

const clientID = "243604614412-o7kl83unu09l1pmbun1qnq1crdi5l70v.apps.googleusercontent.com";

const login = () => {

    const onSuccess = (res) => {
        console.log("SUCCESS");
        console.log(res);
    }

    const onFailure = (res) => {
        console.log("FAILURE");
        console.log(res);
    }

    function handleCallBack(response) {
        console.log("CALL BACK", response.credential);
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "243604614412-hdjn1eb24blri85d9apimi9tts2pe15u.apps.googleusercontent.com",
            callback: handleCallBack
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);


    return (
        <>
            <Script src="https://accounts.google.com/gsi/client" async defer></Script>
            <NavBar navItems={[]} isCustomer={false} />
            <div style={{ textAlign: "center", width: '100%', height: '87vh', border: '1px solid red' }}>
                <div style={{ marginTop: '5%' }}>
                    <Image src={navbarlogo} width={255} height={150} />
                    <div id="signInDiv"></div>
                </div>
            </div>
        </>
    );
}

export default login;