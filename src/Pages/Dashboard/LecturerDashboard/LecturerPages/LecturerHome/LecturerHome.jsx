import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ScrollText, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader } from '@mui/material';
import { AddCircleOutlineOutlined, AssignmentTurnedInOutlined, PlayArrowOutlined, SchoolOutlined } from '@mui/icons-material';
import { db } from '../../../../../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const data = [
  { name: "Web Dev", attendance: 95 },
  { name: "Database", attendance: 80 },
  { name: "AI Basics", attendance: 85 },
  { name: "Networks", attendance: 90 },
];

const insights = [
  { name: "Completed", value: 40 },
  { name: "In Progress", value: 30 },
  { name: "Not Started", value: 30 },
];

const announcements = [
  { title: "Course Update 1", content: "Important information for students regarding upcoming assignments.", time: "2 hours ago" },
  { title: "Course Update 2", content: "Important information for students regarding upcoming assignments.", time: "2 hours ago" },
  { title: "Course Update 3", content: "Important information for students regarding upcoming assignments.", time: "2 hours ago" },
];

const schedule = [
  { day: "Sun", date: 2, classes: [{ time: "09:00", subject: "Web Development", room: "Lab 101" }, { time: "11:00", subject: "Database Systems", room: "Room 204" }, { time: "14:00", subject: "AI Basics", room: "Lab 305" }] },
  { day: "Mon", date: 3, classes: [{ time: "09:00", subject: "Web Development", room: "Lab 101" }, { time: "11:00", subject: "Database Systems", room: "Room 204" }, { time: "14:00", subject: "AI Basics", room: "Lab 305" }] },
  { day: "Tue", date: 4, classes: [{ time: "09:00", subject: "Web Development", room: "Lab 101" }, { time: "11:00", subject: "Database Systems", room: "Room 204" }, { time: "14:00", subject: "AI Basics", room: "Lab 305" }] },
  { day: "Wed", date: 5, classes: [{ time: "09:00", subject: "Web Development", room: "Lab 101" }, { time: "11:00", subject: "Database Systems", room: "Room 204" }, { time: "14:00", subject: "AI Basics", room: "Lab 305" }] },
  { day: "Thu", date: 6, classes: [{ time: "09:00", subject: "Web Development", room: "Lab 101" }, { time: "11:00", subject: "Database Systems", room: "Room 204" }, { time: "14:00", subject: "AI Basics", room: "Lab 305" }] },
  { day: "Fri", date: 7, classes: [{ time: "09:00", subject: "Web Development", room: "Lab 101" }, { time: "11:00", subject: "Database Systems", room: "Room 204" }, { time: "14:00", subject: "AI Basics", room: "Lab 305" }] },
  { day: "Sat", date: 8, classes: [{ time: "09:00", subject: "Web Development", room: "Lab 101" }, { time: "11:00", subject: "Database Systems", room: "Room 204" }, { time: "14:00", subject: "AI Basics", room: "Lab 305" }] },
];

const submissions = [
  { title: "Final Project", progress: 75 },
  { title: "Midterm Exam", progress: 100 },
];

const students = [
  { name: "Alice Johnson", major: "Web Development", grade: "A+" },
  { name: "Bob Smith", major: "Database Systems", grade: "A" },
  { name: "Carol White", major: "AI Basics", grade: "A" },
];


const handleStartClass = async () => {
  try {
    const docRef = await addDoc(collection(db, "classrooms"), {
      name: `Class ${new Date().toLocaleTimeString()}`,
      createdAt: serverTimestamp(),
    });
    console.log("Classroom Created with ID: ", docRef.id);
  } catch (error) {
    console.error("Error creating classroom: ", error);
  }
};


const Home = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <Card onClick={handleStartClass} sx={{ bgcolor: "#fff" }} className="p-4 flex items-center gap-3">
          <PlayArrowOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
          <div>
            <p className='font-semibold text-sm text-[#4b5e4b]'>Start a Class</p>
            <p className='font-light text-sm'>Begin a classroom session</p>
          </div>
        </Card>

        <Card sx={{ bgcolor: "#fff" }} className="p-4 flex items-center gap-3">
          <SchoolOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
          <div>
            <p className='font-semibold text-sm text-[#4b5e4b]'>Grade Assignments</p>
            <p className='font-light text-sm'>Review pending submissions</p>
          </div>
        </Card>

        <Card sx={{ bgcolor: "#fff" }} className="p-4 flex items-center gap-3">
          <AssignmentTurnedInOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
          <div>
            <p className='font-semibold text-sm text-[#4b5e4b]'>Mark Attendance</p>
            <p className='font-light text-sm'>Take class attendance</p>
          </div>
        </Card>

        <Card sx={{ bgcolor: "#fff" }} className="p-4 flex items-center gap-3">
          <AddCircleOutlineOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
          <div>
            <p className='font-semibold text-sm text-[#4b5e4b]'>Add Task</p>
            <p className='font-light text-sm'>Create assignment or exam</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card sx={{ bgcolor: "#fff" }} className="p-4">
          <h2 className="text-lg font-semibold mb-3">Course Attendance</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#4b5e4b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card sx={{ bgcolor: "#fff" }} className="p-4 rounded-lg shadow-sm">
          <CardContent className="text-lg font-semibold text-gray-700">
            Recent Submissions
          </CardContent>

          <CardContent className="space-y-4">
            {submissions.map((submission, index) => (
              <div key={index} className="space-y-1">
                <h3 className="font-medium text-gray-800">{submission.title}</h3>

                <div className="relative w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="absolute top-0 left-0 h-2 bg-green-600 rounded-full"
                    style={{ width: `${submission.progress}%` }}
                  ></div>
                </div>

                <span className="text-xs text-gray-500">{submission.progress}% Completed</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#fff" }} className="p-4 rounded-lg shadow-sm">
          <CardContent className="text-lg font-semibold text-gray-700">
            Top Performing Students
          </CardContent>

          <CardContent className="space-y-4">
            {students.map((student, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2 last:border-b-0">
                <div>
                  <h3 className="font-medium text-gray-800">{student.name}</h3>
                  <p className="text-sm text-gray-600">{student.major}</p>
                </div>

                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {student.grade}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#fff" }} className="p-4">
          <h2 className="text-lg font-semibold mb-3">Course Insights</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={insights} dataKey="value" outerRadius={90}>
                {insights.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#4CAF50", "#FFC107", "#FF5722"][index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card sx={{ bgcolor: "#fff" }} className="p-4 rounded-lg shadow-sm">
          <CardHeader className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <ScrollText size={20} className="text-green-800" />
            Recent Announcements
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((ann, index) => (
              <div key={index} className="border-l-4 border-green-700 pl-3">
                <h3 className="font-semibold text-gray-800">{ann.title}</h3>
                <p className="text-sm text-gray-600">{ann.content}</p>
                <span className="text-xs text-gray-400">{ann.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#fff" }} className="p-4 rounded-lg shadow-sm col-span-2">
          <CardHeader className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <CalendarDays size={20} className="text-green-800" />
            Weekly Schedule
          </CardHeader>
          <CardContent className="grid grid-cols-7 gap-2">
            {schedule.map((day, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded-md text-center">
                <div className="font-semibold text-gray-800">{day.day}</div>
                <div className="text-gray-600 text-sm">{day.date}</div>
                <div className="mt-2 space-y-1">
                  {day.classes.map((cls, idx) => (
                    <div key={idx} className="bg-white p-2 rounded-md shadow-sm text-xs">
                      <p className="font-medium text-gray-700">{cls.time}</p>
                      <p className="text-gray-600">{cls.subject}</p>
                      <p className="text-gray-500">{cls.room}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
