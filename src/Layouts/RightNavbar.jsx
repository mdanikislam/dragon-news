import FindUs from "../Components/FindUs";
import SocialLogin from "../Components/SocialLogin";


const RightNavbar = () => {
    return (
        <div>
            <div>
                <SocialLogin></SocialLogin>
            </div>
            <div className="pt-10">
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default RightNavbar;