// Function to handle clicking on a square
function handleSquareClick(event) {
    event.preventDefault();  // Prevent the default action (navigation) from happening right away

    var newTab = window.open();  // Create a new tab, but don't navigate yet

    // Remove the click event listener to make the square unclickable
    this.removeEventListener('click', handleSquareClick);

    // Start the pressed animation
    this.classList.add('pressed');

    // Delay the navigation action and start the cooldown period (0.2s for "pressed" animation + 3 seconds)
    setTimeout(function() {
        // Navigate the new tab to the desired URL
        newTab.location = this.href;

        // Remove the pressed class and add the cooldown class to start the cooldown animation
        this.classList.remove('pressed');
        this.classList.add('cooldown');

        // After the cooldown animation ends (4 seconds), restore the square to its original state
        setTimeout(function() {
            this.classList.remove('cooldown');

            // Make the square clickable again
            this.addEventListener('click', handleSquareClick);
        }.bind(this), 4000);
    }.bind(this), 3200);
}

// Add the click event listener to each square
document.querySelectorAll('.square-link').forEach(function(link) {
    link.addEventListener('click', handleSquareClick);
});