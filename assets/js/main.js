function load() {
    var input = document.getElementById("input");
    input.focus();
}

function selectCL() {
    var input = document.getElementById("input");
    input.focus();
}

function process() {
    var input = document.getElementById("input").value;
    output = input.replace(/ /g, "_");
    print(input)
    clearInput();
    console.log("Run command: " + output)
    window[output]();
}

function reInit() {
    var log = document.getElementById("log");
    var newLog = "<p>" + "-------------------" + "</p><p>" + "<a href='https://izmichael.xyz'>IzMichael</a>'s Web CLI" + "</p><p>" + "© <a href='https://github.com/izmichael/start-page'>IzMichael</a> 2020" + "</p><p>" + "-------------------" + "</p><br>";
    log.innerHTML = newLog;
}

function Nlprint(toPrint) {
    var log = document.getElementById("log");
    var oldLog = document.getElementById("log").innerHTML;
    var newLog = oldLog + "<br>" + "<p>" + "https://start.michaelmartin.tech>" + toPrint + "</p>";
    log.innerHTML = newLog;
}

function printNl(toPrint) {
    var log = document.getElementById("log");
    var oldLog = document.getElementById("log").innerHTML;
    var newLog = oldLog + "<p>" + "https://start.michaelmartin.tech>" + toPrint + "</p>" + "<br>";
    log.innerHTML = newLog;
}

function print(toPrint) {
    var log = document.getElementById("log");
    var oldLog = document.getElementById("log").innerHTML;
    var newLog = oldLog + "<p>" + "https://start.michaelmartin.tech>" + toPrint + "</p>";
    log.innerHTML = newLog;
}

function echoNlprint(toPrint) {
    var log = document.getElementById("log");
    var oldLog = document.getElementById("log").innerHTML;
    var newLog = oldLog + "<br>" + "<p>" + toPrint + "</p>";
    log.innerHTML = newLog;
}

function echoprintNl(toPrint) {
    var log = document.getElementById("log");
    var oldLog = document.getElementById("log").innerHTML;
    var newLog = oldLog + "<p>" + toPrint + "</p>" + "<br>";
    log.innerHTML = newLog;
}

function echoprint(toPrint) {
    var log = document.getElementById("log");
    var oldLog = document.getElementById("log").innerHTML;
    var newLog = oldLog + "<p>" + toPrint + "</p>";
    log.innerHTML = newLog;
}

function clearInput() {
    document.getElementById("input").value = "";
}

// Functions

function cls() {
    var log = document.getElementById("log");
    log.innerHTML = "";
    reInit();
}

function sys_b() {
    batteryPromise.then(printBatteryStatus);
}

function link_gui() {
    echoprintNl("Opening Links GUI");
    window.location.href = "/linkgui";
}

function mchn_pacman() {
    echoprintNl("Opening Machine Learning Pac-Man");
    window.location.href = "https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html";
}

function time() {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    echoprintNl(dateTime)
}

function sos() {
    echoprintNl("Opening SOS Assignment");
    window.location.href = "https://izmm.xyz/iz-sos";
}

function eng() {
    echoprintNl("Opening ENG Assignment");
    window.location.href = "https://izmm.xyz/iz-eng";
}

function sci() {
    echoprintNl("Opening SCI Assignment");
    window.location.href = "https://izmm.xyz/iz-sci";
}

// Do not Modify below this line.

let batteryPromise = navigator.getBattery();

function printBatteryStatus(batteryObject) {
    var batteryLevel = (batteryObject.level * 100 + "%");
    echoprint("Charging: " + batteryObject.charging);
    echoprint("Battery Level: " + batteryLevel);
    if (batteryObject.charging == true) {
        echoprintNl("Time Until Charged: " + batteryObject.chargingTime);
    } else {
        echoprintNl("Time Until Empty: " + batteryObject.dischargingTime);
    }
}