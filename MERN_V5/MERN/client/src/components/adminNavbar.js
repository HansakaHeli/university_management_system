import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"

function AdminNavbar(){

    // const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
		window.location.reload();
        window.location = "/admin/login";
        // setCookies("access_token", "");
        // window.localStorage.clear();        
        //navigate("/student/login");
    }

    return (
        <div>
            <Link to="/admin/homepage">Admin Home</Link>
            <Link to="/student">Manage Students</Link>
            <Link to="/instructor">Manage Instructors</Link>
            <Link to="/paymentStatus">Managee Payment Status</Link>
            {/* {!cookies.access_token ? (<Link to="/student/login">Login/Register</Link>) :(<button onClick={logout}>Logout</button>)} */}
            <button onClick={logout}>Logout</button>

        </div>
    )

}

export default AdminNavbar;