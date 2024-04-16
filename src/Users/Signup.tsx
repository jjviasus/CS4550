import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as client from "./client";

export default function Signup() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(user);
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Sign Up</h1>
            {error && <div className={"mb-3"}>Error: {error}</div>}
            <div className={"form-group"}>
                <label htmlFor={"username"}>Username</label>
                <input
                    id={"username"}
                    className={"form-control"}
                    value={user.username}
                    onChange={(e) => setUser({
                        ...user, username: e.target.value
                    })}
                />
            </div>

            <div className={"form-group mt-3"}>
                <label htmlFor={"password"}>Password</label>
                <input
                    type={"password"}
                    className={"form-control"}
                    value={user.password}
                    onChange={(e) => setUser({
                        ...user, password: e.target.value
                    })}
                />
            </div>

            <button
                className={"btn btn-primary mt-3"}
                onClick={signup}> Sign Up
            </button>
        </div>
    );
}
