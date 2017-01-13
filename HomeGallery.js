/*The two functions below allow to get a slideshow on the home page*/

//This function allow to change the image in the image carrier by clicking on the picture or invoking the function
function ChangePicture() {
    // Declaring a variable to hold hold the value of the picture that is displayed
    var pic;
    //Declare a variable to hold the orange circle
    var circle;
    // Getting the element that stores the picture displayed
    pic = document.getElementById('homeGalleryImage');
    //Getting element that 
    // If else statements to check what picture is being displayed at the moment of invoking the function
    // Depending on what picture is displayed a new image will be set up. Once the last image has been displayed the first one
    // will be set up again.
    if (pic.src.match("USB")) {
        pic.src = "FrankHogan.jpeg";
        ChangeLink("Frank Hogan Ltd (Ireland)", "http://www.frankhogan.ie/contentv3/");
    } else if (pic.src.match("FrankHogan")) {
        pic.src = "UNIMET.jpeg";
        ChangeLink("Univesidad Metropolitana (Venezuela)", "http://www.unimet.edu.ve/");
    } else if (pic.src.match("UNIMET")) {
        pic.src = "Toyota.jpeg";
        ChangeLink("Toyota de Venezuela", "http://www.toyota.com.ve/");
    } else if (pic.src.match("Toyota")) {
        pic.src = "ITSligo.jpeg";
        ChangeLink("Institute of Technologi Sligo (Ireland)", "https://www.itsligo.ie/");
    } else if (pic.src.match("ITSligo")) {
        pic.src = "USB.jpeg";
        ChangeLink("Universidad Simon Bolivar (Venezuela)", "http://www.usb.ve/");
    }// End of if else statments
    SelectCircleByPicture();
}// End of ChangingPicture function

//This function allow to change to the previous image in the image carrier by clicking on the picture 
function ChangePictureBackwards() {
    // Declaring a variable to hold hold the value of the picture that is displayed
    var pic;
    // Getting the element that stores the picture displayed
    pic = document.getElementById('homeGalleryImage');
    // If else statements to check what picture is being displayed at the moment of invoking the function
    // Depending on what picture is displayed a new image will be set up. Once the last image has been displayed the first one
    // will be set up again.
    if (pic.src.match("USB")) {
        pic.src = "ITSligo.jpeg";
        ChangeLink("Institute of Technologi Sligo (Ireland)", "https://www.itsligo.ie/");
    } else if (pic.src.match("ITSligo")) {
        pic.src = "Toyota.jpeg";
        ChangeLink("Toyota de Venezuela", "http://www.toyota.com.ve/");
    } else if (pic.src.match("Toyota")) {
        pic.src = "UNIMET.jpeg";
        ChangeLink("Univesidad Metropolitana (Venezuela)", "http://www.unimet.edu.ve/");
    } else if (pic.src.match("UNIMET")) {
        pic.src = "FrankHogan.jpeg";
        ChangeLink("Frank Hogan Ltd (Ireland)", "http://www.frankhogan.ie/contentv3/");
    } else if (pic.src.match("FrankHogan")) {
        pic.src = "USB.jpeg";
        ChangeLink("Universidad Simon Bolivar (Venezuela)", "http://www.usb.ve/");
    }// End of if else statments
    SelectCircleByPicture();
};// End of ChangingPicture function

//Function to change gallery image when clicked on gallery circles. Image will selected based on the circle that was clicked on
function ChangePictureByCircle(callerID) {
    var img = document.getElementById('homeGalleryImage');
    switch(callerID){
        case "homeCircle1":
            img.src = 'USB.jpeg';
             ChangeLink("Universidad Simon Bolivar (Venezuela)", "http://www.usb.ve/");
            break;
        case "homeCircle2":
            img.src = 'FrankHogan.jpeg';
            ChangeLink("Frank Hogan Ltd (Ireland)", "http://www.frankhogan.ie/contentv3/");
            break;
        case "homeCircle3":
            img.src = "UNIMET.jpeg";
            ChangeLink("Univesidad Metropolitana (Venezuela)", "http://www.unimet.edu.ve/");
            break;
        case "homeCircle4":
            img.src = 'Toyota.jpeg';
            ChangeLink("Toyota de Venezuela", "http://www.toyota.com.ve/");
            break;
        case "homeCircle5":
            img.src = 'ITSligo.jpeg';
            ChangeLink("Institute of Technologi Sligo (Ireland)", "https://www.itsligo.ie/");
            break;
    }//End of switch statement to select image based on the circled id passed in
}//End of ChangePirctureByCircle function

function SelectCircleByPicture() {
    var circle, img;
    img = document.getElementById('homeGalleryImage').getAttribute('src');
    test = document.getElementById('footerHead');
    test.innerHTML = img;
    switch (img) {
        case "USB.jpeg":
            circle = document.getElementById('homeCircle1');
            break;
        case "FrankHogan.jpeg":
            circle = document.getElementById('homeCircle2');
            break;
        case "UNIMET.jpeg":
            circle = document.getElementById('homeCircle3');
            break;
        case "Toyota.jpeg":
            circle = document.getElementById('homeCircle4');
            break;
        case "ITSligo.jpeg":
            circle = document.getElementById('homeCircle5');
            break;
    }//End of switch statemet
    ClearCircleSet();
    circle.src = "orange-circle.png";
}
//This function will trigger jquery funtions to change circle gallery images on the bottom to change 
// when hover the circles to change the images as per user selection
$(document).ready(function () {
//    var circleCollection = document.getElementsByClassName('galleryCircle');
//    var circleSelected;
//    for (i = 0; i < circleCollection.length ; i++) {
//        if (circleCollection[i].getAttribute('src') === 'orange-circle.png') {
//            var position = i + 1;
//            circleSelected = 'homeCircle'+ position.toString();
//        }
//    }
//    test = document.getElementById('footerHead');
//    test.innerHTML =circleSelected;
    $(".galleryCircle").on({
        mouseenter: function () {
            if (this.getAttribute('src') !== 'orange-circle.png') {
                $(this).attr('src', 'black-circle.png');
            } else {
                test = document.getElementById('footerHead');
                test.innerHTML = this.getAttribute('src');
            }
        },//End of mouseenter function
       mouseleave: function () {       
            if (this.getAttribute('src') == 'black-circle.png'){
                $(this).attr('src', 'white-circle.png')
            }           
        }//End of mouseleave function
   })//End of on function for galleryCircle class
});//End of jquery ready function

//Function to clear to white circles the whole set of circles
function ClearCircleSet() {
    var circleCollection = document.getElementsByClassName('galleryCircle');
    var circle;
    for (i = 1; i <= circleCollection.length ; i++) {
        circle = document.getElementById('homeCircle' + i.toString())
        circle.src = "white-circle.png"
    }
}
//This function that takes a circle elemet as argument, then set all circules as white circles but the one passed in
function SelectCircle(callerID) {   
    ClearCircleSet();
    circle = document.getElementById(callerID);
    circle.src = "orange-circle.png";
    ChangePictureByCircle(callerID);
}

//This function will select the appropriate hiperlink and text to be displayed for each image in the gallery
function ChangeLink(text,url) {
    link = document.getElementById('homeGalleryLink');
    link.innerHTML = text;
    link.style.fontWeight = "900";
    link.setAttribute('href',url);
}//end of SelectLing function
