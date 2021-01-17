var omniMode = "search";
var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today = [days[date.getDay()], date.getDate(), months[date.getMonth()], date.getFullYear()]

function load() {
    processFromLoad();
    focusOmnibox();
    startTime();
    weatherBallon("2182720");
    showDate();
}

function showDate() {
    var dateBox = document.getElementById("date");
    dateBox.innerHTML = "Today is " + today[0] + ", " + today[1] + " " + today[2] + ", " + today[3];
}

function processFromLoad() {
    show(window.location.hash.slice(1));
}

function processFromButton(goTo) {
    show(goTo);
}

function show(input) {
    hideAll();
    if (input == "") {
        var output = document.getElementById("1");
        output.classList.remove('hidden');
    } else {
        var output = document.getElementById(input);
        output.classList.remove('hidden');
    }
}

function hideAll() {
    var page1 = document.getElementById("1");
    var page2 = document.getElementById("2");
    var page3 = document.getElementById("3");
    var page4 = document.getElementById("4");
    var page5 = document.getElementById("5");
    var actionPanel = document.getElementById("actionPanel");
    var serverPanel = document.getElementById("serverPanel");
    page1.classList.add("hidden");
    page2.classList.add("hidden");
    page3.classList.add("hidden");
    page4.classList.add("hidden");
    page5.classList.add("hidden");
    actionPanel.classList.add("hidden");
    serverPanel.classList.add("hidden");
}

function runOmnibox() {
    var omnibox = document.getElementById("omnibox");
    console.log(omnibox.value)
    if (omnibox.value == "weather") {
        console.log("weather");
        show("actionPanel");
        actionPanelRun(omnibox.value);
        clearOmnibox();
    } else if (omnibox.value == "cli") {
        console.log("cli");
        window.location.href = "/cli";
        clearOmnibox();
    } else {
        console.log("else")
        if (omnibox.value.includes('.') && tlds.includes(splitAtSearch(omnibox.value, '.')[1].slice(1))) {
            return window.location.href = 'https://' + omnibox.value
        }
        var searchURL = "https://google.com/search?q=";
        window.location.href = searchURL + omnibox.value;
        clearOmnibox();
    }
}

function actionPanelRun(panel) {
    var htmlPanel = document.getElementById(panel);
    htmlPanel.classList.remove('hidden');
}

function clearOmnibox() {
    var omnibox = document.getElementById("omnibox");
    omnibox.value = "";
}

function focusOmnibox() {
    document.getElementById("omnibox").focus();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML =
        h + ":" + m + ":" + s;
    setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function showServerPanel() {
    var serverPanel = document.getElementById("serverPanel");
    serverPanel.classList.remove("hidden");
}

function localServer(port) {
    window.location = 'http://localhost:' + port;
}

function splitAtSearch(string, search) {
    let isValid = string !== '' // Disallow Empty
        &&
        typeof string === 'string' // Allow strings
        ||
        typeof string === 'number' // Allow numbers

    if (!isValid) {
        return false
    } // Failed
    else {
        string += ''
    } // Ensure string type

    // Search
    let searchIndex = string.indexOf(search)
    let isBlank = ('' + search) === ''
    let isFound = searchIndex !== -1
    let noSplit = searchIndex === 0
    let parts = []

    // Remains whole
    if (!isFound || noSplit || isBlank) {
        parts[0] = string
    }
    // Requires splitting
    else {
        parts[0] = string.substring(0, searchIndex)
        parts[1] = string.substring(searchIndex)
    }

    return parts
}