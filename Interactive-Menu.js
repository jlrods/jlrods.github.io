//Function to determine the current web page and apply the correct styling for the chosen submenu
var checkSubMenu = function () {
    var fileName = location.href.split("/").slice(-1).toString();
    var menu = document.querySelectorAll("div.subMenu");
    var p = document.getElementById("testP")
    if (fileName === "Education.html") {
        p.textContent = fileName;
        menu[0].firstChild.style.backgroundColor = "black";
    } else {
        p.textContent = "Oh Oh didnt work";
    }
      
    switch(fileName){
        case "index.html":
            menu[0].style.backgroundColor = "green";
            //$("a[target='index.html']").css()
            break;
        case "Education.html":
            break;
        case "Career.html":
            break;
        case "MyInterests.html":
            break;
        case "ContactMe.html":
            break;
    }//End of switch statement
}// End of checSubMenu function

checkSubMenu();