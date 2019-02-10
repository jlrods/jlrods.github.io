function ChangeEmpImage(callerID) {
    var img;
    var frame = "ImageDisplay";
    const path = "Images/Career/";
    var imgDisplay = "";
    var companyPath = "";
    if (callerID.toLowerCase().includes("optel")) {
        imgDisplay = "OptelImageDisplay";
        companyPath = "Optel/";
        //img = document.getElementById("OptelImageDisplay");
        //img.src = path.concat().concat(callerID.concat(".jpg"));
    } else if (callerID.toLowerCase().includes("fh")) {
        imgDisplay = "FHImageDisplay";
        companyPath = "FrankHogan/";
        //img = document.getElementById("FHImageDisplay");
        //img.src = path.concat("").concat(callerID.concat(".jpg"));
    } else if (callerID.toLowerCase().includes("tdv")) {
        imgDisplay = "ToyotaImageDisplay";
        companyPath = "TDV/";
        //img = document.getElementById("ToyotaImageDisplay");
        //img.src = path.concat().concat(callerID.concat(".jpg"));
    } else if (callerID.toLowerCase().includes("ademinsa")) {
        imgDisplay = "AdeminsaImageDisplay";
        companyPath = "Ademinsa/";
        //img = document.getElementById("AdeminsaImageDisplay");
        //img.src = path.concat().concat(callerID.concat(".jpg"));
    } else if ((callerID.toLowerCase().includes("mldn"))) {
        imgDisplay = "MLDNImageDisplay";
        companyPath = "MLDN/";
        //img = document.getElementById("MLDNImageDisplay");
        //img.src = path.concat("MLDN/").concat(callerID.concat(".jpg"));
    }
    img = document.getElementById(imgDisplay);
    img.src = path.concat(companyPath).concat(callerID.concat(".jpg"));
}