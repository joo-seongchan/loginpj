import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Login } from "./component/login/Login";
import { Style } from "./style/Style";

function App() {
  return (
    <Router>
      <Style />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
