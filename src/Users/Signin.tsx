import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {User} from "./client";
import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "", password: "", firstName: "", lastName: "", role: "USER"
    });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile");
    };

    const visitSignUp = () => {
        navigate("/Kanbas/Account/Signup");
    }

    return (
        <div>
            <h1>Sign In</h1>
            <div className={"form-group"}>
                <label htmlFor={"username"}>Username</label>
                <input
                    id={"username"}
                    className={"form-control"}
                    value={credentials.username}
                    onChange={(e) =>
                        setCredentials({...credentials, username: e.target.value})}
                />
            </div>
            <div className={"form-group mt-3"}>
                <label htmlFor={"password"}>Password</label>
                <input
                    type={"password"}
                    className={"form-control"}
                    value={credentials.password}
                    onChange={(e) =>
                        setCredentials({...credentials, password: e.target.value})}
                />
            </div>
            <button
                className={"btn btn-primary mt-3"}
                onClick={signin}> Sign In
            </button>
            <hr/>
            <h4>Don't have an account?</h4>
            <button
                className={"btn btn-warning"}
                onClick={visitSignUp}
            >
                Sign Up
            </button>
        </div>
    );
}