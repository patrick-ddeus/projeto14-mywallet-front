import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <Router >
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-transacao/:tipo" element={<TransactionPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
