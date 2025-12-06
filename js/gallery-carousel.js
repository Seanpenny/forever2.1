// Gallery Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryCarousel = document.querySelector('.gallery-carousel');
    const galleryTrack = document.querySelector('.gallery-carousel-track');
    const gallerySlides = document.querySelectorAll('.gallery-carousel-slide');
    const galleryLeftArrow = document.querySelector('.gallery-carousel-arrow-left');
    const galleryRightArrow = document.querySelector('.gallery-carousel-arrow-right');
    const galleryThumbnails = document.querySelectorAll('.gallery-thumbnail');
    
    if (!galleryCarousel || !galleryTrack || gallerySlides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = gallerySlides.length;
    let isTransitioning = false;
    
    function updateCarousel() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update thumbnails
        galleryThumbnails.forEach((thumb, index) => {
            if (index === currentSlide) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
        
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    // Arrow navigation
    if (galleryLeftArrow) {
        galleryLeftArrow.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = totalSlides - 1;
            }
            updateCarousel();
        });
    }
    
    if (galleryRightArrow) {
        galleryRightArrow.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateCarousel();
        });
    }
    
    // Thumbnail navigation
    galleryThumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    
    galleryCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isDragging = true;
    }, { passive: true });
    
    galleryCarousel.addEventListener('touchmove', (e) => {
        if (isDragging) {
            // Allow native scrolling
        }
    }, { passive: true });
    
    galleryCarousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        isDragging = false;
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                if (currentSlide < totalSlides - 1) {
                    currentSlide++;
                } else {
                    currentSlide = 0;
                }
            } else {
                // Swipe right - previous
                if (currentSlide > 0) {
                    currentSlide--;
                } else {
                    currentSlide = totalSlides - 1;
                }
            }
            updateCarousel();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = totalSlides - 1;
            }
            updateCarousel();
        } else if (e.key === 'ArrowRight') {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateCarousel();
        }
    });
    
    // Auto-play (optional - can be disabled)
    // let autoPlayInterval = setInterval(() => {
    //     if (currentSlide < totalSlides - 1) {
    //         currentSlide++;
    //     } else {
    //         currentSlide = 0;
    //     }
    //     updateCarousel();
    // }, 5000);
    
    // Pause on hover
    // galleryCarousel.addEventListener('mouseenter', () => {
    //     clearInterval(autoPlayInterval);
    // });
    
    // galleryCarousel.addEventListener('mouseleave', () => {
    //     autoPlayInterval = setInterval(() => {
    //         if (currentSlide < totalSlides - 1) {
    //             currentSlide++;
    //         } else {
    //             currentSlide = 0;
    //         }
    //         updateCarousel();
    //     }, 5000);
    // });
});

