// JavaScript code (compiled from TypeScript) for creating a dropdown with 6 options

// Define an array of options
var options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"];

// Function to create the dropdown
function createDropdown() {
    // Get the dropdown element by its ID
    var dropdown = document.getElementById("myDropdown");

    // Loop through the options array and create option elements
    options.forEach(function (optionText, index) {
        var option = document.createElement("option");
        option.value = "option" + (index + 1);
        option.text = optionText;
        dropdown.add(option);
    });
}

// Call the function to create the dropdown when the page is loaded
document.addEventListener("DOMContentLoaded", createDropdown);
