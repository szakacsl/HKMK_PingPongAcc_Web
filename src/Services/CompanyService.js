const URL = "https://essential-topic-381712.lm.r.appspot.com/company";

class CompanyService {
  signInCompany = async (username, password) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        username,
        password,
      },
    };

    return await fetch(`${URL}/login`, options);
  };

  signUpCompany = async (username, password) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        username,
        password,
      },
    };

    fetch(`${URL}/register`, options)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        // localStorage.setItem("jwt", )
      })
      .catch((err) => console.error(err));
  };
}

export default CompanyService;
