const handlelogOut = () => {
    const token = localStorage.getItem("token");
  
    fetch("https://rest-api-samrt-care.onrender.com/patient/logout/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Log out Successful")
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
      });
  };