import React from 'react'
import style from './Home.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ScrollText, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { AddCircleOutlineOutlined, AssignmentOutlined, AssignmentTurnedInOutlined, ForumOutlined, PlayArrowOutlined, SchoolOutlined, SearchOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleChat } from '../../../../../redux/chatSlice';
import { Link } from 'react-router-dom';
import Header from '../../../../../Components/Header/Header';

const data = [
  { name: "Web Dev", attendance: 95 },
  { name: "Database", attendance: 80 },
  { name: "AI Basics", attendance: 85 },
  { name: "Networks", attendance: 90 },
];

const announcements = [
  { title: "Course Update 1", content: "Important information for students regarding upcoming assignments.", time: "2 hours ago" },
  { title: "Course Update 2", content: "Important information for students regarding upcoming assignments.", time: "2 hours ago" },
  { title: "Course Update 3", content: "Important information for students regarding upcoming assignments.", time: "2 hours ago" },
];

const schedule = [
  { time: "09:00", subject: "Mathematics", location: "Room 101" },
  { time: "11:00", subject: "Physics Lab", location: "Lab 3B" },
  { time: "14:00", subject: "English Literature", location: "Room 205" },
];

const deadlines = [
  { title: "Assignment 3", subject: "Mathematics", due: "2 days left", color: "text-orange-500" },
  { title: "Lab Report", subject: "Physics", due: "Tomorrow", color: "text-red-500" },
  { title: "Essay Submission", subject: "English", due: "5 days left", color: "text-orange-500" },
];

const conversations = [
  {
    title: "Physics Study Group",
    message: "Does anyone have notes from today’s lecture?",
    time: "5m ago",
  },
  {
    title: "English Project Team",
    message: "Meeting at 3pm tomorrow",
    time: "15m ago",
  },
];


export default function Home() {

  const streakDays = 12;
  const dispatch = useDispatch();

  return (
    <div className="p-6 space-y-6">
      <Header title="Home" subTitle="Welcome to your dashboard" isDashboard={true} />
      
      <div className="grid grid-cols-4 gap-4">
        <Link to="/courses">
          <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }} className="p-4 flex items-center gap-3">
            <PlayArrowOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
            <div>
              <p className='font-semibold text-sm text-[#4b5e4b]'>Join Class</p>
              <p className='font-light text-sm'>Access current session</p>
            </div>
          </Card>
        </Link>

        <Link to="/resources">
          <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }} className="p-4 flex items-center gap-3">
            <AssignmentOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
            <div>
              <p className='font-semibold text-sm text-[#4b5e4b]'>Materials</p>
              <p className='font-light text-sm'>Course resources</p>
            </div>
          </Card>
        </Link>

        <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }} className="p-4 flex items-center gap-3">
          <SearchOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
          <div>
            <p className='font-semibold text-sm text-[#4b5e4b]'>find</p>
            <p className='font-light text-sm'>Search materials</p>
          </div>
        </Card>

        <Card onClick={() => dispatch(toggleChat())} sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, cursor: "pointer" }} className="p-4 flex items-center gap-3">
          <ForumOutlined fontSize='large' sx={{ color: "#4b5e4b" }} />
          <div>
            <p className='font-semibold text-sm text-[#4b5e4b]'>Discuss</p>
            <p className='font-light text-sm'>Join conversation</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom> Performance </Typography>

            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="attendance" stroke="#4b5e4b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom> Upcoming Deadlines </Typography>

            {deadlines.map((item, index) => (
              <div key={index}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
                  <div>
                    <Typography variant="subtitle1" fontWeight="medium"> {item.title} </Typography>

                    <Typography variant="body2" color="text.secondary"> {item.subject} </Typography>
                  </div>

                  <Typography variant="body2" sx={{ color: item.color, fontWeight: "bold" }}> {item.due} </Typography>
                </div>
                {index < deadlines.length - 1 && <Divider />}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3, textAlign: "center" }}>
          <CardContent>
            <Typography sx={{ textAlign: "start" }} variant="h6" fontWeight="bold" gutterBottom>
              Activity Streak
            </Typography>

            <div className='mt-4 relative inline-flex'>
              <CircularProgress
                variant="determinate"
                value={(streakDays / 12) * 100}
                size={120}
                thickness={10}
                sx={{ color: "success.main" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#37474F",
                }}
              >
                {streakDays}
              </div>
            </div>

            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}> days </Typography>
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography sx={{ mb: 3 }} variant="h6" fontWeight="bold" gutterBottom>
              Latest Announcement
            </Typography>

            <div className='border-s-4 border-[#4b5e4b] px-4'>
              <Typography variant="subtitle1" fontWeight="bold">
                Campus Event: Tech Week
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                Join us for a week of technology workshops and presentations.
              </Typography>

              <Typography variant="caption" sx={{ marginTop: 1, display: "block" }}>
                Posted 1 hour ago
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }} className='col-span-2'>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom> Today's Schedule </Typography>

            <List>
              {schedule.map((item, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={
                      <Typography component="span" variant="body1" fontWeight="bold"> {item.subject} </Typography>
                    }
                    secondary={`${item.time} - ${item.location}`}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: "#fff", width: "100%", borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom> Recent Conversations </Typography>

            <List>
              {conversations.map((chat, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={
                      <Typography component="span" variant="body1" fontWeight="bold"> {chat.title} </Typography>
                    }
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textSecondary"> {chat.message} </Typography>
                        <Typography component="span" variant="caption" color="textSecondary"> {chat.time} </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
