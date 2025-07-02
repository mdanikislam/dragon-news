import { Link } from "react-router";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="md:flex justify-between">
            <div></div>
            <div className="flex gap-5 text-gray-500 font-bold">
                <Link to='/'>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex gap-5">
               <Link to='/auth/register'> <img src={userIcon} alt="" /></Link>
                <Link to='/auth/login' className="btn btn-neutral px-6">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;