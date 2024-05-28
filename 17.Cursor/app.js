const cursor = document.querySelector(".cursor");

document.addEventListener('mouseover', function(Event){
    moveCursor(Event.pageX, Event.pageY);
});

const moveCursor = function (pageX, pageY){
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
};