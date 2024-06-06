import React from 'react';
// import Head from './Head';s
function RegistrationForm() {
        
    return (
        
        <div className="container bg-white rounded-lg p-9 shadow-md w-full sm:max-w-md content-center ml-12 ">
            <div className="title text-3xl font-semibold mb-8 ml-12">Registration</div>
            <form action="#">
                <div className="user-details grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 justify-center">
                    <div className="input-box">
                        <label className="details text-gray-700">Full Name</label>
                        <input type="text" placeholder="Enter your name" required className="input-field" />
                    </div>
                    <div className="input-box">
                        <label className="details text-gray-700">User Name</label>
                        <input type="text" placeholder="Enter your username" required className="input-field" />
                    </div>
                    <div className="input-box">
                        <label className="details text-gray-700">Email</label>
                        <input type="email" placeholder="Enter your email" required className="input-field" />
                    </div>
                    <div className="input-box">
                        <label className="details text-gray-700">Phone Number</label>
                        <input type="text" placeholder="Enter your number" required className="input-field" />
                    </div>
                    <div className="input-box">
                        <label className="details text-gray-700">Password</label>
                        <input type="password" placeholder="Enter your password" required className="input-field" />
                    </div>
                    <div className="input-box">
                        <label className="details text-gray-700">Confirm Password</label>
                        <input type="password" placeholder="Re-enter your password" required className="input-field" />
                    </div>
                </div>
                <div className="button">
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-md text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
