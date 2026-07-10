import React, { useState } from "react";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import About from "./pages/About";
import Quiz from "./pages/Test";
import Missions from "./pages/Missions";
import Galaxies from "./pages/Galaxies";
import Commet from "./pages/Commet";

import "./App.css";


function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app-wrapper">
      <nav className="main-nav">
        <button
          className={currentPage === "home" ? "active-nav-btn" : ""}
          onClick={() => setCurrentPage("home")}
        >
          Главная
        </button>

        <button
          className={currentPage === "planets" ? "active-nav-btn" : ""}
          onClick={() => setCurrentPage("planets")}
        >
          Каталог планет
        </button>

        <button
          className={currentPage === "about" ? "active-nav-btn" : ""}
          onClick={() => setCurrentPage("about")}
        >
          О проекте
          </button>
          <button
          className={currentPage === "missions" ? "active-nav-btn" : ""}
          onClick={() => setCurrentPage("missions")}
        >
          Миссии
        </button>
        

        <button
          className={currentPage === "quiz" ? "active-nav-btn" : ""}
          onClick={() => setCurrentPage("quiz")}
        >
          Тест
        </button>
        <button
          className={currentPage === "galaxies" ? "active-nav-btn" : ""}
          onClick={() => setCurrentPage("galaxies")}
        >
          Галактики
        </button>
        <button
          className={currentPage === "commets" ? "active-nav-btn" : ""}
          onClick={() => setCurrentPage("commets")}
        >
          Кометы 
        </button>
      </nav>

      <main className="page-content">
        {currentPage === "home" && <Home />}
        {currentPage === "planets" && <Planets />}
        {currentPage === "about" && <About />}
        {currentPage === "quiz" && <Quiz />}
        {currentPage === "missions" && <Missions />}
        {currentPage === "galaxies" && <Galaxies />}
        {currentPage === "commets" && <Commet />}



      </main>
    </div>
  );
}

export default App;
