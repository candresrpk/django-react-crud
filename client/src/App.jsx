import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionsFormPage from "./pages/TransactionFormPage";
import TransactionsPage from "./pages/TransactionsPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<TransactionsPage />} />
          <Route path="/create/" element={<TransactionsFormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
