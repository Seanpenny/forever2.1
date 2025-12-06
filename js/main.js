/**
 * Forever Fit Gym Website - Main JavaScript
 * Green Theme with Matrix Effects
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Dropdown Menu Toggle - Handle multiple dropdowns
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
    
    dropdownItems.forEach(dropdownItem => {
        const dropdownToggle = dropdownItem.querySelector('.dropdown-toggle');
        
        if (dropdownToggle) {
            // Click handler for mobile/desktop
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdownItems.forEach(item => {
                    if (item !== dropdownItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdownItem.classList.toggle('active');
            });

            // Close dropdown on window resize (desktop to mobile)
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    dropdownItem.classList.remove('active');
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        dropdownItems.forEach(dropdownItem => {
            if (!dropdownItem.contains(e.target)) {
                dropdownItem.classList.remove('active');
            }
        });
    });

    // Close menu when clicking on regular nav links (not dropdown)
    const navLinks = document.querySelectorAll('.nav-menu > li:not(.nav-item-dropdown) > a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking on dropdown links
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            // Close all dropdowns
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA Button Action
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(57, 255, 20, 0.5)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(57, 255, 20, 0.3)';
        }
        
        lastScroll = currentScroll;
    });

    // Gallery image lazy loading enhancement
    const galleryItems = document.querySelectorAll('.gallery-item img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });

        galleryItems.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            imageObserver.observe(img);
        });
    }

    // About Section Animation Trigger
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection && 'IntersectionObserver' in window) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                    aboutSection.classList.add('animate');
                    const sectionTitle = aboutSection.querySelector('.section-title');
                    const aboutText = aboutSection.querySelector('.about-text');
                    const aboutFeatures = aboutSection.querySelector('.about-features');
                    
                    if (sectionTitle) sectionTitle.classList.add('animate');
                    if (aboutText) aboutText.classList.add('animate');
                    if (aboutFeatures) aboutFeatures.classList.add('animate');
                    
                    aboutObserver.unobserve(aboutSection);
                }
            });
        }, { threshold: 0.2 });
        
        aboutObserver.observe(aboutSection);
    }

    // Leaders & Founders Section Animation Trigger
    const leadersSection = document.querySelector('.leaders-founders-section');
    if (leadersSection && 'IntersectionObserver' in window) {
        const leadersObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                    const sectionTitle = leadersSection.querySelector('.section-title');
                    if (sectionTitle) {
                        sectionTitle.classList.add('animate');
                    }
                    leadersObserver.unobserve(leadersSection);
                }
            });
        }, { threshold: 0.2 });
        
        leadersObserver.observe(leadersSection);
    }

    // Trainers Section Animation Trigger
    const trainersSection = document.querySelector('.trainers-section');
    if (trainersSection && 'IntersectionObserver' in window) {
        const trainersObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                    trainersSection.classList.add('animate');
                    trainersObserver.unobserve(trainersSection);
                }
            });
        }, { threshold: 0.2 });
        
        trainersObserver.observe(trainersSection);
    }

    // Media/Gallery Section Animation Trigger
    const mediaSection = document.querySelector('.media-section');
    if (mediaSection && 'IntersectionObserver' in window) {
        const mediaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                    mediaSection.classList.add('animate');
                    mediaObserver.unobserve(mediaSection);
                }
            });
        }, { threshold: 0.2 });
        
        mediaObserver.observe(mediaSection);
    }

    // Matrix warp effect enhancement on scroll
    const heroSection = document.querySelector('.hero-section');
    const matrixOverlay = document.querySelector('.matrix-overlay');
    
    if (heroSection && matrixOverlay) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                const opacity = 1 - (scrolled / heroHeight) * 0.5;
                matrixOverlay.style.opacity = opacity;
            }
        });
    }

    // Add glow effect to elements on hover
    const glowElements = document.querySelectorAll('.feature-card, .gallery-item, .contact-item');
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });


    // Trainers Carousel Functionality
    const trainersCarousel = document.querySelector('.trainers-carousel');
    const trainersTrack = document.querySelector('.trainers-track');
    const trainerCards = document.querySelectorAll('.trainer-card');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    
    if (trainersCarousel && trainersTrack && trainerCards.length > 0) {
        let currentIndex = 0;
        let isScrolling = false;
        const cardWidth = trainerCards[0].offsetWidth + 48; // card width + gap (3rem = 48px)
        const totalCards = trainerCards.length;
        const visibleCards = Math.floor(trainersCarousel.offsetWidth / cardWidth);
        
        // Infinite scroll - duplicate cards for seamless loop
        const firstCardClone = trainerCards[0].cloneNode(true);
        const lastCardClone = trainerCards[totalCards - 1].cloneNode(true);
        trainersTrack.appendChild(firstCardClone);
        trainersTrack.insertBefore(lastCardClone, trainerCards[0]);
        
        function updateCarousel() {
            if (isScrolling) return;
            isScrolling = true;
            
            trainersTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            trainersTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            setTimeout(() => {
                isScrolling = false;
                
                // Reset to beginning/end for infinite scroll
                if (currentIndex >= totalCards) {
                    trainersTrack.style.transition = 'none';
                    currentIndex = 0;
                    trainersTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                } else if (currentIndex < 0) {
                    trainersTrack.style.transition = 'none';
                    currentIndex = totalCards - 1;
                    trainersTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                }
            }, 600);
        }
        
        // Auto-scroll carousel
        let autoScrollInterval = setInterval(() => {
            currentIndex++;
            updateCarousel();
        }, 3000); // Scroll every 3 seconds
        
        // Pause auto-scroll on hover
        trainersCarousel.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });
        
        trainersCarousel.addEventListener('mouseleave', () => {
            autoScrollInterval = setInterval(() => {
                currentIndex++;
                updateCarousel();
            }, 3000);
        });
        
        // Arrow navigation
        if (leftArrow) {
            leftArrow.addEventListener('click', () => {
                currentIndex--;
                updateCarousel();
                clearInterval(autoScrollInterval);
                autoScrollInterval = setInterval(() => {
                    currentIndex++;
                    updateCarousel();
                }, 3000);
            });
        }
        
        if (rightArrow) {
            rightArrow.addEventListener('click', () => {
                currentIndex++;
                updateCarousel();
                clearInterval(autoScrollInterval);
                autoScrollInterval = setInterval(() => {
                    currentIndex++;
                    updateCarousel();
                }, 3000);
            });
        }
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        trainersCarousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        trainersCarousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - next
                currentIndex++;
                updateCarousel();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe right - previous
                currentIndex--;
                updateCarousel();
            }
        }
    }

    // Kids MMA Section Video Control - Power-saving resistant
    const mmaVideo = document.querySelector('.mma-background-video') || document.getElementById('mmaKidsVideo');
    const mmaVideoBackground = document.querySelector('.mma-video-background');
    const mmaPlayBtn = document.getElementById('mmaVideoPlayBtn');
    
    if (mmaVideo) {
        // Set video attributes
        mmaVideo.muted = true;
        mmaVideo.loop = true;
        mmaVideo.playsInline = true;
        mmaVideo.setAttribute('playsinline', '');
        mmaVideo.setAttribute('webkit-playsinline', '');
        mmaVideo.setAttribute('muted', '');
        mmaVideo.setAttribute('autoplay', '');
        
        let videoPlaying = false;
        let playAttempts = 0;
        const maxAttempts = 5;
        
        // Function to play video aggressively
        const playVideo = () => {
            if (mmaVideo.readyState >= 2) { // HAVE_CURRENT_DATA or higher
                const playPromise = mmaVideo.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        videoPlaying = true;
                        playAttempts = 0;
                        mmaVideo.style.opacity = '1';
                        mmaVideo.style.display = 'block';
                        if (mmaPlayBtn) mmaPlayBtn.style.display = 'none';
                        if (mmaVideoBackground) {
                            mmaVideoBackground.style.opacity = '1';
                        }
                    }).catch(error => {
                        videoPlaying = false;
                        playAttempts++;
                        if (mmaPlayBtn) mmaPlayBtn.style.display = 'flex';
                        // Video autoplay prevented by browser
                    });
                }
            }
        };
        
        // Show play button if video fails to play
        if (mmaPlayBtn) {
            mmaPlayBtn.addEventListener('click', () => {
                playVideo();
            });
        }
        
        // Aggressive play attempts
        mmaVideo.addEventListener('loadedmetadata', playVideo);
        mmaVideo.addEventListener('loadeddata', playVideo);
        mmaVideo.addEventListener('canplay', playVideo);
        mmaVideo.addEventListener('canplaythrough', playVideo);
        
        // Prevent pause from power saving
        mmaVideo.addEventListener('pause', function(e) {
            if (!this.ended && !document.hidden && videoPlaying) {
                setTimeout(() => {
                    if (this.paused) {
                        this.play().then(() => {
                            videoPlaying = true;
                        }).catch(() => {
                            if (mmaPlayBtn) mmaPlayBtn.style.display = 'flex';
                        });
                    }
                }, 100);
            }
        });
        
        // Ensure video plays after splash animation
        setTimeout(() => {
            playVideo();
            if (mmaVideoBackground) {
                mmaVideoBackground.style.opacity = '1';
            }
        }, 4000);
        
        // Force play after animation completes
        setTimeout(() => {
            playVideo();
        }, 6000);
        
        // Video loop handler
        mmaVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play().then(() => {
                this.style.opacity = '1';
                this.style.display = 'block';
            }).catch(() => {
                if (mmaPlayBtn) mmaPlayBtn.style.display = 'flex';
            });
        });
        
        // Show video when playing
        mmaVideo.addEventListener('playing', function() {
            this.style.opacity = '1';
            this.style.display = 'block';
            videoPlaying = true;
            if (mmaVideoBackground) {
                mmaVideoBackground.style.opacity = '1';
            }
        });
        
        // Ensure video is visible after splash animation
        setTimeout(() => {
            mmaVideo.style.opacity = '1';
            mmaVideo.style.display = 'block';
            if (mmaVideoBackground) {
                mmaVideoBackground.style.opacity = '1';
            }
        }, 6000);
        
        // Handle page visibility
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && mmaVideo.paused && videoPlaying) {
                setTimeout(() => playVideo(), 500);
            }
        });
        
        // Intersection Observer - play when section is visible
        const kidsMmaSection = document.querySelector('.kids-mma-section');
        if (kidsMmaSection && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                        playVideo();
                        if (mmaVideoBackground) {
                            mmaVideoBackground.style.opacity = '1';
                        }
                    }
                });
            }, { threshold: [0.3, 0.5, 0.7] });
            
            observer.observe(kidsMmaSection);
        }
        
        // Aggressive periodic check (every 1 second)
        const playCheckInterval = setInterval(() => {
            if (mmaVideo.paused && !mmaVideo.ended && !document.hidden && playAttempts < maxAttempts) {
                playVideo();
            } else if (playAttempts >= maxAttempts && mmaPlayBtn) {
                mmaPlayBtn.style.display = 'flex';
            }
        }, 1000);
        
        // Clean up interval when video is playing
        mmaVideo.addEventListener('playing', () => {
            videoPlaying = true;
            playAttempts = 0;
        });
        
        // User interaction triggers
        const userInteractionPlay = () => {
            if (mmaVideo.paused) {
                playVideo();
            }
        };
        
        document.addEventListener('click', userInteractionPlay, { once: true });
        document.addEventListener('touchstart', userInteractionPlay, { once: true });
        document.addEventListener('scroll', userInteractionPlay, { once: true });
        window.addEventListener('focus', userInteractionPlay, { once: true });
    }

    // Simple MMA Section Video Control
    const simpleMmaVideo = document.getElementById('simpleMmaVideo');
    if (simpleMmaVideo) {
        simpleMmaVideo.muted = true;
        simpleMmaVideo.loop = true;
        simpleMmaVideo.playsInline = true;
        
        const playSimpleVideo = () => {
            const playPromise = simpleMmaVideo.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Video playing successfully
                }).catch(error => {
                    // Video autoplay prevented by browser
                    document.addEventListener('click', () => simpleMmaVideo.play(), { once: true });
                    document.addEventListener('touchstart', () => simpleMmaVideo.play(), { once: true });
                });
            }
        };
        
        simpleMmaVideo.addEventListener('canplay', playSimpleVideo, { once: true });
        simpleMmaVideo.addEventListener('loadeddata', playSimpleVideo, { once: true });
        
        // Ensure video loops
        simpleMmaVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        // Play on section visibility
        const simpleMmaSection = document.querySelector('.simple-mma-section');
        if (simpleMmaSection && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        playSimpleVideo();
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(simpleMmaSection);
        }
    }


    // Enhanced Trainers Section - Three-Tier Tabbed Interface
    const trainerTabs = document.querySelectorAll('.trainer-tab');
    const tierContents = document.querySelectorAll('.trainers-tier-content');
    
    trainerTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTier = this.getAttribute('data-tier');
            
            // Remove active class from all tabs and contents
            trainerTabs.forEach(t => t.classList.remove('active'));
            tierContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.querySelector(`[data-content="${targetTier}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Leadership Page Tabs
    const leadershipTabs = document.querySelectorAll('.leadership-tab');
    const leadershipTierContents = document.querySelectorAll('.leadership-tier-content');
    
    leadershipTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTier = this.getAttribute('data-tier');
            
            leadershipTabs.forEach(t => t.classList.remove('active'));
            leadershipTierContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const targetContent = document.querySelector(`.leadership-tier-content[data-content="${targetTier}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Leadership Accordion
    const leadershipAccordionHeaders = document.querySelectorAll('.leadership-accordion .accordion-header');
    
    leadershipAccordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            const leadershipCard = accordionItem.closest('.leadership-card-enhanced');
            if (leadershipCard) {
                const allItems = leadershipCard.querySelectorAll('.accordion-item');
                allItems.forEach(item => item.classList.remove('active'));
            }
            
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
    
    // Nested Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordions in the same trainer card
            const trainerCard = accordionItem.closest('.trainer-card-enhanced');
            if (trainerCard) {
                const allItems = trainerCard.querySelectorAll('.accordion-item');
                allItems.forEach(item => item.classList.remove('active'));
            }
            
            // Toggle current accordion
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });

    // Kids MMA Page - Button Navigation
    const mmaNavButtonsPage = document.querySelectorAll('.mma-nav-btn-page');
    const mmaContentSections = document.querySelectorAll('.kids-mma-content-section');
    
    mmaNavButtonsPage.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all buttons and sections
            mmaNavButtonsPage.forEach(btn => btn.classList.remove('active'));
            mmaContentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            const targetContent = document.getElementById(`${targetSection}-section`);
            if (targetContent) {
                targetContent.classList.add('active');
                // Smooth scroll to section
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Kids MMA Gallery Carousel
    const carouselTrack = document.querySelector('.kids-mma-carousel-track');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const indicators = document.querySelectorAll('.indicator');
    
    if (carouselTrack && carouselSlides.length > 0) {
        let currentSlide = 0;
        const totalSlides = carouselSlides.length;
        
        // Function to update carousel position
        function updateCarousel() {
            const translateX = -currentSlide * 100;
            carouselTrack.style.transform = `translateX(${translateX}%)`;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        // Next slide function
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        
        // Previous slide function
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        // Button event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Indicator event listeners
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const gallerySection = document.getElementById('gallery-section');
            if (gallerySection && gallerySection.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                }
            }
        });
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (carouselTrack) {
            carouselTrack.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            carouselTrack.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
        }
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left - next
                } else {
                    prevSlide(); // Swipe right - previous
                }
            }
        }
        
        // Auto-play (optional - can be disabled)
        // let autoPlayInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-play on hover
        // if (carouselTrack) {
        //     carouselTrack.addEventListener('mouseenter', () => {
        //         clearInterval(autoPlayInterval);
        //     });
        //     carouselTrack.addEventListener('mouseleave', () => {
        //         autoPlayInterval = setInterval(nextSlide, 5000);
        //     });
        // }
    }

    // Performance: Preload critical images
    const splashImage = new Image();
    splashImage.src = 'assets/splashenhanced.jpeg';
    
    // Events Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    if (filterButtons.length > 0 && eventCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter event cards
                eventCards.forEach(card => {
                    if (filter === 'all') {
                        card.classList.remove('hidden');
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        const category = card.getAttribute('data-category');
                        if (category === filter) {
                            card.classList.remove('hidden');
                            card.style.display = 'flex';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.9)';
                            setTimeout(() => {
                                card.classList.add('hidden');
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
    
    // Programs Carousel Functionality
    const programsCarousel = document.querySelector('.programs-carousel');
    const programsTrack = document.querySelector('.programs-track');
    const programCards = document.querySelectorAll('.program-card');
    const programsLeftArrow = document.querySelector('.programs-carousel-wrapper .carousel-arrow-left');
    const programsRightArrow = document.querySelector('.programs-carousel-wrapper .carousel-arrow-right');
    
    if (programsCarousel && programsTrack && programCards.length > 0) {
        let currentProgramIndex = 0;
        let isScrolling = false;
        const isMobile = window.innerWidth <= 768;
        
        function getCardWidth() {
            if (isMobile) {
                return programCards[0].offsetWidth + 24; // 1.5rem gap on mobile
            }
            return programCards[0].offsetWidth + 32; // 2rem gap on desktop
        }
        
        function updateProgramsCarousel() {
            if (isScrolling) return;
            isScrolling = true;
            
            const cardWidth = getCardWidth();
            const totalCards = programCards.length;
            const visibleCards = Math.floor(programsCarousel.offsetWidth / cardWidth);
            
            // On mobile, use smooth scroll
            if (isMobile) {
                const scrollPosition = currentProgramIndex * cardWidth;
                programsTrack.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            } else {
                programsTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                programsTrack.style.transform = `translateX(-${currentProgramIndex * cardWidth}px)`;
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 600);
        }
        
        // Arrow navigation
        if (programsLeftArrow) {
            programsLeftArrow.addEventListener('click', () => {
                if (currentProgramIndex > 0) {
                    currentProgramIndex--;
                    updateProgramsCarousel();
                }
            });
        }
        
        if (programsRightArrow) {
            programsRightArrow.addEventListener('click', () => {
                const cardWidth = getCardWidth();
                const totalCards = programCards.length;
                const visibleCards = Math.floor(programsCarousel.offsetWidth / cardWidth);
                if (currentProgramIndex < totalCards - visibleCards) {
                    currentProgramIndex++;
                    updateProgramsCarousel();
                }
            });
        }
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        let isDragging = false;
        
        programsCarousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            isDragging = true;
        }, { passive: true });
        
        programsCarousel.addEventListener('touchmove', (e) => {
            if (isDragging) {
                // Allow native scrolling
            }
        }, { passive: true });
        
        programsCarousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            touchEndX = e.changedTouches[0].screenX;
            handleProgramsSwipe();
            isDragging = false;
        }, { passive: true });
        
        function handleProgramsSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next
                    const cardWidth = getCardWidth();
                    const totalCards = programCards.length;
                    const visibleCards = Math.floor(programsCarousel.offsetWidth / cardWidth);
                    if (currentProgramIndex < totalCards - visibleCards) {
                        currentProgramIndex++;
                        updateProgramsCarousel();
                    }
                } else {
                    // Swipe right - previous
                    if (currentProgramIndex > 0) {
                        currentProgramIndex--;
                        updateProgramsCarousel();
                    }
                }
            }
        }
        
        // Handle window resize - Debounced
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                const wasMobile = isMobile;
                const nowMobile = window.innerWidth <= 768;
                if (wasMobile !== nowMobile) {
                    currentProgramIndex = 0;
                    updateProgramsCarousel();
                }
            }, 250);
        });
    }

    // Sports Conditioning Toggle - Mobile Optimized
    const sportsConditioningBtn = document.querySelector('.program-btn-toggle[data-toggle="sports-conditioning"]');
    const sportsConditioningCard = document.querySelector('.program-card-sports');
    
    if (sportsConditioningBtn && sportsConditioningCard) {
        sportsConditioningBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isActive = sportsConditioningCard.classList.contains('active');
            
            sportsConditioningCard.classList.toggle('active');
            
            // Update button text
            if (!isActive) {
                this.textContent = 'Close →';
                // Scroll to card on mobile when opening
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        sportsConditioningCard.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest',
                            inline: 'center'
                        });
                    }, 100);
                }
            } else {
                this.textContent = 'Explore →';
            }
        });
        
        // Close when clicking outside on mobile
        if (window.innerWidth <= 768) {
            document.addEventListener('click', function(e) {
                if (!sportsConditioningCard.contains(e.target) && 
                    !sportsConditioningBtn.contains(e.target)) {
                    if (sportsConditioningCard.classList.contains('active')) {
                        sportsConditioningCard.classList.remove('active');
                        sportsConditioningBtn.textContent = 'Explore →';
                    }
                }
            });
        }
    }

    // Console log for debugging
    // Forever Fit website loaded successfully
});

// Handle window resize - Debounced resize handler for mobile menu
let menuResizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(menuResizeTimeout);
    menuResizeTimeout = setTimeout(function() {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }, 250);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }
});
