// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    let correctLetters = drivers.filter(driver => driver.slice(0,string.length) == string)
    return correctLetters;
}

function matchName(drivers, string) {
    return drivers.filter(function(hometown){
        return hometown.name === string
    })
}