import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import EnneadrinkInfo from "./EnneadrinkInfo";

function App() {

  return (
    <div>

            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/:enneadrinkID" element={<EnneadrinkInfo/>} />
                </Route>


                <Route path="*" element={<h1> Page Not Found 🥲</h1>} />
            </Routes>
  
    </div>
  );
}

export default App;
