import {Link, useLocation} from "react-router-dom";
import "./index.css";

function KanbasNavigation() {
    const links = [
        {label: "Account", icon: <i className="fa fa-universal-access"/>},
        {label: "Dashboard", icon: <i className="fa fa-tachometer"></i>},
        {label: "Courses", icon: <i className="fa fa-book"></i>},
        {label: "Calendar", icon: <i className="fa fa-calendar"></i>},
        {label: "Inbox", icon: <i className="fa fa-inbox"></i>},
        {label: "History", icon: <i className="fa fa-clock-o"></i>},
        {label: "Studio", icon: <i className="fa fa-television"></i>},
        {label: "Commons", icon: <i className="fa fa-arrow-circle-right"></i>},
        {label: "Help", icon: <i className="fa fa-question-circle"></i>}
    ];
    const {pathname} = useLocation();
    return (
        <ul className="wd-kanbas-navigation d-none d-md-block">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}>
                        {link.label === "Inbox" || link.label === "Help" ? (
                            <>
                                {link.label}<br/>
                                {link.icon}
                            </>
                        ) : (
                            <>
                                {link.icon} {link.label}
                            </>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;