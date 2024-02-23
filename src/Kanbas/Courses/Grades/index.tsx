import React from 'react';

function Grades() {
    return (
        <div className="flex-fill">

            <select>
                <option>Gradebook</option>
                <option>Change Gradebook View</option>
            </select>
            <button>Import</button>
            <select>
                <option>Export</option>
            </select>
            <button>Configure</button>
            <br/>
            <h3>Student Names</h3>
            <input placeholder="Search Students"/>
            <h3>Assignment Names</h3>
            <input placeholder="Search Assignments"/><br/><br/>
            <button>Apply Filters</button>
            <br/><br/>
            <table border={1} width={"100%"}>
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>A1 SETUP<br/>Out of 100</th>
                    <th>A2 HTML<br/>Out of 100</th>
                    <th>A3 CSS<br/>Out of 100</th>
                    <th>A4 BOOTSTRAP<br/>Out of 100</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Alice Wonderland</td>
                    <td><input type="number" value="100"/></td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Princess Leia</td>
                    <td>100</td>
                    <td><input type="number" value="100"/></td>
                    <td>100</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Luke Skywalker</td>
                    <td>100</td>
                    <td>100</td>
                    <td><input type="number" value="100"/></td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Han Solo</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td><input type="number" value="100"/></td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Grades;