//Function that clears text in the text field

function Clear(text) {
    if (text.toLowerCase() === "type your message here!") {
        document.getElementById("ContactText").value = "";
    }
}

function SendMessage(text) {
    document.getElementById("ContactText").value = "";
    window.alert("Your message has been sent successfully! I'll come back to you as soon as I can. Cheers!");
}