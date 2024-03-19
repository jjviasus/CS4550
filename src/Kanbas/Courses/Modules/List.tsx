import React, {useState} from "react";
// import "./index.css";
import db from "../../Database";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {KanbasState} from "../../store";
import {addModule, deleteModule, setModule, updateModule} from "./reducer";

function ModuleList() {
    const {courseId} = useParams();

    const modulesList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <input
                value={module.name}
                onChange={(e) => dispatch(setModule({...module, name: e.target.value}))}
                className="form-control mb-3"
            />
            <textarea
                value={module.description}
                onChange={(e) =>
                    dispatch(setModule({...module, description: e.target.value}))
                }
                className="form-control mb-3"
            />
            <button
                onClick={() => dispatch(addModule({...module, course: courseId}))}
                className="btn btn-success"
            >
                Add
            </button>
            <button
                onClick={() => dispatch(updateModule(module))}
                className="btn btn-warning ms-2"
            >
                Update
            </button>
            <hr/>
            <ul className="list-group wd-modules">
                {modulesList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
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
                                <button
                                    onClick={() => dispatch(deleteModule(module._id))}
                                    className="btn btn-danger ms-2 wd-modules-btn"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => dispatch(setModule(module))}
                                    className="btn btn-warning ms-2 wd-modules-btn"
                                >
                                    Edit
                                </button>
                            </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: {
                                        _id: string;
                                        name: string;
                                        description: string;
                                        module: string;
                                    }) => (
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