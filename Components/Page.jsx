import React, { useState } from "react";
import quiz from "./QuizQuestions";
import Option from "./Option";

export default function Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [click, setClick] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setClick(false);
    }
  };

  const handleOptionClick = (item) => {
    if (item === true) {
      setScore(score + 5);
      setClick(true);
    } else {
      setScore(score - 5);
    }
  };
  return (
    <div className="Page">
      <h1>{quiz.quiz_title}</h1>
      <h4>
        Question {currentQuestion + 1} of {quiz.questions.length}
      </h4>
      <h3>`Your Score is {score}`</h3>
      <div className="question-section">
        <span>{currentQuestion + 1}. </span>
        {quiz.questions[currentQuestion].question_text}
      </div>
      <div className="option-section">
        {quiz.questions[currentQuestion].answers.map((item) => {
          return (
            <Option
              item={item}
              handleOptionClick={handleOptionClick}
              click={click}
            />
          );
        })}
        {click ? (
          <button onClick={handleNextQuestion}>Next</button>
        ) : (
          <button>select option</button>
        )}
      </div>
    </div>
  );
}
