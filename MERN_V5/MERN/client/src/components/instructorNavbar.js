import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"

function InstructorNavbar(){

    // const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
		window.location.reload();
        window.location = "/instructor/login";
        // setCookies("access_token", "");
        // window.localStorage.clear();        
        //navigate("/instructor/login");
    }

    return (
        <div>
            <Link to="/instructor/homepage">Instructor Home</Link>
            <Link to="/course">Manage Courses</Link>
            <Link to="/announcement">Manage Announcements</Link>
            {/* {!cookies.access_token ? (<Link to="/student/login">Login/Register</Link>) :(<button onClick={logout}>Logout</button>)} */}
            <button onClick={logout}>Logout</button>

        </div>
    )

}

export default InstructorNavbar;