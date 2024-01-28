import axios from "axios";
import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { TOKEN } from "../constants";
import { useAuth } from "../context/auth";

const LoginWithGoogle = () => {
    const { setToken } = useAuth()
    const successResponse = async (response) => {
        console.log(response)
        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/google`, { token: response?.credential }).then((res) => {
            localStorage.setItem(TOKEN, res?.data?.token)
            setToken(res?.data?.token)
        }).catch((err) => { })
    };

    const failureResponse = (response) => {
        console.log(response);
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md login-with-google">
                    <h1 className="text-3xl font-semibold mb-6">Login with Google</h1>
                    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}`}>
                        <GoogleLogin
                            buttonText="Login With Google"
                            onSuccess={successResponse}
                            onError={failureResponse}                             
                            
                        /></GoogleOAuthProvider>
                </div>
            </div>
        </>
    );
};

export default LoginWithGoogle;