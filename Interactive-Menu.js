//Function to determine the current web page and apply the correct styling for the chosen submenu
var checkSubMenu = function () {
    var fileName = location.href.split("/").slice(-1);
    var p = document.getElementById("testP");
    p.textContent = fileName;
    switch(fileName){
        case "index.html":
            document.getElementById
            break;
        case "education.html":
            break;
        case "career.html":
            break;
        case "interests.html":
            break;
        case "contact.html":
            break;
    }//End of switch statement
}// End of checSubMenu function

checkSubMenu();