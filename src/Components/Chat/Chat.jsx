import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { openRoom, closeRoom, toggleChat } from "../../redux/chatSlice";
import { X } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import moment from "moment"; // ✅ لحساب وقت إرسال الرسائل

const Chat = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.chat.isOpen);
  const activeRoomId = useSelector((state) => state.chat.activeRoomId);
  const [classrooms, setClassrooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(""); // ✅ تخزين الرسالة الجديدة
  const [users, setUsers] = useState({}); // ✅ تخزين بيانات المستخدمين
  const currentUserId = "user123"; // ✅ لاحقًا سيتم جلبه من المستخدم الحقيقي

  // ✅ تحميل بيانات المستخدم بناءً على userId
  const fetchUserData = async (userId) => {
    if (!userId || users[userId]) return; // لو البيانات موجودة، لا تعيد جلبها

    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      setUsers((prev) => ({
        ...prev,
        [userId]: userSnap.data(),
      }));
    }
  };


  // تحميل قائمة الفصول الدراسية
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "classrooms"), (snapshot) => {
      setClassrooms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);


  // ✅ تحميل الرسائل الخاصة بالكلاس المختار
  useEffect(() => {
    if (!activeRoomId) return;

    const q = query(collection(db, `classrooms/${activeRoomId}/messages`), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // جلب بيانات المستخدمين
      newMessages.forEach((msg) => fetchUserData(msg.userId));

      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [activeRoomId]);


  // ✅ إرسال رسالة جديدة إلى Firestore
  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    await addDoc(collection(db, `classrooms/${activeRoomId}/messages`), {
      text: newMessage,
      userId: "user123", // لاحقًا هنستخدم بيانات المستخدم الحقيقية
      timestamp: serverTimestamp(),
    });

    setNewMessage(""); // ✅ مسح الإدخال بعد الإرسال
  };

  return (
    <div className="fixed bottom-0 right-4 flex gap-4 z-50">
      {/* زر واحد لفتح/إغلاق التاب */}
      <button
        onClick={() => dispatch(toggleChat())}
        className="fixed bottom-5 right-10 bg-[#4b5e4b] text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
      >
        {isOpen  ? "❌ Chats" : "📚 Chats"}
      </button>

      {/* قائمة الفصول الدراسية */}
      {isOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-80 h-96 bg-white shadow-lg rounded-t-2xl border border-gray-300 relative"
        >
          {/* Header */}
          <div className="p-4 bg-[#4b5e4b] text-white rounded-t-2xl">
            <h3 className="text-lg">Your Classrooms</h3>
            <X onClick={() => dispatch(toggleChat())} className="absolute top-2 right-2 cursor-pointer" />
          </div>

          <div className="p-4 overflow-y-auto">
            {classrooms.length === 0 ? (
              <p>No classrooms found.</p>
            ) : (
              <ul>
                {classrooms.map((classroom) => (
                  <li
                    key={classroom.id}
                    onClick={() => dispatch(openRoom(classroom.id))}
                    className="p-2 border-b cursor-pointer hover:bg-gray-100"
                  >
                    {classroom.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      )}

      {/* عرض الشات فقط لو كان هناك كلاس مفتوح */}
      {activeRoomId && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-80 h-96 bg-white shadow-lg rounded-t-2xl border border-gray-300 z-50 relative"
        >
          <div className="flex justify-between items-center p-4 bg-[#4b5e4b] text-white rounded-t-2xl">
            <h3 className="text-lg">Chat - {activeRoomId}</h3>
            {/* زر إغلاق الشات */}
            <X onClick={() => dispatch(closeRoom())} className="absolute top-2 right-2 cursor-pointer" />
          </div>

          {/* ✅ عرض الرسائل */}
          <div className="p-4 h-full overflow-y-auto flex-1 pb-28">
            {messages.length > 0 ? (
              messages.map((msg) => {
                const user = users[msg.userId] || {};
                const isCurrentUser = msg.userId === currentUserId; // ✅ مقارنة المستخدم الحالي
                return (
                  <div
                    key={msg.id}
                    className={`flex items-center p-2 mb-2 ${isCurrentUser ? "justify-end" : "justify-start"
                      }`}
                  >
                    {!isCurrentUser && <Avatar src={user.image || "/default-avatar.png"} className="mr-2" />} {/* صورة المرسل */}

                    <div
                      className={`p-2 rounded-lg max-w-xs ${isCurrentUser ? "bg-green-500 text-white" : "bg-gray-200 text-black"
                        }`}
                    >
                      <strong>{user.name || "Unknown User"}</strong>
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{moment(msg.timestamp?.toDate()).format("h:mm A")}</p>
                    </div>

                    {isCurrentUser && <Avatar src={user.image || "/default-avatar.png"} className="ml-2" />} {/* صورة المستخدم */}
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500">No messages yet...</p>
            )}
          </div>

          {/* ✅ إدخال نصي وزر إرسال */}
          <div className="p-3 flex items-center absolute bottom-0 w-full bg-white">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="bg-[#4b5e4b] text-white px-4 py-2 rounded ml-2 hover:bg-green-700 transition">
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chat;
