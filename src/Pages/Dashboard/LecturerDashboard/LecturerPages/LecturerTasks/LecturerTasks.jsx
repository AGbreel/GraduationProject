import { useState } from "react";

export default function LecturerTasks() {
  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState(30);
  const [preview, setPreview] = useState(false);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now().toString(), text: "", options: ["", "", "", ""], correct: null, score: 1 }]);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestion = (id, newText) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, text: newText } : q)));
  };

  const updateOption = (qId, oIndex, newOption) => {
    setQuestions(questions.map((q) =>
      q.id === qId ? { ...q, options: q.options.map((opt, i) => (i === oIndex ? newOption : opt)) } : q
    ));
  };

  const setCorrectAnswer = (qId, oIndex) => {
    setQuestions(questions.map((q) => (q.id === qId ? { ...q, correct: oIndex } : q)));
  };

  const updateScore = (id, newScore) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, score: newScore } : q)));
  };

  const handleSubmit = () => {
    const examData = { questions, timer };
    console.log("Exam Submitted:", examData);
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h2 className="text-xl font-bold mb-4">إنشاء امتحان جديد</h2>
      <div className="mb-4">
        <label className="font-semibold">مدة الامتحان (دقائق): </label>
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
          className="w-20 p-2 border rounded ml-2"
        />
      </div>
      {questions.map((q) => (
        <div key={q.id} className="border p-4 mb-3 rounded-lg relative">
          <button
            onClick={() => deleteQuestion(q.id)}
            className="absolute top-2 right-2 text-red-500"
          >
            ✖
          </button>
          <input
            type="text"
            placeholder="اكتب السؤال هنا..."
            value={q.text}
            onChange={(e) => updateQuestion(q.id, e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          {q.options.map((option, oIndex) => (
            <div key={oIndex} className="flex items-center mb-1">
              <input
                type="radio"
                name={`correct-${q.id}`}
                checked={q.correct === oIndex}
                onChange={() => setCorrectAnswer(q.id, oIndex)}
              />
              <input
                type="text"
                placeholder={`اختيار ${oIndex + 1}`}
                value={option}
                onChange={(e) => updateOption(q.id, oIndex, e.target.value)}
                className="ml-2 p-1 border rounded w-full"
              />
            </div>
          ))}
          <label className="font-semibold">درجة السؤال:</label>
          <input
            type="number"
            value={q.score}
            onChange={(e) => updateScore(q.id, e.target.value)}
            className="w-20 p-2 border rounded ml-2"
          />
        </div>
      ))}
      <button onClick={addQuestion} className="bg-blue-500 text-white px-4 py-2 rounded mb-3">+ إضافة سؤال</button>
      <button onClick={() => setPreview(true)} className="bg-yellow-500 text-white px-4 py-2 rounded ml-3">معاينة الامتحان</button>
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded ml-3">حفظ الامتحان</button>
      {preview && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg w-3/4 max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">معاينة الامتحان</h3>
            {questions.map((q, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold">{index + 1}. {q.text} (درجة: {q.score})</p>
                <ul>
                  {q.options.map((opt, i) => (
                    <li key={i} className={q.correct === i ? "text-green-500" : ""}>{opt}</li>
                  ))}
                </ul>
              </div>
            ))}
            <button onClick={() => setPreview(false)} className="bg-red-500 text-white px-4 py-2 rounded">إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
};
