import React from 'react';
import TopNavBar from "../Navigation/TopNavBar/TopNavBar";

function Account() {
    return (
        <>
            <TopNavBar title={"Justin Viasus's Profile"}/>
            <div className="flex-column flex-fill">
                <div className="flex-fill">
                    <div className="d-none d-md-block ms-3 mt-3">
                        <i className="fa fa-bars fa-lg color-red me-3"></i>
                        Justin Viasus's Profile
                        <hr/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="d-none d-md-block ms-3 me-3">
                        <ul className="wd-navigation">
                            <li><a href="#">Notifications</a></li>
                            <li className="wd-active"><a href="/Kanbas/Account/Profile/screen.html">Profile</a></li>
                            <li><a href="#">Files</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">ePortfolios</a></li>
                            <li><a href="#">Shared Content</a></li>
                            <li><a href="#">The Hub</a></li>
                            <li><a href="#">Qwickly Course Tools</a></li>
                            <li><a href="#">Global Announcements</a></li>
                        </ul>
                    </div>
                    <div className="flex-grow-1 ms-5">
                        <img src="../../../images/anonymous.png" alt="Profile picture"/>
                        <h2>Justin Viasus</h2>
                        <h3 className="mt-5">Contact</h3>
                        <p>No registered services, you can add some on the <a className="no-text-decoration color-red"
                                                                              href="#">settings </a>
                            page.</p>
                        <h3>Biography</h3>
                        <p>5th year Computer Science student.</p>
                        <h3>Links</h3>
                        <a href="#">YouTube</a>
                    </div>
                    <a href="/Kanbas/Account/Profile/Edit/screen.html" className="me-5">
                        <button type="button" className="btn btn-light">
                            <i className="fa fa-pencil"></i>
                            Edit Profile
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Account;