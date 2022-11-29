// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Write your code here
    let day = new Date(dateString).getDay()
     /*Date.getDay() Get the Date object's weekday as a number (0-6) */
     
     /*new Date() The default constructor creates a JavaScript Date object for the current date and time (according to your system settings). */
    return dayName[day];
}
