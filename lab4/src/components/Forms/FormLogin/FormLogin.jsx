import { Button, Form, Input, message, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { useContext, useState } from "react";
import { userContext } from "../../../App";

function FormLogin() {
    const { setTokenAuth } = useContext(userContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result = await authApi.loginAuth({
                username: values.email,
                password: values.password,
            });

            console.log("Login API response:", result);

            if (result?.success && result?.token) {
                setTokenAuth(result.token);
                localStorage.setItem("tokenAuth", result.token);
                messageApi.success("Login successful!");
                
                setTimeout(() => navigate("/user-profile"), 1500);
            } else {
                throw new Error(result?.message || "Invalid response from server");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
            console.error("Login error:", errorMessage);
            
            notification.error({
                message: "Login Error",
                description: errorMessage,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {contextHolder}
            <Form
                onFinish={onFinish}
                className="bg-white p-6 rounded-lg shadow-md space-y-4"
            >
                <h2 className="text-xl font-semibold text-center mb-4">Sign In</h2>

                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Email is required!" },
                        { type: "email", message: "Please enter a valid email!" },
                    ]}
                >
                    <Input 
                        prefix="✉" 
                        placeholder="Email Address" 
                        className="h-11 text-sm"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: "Password is required!" },
                        {
                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "Password must be at least 8 characters and include letters & numbers.",
                        },
                    ]}
                >
                    <Input.Password 
                        prefix="🔒" 
                        placeholder="Password" 
                        className="h-11 text-sm"
                    />
                </Form.Item>

                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="w-full h-11 bg-black hover:bg-gray-800" 
                        loading={loading}
                    >
                        SIGN IN
                    </Button>
                </Form.Item>

                <div className="text-center text-sm">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
                </div>
            </Form>
        </>
    );
}

export default FormLogin;
