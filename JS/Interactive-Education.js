﻿// Variables to control the text change within buttons
var btn1=false; btn2 = false;

$(document).ready(function () {
    //jquery to control click function on the Check this media buttons
    $('#btnUSB').click(function () {
        if (btn1 === false) {
            $(this).html("<b>Hide this video!</b>");
            btn1 = true;
        } else {
            $(this).html("<b>Check this video!</b>");
            btn1 = false;
        }
        $("#videoDivUSB").slideToggle('slow');
    });

    $('#btnUNIMET').click(function () {
        if (btn2 === false) {
            $(this).html("<b>Hide this video!</b>");
            btn2 = true;
        } else {
            $(this).html("<b>Check this video!</b>");
            btn2 = false;
        }
        $("#videoDivUNIMET").slideToggle('slow');
    });

    $('[data-toggle="popover"]').popover(); 
});