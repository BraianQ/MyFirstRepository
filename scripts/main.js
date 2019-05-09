let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/horse.jpg') {
        myImage.setAttribute ('src','images/horse2.jpg');
    } else {
        myImage.setAttribute ('src','images/horse.jpg');
    }
}