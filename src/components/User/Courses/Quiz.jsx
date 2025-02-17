import React, { useState } from "react";

export default function Quiz({ questions, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;

    const isCorrect =
      selectedOption === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true);
      onComplete(score + (isCorrect ? 1 : 0));
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      {quizCompleted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quiz Completed!
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your Score: {score} / {questions.length}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="mt-4 space-y-2">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`w-full py-2 px-4 rounded-lg text-left border ${
                  selectedOption === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleAnswerSubmit}
            className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}



