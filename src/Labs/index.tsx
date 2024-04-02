import Assignment3 from "./a3";
import {Link, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4";
import {Provider} from "react-redux";
import store from "./store";
import Assignment5 from "./a5";

function Labs() {
    return (
        // The application state can be shared with the entire Web application
        // by wrapping it with a Provider component that makes the state data in the store available to all components
        // within the Provider's body
        <Provider store={store}>
            <div className="container-fluid">
                <h1>Labs</h1>
                <Nav/>
                <Routes>
                    <Route path="/a3/*" element={<Assignment3/>}/>
                    <Route path="/a4" element={<Assignment4/>}/>
                    <Route path="/a5" element={<Assignment5/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default Labs;