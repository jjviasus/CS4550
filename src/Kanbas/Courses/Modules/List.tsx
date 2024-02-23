import React, {useState} from "react";
import "./index.css";
import {modules} from "../../Database";
import {useParams} from "react-router";

function ModuleList() {
    const {courseId} = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">
                {modulesList.map((module, index) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}
                        key={module._id}
                    >
                        <div>
                            <i className="fa fa-ellipsis-v"></i> Week {index} - {module.name}
                            <span className="float-end">
                                <i className="fa fa-check-circle text-success"></i>
                                <i className="fa fa-plus ms-2"></i>
                                <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson) => (
                                    <li className="list-group-item" key={lesson._id}>
                                        <i className="fa fa-ellipsis-v"></i>
                                        <span className="ps-5">{lesson.name}</span>
                                        <span className="float-end">
                                            <i className="fa fa-check-circle text-success"></i>
                                            <i className="fa fa-ellipsis-v ms-2"></i>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ModuleList;