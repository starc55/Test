import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import StartPage from "./StartPage";
import quizData from "./data/data.js";
import "./App.css"; // Add your custom styles here

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleStart = () => {
    setQuizStarted(true); // Set to true to start quiz
  };

  // Simulate loading time (you can replace this with actual data fetching logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 5000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="app">
      {loading ? (
        <span class="loader"></span>
      ) : !quizStarted ? (
        <StartPage onStart={handleStart} />
      ) : (
        <Quiz data={quizData} />
      )}
    </div>
  );
};

export default App;
