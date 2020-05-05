function customPage() {
    var x = document.getElementById("newUser");

    if (x.style.display = "none") {
        x.style.display = "flex";
        console.log("WENT TO IF");
    } else {
        x.style.display = "none";
      console.log("WENT TO ELSE");
    }
}