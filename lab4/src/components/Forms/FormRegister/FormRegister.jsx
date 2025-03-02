import { Button, Input, Card, Typography } from "antd";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { toast } from "react-hot-toast";

const { Title } = Typography;

export default function FormRegister() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        setLoading(true);
        try {
            const result = await authApi.registerAuth({
                username: formData.email,
                password: formData.password,
                fullName: formData.fullName
            });

            if (result) {
                toast.success("Registration successful! Redirecting...");
                setTimeout(() => navigate("/login"), 1000);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray">
            <Card className="w-full max-w-md p-6 shadow-lg rounded-xl">
                <Title level={2} className="text-center text-gray-800">Create an Account</Title>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {["fullName", "email", "password", "confirmPassword"].map((field, index) => (
                        <div key={index}>
                            <label className="block text-sm font-medium text-gray-700">
                                {field === "fullName" ? "Full Name" :
                                 field === "email" ? "Email Address" :
                                 field === "password" ? "Password" : "Confirm Password"}
                            </label>
                            <Input
                                name={field}
                                type={field.includes("password") ? "password" : "text"}
                                placeholder={
                                    field === "fullName" ? "Enter your full name" :
                                    field === "email" ? "Enter your email" :
                                    field === "password" ? "Enter your password" : "Confirm your password"
                                }
                                value={formData[field]}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full"
                        loading={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </Button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-indigo-600 hover:underline">
                            Log in
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    );
}
