document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let isValid = true;
    let errorMessage = "";

    // Clear previous error borders
    [name, email, message].forEach((field) => field.style.borderColor = "");

    // Check if fields are empty
    if (name.value.trim() === "") {
      isValid = false;
      name.style.borderColor = "red";
      errorMessage += "Name is required.\n";
    }

    if (email.value.trim() === "") {
      isValid = false;
      email.style.borderColor = "red";
      errorMessage += "Email is required.\n";
    } else if (!validateEmail(email.value)) {
      isValid = false;
      email.style.borderColor = "red";
      errorMessage += "Enter a valid email address.\n";
    }

    if (message.value.trim() === "") {
      isValid = false;
      message.style.borderColor = "red";
      errorMessage += "Message is required.\n";
    }

    if (!isValid) {
      alert(errorMessage);
      event.preventDefault(); // Stop form submission
    }
  });

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
});
