import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"

function StudentNavbar(){

    // const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
		window.location.reload();
        window.location = "/student/login";
        // setCookies("access_token", "");
        // window.localStorage.clear();        
        //navigate("/student/login");
    }

    return (
        <div>
            <Link to="/student/homepage">Student Home</Link>
            <Link to="/course/view">View Courses</Link>
            <Link to="/announcement/view">View Announcements</Link>
            {/* {!cookies.access_token ? (<Link to="/student/login">Login/Register</Link>) :(<button onClick={logout}>Logout</button>)} */}
            <button onClick={logout}>Logout</button>

        </div>
    )

}

export default StudentNavbar;