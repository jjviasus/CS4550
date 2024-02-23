import React from "react";
import "../../styles.css";
import "../Modules/index.css";
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";

function Assignments() {
    const {courseId} = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    console.log(assignmentList)
    return (
        <>
            <div className="flex-fill">
                <div className="d-flex justify-content-between">
                    <input placeholder="Search For Assignments"/>
                    <div>
                        <button type="button" className="btn btn-light">
                            <i className="fa fa-plus color-black me-2"></i>
                            Group
                        </button>
                        <button type="button" className="btn btn-danger">
                            <i className="fa fa-plus color-white me-2"></i>
                            Assignment
                        </button>
                    </div>
                </div>
                <hr/>
                <ul className="list-group wd-modules">
                    <li className="list-group-item">
                        <div>
                            <FaEllipsisV className="me-2"/> ASSIGNMENTS
                            <span className="float-end">
                                <FaCheckCircle className="text-success"/>
                                <FaPlusCircle className="ms-2"/><FaEllipsisV className="ms-2"/>
                            </span>
                        </div>
                        <ul className="list-group">
                            {assignmentList.map((assignment) => (
                                <li className="list-group-item">
                                    <FaEllipsisV className="me-2"/>
                                    <Link className="ms-3"
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}
                                    </Link>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/>
                                    </span>
                                </li>))}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Assignments;