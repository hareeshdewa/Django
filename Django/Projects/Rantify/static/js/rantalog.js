function selectPhoto(photoElement) {
    // Remove 'selected' class from any previously selected photo
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => photo.classList.remove('selected'));

    // Add 'selected' class to the clicked photo
    photoElement.classList.add('selected');

    // Enable the buttons
    document.querySelector('.chatbox-button').disabled = false;
    document.querySelector('.call-button').disabled = false;
}

function chat() {
    alert("Chatbox opened for selected photo!");
}

function call() {
    alert("Call initiated for selected photo!");
}
