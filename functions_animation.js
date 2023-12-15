document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll('.func_img_cont');
    containers.forEach((container) => {
        var images = container.querySelectorAll('.func_img');
        var currentImageIndex = 0;

    function fadeInNextImage() {
        images[currentImageIndex].style.opacity = 0;

        currentImageIndex = (currentImageIndex + 1) % images.length;

        images[currentImageIndex].style.opacity = 1;
    }

    setInterval(fadeInNextImage, 3000);
    });
});
