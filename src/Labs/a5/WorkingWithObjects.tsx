import React, {useState, useEffect} from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);


    const [module, setModule] = useState({
        id: 2, name: "Name", description: "Description", course: "Course"
    });
    const MODULE_URL = `${API_BASE}/a5/module`

    return (
        <div>
            <h3>Working With Objects</h3>

            <h4>Retrieving Objects</h4>
            <a className={"btn btn-primary me-2"}
               href={`${API_BASE}/a5/assignment`}>
                Get Assignment
            </a>
            <a className={"btn btn-danger"}
               href={`${API_BASE}/a5/module`}>
                Get Module
            </a>
            <br/><br/>

            <h4>Retrieving Properties</h4>
            <a className={"btn btn-primary me-2"}
               href={`${API_BASE}/a5/assignment/title`}>
                Get Assignment Title
            </a>
            <a className={"btn btn-danger"}
               href={`${API_BASE}/a5/module/name`}>
                Get Module Name
            </a>
            <br/><br/>

            <h4>Modifying Properties</h4>
            {/*Updating Assignment*/}
            <button
                className={"btn btn-primary"}
                onClick={updateTitle}
            >
                Update Title to: {assignment.title}
            </button>
            <input className={"ms-2 me-2"}
                   type="text"
                   onChange={(e) => setAssignment({
                       ...assignment,
                       title: e.target.value
                   })}
                   value={assignment.title}/>
            <button
                className={"btn btn-warning"}
                onClick={fetchAssignment}>
                Fetch Assignment
            </button>
            <br/>

            <a className={"btn btn-primary"}
               href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <input className={"ms-2 mt-3"}
                   type="number"
                   onChange={(e) => setAssignment({
                       ...assignment,
                       score: parseInt(e.target.value)
                   })}
                   value={assignment.score}/>
            <br/>

            <a className={"btn btn-primary"}
               href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Assignment Completed
            </a>
            <input className={"ms-2 mt-3"}
                   type="checkbox"
                   onChange={(e) => setAssignment({
                       ...assignment,
                       completed: e.target.checked
                   })}
                   checked={assignment.completed}/>
            <br/>

            {/*Updating Module*/}
            <a className={"btn btn-danger"}
               href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input className={"ms-2 mt-3"}
                   type="text"
                   onChange={(e) => setModule({
                       ...module,
                       name: e.target.value
                   })}
                   value={module.name}/>
            <br/>
            <a className={"btn btn-danger"}
               href={`${MODULE_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <input className={"ms-2 mt-3"}
                   type="text"
                   onChange={(e) => setModule({
                       ...module,
                       description: e.target.value
                   })}
                   value={module.description}/>
        </div>
    );
}

export default WorkingWithObjects;