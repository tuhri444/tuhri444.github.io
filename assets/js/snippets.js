function copyDiscordToClipboard() {
    /* global navigator, alert */
    navigator.clipboard.writeText("Theodorus#3166");
    alert("Saved the discord username Theodorus#3166 to the clipboard.");
}

function copyEmailToClipboard() {
    /* global navigator, alert */
    navigator.clipboard.writeText("adealdrey1@gmail.com");
    alert("Saved the email adealdrey1@gmail.com to the clipboard.");
}

function openLinkedIn(link) {
    window.open(link, '_blank').focus();
}