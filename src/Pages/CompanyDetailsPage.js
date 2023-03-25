import React from "react";

import ViewCompanyDetails from "../Components/ViewCompanyDetails";
import EditCompanyDetails from "../Components/EditCompanyDetails";

const CompanyDetailsPage = () => {
  let mode = "view";

  return (
    <>
      {mode === "view" ? (
        <ViewCompanyDetails
          companyDetails={{
            companyName: "Dummy Inc.",
            companyAddress: "Cluj-Napoca",
            vouchers: true,
          }}
        />
      ) : (
        <EditCompanyDetails />
      )}
    </>
  );
};

export default CompanyDetailsPage;
