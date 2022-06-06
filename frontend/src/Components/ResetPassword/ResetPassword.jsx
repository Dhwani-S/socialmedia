import React from "react"
import "./ResetPassword.css";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { resetPassword } from "../../Actions/User";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();
    const params = useParams();
    const { error, loading, message } = useSelector((state) => state.like);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token, newPassword));
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


    return (
        <div className="resetPassword">
            <form className="resetPasswordForm" onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>
                    Social App
                </Typography>

                <input
                    type="password"
                    placeholder="New Password"
                    required
                    className="resetPasswordInputs"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                /> 
                <Link to="/">
                    <Typography>Login</Typography>
                    </Link>
                    <Typography>Or</Typography>
                <Link to="/forgot/password">
                    <Typography>Request Another Token</Typography>
                </Link>

                <Button disabled={loading} type="submit">Reset Password</Button>

            </form>
        </div>
    );
};

export default ResetPassword;