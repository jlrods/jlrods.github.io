function ChangeEmpImage(callerID) {
    var img;
    var frame = "ImageDisplay";
    if (callerID.toLowerCase().includes("optel")) {
        img = document.getElementById("OptelImageDisplay");
        img.src = callerID.concat(".jpg");
    } else if (callerID.toLowerCase().includes("fh")) {
        img = document.getElementById("FHImageDisplay");
        img.src = callerID.concat(".jpg");
    } else if(callerID.toLowerCase().includes("tdv")){
        img = document.getElementById("ToyotaImageDisplay");
        img.src = callerID.concat(".jpg");
    }
}