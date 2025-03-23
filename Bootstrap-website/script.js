let users = [];
let currentUser = null;

// User Registration
function registerUser(username, password) {
    if (users.find(u => u.username === username)) {
        alert("Username already exists.");
        return;
    }
    users.push({ username, password });
    alert("User registered successfully!");
}

// User Login
function loginUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        alert("Login successful!");
        document.getElementById('admin-section').style.display = 'block'; // Show admin section for demo purposes
    } else {
        alert("Invalid credentials.");
    }
}

// Post Bug
function postBug() {
    if (!currentUser) {
        alert("Please log in first.");
        return;
    }
    const bugDetails = prompt("Enter bug details:");
    if (bugDetails) {
        alert(`Bug reported: ${bugDetails}`);
    }
}

// View Application
function viewApplication() {
    alert("Reviewing application...");
}

// Admin Functions
function provideSite() {
    alert("Site provided for bug hunting.");
}

function analyzeBugs() {
    alert("Analyzing bugs:\n" + (bugs.length ? bugs.map(b => `${b.user}: ${b.details}`).join("\n") : "No bugs reported."));
}

function manageUsers() {
    alert("Managing users:\n" + (users.length ? users.map(u => u.username).join(", ") : "No users registered."));
}

// Show Login
function showLogin() {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");
    loginUser(username, password);
}

// Show Registration
function showRegistration() {
    const username = prompt("Choose a username:");
    const password = prompt("Choose a password:");
    registerUser(username, password);
}

// Initial UI Setup
document.getElementById('admin-section').style.display = 'none'; // Hide admin section by default
