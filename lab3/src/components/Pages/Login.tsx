/* eslint-disable no-unused-vars */
import { useForm, isEmail, hasLength } from "@mantine/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      email: isEmail("Invalid email address"),
      password: hasLength({ min: 6 }, "Password must be at least 6 characters"),
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">Sign In</CardTitle>
          <p className="text-gray-500 text-sm">Enter your details below</p>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-5"
            onSubmit={form.onSubmit((values) => {
              console.log("Submitted values:", values);
            })}
          >
            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                {...form.getInputProps("email")}
                key={form.key("email")}
                type="email"
                placeholder="Enter your email"
                className="mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {form.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                {...form.getInputProps("password")}
                key={form.key("password")}
                type="password"
                placeholder="Enter your password"
                className="mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {form.errors.password && (
                <p className="text-red-500 text-sm mt-1">{form.errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg">
              Sign In
            </Button>

            {/* Sign Up Link */}
            <div className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?
              <Link to="/register"className="text-indigo-600 hover:underline ml-1" >Sign up</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
