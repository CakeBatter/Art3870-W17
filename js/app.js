$(document).foundation()

var today = new Date ();
var hourNow = today.getHours ();
var greeting;
// Didplay greeting//
if (hourNow > 18){greeting = 'Good evening';}
else if (hourNow > 12){greeting = 'Good afternoon';}
else if (hourNow > 0){greeting = 'Good morning';}
else {greeting = 'Welcome';}
document.write(greeting);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
