import React from 'react'
import style from './LecturerCoursesDetails.module.css'
import { Filter, Search, Sort } from '@mui/icons-material'
import { MdOutlineQrCode, MdOutlinePushPin, MdOutlineSchedule, MdOutlineVideoCall, MdOutlineAssignment, MdOutlineEventNote, MdOutlineLibraryBooks } from "react-icons/md";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, List, ListItem, Typography } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const data = [
    { name: "Attendance", value: 75 },
    { name: "Engagement", value: 100 },
];

export default function LecturerCoursesDetails() {
    return (
        <>
            <header className={`header text-white mb-5 p-5 flex items-end ${style.header}`}>
                <div>
                    <h2 className='text-3xl font-extrabold mb-3'>Advanced Web Development</h2>
                    <div className='flex gap-x-6'>
                        <div>
                            <p>Instructor</p>
                            <p>Dr. Shimaa Esmail</p>
                        </div>

                        <div>
                            <p>Teaching Assistant</p>
                            <p>Eng. Aya Ayman</p>
                        </div>

                        <div>
                            <p>Last Updated</p>
                            <p>2024-03-15</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="my-container my-5 flex justify-between items-center">
                <div className="flex items-center bg-white rounded-lg w-[80%] border border-gray-300 px-3">
                    <Search className="text-[#4b5e4b] mr-2" size={10} />
                    <input
                        className="py-2 px-2 bg-transparent text-[#4b5e4b] outline-none w-full"
                        type="text"
                        placeholder="Search Courses"
                    />
                </div>

                <div className="flex items-center bg-white rounded-lg w-[9%] border border-gray-300 px-3">
                    <Filter className="text-[#4b5e4b] mr-2" size={10} />
                    <select
                        className="py-2 px-2 bg-transparent text-[#4b5e4b] outline-none w-full"
                    >
                        <option value="">All</option>
                        <option value="Friday">Friday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                    </select>
                </div>

                <div className="flex items-center bg-white rounded-lg w-[9%] border border-gray-300 px-3">
                    <Sort className="text-[#4b5e4b] mr-2" size={20} />
                    <select
                        className="py-2 px-2 bg-transparent text-[#4b5e4b] outline-none w-full"
                    >
                        <option value="">None</option>
                        <option value="students">Number of Students</option>
                    </select>
                </div>
            </div>

            <div className="my-container my-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                    <Card sx={{ backgroundColor: "#fff" }}>
                        <CardContent sx={{ padding: "0px" }}>
                            <Accordion sx={{ backgroundColor: "#fff" }} defaultExpanded>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h6">Introduction to Web Development</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <Typography>📹 Course Overview <span className="ml-auto text-sm">15:00</span></Typography>
                                        </ListItem>

                                        <ListItem>
                                            <Typography>📄 Course Syllabus <span className="ml-auto text-sm">2.5 MB</span></Typography>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#fff" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h6">HTML & CSS Fundamentals</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography>Introduction to HTML and CSS basics.</Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#fff" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h6">JavaScript Essentials</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography>Learn JavaScript basics and ES6+ features.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-2 gap-4">
                        <Card sx={{ backgroundColor: "#fff" }}>
                            <CardContent>
                                <Typography variant="h6">Pinned Resources</Typography>
                                <List>
                                    <ListItem> <MdOutlinePushPin size={20} /> <span className='ms-2'> Week 5 Slides </span> </ListItem>
                                    <ListItem> <MdOutlinePushPin size={20} /> <span className='ms-2'> Project Guidelines </span> </ListItem>
                                    <ListItem> <MdOutlinePushPin size={20} /> <span className='ms-2'> Sample Code </span> </ListItem>
                                </List>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#fff" }}>
                            <CardContent className="flex items-center">
                                <img src="../../../../../../public\Gbreel.jpg" alt="User" className="w-12 h-12 rounded-full" />
                                <div className="ml-3">
                                    <Typography variant="h6"> Ahmed Gbreel </Typography>
                                    <Typography variant="body2"> Grade: A+ </Typography>
                                    <Typography variant="body2"> 98% Average </Typography>
                                </div>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#fff" }} className='col-span-2'>
                            <CardContent>
                                <Typography variant="h6" className="mb-4">
                                    Course Metrics
                                </Typography>

                                <ResponsiveContainer width="100%" height={150}>
                                    <BarChart data={data} layout="vertical">
                                        <XAxis type="number" hide />
                                        <YAxis type="category" dataKey="name" width={100} />
                                        <Tooltip />
                                        <Bar dataKey="value" fill="#2d6a4f" radius={[5, 5, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <MdOutlineQrCode size={20} />, label: "Attendance QR" },
                        { icon: <MdOutlineVideoCall size={20} />, label: "Join Session" },
                        { icon: <MdOutlineAssignment size={20} />, label: "Assignments" },
                        { icon: <MdOutlineEventNote size={20} />, label: "Exams" },
                        { icon: <MdOutlineLibraryBooks size={20} />, label: "Materials" },
                        { icon: <MdOutlineSchedule size={20} />, label: "Schedule" },
                        { icon: <MdOutlinePushPin size={20} />, label: "Pin Resource" }
                    ].map((item, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center gap-3 text-left bg-white p-4 rounded-lg shadow-md"
                        >
                            <p className='text-[#4b5e4b]'>{item.icon}</p>
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
