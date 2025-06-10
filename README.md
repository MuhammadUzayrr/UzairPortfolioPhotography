# Muhammad Uzair - Photography Portfolio

A professional, responsive photography portfolio website showcasing award-winning work by Muhammad Uzair. Built with vanilla HTML, CSS, and JavaScript featuring elegant animations, light/dark themes, and modern design principles.

## 🎯 Features

### Core Features
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Dark/Light Theme Toggle**: Automatic theme switching with smooth transitions
- **Professional Navigation**: Fixed navbar with active link highlighting
- **Smooth Animations**: Parallax effects, staggered loading, and hover interactions
- **Performance Optimized**: Lazy loading, debounced scroll events, and reduced motion support

### Pages Structure
- **Home**: Hero section, about information, and contact details
- **Gallery**: Dedicated photography showcase with filtering and lightbox
- **My Work**: Professional experience, awards, skills, and education
- **Responsive Navigation**: Seamless navigation between all sections

### Photography Showcase
- **Advanced Filtering**: Portfolio, Landscape, Portrait, and Street categories
- **Lightbox Gallery**: Full-screen image viewing with navigation
- **Animated Statistics**: Dynamic counters for achievements
- **Professional Presentation**: Overlay information and smooth transitions

## 🏗️ Project Structure

```
portfolio/
├── index.html          # Home page with hero and about sections
├── gallery.html        # Photography gallery with filtering
├── work.html          # Professional experience and achievements
├── styles.css         # Complete styling with animations
├── script.js          # Main JavaScript functionality
├── gallery.js         # Gallery-specific animations and interactions
├── work.js           # Work page animations and skill bars
└── README.md         # Project documentation
```

## 🎨 Design System

### Color Palette
**Light Mode:**
- Primary: #2C2C2C (Charcoal Black)
- Secondary: #F8F8F8 (Warm White)
- Accent: #D4AF37 (Gold)
- Text: #333333 (Dark Grey)
- Background: #FFFFFF (Pure White)

**Dark Mode:**
- Primary: #F8F8F8 (Warm White)
- Secondary: #2C2C2C (Charcoal Black)
- Accent: #D4AF37 (Gold)
- Text: #E0E0E0 (Light Grey)
- Background: #1A1A1A (Deep Black)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body Text**: Inter (Sans-serif)
- **Responsive Scaling**: clamp() functions for fluid typography

## 📸 Adding Your Own Images

### Gallery Images
1. **Image Requirements:**
   - Format: JPG, PNG, or WebP
   - Resolution: Minimum 1280x720px for best quality
   - Aspect Ratio: Various supported (masonry layout adapts)

2. **Adding Images to Gallery:**
   ```html
   <!-- In gallery.html, add new gallery items -->
   <div class="gallery-item" data-category="your-category">
       <img src="path/to/your/image.jpg" alt="Description" loading="lazy">
       <div class="gallery-overlay">
           <h3>Image Title</h3>
           <p>Image Description</p>
       </div>
   </div>
   ```

3. **Categories Available:**
   - `portfolio` - Professional/commercial work
   - `landscape` - Nature and landscape photography
   - `portrait` - Portrait and people photography
   - `street` - Street and urban photography

4. **Image Hosting Options:**
   - **Local**: Place images in an `images/` folder
   - **CDN**: Use services like Cloudinary, Imgur, or AWS S3
   - **Current**: Using Pixabay for demonstration

### Hero Background
Replace the gradient background in `styles.css`:
```css
.hero {
    background: url('path/to/your/hero-image.jpg') center/cover;
}
```

## 📞 Updating Contact Information

### Personal Details
Edit the following sections in the HTML files:

**1. Contact Section (index.html):**
```html
<!-- Update email -->
<a href="mailto:your-email@domain.com">your-email@domain.com</a>

<!-- Update phone -->
<a href="tel:+1234567890">+1 234 567 890</a>

<!-- Update Instagram -->
<a href="https://instagram.com/yourusername">@yourusername</a>

<!-- Update LinkedIn -->
<a href="https://linkedin.com/in/yourprofile">Your Name</a>
```

**2. Footer Social Links:**
```html
<a href="https://instagram.com/yourusername" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
```

**3. About Section:**
Update the biography text in `index.html` about section.

**4. Professional Information (work.html):**
- Update experience timeline
- Modify education details
- Adjust skill percentages
- Update award information

## 🛠️ Technical Customization

### Adding New Sections
1. **Create HTML Structure:**
   ```html
   <section class="new-section">
       <div class="container">
           <div class="section-header">
               <h2 class="section-title">Section Title</h2>
               <div class="section-divider"></div>
           </div>
           <!-- Your content -->
       </div>
   </section>
   ```

2. **Add CSS Styling:**
   ```css
   .new-section {
       padding: var(--section-padding);
       background-color: var(--background-color);
   }
   ```

3. **Add JavaScript Interactions:**
   ```javascript
   function initializeNewSection() {
       // Your functionality
   }
   ```

### Modifying Animations
- **Animation Duration**: Adjust CSS transition and animation properties
- **Easing Functions**: Modify `cubic-bezier()` values in CSS
- **Stagger Delays**: Change timeout values in JavaScript
- **Scroll Triggers**: Adjust `IntersectionObserver` thresholds

### Color Theme Customization
Update CSS custom properties in `:root` and `[data-theme="dark"]`:
```css
:root {
    --primary-color: #YourColor;
    --accent-color: #YourAccent;
    /* ... other variables */
}
```

## 🚀 Deployment Options

### Recommended Hosting Platforms
1. **Netlify**: Drag and drop deployment with automatic HTTPS
2. **Vercel**: Git-based deployment with preview URLs
3. **GitHub Pages**: Free hosting for public repositories
4. **Replit**: Current hosting platform

### Deployment Steps
1. **Prepare Files**: Ensure all paths are relative
2. **Optimize Images**: Compress images for web
3. **Test Locally**: Verify all functionality works
4. **Deploy**: Upload to your chosen platform

### Custom Domain Setup
- Configure DNS settings with your hosting provider
- Update any hardcoded URLs to use your domain
- Set up SSL certificates (usually automatic)

## 🔧 Performance Optimization

### Image Optimization
- Use WebP format for modern browsers
- Implement responsive images with `srcset`
- Compress images to reduce file size
- Use appropriate image dimensions

### Loading Performance
- Lazy loading is already implemented
- Consider adding a loading spinner
- Optimize CSS delivery
- Minify JavaScript and CSS for production

### SEO Enhancements
- Update meta descriptions and titles
- Add structured data markup
- Include alt text for all images
- Create a sitemap.xml

## 📱 Browser Support

### Supported Browsers
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Fallbacks Included
- CSS Grid with Flexbox fallback
- Modern JavaScript with compatibility checks
- Progressive enhancement approach

## 🎯 Achievement Statistics

Update the statistics in `gallery.html` and `work.html`:
```html
<div class="stat-number" data-target="35">0</div>
<div class="stat-label">International Awards</div>
```

Change the `data-target` attribute to your actual numbers.

## 📄 License

This portfolio template is designed for Muhammad Uzair. Feel free to use the code structure and styling as inspiration for your own portfolio projects.

## 🤝 Support

For technical assistance or customization help:
- Review the code comments for guidance
- Check browser developer tools for debugging
- Ensure all file paths are correct
- Verify image URLs are accessible

## 🔄 Future Enhancements

Potential additions for expanded functionality:
- Contact form with backend integration
- Blog section for photography insights
- Client testimonials
- Image loading optimization
- Progressive Web App features
- Multi-language support

---

**Built with ❤️ for professional photography showcase**