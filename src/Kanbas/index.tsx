import {Route, Routes, Navigate} from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import TopNavBar from "./Navigation/TopNavBar/TopNavBar";
import SidePanel from "./Navigation/SidePanel/SidePanel";
import Account from "./Account/Account";
import db from "./Database";
import {useState} from "react";
import store from "./store";
import {Provider} from "react-redux";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "reactjs.jpeg"
    });
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setCourses([...courses, {...course, ...newCourse}]);
    };
    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    return (
        <Provider store={store}>
        <div>
            {/*<TopNavBar/>*/}
            <div className="d-flex height-100vh">
                <KanbasNavigation/>
                <div style={{flexGrow: 1}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard"/>}/>
                        <Route path="Account" element={<Account/>}/>
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        }/>
                        <Route path="Courses" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        }/>
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
                        <Route path="Navigation/SidePanel" element={<SidePanel/>}/>
                    </Routes>
                </div>
            </div>
        </div>
        </Provider>
    );
}

export default Kanbas;