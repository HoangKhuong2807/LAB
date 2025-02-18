import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function DSignin() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center space-y-5 w-full px-6">
      <h1 className="text-3xl font-extrabold text-center">Join Us Today</h1>
      <div className="w-full max-w-sm">
        <Button variant="outline" className="w-full text-blue-600 font-semibold">
          Sign Up with Google
        </Button>
      </div>
      <div className="flex items-center w-full max-w-sm my-3">
        <hr className="flex-grow border-t border-gray-400" />
        <span className="px-2 text-gray-600 text-sm">Or sign up with Email</span>
        <hr className="flex-grow border-t border-gray-400" />
      </div>
      <div className="w-full max-w-sm text-left">
        <div className="mb-3">
          <Label htmlFor="email">Email Address</Label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md text-gray-700"
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md text-gray-700"
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="fullname">Full Name</Label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-md text-gray-700"
          />
        </div>
      </div>
      <Button className="w-full max-w-sm bg-blue-600 text-white font-bold p-3 rounded-md">Continue</Button>
      <p className="text-sm text-gray-600 mt-4">
        Already have an account?
        <a href="#" className="text-blue-500 ml-1 font-semibold">Login</a>
      </p>
      <div className="text-gray-500 my-4">- OR -</div>
      <div className="flex space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-full text-xs font-medium">
          <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" className="w-5 h-5"/>
          <span>Google</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-full text-xs font-medium">
          <img src="https://img.icons8.com/ios-glyphs/20/000000/github.png" alt="GitHub" className="w-5 h-5"/>
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
}

export default DSignin;