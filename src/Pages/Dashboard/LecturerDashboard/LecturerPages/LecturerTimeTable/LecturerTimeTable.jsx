import React, { useState } from 'react'
import style from './LecturerTimeTable.module.css'

export default function LecturerTimeTable() {

  const schedule = {
    Monday: [
      { subject: "Mathematics", time: "10:00 AM - 11:30 AM", location: "Room 101", instructor: "Dr. John Doe" }
    ],
    Tuesday: [
      { subject: "Physics", time: "12:00 PM - 1:30 PM", location: "Room 202", instructor: "Prof. Jane Smith" }
    ],
    Wednesday: [
      { subject: "Computer Science", time: "2:00 PM - 3:30 PM", location: "Lab 5", instructor: "Mr. Alan Turing" }
    ],
    Thursday: [
      { subject: "Chemistry", time: "11:00 AM - 12:30 PM", location: "Room 303", instructor: "Dr. Marie Curie" }
    ],
    Friday: [
      { subject: "History", time: "9:00 AM - 10:30 AM", location: "Room 404", instructor: "Dr. Albert Einstein" }
    ]
  };

  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-6">Student Weekly Schedule</h1>
      
      {/* Scrollable Days Navigation */}
      <div className="overflow-x-auto flex space-x-4  p-4 shadow-md rounded-lg mb-6">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg font-semibold ${selectedDay === day ? 'bg-gray-800 text-white' : 'bg-gray-500'}`}
          >
            {day}
          </button>
        ))}
      </div>
      
      {/* Weekly Calendar View */}
      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Day</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Time</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Instructor</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(schedule).map(([day, sessions]) => (
              sessions.map((entry, index) => (
                <tr key={`${day}-${index}`} className={`border-b hover:bg-gray-600 ${selectedDay === day ? 'bg-gray-500' : ''}`}>
                  <td className="py-4 px-6 font-semibold">{day}</td>
                  <td className="py-4 px-6 font-semibold">{entry.subject}</td>
                  <td className="py-4 px-6">{entry.time}</td>
                  <td className="py-4 px-6">{entry.location}</td>
                  <td className="py-4 px-6">{entry.instructor}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
