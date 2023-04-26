// Code your solution here
function findMatching(drivers, driverName) {
    return drivers.filter(driver=> driver.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letter.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}