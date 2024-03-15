import {useSelector, useDispatch} from "react-redux";
import {LabState} from "../../../store";

function HelloRedux() {
    // Components within the body of the Provider can then select the state data they want using the useSelector hook
    const {message} = useSelector((state: LabState) => state.helloReducer);
    return (
        <div>
            <h1>Hello Redux</h1>
            <h2>{message}</h2>
        </div>
    );
}

export default HelloRedux;