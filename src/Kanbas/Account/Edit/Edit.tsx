import React from 'react';

interface EditProps {
    toggleEditMode: () => void;
}

function Edit({toggleEditMode}: EditProps) {
    const handleCancel = () => {
        toggleEditMode();
    };

    const handleSave = () => {
        toggleEditMode();
    };
    return (
        <div className="flex-grow-1 ms-5">
            {/* Profile Edit */}
            <img src="../../../../images/anonymous.png" alt="Profile picture" />
            <br/>
            <span>Name*</span>
            <br/>
            <label>
                <input className="form-control" type="text" value="Justin Viasus" />
            </label>
            <br/>
            <span>Pronouns</span>
            <br/>
            <label>
                <select className="form-control">
                    <option>he/him</option>
                    <option>she/her</option>
                    <option>None</option>
                </select>
            </label>
            <br/>
            <span>Title</span>
            <br/>
            <label>
                <input type="text" className="form-control" />
            </label>
            <h3 className="mt-4">Contact</h3>
            <p>No registered services, you can add some on the <a
                className="no-text-decoration color-red" href="#">settings</a>
                page.</p>
            <h3 className="mt-4">Biography</h3>
            <label>
                <textarea className="form-control" value="5th year Computer Science student." />
            </label>
            <h3 className="mt-4">Links</h3>
            <ul>
                <li><a href="#">YouTube</a> Links to an external site.</li>
            </ul>
            <table>
                <tbody>
                <tr>
                    <td align="center">
                        <h3>Title</h3>
                    </td>
                    <td></td>
                    <td align="center">
                        <h3>URL</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input className="form-control" type="text" />
                        </label>
                    </td>
                    <td>
                        <i className="fa fa-arrow-right"></i>
                    </td>
                    <td>
                        <label>
                            <input className="form-control" type="text" />
                        </label>
                    </td>
                    <td>
                        <a href="#">
                            <i className="fa fa-close color-red"></i>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-light">Add another link</button>
            <hr/>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={handleSave}>Save Profile</button>
            </div>
        </div>
    );
}

export default Edit;