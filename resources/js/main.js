//home button 
var myButton = document.getElementById("myBtn");
window.onscroll = function() {scrollFuntion()};

function scrollFuntion() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display ="none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
