import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionsFormPage from "./pages/TransactionFormPage";
import TransactionsPage from "./pages/TransactionsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TransactionsPage />} />
          <Route path="/create/" element={<TransactionsFormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
