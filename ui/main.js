console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innertHTML = 'New value';

//Move the image
var img = document.getElementById('img');
img.onclick = function() {
    img.styl.marginLeft = '100px';
};
