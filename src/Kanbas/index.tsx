import {Route, Routes, Navigate} from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import TopNavBar from "./Navigation/TopNavBar/TopNavBar";
import SidePanel from "./Navigation/SidePanel/SidePanel";
import Account from "./Account/Account";

function Kanbas() {
    return (
        <div>
            {/*<TopNavBar/>*/}
            <div className="d-flex height-100vh">
                <KanbasNavigation/>
                <div style={{flexGrow: 1}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard"/>}/>
                        <Route path="Account" element={<Account/>}/>
                        <Route path="Dashboard" element={<Dashboard/>}/>
                        <Route path="Courses" element={<Dashboard/>}/>
                        <Route path="Courses/:courseId/*" element={<Courses/>}/>
                        <Route path="Navigation/SidePanel" element={<SidePanel/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Kanbas;