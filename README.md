# Boss Fitness - Premium Gym Website

A modern, world-class website for Boss Fitness gym in Coimbatore, Tamil Nadu. Built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Bold black and gold premium theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion page transitions and scroll animations
- **Interactive Components**: 
  - BMI Calculator
  - Image Gallery with Lightbox
  - Testimonials Slider
  - FAQ Accordion
  - Contact Form
- **Multi-Page Application**: Home, About, Services, Gallery, Contact
- **Performance Optimized**: Fast loading with lazy loading images
- **SEO Ready**: Meta tags and semantic HTML

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **React Router DOM v6** - Client-side routing
- **React CountUp** - Animated counters
- **React Icons** - Icon library
- **AOS** - Animate on scroll
- **React Helmet Async** - Meta tags management

## Installation

1. **Clone or download the project**

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The website will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
boss_fitness/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── ScrollProgressBar.jsx
│   │   └── BMICalculator.jsx
│   ├── sections/          # Home page sections
│   │   ├── HeroSection.jsx
│   │   ├── StatsBar.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── PricingTable.jsx
│   │   ├── TrainersSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── GalleryPreview.jsx
│   │   └── CTABanner.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/              # Data files
│   │   ├── services.js
│   │   ├── trainers.js
│   │   ├── testimonials.js
│   │   ├── gallery.js
│   │   └── pricing.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Update Contact Information

Edit the contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/components/WhatsAppButton.jsx`

### Update Gym Data

All gym data is stored in `src/data/` folder:
- **Services**: `services.js`
- **Trainers**: `trainers.js`
- **Testimonials**: `testimonials.js`
- **Pricing Plans**: `pricing.js`
- **Gallery Images**: `gallery.js`

### Change Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: { ... },
  gold: { ... },
  text: { ... }
}
```

### Add/Remove Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images are loaded from Unsplash CDN (replace with your own optimized images)
- Lazy loading is implemented for gallery images
- Code splitting with React Router
- Optimized bundle size with Vite

## License

This project is built for Boss Fitness. All rights reserved.

## Support

For issues or questions, contact the development team.

---

**Built with ❤️ for Boss Fitness - Unleash The Boss Within**
