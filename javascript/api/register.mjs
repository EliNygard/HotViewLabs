import {
  extractErrorMessages,
  renderErrorMessageHtml,
} from "../messages/errorMessage.mjs";
// import { confirmPasswordError } from "../messages/loginMessages.mjs";
import { removeErrorMessage } from "../messages/removeMessages.mjs";
import { hideLoader, showLoader } from "../ui/loader.mjs";
// import { checkUsernameAvailability } from "./checkUsernameAvailability.mjs";
import { API_AUTH, API_BASE, API_REGISTER } from "./constantAPI.mjs";

async function registerUser(url, userData) {
  // validate the form inputs:
  // if (!userData.name) {
  //   throw new Error("Please enter a user name.");
  // }
  // if (userData.name.length < 3) {
  //   throw new Error(
  //     "user name must be a minimum of 3 characters. Please try again"
  //   );
  // }
  // if (!userData.email) {
  //   throw new Error("Please enter your email address.");
  // }
  // if (!userData.password) {
  //   throw new Error("Please enter a password");
  // }
  // if (userData.password.length < 8) {
  //   throw new Error(
  //     "Password must be a minimum of 8 characters. Please try again."
  //   );
  // }
  // if (userData.password !== userData.confirmPassword) {
  //   throw new Error("Passwords do not match. Please try again");
  //   // confirmPasswordError();
  //   // console.log("no match");
  // }

  showLoader();

  try {
    // Promise for testing, REMOVE
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      const errorMessages = extractErrorMessages(json);
      renderErrorMessageHtml(errorMessages);
      console.log("Error", errorMessages);
      return;
    } else {
      localStorage.setItem("registerSuccess", true);
      console.log("Registration success");
      window.location.href = "../account/login.html"
    }
    return json;

    // const accessToken = json.data.accessToken;
    // console.log(accessToken);
    // if (accessToken) {
    //   localStorage.setItem("accessToken", accessToken);
    //   localStorage.setItem("registerSuccess", true);
    //   localStorage.setItem("userName", JSON.stringify(json.data.name));
    //   // window.location.href = "../post/manage.html";
    // } else {
    //   console.log("Access token not found in response. Try again", json);
    // }


    // if (response.ok) {
    //   const accessToken = json.data.accessToken;
    //   localStorage.setItem("accessToken", accessToken);
    //   localStorage.setItem("registerSuccess", true);
    //   localStorage.setItem("userName", JSON.stringify(json.data.name));

    //   window.location.href = "../post/manage.html";
    //   // replace alert with success message
    //   // alert('User registered successfully');

    //   return json;

    // }

    // else {
    //   // display error message
    //   const errorMessages = extractErrorMessages(json);
    //   renderErrorMessageHtml(errorMessages);
    //   console.log("Error", json.error);
    // }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

// check if user exits:
// document.forms.register.addEventListener("input", async (event) => {
//     const username = event.target;
//     const available = await checkUsernameAvailability(username.value)

//     if(!available) {
//         alert(`The username ${username.value} is taken. Please try another name.`)
//     } else {
//         // do nothing or // clear the custom error message
//     }
// })

// check correct input type in forms:
document.forms.register.email.addEventListener("input", (event) => {
  event.preventDefault();
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      `Enter a valid email address. "${email.value}" must include a '@' and/or '.'.`
    );
  } else {
    email.setCustomValidity("");
  }
});

// submit form with inputs:
const registerForm = document.getElementById("js-registration-form");

registerForm.addEventListener("submit", async function (event) {
  event.preventDefault(); //prevents the default form submission behavior

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // const confirmPassword = document.getElementById("confirm-password").value;

  // validate form inputs:
  //   if (!name) {
  //     alert("Please enter a user name.");
  //     console.log("enter name");
  //     return;
  //   }

  // availability is not working properly. Everything is stated as not available, even "a"
  //   const available = await checkUsernameAvailability(name)
  //   if(!available) {
  //     alert("not avail")
  //   }

  //   if (name.length < 3) {
  //     alert("user name must be a minimum of 3 characters. Please try again");
  //     return;
  //   }

  //   if (!email) {
  //     alert("Please enter your email address.");
  //     return;
  //   }

  //   if (!password) {
  //     alert("Please enter a password");
  //     return;
  //   }
  //   if (password.length < 6) {
  //     alert("Password must be a minimum of 6 characters. Please try again.");
  //     return;
  //   }
  //   if (password !== confirmPassword) {
  //     confirmPasswordError();
  //     console.log("no match");
  //     return;
  //   } else {
  try {
    const userData = {
      name: name,
      email: email,
      password: password,
      // confirmPassword: confirmPassword,
    };

    console.log(userData);

    await registerUser(API_BASE + API_AUTH + API_REGISTER, userData);
  } catch (error) {
    // alert(error);
    console.log(error);
  }
  //   }

  // const loginResponse = await registerUser(API_BASE + API_AUTH + API_REGISTER, userData);
  // if (loginResponse) {
  //     window.location.href = '../post/manage.html';
  // }
});

// event listener for input fields. When user want to try again
registerForm.addEventListener("click", () => {
  removeErrorMessage();
});
