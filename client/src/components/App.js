import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./Home";
import EnneadrinkInfo from "./EnneadrinkInfo";
import UserHome from "./User/UserHome";
import Journal from "./User/Journal/Journal";
import Quiz from "./User/Quiz/Quiz";
import Result from "./User/Quiz/Result";
import Description from "./Description";
import HealthDescription from "./HealthDescription";
import PracticesDescription from "./PracticesDescription";
import EnneadrinkIndex from "./EnneadrinkIndex";
import HomeIndex from "./HomeIndex";
import NewEntry from "./User/Journal/NewEntry";
import History from "./User/Journal/History";

function App() {

  const [displayedContent, setDisplayedContent] = useState("")

  function holdDisplay(content) {
    setDisplayedContent(content)
  }

  return (
    <div>

      <Routes>

        <Route path="/*" element={<Home />}>
          <Route index element={<HomeIndex />} />
          <Route path=":enneadrinkID" element={<EnneadrinkInfo holdDisplay={holdDisplay} />}>
            <Route index element={<EnneadrinkIndex />} />
            <Route path="about" element={<Description content={displayedContent} />} />
            <Route path="strengths" element={<Description content={displayedContent} />} />
            <Route path="weaknesses" element={<Description content={displayedContent} />} />
            <Route path="practices" element={<PracticesDescription content={displayedContent} />} />
            <Route path="health" element={<HealthDescription content={displayedContent} />} />
          </Route>
        </Route>

        <Route path="home" element={<UserHome />}>
          <Route path="quiz" element={<Quiz />} />
        </Route>

        <Route path="result/:enneadrinkID" element={<Result holdDisplay={holdDisplay} />} >
          <Route path="about" element={<Description content={displayedContent} />} />
          <Route path="strengths" element={<Description content={displayedContent} />} />
          <Route path="weaknesses" element={<Description content={displayedContent} />} />
          <Route path="practices" element={<PracticesDescription content={displayedContent} />} />
          <Route path="health" element={<HealthDescription content={displayedContent} />} />
        </Route>

        <Route path="journal" element={<Journal />}>
          <Route path="new" element={<NewEntry />} />
          <Route path="history" element={<History />} />
        </Route>

        <Route path="*" element={<h1> Page Not Found 🥲 </h1>} />

      </Routes>

    </div>
  );
}

export default App;
