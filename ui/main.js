console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innertHTML = 'New value';

//Move the image
var img = document.getElementById('modi');
var marginLeft = 0;
function moveRiht () {
    marginLeft = marginLeft + 5;
    img.style.marginleft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};
