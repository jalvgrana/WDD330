function showAlert() {
    window.alert("This is an alert");
}

function showPrompt() {
    var name = window.prompt("Type your name, please...");
}

function verify() {
    let ans = window.confirm("Do you agree");
    if (ans == true) {
        window.alert("You agree!");
    } else {
        window.alert("Please leave, you don´t agree");
    }
}

function newWindow() {
    var vent = window.open();
    vent.document.write("I am typing in a new window!!");
}

function altura() {
    let height = window.outerHeight;
    window.alert(height);
}

function data() {
    x = window.location;
    y = window.location.hostname;
    z = window.location.port;
    document.getElementById('data').innerHTML = "Location: " + x + "<br>" + "Hostname (with LiveServer): " + y + "<br>" + "Port number (with LiveServer): " + z;
}