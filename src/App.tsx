import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import GlobalPayments from "./pages/GlobalPayments";
import TradeFinance from "./pages/TradeFinance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TradeFinance />} />
          <Route path="global-payments" element={<GlobalPayments />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
