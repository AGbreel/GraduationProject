// import React from 'react'
// import style from './Exams.module.css'
// import Header from '../../../../../Components/Header/Header'

// export default function Exams() {
//   return (
//     <>
//       <div className="p-6 space-y-6">
//         <Header title="Exams" subTitle="View and take exams" />
//       </div>
//     </>
//   )
// }



import Exam from "./Exam";
import mockExamData from "./MockExamData";

const StudentExam = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">الامتحان التجريبي</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Exam examData={mockExamData} />
      </div>
    </div>
  );
};

export default StudentExam;
