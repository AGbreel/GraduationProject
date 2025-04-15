const mockExamData = {
    timer: 10, // مدة الامتحان بالدقائق
    questions: [
      {
        id: "q1",
        text: "ما هو عاصمة فرنسا؟",
        options: ["برلين", "مدريد", "باريس", "روما"],
        correct: 2,
      },
      {
        id: "q2",
        text: "كم عدد الكواكب في المجموعة الشمسية؟",
        options: ["7", "8", "9", "10"],
        correct: 1,
      },
      {
        id: "q3",
        text: "من هو مؤسس شركة مايكروسوفت؟",
        options: ["ستيف جوبز", "بيل غيتس", "مارك زوكربيرغ", "إيلون ماسك"],
        correct: 1,
      },
    ],
  };
  
  export default mockExamData;
  