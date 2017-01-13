/*The two functions below allow to get a slideshow on the home page*/

//This function allow to change the image in the image carrier by clicking on the picture or invoking the function
function ChangePicture() {
    // Declaring a variable to hold hold the value of the picture that is displayed
    var pic;
    // Getting the element that stores the picture displayed
    pic = document.getElementById('homeGalleryImage');
    // If else statements to check what picture is being displayed at the moment of invoking the function
    // Depending on what picture is displayed a new image will be set up. Once the last image has been displayed the first one
    // will be set up again.
    if (pic.src.match("USB")) {
        pic.src = "FrankHogan.jpeg";
    } else if (pic.src.match("FrankHogan")) {
        pic.src = "UNIMET.jpeg";
    } else if (pic.src.match("UNIMET")) {
        pic.src = "Toyota.jpeg";
    } else if (pic.src.match("Toyota")) {
        pic.src = "ITSligo.jpeg";
    } else if (pic.src.match("ITSligo")) {
        pic.src = "USB.jpeg";
    }// End of if else statments
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
    } else if (pic.src.match("ITSligo")) {
        pic.src = "Toyota.jpeg";
    } else if (pic.src.match("Toyota")) {
        pic.src = "UNIMET.jpeg";
    } else if (pic.src.match("UNIMET")) {
        pic.src = "FrankHogan.jpeg";
    } else if (pic.src.match("FrankHogan")) {
        pic.src = "USB.jpeg";
    }// End of if else statments
}// End of ChangingPicture function

//This function will trigger jquery funtions to change circle gallery images on th bottom to change 
// when hover the circles to change the images as per user selection
    $(document).ready(function () {
        $(".galleryCircle").on({
            mouseenter: function () {
                $(this).attr('src','orange-circle.png');
            },//End of mouseenter function
            mouseleave: function () {
                $(this).attr('src','white-circle.png')
            }//End of mouseleave function
        })//End of on function for galleryCircle class
    })//End of jquery ready function
