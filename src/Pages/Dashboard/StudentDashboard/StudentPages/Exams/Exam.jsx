import { useState, useEffect } from "react";

const Exam = ({ examData }) => {
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(examData.timer * 60); // تحويل الدقائق إلى ثواني
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(null);

    // عداد الوقت
    useEffect(() => {
        if (submitted) return; // إيقاف العداد إذا تم الإرسال

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleSubmit(); // إرسال الامتحان تلقائيًا عند انتهاء الوقت
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [submitted]);

    // عند اختيار إجابة
    const handleSelect = (qId, optionIndex) => {
        if (!submitted) {
            setAnswers((prev) => ({
                ...prev,
                [qId]: optionIndex,
            }));
        }
    };

    // عند إرسال الإجابات
    const handleSubmit = () => {
        if (submitted) return; // إذا تم الإرسال بالفعل، لا تفعل شيئًا

        setSubmitted(true);
        let correctCount = 0;

        examData.questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });

        setScore(correctCount); // حساب النتيجة
    };

    return (
        <div className="max-w-3xl mx-auto p-5">
            <h2 className="text-xl font-bold mb-4 text-center">الامتحان</h2>
            <p className="text-red-600 font-semibold text-center">
                الوقت المتبقي: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </p>

            {examData.questions.map((q, index) => (
                <div key={q.id} className="border p-4 mb-3 rounded-lg bg-white shadow-md">
                    <p className="font-semibold mb-2">{index + 1}. {q.text}</p>

                    {q.options.map((opt, oIndex) => {
                        const isSelected = answers[q.id] === oIndex;
                        const isCorrect = submitted && oIndex === q.correctAnswer;
                        const isWrong = submitted && isSelected && oIndex !== q.correctAnswer;

                        return (
                            <label
                                style={{ all: "unset", cursor: "pointer" }}
                                key={oIndex}
                                className={`flex items-center p-2 mb-1 rounded-md cursor-pointer transition-colors duration-200
                                    ${isCorrect ? "bg-green-300 text-green-800" : ""}
                                    ${isWrong ? "bg-red-300 text-red-800" : ""}
                                    ${!submitted && isSelected ? "bg-blue-200 text-blue-800" : "bg-gray-100"}
                                `}
                            >
                                <input
                                    style={{ all: "unset", cursor: "pointer" }}
                                    type="radio"
                                    name={`question-${q.id}`}
                                    checked={isSelected}
                                    onChange={() => handleSelect(q.id, oIndex)}
                                    disabled={submitted}
                                    className="hidden"
                                />
                                <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center mr-2">
                                    {isSelected && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
                                </span>
                                {opt}
                            </label>
                        );
                    })}

                    {submitted && (
                        <p className="mt-2 text-sm font-semibold text-green-600">
                            الإجابة الصحيحة: {q.options[q.correctAnswer]}
                        </p>
                    )}
                </div>
            ))}

            {!submitted ? (
                <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded w-full">
                    إرسال الإجابات
                </button>
            ) : (
                <p className="text-blue-600 font-semibold text-center mt-4">
                    تم إرسال الإجابات! نتيجتك: {score} / {examData.questions.length}
                </p>
            )}
        </div>
    );
};

export default Exam;
