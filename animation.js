var textArray = [
    'ಕೃಷಿ ಮಹಾವಿದ್ಯಾಲಯ ಚಾಮರಾಜನಗರ',
    'ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ ಬೆಂಗಳೂರ.'
];

var part, i = 0, offset = 0, len = textArray.length, forwards = true, skip_count = 0, skip_delay = 15, speed = 70;

var textFlick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= textArray[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = textArray[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $('.college_name, .university_name').text(part);
    }, speed);
};

$(document).ready(function () {
    textFlick();
});


document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('.Coverimages-cont img');
    var currentImageIndex = 0;

    function fadeInNextImage() {
        images[currentImageIndex].style.opacity = 0;

        currentImageIndex = (currentImageIndex + 1) % images.length;

        images[currentImageIndex].style.opacity = 1;
    }

    setInterval(fadeInNextImage, 3000); // Change image every 3 seconds
});
