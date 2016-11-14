$(document).ready(function () {
    //jQuery function to control hovering event for social network icons
    $('.social-network-icon').on({
        //function to control changes when mouse enters a social network icon
        mouseenter: function(){
            var icon = $(this).attr("src");
            var newIcon;
            switch (icon) {
                case "facebook.png":
                    newIcon = "facebook-black.png";
                    break;
                case "instagram.png":
                    newIcon = "instagram-black.png";
                    break;
                case "googleplus.png":
                    newIcon = "googleplus-black.png";
                    break;
                case "linkedin.png":
                    newIcon = "linkedin-black.png";
                    break;
                case "github.png":
                    newIcon = "github-black.gif";
                    break;
            }
            $(this).attr("src", newIcon);
        },
        //function to control changes when the mouse leaves out a social network icon
        mouseleave: function () {
            var icon = $(this).attr("src");
            var newIcon;
            switch (icon) {
                case "facebook-black.png":
                    newIcon = "facebook.png";
                    break;
                case "instagram-black.png":
                    newIcon = "instagram.png";
                    break;
                case "googleplus-black.png":
                    newIcon = "googleplus.png";
                    break;
                case "linkedin-black.png":
                    newIcon = "linkedin.png";
                    break;
                case "github-black.gif":
                    newIcon = "github.png";
                    break;
            }
            $(this).attr("src", newIcon);
        }
    });
});