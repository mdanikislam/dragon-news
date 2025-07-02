import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-12 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login your account</h2>
          <form>
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
            <button
              type="submit"
              className="w-full btn btn-neutral text-white font text-md py-2 rounded hover:bg-gray-800 transition duration-200"
            >
              Login
            </button>
            <p className="text-center pt-3">Don't Have An Account? <span  className="text-red-500 font-bold"><Link to='/auth/register'>Register</Link></span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
