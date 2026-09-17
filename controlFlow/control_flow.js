let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === 'manager') {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system."
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Task: user roles validation to provide diets in Dietary Services
let user = "employee";
let message;

switch (user) {
    case "employee":
        message = "Authorized to have access to 'Dietary Services'";
        break;
    case "enrolled member":
        message = "Authorized to have access to 'Dietary Services' and one-on-one interaction with a dietician";
        break;
    case "subscriber":
        message = "Authorized to have partial access to facilitate 'Dietary Services' only";
        break;
    case "non-subscriber":
        message = "Please enroll or at least subscribe first to avail this facilit";
        break;
    default:
        message = "Unkown";
    }

    console.log("User:", message);