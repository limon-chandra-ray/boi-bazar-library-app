import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loginAnimation from './login.json'; // You'll need to provide this animation file
import googleLogo from '../assets/google-logo.svg'

export default function Login() {
    const [ErrorMessage, setErrorMessage] = useState('');
    const { signUpWithGmail, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // login with google
    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
        }).catch((error) => console.log(error))
    }


    const goToHome = () => {
        navigate('/');
    };

    // login with email password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            alert("Login successful!")
            navigate(from, { replace: true });
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage)
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 py-2 flex items-center justify-center">
           
           <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToHome}
                className="mt-4 text-center bg-green-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Go to Home
            </motion.button>
           
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
                    <div className="px-8 py-4">
                        <div className="flex justify-center mb-8">
                            <Lottie 
                                animationData={loginAnimation} 
                                style={{ width: 200, height: 200 }}
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    required 
                                />
                            </div>
                            {ErrorMessage && <p className="text-red-500 text-sm">Email or Username is not valid!</p>}
                            <div>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Log In
                                </motion.button>
                            </div>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/create-user" className="font-medium text-blue-600 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <div className="px-8 py-2 bg-gray-50">
                        <div className="flex flex-col space-y-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRegister}
                                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <img src={googleLogo} alt="Google logo" className="w-5 h-5 mr-2" />
                                Log in with Google
                            </motion.button>
                            {/* <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                
                                Log in with Facebook
                            </motion.button> */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}


