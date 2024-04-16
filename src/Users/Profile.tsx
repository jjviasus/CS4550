import * as client from "./client";
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Profile() {
    const [profile, setProfile] = useState({
        username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });

    const navigate = useNavigate();

    const fetchProfile = async () => {
        const account = await client.profile();
        if (account.dob) {
            account.dob = new Date(account.dob).toISOString().split('T')[0]; // Formats the date to 'yyyy-MM-dd'
        }
        setProfile(account);
    };

    const save = async () => {
        await client.updateUser(profile);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            id="username"
                            className="form-control"
                            value={profile.username}
                            onChange={(e) => setProfile({...profile, username: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            id="password"
                            className="form-control"
                            value={profile.password}
                            type="password"
                            onChange={(e) => setProfile({...profile, password: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            id="firstName"
                            className="form-control"
                            value={profile.firstName}
                            onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            id="lastName"
                            className="form-control"
                            value={profile.lastName}
                            onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input
                            id="dob"
                            className="form-control"
                            value={profile.dob}
                            type="date"
                            onChange={(e) => setProfile({...profile, dob: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            className="form-control"
                            value={profile.email}
                            onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select
                            id="role"
                            className="form-select"
                            value={profile.role}
                            onChange={(e) => setProfile({...profile, role: e.target.value})}
                        >
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <button
                        className={"btn btn-primary"}
                        onClick={save}
                    >
                        Save
                    </button>
                    <Link
                        to="/Kanbas/Account/Admin/Users"
                        className="btn btn-warning ms-3"
                    >
                        Users
                    </Link>
                    <button
                        className={"btn btn-danger ms-3"}
                        onClick={signout}
                    >
                        Sign Out
                    </button>
                </form>
            )}
        </div>
    );
}