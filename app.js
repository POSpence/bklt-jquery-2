// STEP 4 - done
$(document).ready(function() {
    // STEP 5 - done
    // when you *click* email
    $(".email").focus(function() {
        // change css property *background* to black
        $(this).css("background", "black")
        // change css proeprty *color* to yellow
        $(this).css("color", "yellow");
    });

    // STEP 7
    // When you hover over jumbotron
    $(".jumbotron").hover(function() {
        // STEP 8
        // change background to an image
        // don't forget to google if you don't know how to do this
        $(this).css("background-image" , "url('http://cdn.history.com/sites/2/2013/12/new-york-city-H.jpeg')");

    })

    // STEP 9
    // select columns 
        // on mouseover header and pargraph turns blue 
        // on mouseout  header and pargraph turns red
$(".col-md-4").mouseover(function() {
    $(this).css("color", "blue");    
});
$(".col-md-4").mouseout(function() {
    $(this).css("color", "red");
});
    // STEP 10
    // mouse leaves jumbotron
        // change image to background color
        // button color yellow
        // text to white
$(".jumbrotron").mouseout(function() {
    $(this).css("background", "blue")
});
    // STEP 11
    // click on paragraph inside the jumbotron
        // paragraph disappears and other paragraph turns red
});