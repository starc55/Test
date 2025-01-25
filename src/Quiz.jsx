import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Quiz.css";
import clock from "./svg/clock.png";

const Quiz = ({ data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(25); // 15 seconds for each question
  const [results, setResults] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = data[currentQuestionIndex];

  useEffect(() => {
    if (quizCompleted) return; // If the quiz is completed, don't start the timer.

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          handleNext(false); // Automatically move to the next question when time is up and mark as incorrect if no answer is selected
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, quizCompleted]);

  const handleNext = (answerSelected = true) => {
    // If no answer was selected, mark the question as incorrect
    if (!answerSelected) {
      setResults((prevResults) => [
        ...prevResults,
        {
          question: currentQuestion.question,
          selected: null, // No answer selected
          correct: currentQuestion.ans, // Correct answer is already an integer
        },
      ]);
    } else {
      if (!selectedAnswer) {
        toast.warning("Iltimos variantlardan birini tanlang !", {
          autoClose: 2000,
        }); // Show custom warning notification
        return;
      }

      setResults((prevResults) => [
        ...prevResults,
        {
          question: currentQuestion.question,
          selected: parseInt(selectedAnswer), // Parse selected answer as integer
          correct: currentQuestion.ans, // Correct answer is already an integer
        },
      ]);
    }

    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(25); // Reset timer for the next question
    } else {
      setQuizCompleted(true);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleRefresh = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setTimeLeft(25);
    setResults([]);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const correctAnswers = results.filter(
      (result) => result.selected === result.correct
    ).length;

    return (
      <div className="results">
        <h2 className="result_head">Quiz Completed!</h2>
        <p className="result_text">
          You answered {correctAnswers} out of {data.length} questions
          correctly.
        </p>
        {results.map((result, index) => (
          <div
            key={index}
            className={
              result.selected === result.correct
                ? "result correct"
                : "result incorrect"
            }
          >
            <div className="card">
              <p className="question">Q: {result.question}</p>
              <p>
                Your Answer:{" "}
                {result.selected
                  ? data[index][`option${result.selected}`]
                  : "No answer"}
              </p>
              <p>Correct Answer: {data[index][`option${result.correct}`]}</p>
            </div>
          </div>
        ))}
        <button onClick={handleRefresh} type="button" className="button">
          <span className="button__text">Refresh</span>
          <span className="button__icon">
            <svg
              className="svg"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path>
              <path d="M0 0h48v48h-48z" fill="none"></path>
            </svg>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="radiogroup">
        <div className="test_head">
          <p className="test_quiz">
            Quiz: {currentQuestionIndex + 1} of {data.length}
          </p>
          <p className={`timer ${timeLeft < 10 ? "timer-warning" : ""}`}>
            Time Left: {timeLeft}s{" "}
            <img src={clock} alt="clock_test" className="clock" />
          </p>
        </div>
        <hr />
        <div className="question">
          <p>{currentQuestion.question}</p>
        </div>
        {["1", "2", "3", "4"].map((option) => (
          <div className="wrapper" key={option}>
            <input
              value={option}
              id={`option${option}`}
              name="quiz"
              type="radio"
              className="state"
              onChange={handleOptionChange}
              checked={selectedAnswer === option}
            />
            <label htmlFor={`option${option}`} className="label">
              <div className="indicator"></div>
              <span className="text">{currentQuestion[`option${option}`]}</span>
            </label>
          </div>
        ))}
        <button onClick={() => handleNext(true)} className="next-button">
          Next
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Quiz;
