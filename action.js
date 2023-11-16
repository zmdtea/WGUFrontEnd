function check() { 
    let email = document.forms["feedback"]["email"].value;
    let remail = document.forms["feedback"]["remail"].value;
    if (email != remail) {
        alert("Email inputs must match.");
        document.getElementById("remail").value = ""
    }
}

function send() {
    alert("Sent")
}