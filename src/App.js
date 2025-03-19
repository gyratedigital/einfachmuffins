import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import List from "./pages/List";
import RecipeTitle from "./Component/ReceipeTitle/Receipetitle";
import ReceipeDetails from "./pages/ReceipeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/details" element={<ReceipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
