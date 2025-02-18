// Function to generate a random password
const generatePassword = () => {
    const length = document.getElementById("length").value; // Get user input
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"; // Characters to be used in the password
    let password = ""; // Initialize password variable

    // Check if the length is valid
    if (length < 8 || length > 128) {
        alert("Password length must be between 8 and 128 characters.");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // Generate a random index
        password += characters[randomIndex]; // Append the character at the random index to the password
    }

    document.getElementById("password").innerText = password; // Display the password
}

document.getElementById("generateBtn").addEventListener("click", generatePassword); // Add event listener to the generate button