import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import PdfAnalyzer from "./pages/PdfAnalyzer";
import ImpactCalculator from "./pages/ImpactCalculator";
import Weather from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/prediction" element={<Prediction />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/chatbot" element={<Chatbot />} />
        <Route
  path="/pdf-analyzer"
  element={<PdfAnalyzer />}
/>
<Route
  path="/impact-calculator"
  element={<ImpactCalculator />}
/>
<Route
  path="/weather"
  element={<Weather />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
