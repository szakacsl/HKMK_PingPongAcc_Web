// App.js
import { Routes, Route } from "react-router-dom";
import CompanyDetailsPage from "./Pages/CompanyDetailsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
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
