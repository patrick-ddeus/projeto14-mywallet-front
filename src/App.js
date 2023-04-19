import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
