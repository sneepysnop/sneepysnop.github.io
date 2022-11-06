// This is the sticky header //
window.onscroll = function(){myFunction()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;
function myFunction(){
    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//colour changer//
function changeStyle(){
    const background = document.querySelector("body");
    const header = document.querySelector(".container")
    background.style.backgroundColor = background.style.backgroundColor === 'white' ? 'black' : 'white' ;
    header.style.backgroundColor = header.style.backgroundColor === 'white' ? 'black' : 'white' ;
}
