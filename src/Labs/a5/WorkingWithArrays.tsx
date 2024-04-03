import {useEffect, useState} from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithArrays() {
    const API = `${API_BASE}/a5/todos`;

    const [todo, setTodo] = useState({
        id: 1,
        title: "Task 1",
        completed: false,
        description: "D1",
        due: "2021-10-10"
    });
    const [todos, setTodos] = useState<any[]>([]);

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo: { id: number; title: string, completed: boolean, description: string, due: string }) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const deleteTodo = async (todo: { id: number; title: string, completed: boolean, description: string, due: string }) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };
    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };

    useEffect(() => {
        fetchTodos();
    }, []);


    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a className={"btn btn-primary"}
               href={API}>
                Get Todos
            </a>
            <br/><br/>

            <h4>Retrieving an Item from an Array by ID</h4>
            <input type={"number"}
                   value={todo.id}
                   onChange={(e) => setTodo({
                       ...todo,
                       id: parseInt(e.target.value)
                   })}/>
            <a className={"btn btn-primary ms-2"}
               href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <br/><br/>

            <h3>Filtering Array Items</h3>
            <a className={"btn btn-primary"}
               href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <br/><br/>

            <h3>Creating new Items in an Array</h3>
            <a className={"btn btn-primary"}
               href={`${API}/create`}>
                Create Todo
            </a>
            <br/><br/>

            <h3>Deleting from an Array</h3>
            <a className={"btn btn-primary"}
               href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <br/><br/>

            <h3>Updating an Item in an Array</h3>
            <input
                className={"me-2"}
                type="text"
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}/>
            <a className={"btn btn-primary mt-2"}
               href={`${API}/${todo.id}/title/${todo.title}`}>
                Update Title to {todo.title}
            </a>
            <br/><br/>

            <input
                className={"me-2"}
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked
                })}/>
            <a className={"btn btn-primary"}
               href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Update Completed to {todo.completed ? "true" : "false"}
            </a>
            <br/><br/>

            <input
                className={"me-2"}
                type="text"
                value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value
                })}/>
            <a className={"btn btn-primary"}
               href={`${API}/${todo.id}/description/${todo.description}`}>
                Update Description to {todo.description}
            </a>
            <br/><br/>

            <textarea
                className={"me-2"}
                value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}/>
            <input
                value={todo.due}
                type="date"
                className={"me-2"}
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })}/>
            <label
                className={"me-2"}
            >
                <input
                    checked={todo.completed}
                    type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })}
                />
                Completed
            </label>
            <button
                className={"btn btn-warning"}
                onClick={postTodo}
            >
                Post Todo
            </button>
            <br/>
            <button
                className={"btn btn-dark mb-2"}
                onClick={updateTodo}
            >
                Update Todo
            </button>
            <br/>
            <button
                className={"btn btn-primary mb-2"}
                onClick={createTodo}
            >
                Create Todo
            </button>
            <br/>
            <button
                className={"btn btn-success mb-2"}
                onClick={updateTitle}
            >
                Update Title
            </button>
            <ul className={"list-group"}>
                {todos.map((todo) => (
                    <li
                        className={"list-group-item"}
                        key={todo.id}
                    >
                        {todo.title}
                        <button
                            className={"btn btn-danger ms-3"}
                            onClick={() => removeTodo(todo)}
                        >
                            Remove
                        </button>
                        <button
                            className={"btn btn-warning ms-3"}
                            onClick={() => fetchTodoById(todo.id)}>
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkingWithArrays;