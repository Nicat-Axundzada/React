export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-around items-center w-full px-6 py-4 space-x-12">
        <div className="text-xl font-semibold pl-6">Startup 3</div>
        <div className="flex space-x-6 items-center">
          <a href="#overview" className="hover:opacity-15">
            Overview
          </a>
          <a href="#prices" className="hover:opacity-15">
            Prices
          </a>
          <a href="#blog" className="hover:opacity-15">
            Blog
          </a>
          <a href="#feedback" className="hover:opacity-15">
            Feedback
          </a>
          <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600">
            Purchase
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-evenly mt-12 mx-24">
        {/* Left Content */}
        <div className="md:w-1/3 px-6">
          <h1 className="text-4xl font-bold mb-6">
            Generate Awesome Web Pages
          </h1>
          <p className="text-lg mb-6">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </p>
          <button className="bg-pink-500 px-6 py-3 rounded-md text-white hover:bg-pink-600">
            Learn More
          </button>
        </div>

        {/* Right Content */}
        <div className="bg-white text-black md:w-1/3 p-6 rounded-lg shadow-lg mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Sign Up Now</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Your password"
              className="border p-2 rounded"
            />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I agree to the Terms of Service.
              </label>
            </div>
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Sign In
            </button>
            <div className="text-center text-sm">or</div>
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Login via Twitter
            </button>
            <div className="text-sm text-center mt-4">
              Do you have an Account?{" "}
              <a href="#signin" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
