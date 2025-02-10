import { BarChart, CheckCircle, Psychology, SchoolOutlined } from "@mui/icons-material";
import { CalendarCheck, MessageCircle, Section } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <div className="font-sans">
                <header className="bg-white text-[#4b5e4b] p-4  px-10 fixed top-0 w-full">
                    <nav className="my-container flex justify-between items-center">
                        <h1 className="text-2xl font-bold"><SchoolOutlined fontSize='large' sx={{ mr: 1 }} /> UniHub</h1>
                        <ul className="flex gap-x-6">
                            <li className="cursor-pointer bg-white text-black px-4 py-2 rounded-md hover:text-[#4b525e]">Features</li>
                            <li className="cursor-pointer bg-white text-black px-4 py-2 rounded-md hover:text-[#4b5e4b]">Solutions</li>
                            <li className="cursor-pointer bg-white text-black px-4 py-2 rounded-md hover:text-[#4b5e4b]">Pricing</li>
                            <Link to={'/verification'}> <li className="cursor-pointer text-white bg-green-900 hover:bg-green-700 px-4 py-2 rounded-md">Get Started</li> </Link>
                        </ul>
                    </nav>
                </header>

                <section className="bg-[#3F5040]">
                    <div className="my-container text-center text-white py-20 px-6 flex justify-between items-start">
                        <div className="text-start">
                            <h2 className="text-4xl font-bold leading-normal">The Future of <br /> <span className="text-[#A6C3AF]">Education</span> <br /> Management</h2>
                            <p className="mt-4 text-md max-w-xl mx-auto">
                                UniHub revolutionizes campus management with AI-powered tools, real-time analysis, and seamless collaboration features.
                            </p>
                            <div className="mt-6 space-x-4">
                                <button className="bg-white text-green-900 px-6 py-2 rounded-md">Get Started</button>
                                <button className="border border-white px-6 py-2 rounded-md">Watch Demo</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="bg-[#525E52] text-white p-4 rounded-lg shadow-md w-52 text-start mb-5">
                                    <BarChart className="text-white" size={20} />
                                    <h3 className="text-sm mt-3 font-medium">Analytics Dashboard</h3>
                                </div>

                                <div className="bg-[#525E52] text-white p-4 rounded-lg shadow-md w-52 text-start">
                                    <CalendarCheck className="text-white" size={20} />
                                    <h3 className="text-sm mt-3 font-medium">Smart Scheduling</h3>
                                </div>
                            </div>

                            <div>
                                <div className="bg-[#525E52] text-white p-4 rounded-lg shadow-md w-52 text-start my-5">
                                    <MessageCircle className="text-white" size={20} />
                                    <h3 className="text-sm mt-3 font-medium">Instant Communication</h3>
                                </div>

                                <div className="bg-[#525E52] text-white p-4 rounded-lg shadow-md w-52 text-start">
                                    <CheckCircle className="text-white" size={20} />
                                    <h3 className="text-sm mt-3 font-medium">Attendance Tracking</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" bg-gray-100">
                    <div className="my-container py-16 text-center grid grid-cols-4 gap-6 px-10">
                        <div>
                            <h3 className="text-2xl font-bold text-[#4b5e4b]">50K+</h3>
                            <p className="text-gray-600">Active Students</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#4b5e4b]">1000+</h3>
                            <p className="text-gray-600">Courses</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#4b5e4b]">95%</h3>
                            <p className="text-gray-600">Satisfaction Rate</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#4b5e4b]">24/7</h3>
                            <p className="text-gray-600">Support</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#F8F8F6]">
                    <div className="my-container py-16 text-center">
                        <h2 className="text-3xl font-bold text-[#4b5e4b]">Powerful Features</h2>
                        <p className="text-gray-600 mt-2">Everything you need to manage your educational institution efficiently</p>
                        <div className="grid grid-cols-4 gap-6 px-10 mt-8">
                            {[
                                "AI-Powered Learning",
                                "Goal Tracking",
                                "Real-time Updates",
                                "Certifications",
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white text-black shadow-lg p-6 rounded-lg text-start">
                                    <span className="p-3 bg-[#F8F8F6] rounded-lg">
                                        <Psychology />
                                    </span>
                                    <h3 className="font-semibold text-lg mt-4">{feature}</h3>
                                    <p className="text-gray-600 text-sm mt-2">Brief description of {feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[#3F5040] py-10">
                    <div className="my-container bg-white text-black text-center py-16 px-6 rounded-md mx-10 my-10">
                        <h2 className="text-2xl font-bold text-[#4b5e4b]">Ready to Transform Your Campus?</h2>
                        <p className="mt-2 max-w-2xl mx-auto">
                            Join thousands of institutions already using UniHub to enhance their educational experience.
                        </p>
                        <Link to={"/verification"}> <button className="cursor-pointer mt-8 text-white bg-[#3F5040] hover:bg-green-700 px-4 py-3 rounded-md">Get Started Now</button> </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LandingPage;
