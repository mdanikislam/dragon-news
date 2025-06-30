import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const FindUs = () => {
    return (
        <div>
            <h1 className="pb-3">Find us on</h1>
            <div className="*:w-full space-y-3">
                <button className="btn"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;