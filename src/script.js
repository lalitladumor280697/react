// Function to update the digital clock
function updateDigitalClock() {
    // Get the current date and time
    const now = new Date();

    // Extract hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format hours, minutes, and seconds to ensure they have two digits
    const formattedHours = formatTime(hours);
    const formattedMinutes = formatTime(minutes);
    const formattedSeconds = formatTime(seconds);

    // Display the formatted time in the HTML element with id 'digital-clock'
    document.getElementById('digital-clock').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Function to format time (add leading zero if needed)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Set up a time interval to update the digital clock every second
setInterval(updateDigitalClock, 1000);

// Initial update to display the time immediately when the page loads
updateDigitalClock();
