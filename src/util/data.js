export  default function stringToNumber(inputString) {
    // Check if the input is a string
    if (typeof inputString !== 'string') {
        console.error('Error: Input is not a string.');
        return null;
    }

    // Remove leading and trailing whitespaces
    inputString = inputString.trim();

    // Check if the input is empty
    if (inputString === '') {
        console.error('Error: Input is empty.');
        return null;
    }

    // Check if the input contains only valid numeric characters
    const isValidNumber = /^[-+]?\d*\.?\d+$/.test(inputString);

    if (!isValidNumber) {
        console.error('Error: Input is not a valid number.');
        return null;
    }

    // Convert the string to a number using parseFloat()
    const numberValue = parseFloat(inputString);

    // Check if the conversion resulted in NaN
    if (isNaN(numberValue)) {
        console.error('Error: Input could not be converted to a number.');
        return null;
    }

    return numberValue;
}



