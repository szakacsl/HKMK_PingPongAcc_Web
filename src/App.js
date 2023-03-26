// App.js
import { Routes, Route } from "react-router-dom";
import CompanyDetailsPage from "./Pages/CompanyDetailsPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/company"
          element={
            <CompanyDetailsPage
              companyName="Dummy Inc."
              companyAddress="Cluj-Napoca"
              vouchers={true}
              products={[]}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
