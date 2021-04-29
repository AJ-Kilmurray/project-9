const convertButton = document.getElementById("submit"); // Submit/Convert Button
const input = document.getElementById("input"); // Input Field
const outputText = document.getElementById("output"); // Calculation output text

// When the convert button is clicked, this function is run
convertButton.addEventListener("click", () => {
  // fahrenheit receives the value in the input field
  fahrenheit = input.value;

    // If the input field contains something
    if (fahrenheit.length > 0) {

        // Attempts to convert the input value to celsius
        let celsius = (fahrenheit - 32) * (5/9);

        // If the input was not a number
        if (isNaN(celsius)) {

            // Logs a warning in console
            console.warn("Input is not a Number!");

            // Clears the input field
            input.value = "";

            // Updates the placeholder to say the input was invalid
            input.placeholder = "Invalid input, try again with a number!";

            input.classList.toggle("bg-danger");

            // Creates a time out for the original placeholder to return to
            setTimeout(() => {

                // Reverts back to original placeholder
                input.placeholder = "Input fahrenheit temperature for conversion!";

                input.classList.toggle("bg-danger");

            }, 2000);

        // If the input was a number
        } else {
            // Creates a new variable containing the string with the value of celsius
            let outputValue = `${celsius}°C`;

            // Updates the text to the new value of celsius after successful conversion
            outputText.textContent = outputValue;

            // Sets the input field to empty for QoL & to remove need of backspacing
            input.value = "";

            // Logs to console it was successful
            console.log("Converted to celsius!");
        }

    // If the input value is empty
    } else {

        // Logs a warning that the input field is empty
        console.warn("Input is empty!");

        // Updates the placeholder to say the input was invalid
        input.placeholder = "Invalid input, try again with a number!";

        input.classList.toggle("bg-danger");

        // Creates a time out for the original placeholder to return to
        setTimeout(() => {

            // Reverts back to original placeholder
            input.placeholder = "Input fahrenheit temperature for conversion!";

            input.classList.toggle("bg-danger");

        }, 2000);

    }

});
