const handle_register = (event) => {

    event.preventDefault();
    //  console.log("hello");
    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
    }
    //   console.log(username , first_name , password);

    if (password == confirm_password) {
        document.getElementById("error").innerText ="";
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password))
            {  
                console.log(info);
                alert("Check Your Email Now")
                fetch("https://rest-api-samrt-care.onrender.com/patient/register/", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(info),
                  })
                    .then((res) => res.json())
                    .then((data) => console.log(data));
                document.getElementById("error").innerText ="Registration Successfull...";
            }

        else {
                "pass must contain eight characters, at least one letter, one number and one special character:";
             }
    }
    else {
        document.getElementById("error").innerText = "Password and Confrim Password do not Match"

        alert("dont match")
    }
}
const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
};
// log in part 

const handleLogin = (event) => {
  event.preventDefault();
  const username = getValue("login-username");
  const password = getValue("login-password");
  const errorElement = document.getElementById("error2");
  console.log(username, password);
  if ((username, password)) {
    fetch("https://rest-api-samrt-care.onrender.com/patient/login/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.token && data.user_id) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);
          // localStorage.setItem("user_id", data.username);
          // window.location.href = "index.html";
             // current user 
        const NameElement = document.getElementById("current_users");
        NameElement.innerHTML = `<span> Current User : ${username}</span>`;

          errorElement.innerText = "Login successfully Completed";
        }  else {

          errorElement.innerText = "Login Failed , Please give valid information";
        }

      });
  }
};
















