

// Testimonials left/right buttons event listeners
let currentIndex = 0;

function showTestimonial(index) {
    const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
    const testimonialWidth = document.querySelector('.testimonial').offsetWidth;
    currentIndex = index;

    testimonialsWrapper.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
}

function nextTestimonial() {
    console.log('next clicked !');
    const totalTestimonials = document.querySelectorAll('.testimonial').length;
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    console.log('prev clicked !');
    const totalTestimonials = document.querySelectorAll('.testimonial').length;
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
}


