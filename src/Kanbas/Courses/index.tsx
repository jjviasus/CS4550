import {Link, useLocation, useParams} from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "../styles.css"
import TopNavBar from "../Navigation/TopNavBar/TopNavBar";
import lectures from "../../Kanbas/Database/lectures.json";
import Grades from "./Grades";
import Assignments from "./Assignments";
import {useEffect, useState} from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
    const {courseId} = useParams();
    const COURSES_API = `${API_BASE}/api/courses`;
    const [course, setCourse] = useState<any>({_id: ""});
    const {pathname} = useLocation();

    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
            `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    // Extract the last part of the pathname
    const lastPathSegment = pathname.split('/').pop();

    // Determine the component to render based on the pathname
    const renderComponent = () => {
        if (pathname.includes('/Home')) {
            return <Modules/>;
        } else if (pathname.includes('/Modules')) {
            return <Modules/>;
        } else if (pathname.includes('/Grades')) {
            return <Grades/>;
        } else if (pathname.includes('/Assignments')) {
            return <Assignments/>;
        } else {
            // Default case if none of the paths match
            return <Modules/>; // Or any other component you consider as default
        }
    };

    // Function to toggle the navigation visibility
    const [isNavVisible, setIsNavVisible] = useState(true);
    const toggleNavVisibility = () => setIsNavVisible(!isNavVisible);

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <>
            <TopNavBar title={course?.name} courseId={courseId}/>
            <div className="flex-column flex-fill">
                <div className="d-none d-md-block ms-3 mt-3">
                    <button type="button" className="btn" onClick={toggleNavVisibility}>
                        <i className="fa fa-bars fa-lg color-red"></i>
                    </button>
                    <Link to={`/Kanbas/Courses/${courseId}/Home`} className="color-red ms-lg-3 no-text-decoration">
                        {course?.name}
                    </Link>
                    <i className="fa fa-chevron-right ms-lg-3"></i>
                    <span className="ms-lg-3">{lastPathSegment}</span>
                    <hr/>
                </div>
                <div className="d-flex">
                    {isNavVisible && (
                        <div className="d-md-block ms-3 mt-3">
                            Spring 2024 Semester
                            <CourseNavigation/>
                        </div>
                    )}
                    <div className="flex-fill me-5 ms-3">
                        {(pathname.includes('/Home') || pathname.includes('/Modules')) && (
                            <div className="d-flex justify-content-end mt-4 mb-5 text-nowrap">
                                <button type="button" className="btn btn-light">Collapse All</button>
                                <button type="button" className="btn btn-light">View Progress</button>
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-check-circle color-green me-2"></i>
                                        Publish All
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-item active">Publish All</a></li>
                                        <li><a href="#" className="dropdown-item">Publish All Modules and Items</a></li>
                                        <li><a href="#" className="dropdown-item">Publish Modules Only</a></li>
                                        <li><a href="#" className="dropdown-item">UnPublish All Modules</a></li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-danger">
                                    <i className="fa fa-plus color-white me-2"></i>
                                    Module
                                </button>
                            </div>
                        )}
                        {/*Content Component*/}
                        {renderComponent()}
                    </div>
                    <div className="flex-grow-0 me-2 d-none d-lg-block me-3" style={{width: '250px'}}>
                        <h2 className="mt-3">Course Status</h2>
                        <table className="mb-3">
                            <tbody>
                            <tr>
                                <td>
                                    <button type="button" className="btn btn-light">Unpublish</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success">Published</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <a href="">
                            <button type="button" className="btn btn-light">Import Existing Content</button>
                        </a>
                        <a href="">
                            <button type="button" className="btn btn-light">Import From Commons</button>
                        </a>
                        <a href="">
                            <button type="button" className="btn btn-light">Choose Home Page</button>
                        </a>
                        <a href="">
                            <button type="button" className="btn btn-light">View Course Stream</button>
                        </a>
                        <a href="">
                            <button type="button" className="btn btn-light">New Announcement</button>
                        </a>
                        <a href="">
                            <button type="button" className="btn btn-light">New Analytics</button>
                        </a>
                        <a href="">
                            <button type="button" className="btn btn-light">View Course Notifications</button>
                        </a>
                        <div className="d-flex mt-5 justify-content-between">
                            <h5>Coming Up</h5>
                            <div>
                                <i className="fa fa-calendar"></i>
                                <a className="color-red no-text-decoration" href="">View Calendar</a>
                            </div>
                        </div>
                        <hr className="mt-0"></hr>
                        <ul className="ul-no-style">
                            {lectures.map((lecture) => (
                                <li key={lecture.id} className="d-flex">
                                    <i className="fa fa-calendar"></i>
                                    <div className="ms-2">
                                        <a href="" className="no-text-decoration color-red">{lecture.title}</a>
                                        <br/>
                                        {lecture.courseCode}
                                        <br/>
                                        {lecture.date}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;