import React from "react";
import "./ForgotPassword.css";
import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../Actions/User";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const alert = useAlert();
    const { error, loading, message } = useSelector((state) => state.like);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    };


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "clearMessage" });
        }

    }, [alert, error, dispatch, message]);


    return (<div className="forgotPassword">
        <form className="forgotPasswordForm" onSubmit={submitHandler}>
            <Typography variant="h3" style={{ padding: "2vmax" }}>
                Social App
            </Typography>

            <input
                type="email"
                placeholder="Email"
                required
                className="forgotPasswordInputs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button disabled={loading} type="submit">Send Token</Button>

        </form>
    </div>
    );
}

export default ForgotPassword;