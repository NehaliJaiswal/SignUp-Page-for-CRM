document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form");
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const mobile = document.getElementById("tel");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const submitBtn = document.getElementById("submit-btn");

  const showError = (input, message) => {
    const formBtn = input.parentElement;
    const errorMsg = formBtn.querySelector(".msg");
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
    input.classList.add("error");
  };

  const clearError = (input) => {
    const formBtn = input.parentElement;
    const errorMsg = formBtn.querySelector(".msg");
    errorMsg.style.display = "none";
    input.classList.remove("error");
  };

  const validateInput = (input, message) => {
    if (input.value.trim() === "") {
      showError(input, message);
      return false;
    } else {
      clearError(input);
      return true;
    }
  };

  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input.value.trim())) {
      showError(input, "Looks like this is not an email");
      return false;
    } else {
      clearError(input);
      return true;
    }
  };

  const validatePasswordMatch = (password, confirmPassword) => {
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match");
      return false;
    } else {
      clearError(confirmPassword);
      return true;
    }
  };

  const validateForm = () => {
    const isFirstNameValid = validateInput(
      firstName,
      "First Name cannot be empty"
    );
    const isLastNameValid = validateInput(
      lastName,
      "Last Name cannot be empty"
    );
    const isEmailValid = validateEmail(email);
    const isMobileValid = validateInput(mobile, "Mobile cannot be empty");
    const isPasswordValid = validateInput(password, "Password cannot be empty");
    const isConfirmPasswordValid = validatePasswordMatch(
      password,
      confirmPassword
    );

    return (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isMobileValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    );
  };

  submitBtn.addEventListener("click", function () {
    if (validateForm()) {
      const userData = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        mobile: mobile.value.trim(),
        password: password.value.trim(),
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Form submitted successfully and data saved to localStorage!");
      form.reset();
    }
  });
});
