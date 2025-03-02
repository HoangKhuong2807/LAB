import { Input, Button, Card } from "antd";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { userContext } from "../../App";
import { Link, Navigate } from "react-router-dom";

function UserProfile() {
    const { dataUser, tokenAuth, setTokenAuth } = useContext(userContext);

    const handleLogout = () => {
        console.log("Logging out...");
        if (setTokenAuth) {
            setTokenAuth("");  
            localStorage.removeItem("tokenAuth");
            console.log("Logout successful");
        } else {
            console.error("setTokenAuth is not available!");
        }
    };
    
    return (
        <>
            {tokenAuth ? (
                <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center">
                    <Header />
                    <Card className="w-full max-w-2xl mt-10 p-6 shadow-lg rounded-lg bg-white">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Profile</h1>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Full name</label>
                                <Input 
                                    value={dataUser.data.fullName} 
                                    disabled 
                                    className="w-full h-10 border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <Input 
                                    value={dataUser.data.username} 
                                    disabled 
                                    className="w-full h-10 border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <Input 
                                    value={dataUser.data.email} 
                                    disabled 
                                    className="w-full h-10 border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <Input 
                                    value={dataUser.data.phone} 
                                    disabled 
                                    className="w-full h-10 border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Button type="primary" danger className="w-full max-w-xs" onClick={handleLogout}>
                                    <Link to="/">LogOut</Link>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            ) : (
                <Navigate to='/'/>
            )}
        </>
    );
}

export default UserProfile;
