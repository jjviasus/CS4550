import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import React from "react";

const API_BASE = process.env.REACT_APP_API_BASE;

function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <a href={`${API_BASE}/a5/welcome`}>
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