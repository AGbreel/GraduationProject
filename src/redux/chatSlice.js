import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  activeRoomId: null, // ID للغرفة المفتوحة فقط
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    toggleChat: (state) => {
      state.isOpen = !state.isOpen;
      if (!state.isOpen) {
        state.activeRoomId = null; // إغلاق الغرفة عند إغلاق الشات
      }
    },

    openRoom: (state, action) => {
      state.activeRoomId = action.payload; // يفتح غرفة جديدة ويغلق القديمة
      state.isOpen = true;
    },

    closeRoom: (state) => {
      state.activeRoomId = null;
      state.isOpen = false;
    },
  },
});

export const { toggleChat, openRoom, closeRoom } = chatSlice.actions;
export default chatSlice.reducer;
