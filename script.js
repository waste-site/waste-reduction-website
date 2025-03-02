document.addEventListener('DOMContentLoaded', function() {
    // Client Form Submission
    const clientForm = document.getElementById('clientForm');
    if (clientForm) {
        clientForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(clientForm);
            const data = Object.fromEntries(formData);
            console.log('Client Form Data:', data);
            // Here, you would typically send this data to a backend server
            // For now, let's just show a confirmation message
            document.getElementById('paymentInstructions').innerHTML = "<p>Thank you for your submission, we will contact you soon!</p>";
            clientForm.reset();
        });
    }

    // Collector Form Submission
    const collectorForm = document.getElementById('collectorForm');
    if (collectorForm) {
        collectorForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(collectorForm);
            const data = Object.fromEntries(formData);
            console.log('Collector Form Data:', data);
            // Send to backend server
            collectorForm.reset();
            document.getElementById('collectorImageDisplay').src = "";
        });
    }

    // Contact Form Submission
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(messageForm);
            const data = Object.fromEntries(formData);
            console.log('Contact Form Data:', data);
            // Send to backend server
            messageForm.reset();
        });
    }

    // Image Carousel (About Us Page)
    const carouselSlide = document.querySelector('.carousel-slide');
    if (carouselSlide) {
        const carouselImages = document.querySelectorAll('.carousel-slide img');
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');

        let counter = 1;
        const size = carouselImages[0].clientWidth;

        carouselSlide.style.transform = `translateX(${-size * counter}px)`;

        nextBtn.addEventListener('click', () => {
            if (counter >= carouselImages.length - 1) return;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter++;
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) return;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter--;
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        });

        carouselSlide.addEventListener('transitionend', () => {
            if (carouselImages[counter].id === 'lastClone') {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - 2;
                carouselSlide.style.transform = `translateX(${-size * counter}px)`;
            }
            if (carouselImages[counter].id === 'firstClone') {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - counter;
                carouselSlide.style.transform = `translateX(${-size * counter}px)`;
            }
        });
    }
});

// Image display for collector photo
document.getElementById('collectorPhoto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('collectorImageDisplay').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Client Form Submission
    const clientForm = document.getElementById('clientForm');
    if (clientForm) {
        clientForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(clientForm);
            const data = Object.fromEntries(formData);
            console.log('Client Form Data:', data);
            // Here, you would typically send this data to a backend server
            // For now, let's just show a confirmation message
            document.getElementById('paymentInstructions').innerHTML = "<p>A garbage collector will be linked to you soon!</p>";
            clientForm.reset();
        });
    }

    // Rest of your JavaScript code...
});
//Image display for collector photo
document.getElementById('collectorPhoto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('collectorImageDisplay').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});