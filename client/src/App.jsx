import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionsFormPage from "./pages/TransactionFormPage";
import TransactionsPage from "./pages/TransactionsPage";
import Navigation from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<TransactionsPage />} />
          <Route path="/create/" element={<TransactionsFormPage />} />
          <Route path="/transaction/:id/" element={<TransactionsFormPage />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
