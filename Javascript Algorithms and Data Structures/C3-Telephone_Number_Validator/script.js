const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Regex for valid US telephone numbers
function isValidPhoneNumber(input) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
  return regex.test(input);
}

// Check button logic
checkBtn.addEventListener("click", () => {
  const value = userInput.value.trim();

  if (value === "") {
    resultsDiv.textContent = "Please enter a phone number.";
    resultsDiv.style.color = "red";
  } else if (isValidPhoneNumber(value)) {
    resultsDiv.textContent = `Valid US number: ${value}`;
    resultsDiv.style.color = "green";
  } else {
    resultsDiv.textContent = `Invalid US number: ${value}`;
    resultsDiv.style.color = "red";
  }
});

// Clear button logic
clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
