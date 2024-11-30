document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Show loading spinner, hide the submit button
  document.getElementById("loading-spinner").style.display = "block";
  document.getElementById("submit").style.display = "none"; // Hide submit button

  var formData = new FormData(this); // Get the form data

  fetch("https://script.google.com/macros/s/AKfycbzajJ0ItALUkAkQgQtD6xRh9p2c-XNqQf6mdFfppsEZOZjznzqvLevvSccImiSopIYD/exec", {
    method: "POST",
    body: formData,
  })
  .then(response => response.json()) // Assuming the response is in JSON format
  .then(data => {
    // Hide the loading spinner and reset the form
    document.getElementById("loading-spinner").style.display = "none";
    document.getElementById("submit").style.display = "block"; // Show submit button again

    // Show success message
    if (data.result == "success") {
      document.getElementById("success-message").style.display = "block";

      // Hide the success message after 3 seconds
      setTimeout(function() {
        document.getElementById("success-message").style.display = "none";
      }, 4000);

      // Reset the form fields
      document.getElementById("contact-form").reset();
    } else {
      // Handle any errors if needed
      alert("There was an issue with your submission.");
    }
  })
  .catch(error => {
    // Hide the loading spinner and enable the submit button in case of an error
    document.getElementById("loading-spinner").style.display = "none";
    document.getElementById("submit").style.display = "block"; // Show submit button again

    // Handle any network or server errors
    alert("An error occurred. Please try again.");
  });
});