// Main Visual animation
function cycleBackgrounds() {
    var index = 0;
 
    $imageEls = $('.showcase-container .slide'); // Get the images to be cycled.
 
    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        
        // Show the next
        $imageEls.eq(index).addClass('show');
        
        // Hide the previous
        $imageEls.eq(index - 1).removeClass('show');
    }, 4000);
};
$(function () {
    cycleBackgrounds();
});

// Fetch data from API function
const url = "http://api.tvmaze.com/search/shows?q=game-of-thrones";
fetch(url)
    .then(function(response) {
            if(response.ok) { // Check if response went through
            response.json().then(data => {
                const movieData = data[0].show
                console.log(movieData)
                let cardTitle = document.getElementById('title')
                let cardImage = document.getElementById('image')
                let cardText = document.getElementById('description')
                cardTitle.innerHTML = `<h1>${movieData.name}</h3>`
                cardImage.innerHTML = `<img height="400px" src=${movieData.image.original}>`
                cardText.innerHTML = movieData.summary
            })
            } else { // Response wasn't ok. Check dev tools
                console.log("response failed?");
            }
});

// Validation function for form
(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    const validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
})();