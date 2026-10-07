// Get the required HTML elements
const newDogButton = document.getElementById("new-dog-button");
const dogImage = document.getElementById("dog-image");
const message = document.getElementById("message");

// API URL
const apiUrl = "https://dog.ceo/api/breeds/image/random";


// Fetch and display a random dog
async function getRandomDog() {

    // Show loading message
    message.textContent = "🐾 Finding a new dog...";
    dogImage.style.display = "none";

    try {

        // Send request to the Dog CEO API
        const response = await fetch(apiUrl);

        // Check whether the request was successful
        if (!response.ok) {
            throw new Error("Unable to fetch dog data.");
        }

        // Convert response into JavaScript object
        const data = await response.json();

        // Get the image URL from the API response
        const imageUrl = data.message;

        // Display the image
        dogImage.src = imageUrl;
        dogImage.style.display = "block";

        // Update message
        message.textContent = "🐶 Here's your new friend!";

    } catch (error) {

        // Display error message
        message.textContent = "⚠️ Couldn't fetch a dog. Please try again.";

        console.error(error);
    }
}


// Run the function when the button is clicked
newDogButton.addEventListener("click", getRandomDog);