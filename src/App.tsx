import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import GlobalPayments from "./pages/GlobalPayments";
import GlobalTrade from "./pages/GlobalTrade";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GlobalPayments />} />
          <Route path="global-trade" element={<GlobalTrade />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
