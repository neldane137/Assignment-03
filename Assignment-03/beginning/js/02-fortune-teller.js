/*eslint-env browser*/

function tellFortune(jobTitle, location, partnerName, numberChildren) {
    "use strict";
    window.document.write("You will be a " + jobTitle + " in " + location + ", " + "and married to " + partnerName + " with " + numberChildren + " kids." + "<br>");
}
tellFortune("Manager", "San Diego", "Jane", "2");
tellFortune("Scientist", "Los Angeles", "Peter", "4");
tellFortune("Doctor", "New York", "Mary", "3");
