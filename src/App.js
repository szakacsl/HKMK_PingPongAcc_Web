// App.js
import { Routes, Route } from "react-router-dom";
import CompanyDetailsPage from "./Pages/CompanyDetailsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
