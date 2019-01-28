/*The two functions below allow to get a slideshow on the home page*/

//This function allow to change the image in the image carrier by clicking on the picture or invoking the function
function ChangePicture() {
    // Declaring a variable to hold hold the value of the picture that is displayed
    var pic,institute;
    //Declare a variable to hold the orange circle
    var circle;
    // Getting the element that stores the picture displayed
    pic = document.getElementById('homeGalleryImage');
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
    ImageDetailsSelector(institute,pic);
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
    ImageDetailsSelector(institute, pic);
    SelectCircleByPicture();
};// End of ChangingPicture function

//Function to change gallery image when clicked on gallery circles. Image will selected based on the circle that was clicked on
function ChangePictureByCircle(callerID) {
    var img = document.getElementById('homeGalleryImage');
    switch(callerID){
        case "homeCircle1":
            ImageDetailsSelector("USB",img);
            break;
        case "homeCircle2":
            ImageDetailsSelector("Frank Hogan",img);
            break;
        case "homeCircle3":
            ImageDetailsSelector("UNIMET", img);
            break;
        case "homeCircle4":
            ImageDetailsSelector("Toyota", img);
            break;
        case "homeCircle5":
            ImageDetailsSelector("IT Sligo", img);
            break;
        case "homeCircle6":
            ImageDetailsSelector("Optel",img);
    }//End of switch statement to select image based on the circled id passed in
}//End of ChangePirctureByCircle function

//Function to define the image source path and the correspondign link for that image
function ImageDetailsSelector(institute,img) {
    switch (institute) {
        case "USB":
            img.src = 'Images/HomeGallery/USB.jpg';
            ChangeLink("Universidad Simon Bolivar (Venezuela)", "http://www.usb.ve/");
            break;
        case "Frank Hogan":
            img.src = 'Images/HomeGallery/FrankHogan.jpeg';
            ChangeLink("Frank Hogan Ltd (Ireland)", "http://www.frankhogan.ie/contentv3/");
            break;
        case "UNIMET":
            img.src = "Images/HomeGallery/UNIMET.jpeg";
            ChangeLink("Univesidad Metropolitana (Venezuela)", "http://www.unimet.edu.ve/");
            break;
        case "Toyota":
            img.src = 'Images/HomeGallery/Toyota.jpeg';
            ChangeLink("Toyota de Venezuela", "http://www.toyota.com.ve/");
            break;
        case "IT Sligo":
            img.src = 'Images/HomeGallery/ITSligo.jpeg';
            ChangeLink("Institute of Technology Sligo (Ireland)", "https://www.itsligo.ie/");
            break;
        case "Optel":
            img.src = 'Images/HomeGallery/Optel.jpg';
            ChangeLink("Optel Group (Ireland)", "https://www.optelgroup.com");
    }//End of switch institute
}//End of ImageDetailsSelector

//Function to select the correct circle when the image is changed regardless the method (arrows or circle selection)
function SelectCircleByPicture() {
    var circle, img;
    img = document.getElementById('homeGalleryImage').getAttribute('src');
    switch (img) {
        case "Images/HomeGallery/USB.jpg":
            circle = document.getElementById('homeCircle1');
            break;
        case "Images/HomeGallery/FrankHogan.jpeg":
            circle = document.getElementById('homeCircle2');
            break;
        case "Images/HomeGallery/UNIMET.jpeg":
            circle = document.getElementById('homeCircle3');
            break;
        case "Images/HomeGallery/Toyota.jpeg":
            circle = document.getElementById('homeCircle4');
            break;
        case "Images/HomeGallery/ITSligo.jpeg":
            circle = document.getElementById('homeCircle5');
            break;
        case "Images/HomeGallery/Optel.jpg":
            circle = document.getElementById('homeCircle6');
    }//End of switch statemet
    ClearCircleSet();
    circle.src = "Images/HomeGallery/orange-circle.png";
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
function ClearCircleSet() {
    var circleCollection = document.getElementsByClassName('galleryCircle');
    var circle;
    for (i = 1; i <= circleCollection.length ; i++) {
        circle = document.getElementById('homeCircle' + i.toString())
        circle.src = "Images/HomeGallery/white-circle.png"
    }
}
//This function that takes a circle elemet as argument, then set all circules as white circles but the one passed in
function SelectCircle(callerID) {   
    ClearCircleSet();
    circle = document.getElementById(callerID);
    circle.src = "Images/HomeGallery/orange-circle.png";
    ChangePictureByCircle(callerID);
}

//This function will select the appropriate hiperlink and text to be displayed for each image in the gallery
function ChangeLink(text,url) {
    link = document.getElementById('homeGalleryLink');
    link.innerHTML = text;
    link.style.fontWeight = "900";
    link.setAttribute('href',url);
}//end of SelectLing function
