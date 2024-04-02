import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import React from "react";

function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <a href="http://localhost:4000/a5/welcome">
                Welcome
            </a>
            <br/>
            <hr/>
            <EncodingParametersInURLs/>
            <br/>
            <hr/>
            <WorkingWithObjects/>
            <br/>
            <hr/>
            <WorkingWithArrays/>
        </div>
    );
}

export default Assignment5;