// script.js

// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the element to display the current date and time
    const datetime = document.getElementById('datetime');

    // Function to update the current date and time
    const updateDateTime = () => {
        const now = new Date(); // Get the current date and time
        datetime.textContent = `Current Date & Time: ${now.toLocaleString()}`; // Update the content of the datetime element
    };

    // Update the date and time every second (1000ms)
    setInterval(updateDateTime, 1000);

    // Select the form element
    const form = document.getElementById('orderForm');

    // Add an event listener to handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Display a thank-you message with the user's name and order quantity
        alert(`Thank you, ${form.name.value}, for ordering ${form.quantity.value} of our Harumanis Mangoes!`);

        // Reset the form fields after submission
        form.reset();
    });
});
