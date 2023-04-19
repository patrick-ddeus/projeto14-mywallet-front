import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
