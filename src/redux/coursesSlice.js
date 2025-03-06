import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [
        { id: 1, title: 'Course 1', content: 'Content for Course 1' },
        { id: 2, title: 'Course 2', content: 'Content for Course 2' },
        { id: 3, title: 'Course 3', content: 'Content for Course 3' },
    ],
    selectedCourse: null,
};

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        selectCourse: (state, action) => {
            state.selectedCourse = state.courses.find(course => course.id === action.payload);
        },
    },
});


export const { selectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
