const convertButton = document.getElementById('submit'); // Submit/Convert Button
const input = document.getElementById('input'); // Input Field
const outputText = document.getElementById('output'); // Calculation output text

// When the convert button is clicked, this function is run
convertButton.addEventListener('click', () => {

    // Celcius receives the value in the input field
    celsius = input.value;

    // If the input field contains something
    if (celsius.length > 0) {
        
        // Attempts to convert the input value to fahrenheit
        let fahrenheit = celsius * (9 / 5) + 32;

        // If the input was not a number
        if (isNaN(fahrenheit)) {

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
                input.placeholder = "Input celsius temperature for conversion!";

                input.classList.toggle("bg-danger");

            }, 2000);

        // If the input was a number
        } else {

            // Creates a new variable containing the string with the value of fahrenheit
            let outputValue = `${fahrenheit}°F`;

            // Updates the text to the new value of fahrenheit after successful conversion
            outputText.textContent = outputValue;

            // Sets the input field to empty for QoL & to remove need of backspacing
            input.value = "";

            // Logs to console it was successful
            console.log('Converted to fahrenheit!')

        }

    // If the input value is empty
    } else {
        // Logs a warning that the input field is empty
        console.warn("Input is empty!");

        // Updates the placeholder to say the input was invalid
        input.placeholder = "Invalid input, try again with a number!";

        input.classList.toggle('bg-danger');

        // Creates a time out for the original placeholder to return to
        setTimeout(() => {

            // Reverts back to original placeholder
            input.placeholder = "Input celsius temperature for conversion!";
            input.classList.toggle("bg-danger");

        }, 2000);

    }

});