/*The two functions below allow to get a slideshow on the home page*/

//This function allow to change the image in the image carrier by clicking on the picture or invoking the function
function ChangePicture(buttonID) {
    // Declaring a variable to hold hold the value of the picture that is displayed
    var pic,institute;
    //Declare a variable to hold the orange circle
    var circle;
    // Getting the element that stores the picture displayed
    var picContainer = document.getElementById('galleryLG');

    //Check if large gallery is displayed
    var test = picContainer.style.display;

    if (buttonID === "forwardArrowSM") {
        pic = document.getElementById('homeGalleryImageSM');
    } else if (buttonID === "forwardArrowLG") {       
        pic = document.getElementById('homeGalleryImageLG');
    }

    //Getting element that 
    // If else statements to check what picture is being displayed at the moment of invoking the function
    // Depending on what picture is displayed a new image will be set up. Once the last image has been displayed the first one
    // will be set up again.
    if (pic.src.match("USB")) {
        institute = "Frank Hogan";
    } else if (pic.src.match("FrankHogan")) {
        institute = "UNIMET";
    } else if (pic.src.match("UNIMET")) {
        institute = "Toyota";
    } else if (pic.src.match("Toyota")) {
        institute = "IT Sligo";
    } else if (pic.src.match("ITSligo")) {
        institute = "Optel";
    } else if (pic.src.match("Optel")){
        institute = "USB";
    }// End of if else statments
    ImageDetailsSelector(buttonID,institute,pic);
    SelectCircleByPicture(buttonID);
}// End of ChangingPicture function

//This function allow to change to the previous image in the image carrier by clicking on the picture 
function ChangePictureBackwards(buttonID) {
    // Declaring a variable to hold hold the value of the picture that is displayed
    var pic;
    // Getting the element that stores the picture displayed
    //pic = document.getElementById('homeGalleryImage');

    if (buttonID === "backwardArrowSM") {
        pic = document.getElementById('homeGalleryImageSM');
    } else if (buttonID === "backwardArrowLG") {
        pic = document.getElementById('homeGalleryImageLG');
    }

    // If else statements to check what picture is being displayed at the moment of invoking the function
    // Depending on what picture is displayed a new image will be set up. Once the last image has been displayed the first one
    // will be set up again.
    if (pic.src.match("Images/HomeGallery/USB")) {
        institute = "Optel";
    } else if (pic.src.match("Images/HomeGallery/Optel")){
        institute = "IT Sligo";
    }else if (pic.src.match("Images/HomeGallery/ITSligo")) {
        institute = "Toyota";
    } else if (pic.src.match("Toyota")) {
        institute = "UNIMET";
    } else if (pic.src.match("UNIMET")) {
        institute = "Frank Hogan";
    } else if (pic.src.match("FrankHogan")) {
        institute = "USB";
    }// End of if else statments
    ImageDetailsSelector(buttonID,institute, pic);
    SelectCircleByPicture(buttonID);
};// End of ChangingPicture function

//Function to change gallery image when clicked on gallery circles. Image will selected based on the circle that was clicked on
function ChangePictureByCircle(callerID) {
    //Declare local varialbles to work on the fucntion
    var institute ="";
    var buttonID = "forwardArrowLG";
    //Check callerID and assign correct institute value and buttonID (large or small arrows IDs)
    switch(callerID){
        case "homeCircle1LG":
            institute = "USB";
            break;
        case "homeCircle2LG":
            institute ="Frank Hogan";
            break;
        case "homeCircle3LG":
            institute = "UNIMET";
            break;
        case "homeCircle4LG":
            institute = "Toyota";
            break;
        case "homeCircle5LG":
            institute = "IT Sligo";
            break;
        case "homeCircle6LG":
            institute = "Optel";
            break;
        case "homeCircle1SM":
            institute = "USB";
            buttonID = "forwardArrowSM";
            break;
        case "homeCircle2SM":
            institute = "Frank Hogan";
            buttonID = "forwardArrowSM";
            break;
        case "homeCircle3SM":
            institute = "UNIMET";
            buttonID = "forwardArrowSM";
            break;
        case "homeCircle4SM":
            institute = "Toyota";
            buttonID = "forwardArrowSM";
            break;
        case "homeCircle5SM":
            institute = "IT Sligo";
            buttonID = "forwardArrowSM";
            break;
        case "homeCircle6SM":
            institute = "Optel";
            buttonID = "forwardArrowSM";
            break;
    }//End of switch statement to select image based on the circled id passed in
    //Check if the circled selected comes from the large or small gallery by checking the LG or SM prefix in the id
    if (callerID.includes("LG")) {
        //If large, set the image to be the one on the large gallery
        img = document.getElementById('homeGalleryImageLG');
        //Check if the caller id is a circle, otherwise it is an arrow
        if (callerID.includes("homeCircle")) {
            ImageDetailsSelector(callerID, institute, img);
        } else {
            ImageDetailsSelector(buttonID, institute, img);
        }
    } else if (callerID.includes("SM")) {
        //Otherwise the image should be the one on the small gallery
        img = document.getElementById('homeGalleryImageSM');
        //Check if the caller id is a circle, otherwise it is an arrow
        if (callerID.includes("homeCircle")) {
            ImageDetailsSelector(callerID, institute, img);
        } else {
            ImageDetailsSelector(buttonID, institute, img);
        }
    }
}//End of ChangePirctureByCircle function

//Function to define the image source path and the correspondign link for that image
function ImageDetailsSelector(callerID, institute, img) {
    //Check the institute value and assign proper values for the image source and data for the links
    switch (institute) {
        case "USB":
            img.src = 'Images/HomeGallery/USB.jpg';
            ChangeLink(callerID,"Universidad Simon Bolivar (Venezuela)", "http://www.usb.ve/");
            break;
        case "Frank Hogan":
            img.src = 'Images/HomeGallery/FrankHogan.jpeg';
            ChangeLink(callerID,"Frank Hogan Ltd (Ireland)", "http://www.frankhogan.ie/contentv3/");
            break;
        case "UNIMET":
            img.src = "Images/HomeGallery/UNIMET.jpeg";
            ChangeLink(callerID,"Univesidad Metropolitana (Venezuela)", "http://www.unimet.edu.ve/");
            break;
        case "Toyota":
            img.src = 'Images/HomeGallery/Toyota.jpeg';
            ChangeLink(callerID,"Toyota de Venezuela", "http://www.toyota.com.ve/");
            break;
        case "IT Sligo":
            img.src = 'Images/HomeGallery/ITSligo.jpeg';
            ChangeLink(callerID,"Institute of Technology Sligo (Ireland)", "https://www.itsligo.ie/");
            break;
        case "Optel":
            img.src = 'Images/HomeGallery/Optel.jpg';
            ChangeLink(callerID,"Optel Group (Ireland)", "https://www.optelgroup.com");
    }//End of switch institute
}//End of ImageDetailsSelector

//Function to select the correct circle when the image is changed regardless the method (arrows or circle selection)
function SelectCircleByPicture(buttonID) {
    //Declare local variables to work on the fuction
    var circle, img, sufix;
    //Check if the button pressed is the large or small button to select correct gallery to work with
    if (buttonID === "forwardArrowLG" || buttonID === "backwardArrowLG") {
        img = document.getElementById('homeGalleryImageLG').getAttribute('src');
        sufix = 'LG';
    } else if (buttonID === "forwardArrowSM" || buttonID === "backwardArrowSM"){
        img = document.getElementById('homeGalleryImageSM').getAttribute('src');
        sufix = 'SM';
    }//End of if statements
    //switch statement to check the image source and the assign the proper circle ID to be modified
    switch (img) {
        case "Images/HomeGallery/USB.jpg":
            circle = document.getElementById('homeCircle1'+sufix);
            break;
        case "Images/HomeGallery/FrankHogan.jpeg":
            circle = document.getElementById('homeCircle2' + sufix);
            break;
        case "Images/HomeGallery/UNIMET.jpeg":
            circle = document.getElementById('homeCircle3' + sufix);
            break;
        case "Images/HomeGallery/Toyota.jpeg":
            circle = document.getElementById('homeCircle4' + sufix);
            break;
        case "Images/HomeGallery/ITSligo.jpeg":
            circle = document.getElementById('homeCircle5' + sufix);
            break;
        case "Images/HomeGallery/Optel.jpg":
            circle = document.getElementById('homeCircle6' + sufix);
    }//End of switch statemet
    //Call method to clear the circles
    ClearCircleSet(buttonID);
    //Set the current correct circle orange (selected)
    circle.src = "Images/HomeGallery/orange-circle.png";
}
//This function will trigger jquery funtions to change circle gallery images on the bottom to change 
// when hover the circles to change the images as per user selection
$(document).ready(function () {
    $(".galleryCircle, .galleryCircleSM").on({
        mouseenter: function () {
            if (this.getAttribute('src') !== 'Images/HomeGallery/orange-circle.png') {
                $(this).attr('src', 'Images/HomeGallery/black-circle.png');
            } 
        },//End of mouseenter function
       mouseleave: function () {       
           if (this.getAttribute('src') === 'Images/HomeGallery/black-circle.png'){
               $(this).attr('src', 'Images/HomeGallery/white-circle.png')
            }           
        }//End of mouseleave function
   })//End of on function for galleryCircle class
});//End of jquery ready function

//Function to clear to white circles the whole set of circles
function ClearCircleSet(callerID) {
    //Declare variables to work on the function
    var circleCollection;
    var sufix = "";
    var circle;
    //Check if the callerID has the LG or SM prefix so the correct gallery is selected
    if (callerID.includes("LG")) {
        circleCollection = document.getElementsByClassName('galleryCircle');
        sufix = "LG";
    } else {
        circleCollection = document.getElementsByClassName('galleryCircleSM');
        sufix = "SM";
    }//End of if else statement
    //For loop to clear all circles and set them to white circles (not selected circles)    
    for (i = 1; i <= circleCollection.length; i++) {
        circle = document.getElementById('homeCircle' + i.toString() + sufix)
        circle.src = "Images/HomeGallery/white-circle.png"
    }
}//End of ClearCircleSet function

//This function that takes a circle elemet as argument, then set all circules as white circles but the one passed in
function SelectCircle(callerID) {
    //Call method to clear previous circle selection
    ClearCircleSet(callerID);
    //Declare and initialize varaible to hold a circle object by using the element id passed in as  param
    var circle = document.getElementById(callerID);
    //set the orange image as new source
    circle.src = "Images/HomeGallery/orange-circle.png";
    //Call method to change the picture
    ChangePictureByCircle(callerID);
}//End of SelectCircle function

//This function will select the appropriate hiperlink and text to be displayed for each image in the gallery
function ChangeLink(callerID, text, url) {
    //Declare variable to hold the hperlink text
    var link;
    //Check if the callerID includes the LG or SM sufix so the proper gallery is called
    if (callerID.includes("LG")) {
        link = document.getElementById('homeGalleryLinkLG');
    } else if (callerID.includes("SM")) {
        link = document.getElementById('homeGalleryLinkSM');
    }//End of if else statement
    //Set the hyperlink display text
    link.innerHTML = text;
    //Set the link attributes
    link.style.fontWeight = "900";
    link.setAttribute('href',url);
}//End of SelectLing function
