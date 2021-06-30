function Register(e) {
  e.preventDefault();
  let formdata = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };
  let body = JSON.stringify(formdata);
  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: body,
    // mode: "no-cors",
    //additional information your request
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
      .then((response) => {
          let { message } = response;
            alert(message);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
let Login = (e) => {
  e.preventDefault();
  let formdata = {
    password: document.getElementById("password_1").value,
    username: document.getElementById("username_1").value,
  };
  body = JSON.stringify(formdata);
  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: body,
    // mode: "no-cors",
    //additional information your request
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
      .then((response) => {
          let { error,message } = response;
        if (error) {
            alert(message)
        } else {
            getmyProfile(response, formdata);
        }
    })
    .catch((err) => {
      console.log(err);
    });
};
function getmyProfile({ token }, { username }) {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        console.log(response,"hi");
        window.location.href="home.html"
    })
    .catch((err) => {
      console.log(err);
    });
}
