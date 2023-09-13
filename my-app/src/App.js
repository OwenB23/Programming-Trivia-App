import "./App.css";
import { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import EndScreen from "./Components/EndScreen";
import Quiz from "./Components/Quiz";
import Footer from "./Components/Footer";

import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1 className="game-title">JavaScript Quiz</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
