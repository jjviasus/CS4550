import React from 'react';
import "../../styles.css";
import {Link, useNavigate} from "react-router-dom";

function SidePanel() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const menuItems = [
        {label: "Dashboard", iconClass: "fa fa-tachometer", to: "/Kanbas/Dashboard"},
        {label: "Account", iconClass: "fa fa-universal-access", to: "/Kanbas/Account"},
        {label: "Courses", iconClass: "fa fa-book", to: "/Kanbas/Courses"},
        {label: "Calendar", iconClass: "fa fa-calendar", to: "#"},
        {label: "Inbox", iconClass: "fa fa-inbox", to: "#"},
        {label: "History", iconClass: "fa fa-clock-o", to: "#"},
        {label: "Studio", iconClass: "fa fa-television", to: "#"},
        {label: "Commons", iconClass: "fa fa-arrow-circle-right", to: "#"},
        {label: "Help", iconClass: "fa fa-question-circle", to: "#"}
    ];

    return (
        <>
            <div className="d-flex justify-content-between">
                <img className="ms-2 mt-2" src="../../../images/canvas-logo.png" alt="Canvas Logo"/>
                <button className="btn btn-link d-flex align-items-center me-3 no-text-decoration" onClick={handleGoBack}>
                    <i className="fa fa-close color-black"></i>
                </button>
            </div>
            <div className="ms-5 mt-3">
                <ul className="list-unstyled">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link className="no-text-decoration color-red" to={item.to}>
                                <i className={`${item.iconClass} me-2`}></i>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SidePanel;
