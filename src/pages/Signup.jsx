import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { motion } from 'framer-motion';
import googleLogo from '../assets/google-logo.svg'
import fbLogo from '../assets/facebook-log.svg'
import { BaseUrl } from '../Constant/ApiDoamin';
import axios from 'axios';

const Signup = () => {
    const [ErrorMessage, setErrorMessage] = useState('');
    const { signUpWithGmail, createUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

  

    const goToHome = () => {
        navigate('/');
    };

    // login with google
    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
        }).catch((error) => console.log(error))
    }

    // login with email password
    const handleSignup = async(event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        try {
            const userCredential = await createUser(email, password);
            
            if (userCredential.user) {
              await axios.post(`${BaseUrl}users`, {
                name: name,
                email: email,
                role: "user"
              });
              navigate(from, { replace: true });
            }
        } catch (error) {
        setErrorMessage(error.message);
        } finally {
        setIsLoading(false);
        }
        // createUser(email, password).then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     if (userCredential.user) {
        //         await axios.post(`${BaseUrl}users`, {
        //           name: name,
        //           email: email,
        //           role: "user"
        //         });
        //         navigate(from, { replace: true });
        //       }
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(error.message)
        //     setErrorMessage(errorMessage);
        //     // ..
        // })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-300 py-6 flex items-center justify-center">
            
            
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
                    <div className="px-8 py-10">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
                        <form onSubmit={handleSignup} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    required 
                                />
                            </div>
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
                            {ErrorMessage && <p className="text-red-500 text-sm">{ErrorMessage}</p>}
                            <div>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Sign Up
                                </motion.button>
                            </div>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-blue-600 hover:underline">
                                Login Now
                            </Link>
                        </p>
                    </div>
                    <div className="px-8 py-6 bg-gray-50">
                        <div className="flex flex-col space-y-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRegister}
                                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <img src={googleLogo} alt="Google logo" className="w-5 h-5 mr-2" />
                                Sign up with Google
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <img src={fbLogo} alt="Facebook logo" className="w-5 h-5 mr-2" />
                                Sign up with Facebook
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Signup