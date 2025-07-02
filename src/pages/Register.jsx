import Checkbox from "daisyui/components/checkbox";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
          <hr className="text-gray-200 py-3" />
          <form>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your Name" />
            </div>
            <div>
               <label className="block text-gray-700 mb-1" htmlFor="name">Photo URL</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200" type="url" name="photo_url" id="photo_url" placeholder="Enter Photo URL" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
                <input
              type="checkbox"
              id="terms"
              className="mr-2" 
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              I accept Terms & Conditions
            </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
            <p className="text-center pt-3">Already Have An Account? <span  className="text-red-500"><Link to='/auth/login'>Login</Link></span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
