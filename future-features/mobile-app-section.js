/* Mobile App Section JavaScript - ARCHIVED FOR FUTURE IMPLEMENTATION */
/* Archived Date: December 4, 2025 */
/* This JavaScript is preserved for future use when the Mobile App section is re-implemented */

// AI Features Dropdown Functionality
const aiFeatureBtns = document.querySelectorAll('.ai-feature-btn');
aiFeatureBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const featureId = this.getAttribute('data-feature');
        const content = document.getElementById(featureId);
        
        // Close all other dropdowns
        aiFeatureBtns.forEach(otherBtn => {
            if (otherBtn !== this) {
                otherBtn.classList.remove('active');
                const otherId = otherBtn.getAttribute('data-feature');
                const otherContent = document.getElementById(otherId);
                if (otherContent) {
                    otherContent.classList.remove('active');
                }
            }
        });
        
        // Toggle current dropdown
        this.classList.toggle('active');
        if (content) {
            content.classList.toggle('active');
        }
    });
});






