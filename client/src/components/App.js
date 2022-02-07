import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import EnneadrinkInfo from "./EnneadrinkInfo";
import UserHome from "./User/UserHome";
import Journal from "./User/Journal/Journal";
import Quiz from "./User/Quiz/Quiz";
import Result from "./User/Quiz/Result";

function App() {

  return (
    <div>

      <Routes>

        <Route path="/" element={<Home />}>
          <Route path=":enneadrinkID" element={<EnneadrinkInfo />} />
        </Route>

        <Route path="home" element={<UserHome />}>
          <Route path ="quiz" element={<Quiz />} />
        </Route>

        <Route path="result/:enneadrinkID" element={<Result />} />

        <Route path="journal" element={<Journal />} />

        <Route path="*" element={<h1> Page Not Found 🥲</h1>} />

      </Routes>

    </div>
  );
}

export default App;
