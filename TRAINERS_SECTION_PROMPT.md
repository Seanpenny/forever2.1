# Trainers Section Enhancement - Complete Requirements Prompt

## Project Context
Forever Fit Gym website - Enhancing the Personal Trainers section with a three-tier organizational structure and nested feature system. The current section must remain functional and unchanged while adding enhanced features.

## Current State
- Existing trainers section with carousel functionality
- Background image animation (slides from left)
- Trainer cards with image, name, and specialties
- All animations and styling must be preserved

## Required Implementation

### Three-Tier Structure Organization

**Tier 1: Head Coach & Director**
- Single trainer: Sean (Founder, Head Coach, Director)
- Must have dedicated section/tab
- Include nested features:
  - About/Bio section
  - Qualifications list
  - Video profile link
  - Specializations (Sports Conditioning, Agility, Speed & Explosiveness, Rugby Performance)

**Tier 2: Assistant Coaches**
- Three trainers grouped together:
  - Devon (Assistant Coach)
  - Brent (Assistant Coach & Co-Owner) - needs Co-Owner badge
  - John (Assistant Coach & Co-Owner) - needs Co-Owner badge
- Each must have expandable profile with:
  - About section
  - Qualifications
  - Specializations

**Tier 3: External Instructors**
- Single trainer: John Williams (MMA Coach)
- Must be clearly marked as "External Instructor"
- Include:
  - About section
  - Qualifications
  - Availability/Scheduling information
  - MMA specialization tags

### Technical Requirements

**Tabbed Interface:**
- Three main tabs: "Head Coach", "Assistant Coaches", "External Instructors"
- Smooth tab switching animations
- Active tab highlighting
- Role-based filtering functionality

**Nested Accordion System (Folders within Folders):**
- Each trainer card must expand to reveal nested sections
- Accordion-style nested menus:
  - About/Bio (always visible or expandable)
  - Qualifications (expandable)
  - Video Profile (expandable with link)
  - Specializations (expandable)
  - Contact/Booking (expandable for external instructors)
- Smooth expand/collapse animations
- Only one accordion section open at a time per trainer card

**Visual Design:**
- Professional black and white theme with minimal green accents
- Role badges with different colors:
  - Head Coach: Gold/Golden badge
  - Co-Owner: Green badge
  - External Instructor: Purple badge
- Specialty tags for each trainer
- Trainer images with hover effects
- Card-based layout with animations

**Animations Required:**
- Tab switching: Fade and scale animations
- Card entrance: Staggered slide-up animations
- Card hover: Lift effect with glow
- Image hover: Scale and slight rotation
- Badge pulse animation
- Accordion expand/collapse: Smooth slide-down
- All animations must be smooth and professional

**Mobile Responsiveness:**
- Tabs stack vertically on mobile
- Cards become full-width on mobile
- Accordion remains functional on touch devices
- All animations work on mobile

### Integration Requirements
- Keep existing trainers section completely intact
- Add enhancement as additional feature, not replacement
- Maintain all current animations and styling
- Ensure no conflicts with existing JavaScript
- Preserve background image animation

### Content Structure Needed

**Head Coach (Sean):**
- Bio: Head Coach and Director with extensive experience in sports conditioning and athlete performance
- Qualifications: Certified Strength & Conditioning Specialist, Sports Performance Coach, EP Rugby Performance Coach
- Video link placeholder
- Specializations: Sports Conditioning, Agility Training, Speed & Explosiveness, Rugby Performance

**Assistant Coaches:**
- Devon: Assistant Coach specializing in functional training
- Brent: Co-Owner & Assistant Coach, bodybuilding expertise
- John: Co-Owner & Assistant Coach, comprehensive fitness training

**External Instructor:**
- John Williams: MMA Coach, external instructor designation, combat sports specialization

### Expected Outcome
A fully functional three-tier trainers section with:
- Clear role separation and hierarchy
- Professional tabbed interface
- Nested accordion features (folders within folders)
- Impressive animations throughout
- Mobile responsive design
- Zero disruption to existing functionality

## Implementation Notes
- Use existing color scheme (black/white with green accents)
- Match current site's professional aesthetic
- Ensure smooth user experience
- All features must be accessible and functional
- Code must be clean and maintainable

