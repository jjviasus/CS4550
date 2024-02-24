import React from 'react';
import "../../styles.css";
import "../index.css";
import {Link} from "react-router-dom";

interface NavTitle {
    title: string | undefined;
    courseId: string | undefined;
}

function TopNavBar({title, courseId}: NavTitle) {
    return (
        <div className="d-sm-block d-md-none d-lg-none">
            <div className="d-flex kanbas-header-navigation justify-content-between">
                <Link to="/Kanbas/Navigation/SidePanel">
                    <i className="mt-3 ms-3 fa fa-bars fa-lg color-white"></i>
                </Link>
                <div className="d-flex align-items-center color-white">
                    {title}
                </div>
                {/* Conditional rendering with placeholder for layout */}
                {title !== "Dashboard" ? (
                    <i className="mt-3 me-3 color-white fa fa-chevron-down" data-bs-toggle="collapse"
                       data-bs-target="#collapseKanbasNav" aria-expanded="false"
                       aria-controls="collapseWidthExample"></i>
                ) : (
                    // Placeholder <div> or <span> with specific styling
                    <div className="mt-3 me-3" style={{width: '24px', height: '24px'}}></div>
                )}
            </div>
            <div className="collapse collapse-vertical w-100" id="collapseKanbasNav">
                <div className="card card-body w-100">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fa fa-home color-red"></i>
                            <Link className="no-text-decoration color-red ms-2" to={`/Kanbas/Courses/${courseId}/Home`}>Home</Link>
                        </li>
                        <li>
                            <i className="fa fa-connectdevelop color-red"></i>
                            <Link className="no-text-decoration color-red ms-1" to={`/Kanbas/Courses/${courseId}/Modules`}>Modules</Link>
                        </li>
                        <li>
                            <i className="fa fa-plug color-red"></i>
                            <a className="no-text-decoration color-red ms-2 " href="#">Piazza</a>
                        </li>
                        <li>
                            <i className="fa fa-plug color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#">Zoom Meetings</a></li>
                        <li>
                            <i className="fa fa-bar-chart color-red"></i>
                            <a className="no-text-decoration color-red ms-1"
                               href="/Kanbas/Courses/Grades/screen.html">Index</a>
                        </li>
                        <li>
                            <i className="fa fa-plug color-red"></i>
                            <Link className="no-text-decoration color-red ms-2" to={`/Kanbas/Courses/${courseId}/Assignments`}>Assignments</Link>
                        </li>
                        <li>
                            <i className="fa fa-rocket color-red"></i>
                            <Link className="no-text-decoration color-red ms-2" to={`/Kanbas/Courses/${courseId}/Quizzes`}>Quizzes</Link>
                        </li>
                        <li>
                            <i className="fa fa-user color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#"> People</a>
                        </li>
                        <li>
                            <i className="fa fa-plug color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#">Panopto Video</a>
                        </li>
                        <li>
                            <i className="fa fa-comment color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#">Discussions</a>
                        </li>
                        <li>
                            <i className="fa fa-volume-control-phone color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#"> Announcements</a>
                        </li>
                        <li>
                            <i className="fa fa-sticky-note color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#"> Pages</a>
                        </li>
                        <li>
                            <i className="fa fa-file color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#"> Files</a>
                        </li>
                        <li>
                            <i className="fa fa-clipboard color-red"></i>
                            <a className="no-text-decoration color-red ms-1" href="#"> Rubrics</a>
                        </li>
                        <li>
                            <i className="fa fa-lightbulb-o color-red"></i>
                            <a className="no-text-decoration color-red ms-3" href="#">Outcomes</a>
                        </li>
                        <li>
                            <i className="fa fa-circle-o color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#"> Collaborations</a>
                        </li>
                        <li>
                            <i className="fa fa-book color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#"> Syllabus</a>
                        </li>
                        <li>
                            <i className="fa fa-gear color-red"></i>
                            <a className="no-text-decoration color-red ms-2" href="#"> Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopNavBar;