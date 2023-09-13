import React, { useContext, useEffect, useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("");
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1 className="question-title">{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button
          onClick={() => setOptionChosen("A")}
          className={optionChosen === "A" ? "clicked" : ""}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => setOptionChosen("B")}
          className={optionChosen === "B" ? "clicked" : ""}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => setOptionChosen("C")}
          className={optionChosen === "C" ? "clicked" : ""}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => setOptionChosen("D")}
          className={optionChosen === "D" ? "clicked" : ""}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button className="next-question" onClick={nextQuestion}>
          {" "}
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
