import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col gap-2 py-4 justify-center items-center">
           <div>
            <img className="md:w-[350px] w-[250px]" src={logo} alt="" />
            </div> 
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;