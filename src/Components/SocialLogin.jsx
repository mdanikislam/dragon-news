import { FaGithub, FaGoogle } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h1 className="pb-3">Login with</h1>
            <div className="*:w-full space-y-3">
                <button className="btn"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;