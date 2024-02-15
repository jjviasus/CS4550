import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemlateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";

function JavaScript() {
    console.log("Hello World!");
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/>
            <House/>
            <Spreading/>
            <Destructing/>
            {/*TODO Implementing Navigation in Single Page Applications*/}
        </div>
    );
}

export default JavaScript