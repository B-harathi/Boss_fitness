# Boss Fitness Website - Installation Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project folder:

```bash
cd c:\projects\claude\gym\boss_fitness
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- React 18
- React Router DOM v6
- Tailwind CSS
- Framer Motion
- AOS (Animate On Scroll)
- React CountUp
- React Icons
- React Helmet Async
- Vite and development tools

**Installation should take 1-3 minutes depending on your internet speed.**

### Step 3: Start Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

You should see output like:
```
VITE v5.1.0  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

### Step 4: Open in Browser

Open your web browser and go to:
```
http://localhost:3000
```

The Boss Fitness website should now be running! 🎉

---

## 🛠️ Available Commands

### Development Mode
```bash
npm run dev
```
Starts the development server with hot-reload at http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deployment

---

## 📁 Project Structure

```
boss_fitness/
├── node_modules/          # Dependencies (created after npm install)
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components (Navbar, Footer, etc.)
│   ├── sections/          # Home page sections
│   ├── pages/             # Page components (Home, About, Services, etc.)
│   ├── data/              # Data files (services, trainers, pricing)
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Documentation
```

---

## 🎨 Customization Quick Guide

### 1. Update Gym Contact Information

**WhatsApp Number:**
- File: `src/components/WhatsAppButton.jsx`
- Line: Update phone number in `wa.me/919876543210`

**Footer Contact:**
- File: `src/components/Footer.jsx`
- Update phone, email, address, hours

**Contact Page:**
- File: `src/pages/Contact.jsx`
- Update all contact details

### 2. Update Gym Data

All gym content is in `src/data/` folder:

**Services** (`src/data/services.js`)
- Add/edit gym programs and classes

**Trainers** (`src/data/trainers.js`)
- Add/edit trainer profiles

**Testimonials** (`src/data/testimonials.js`)
- Add/edit member reviews

**Pricing** (`src/data/pricing.js`)
- Update membership plans and prices

**Gallery** (`src/data/gallery.js`)
- Add your own gym photos (replace Unsplash URLs)

### 3. Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    bg: '#0A0A0A',      // Main background
    dark: '#111111',    // Secondary background
    surface: '#1A1A1A', // Card background
  },
  gold: {
    DEFAULT: '#D4AF37', // Main gold
    light: '#F0C040',   // Light gold
    dark: '#A8860C',    // Dark gold
  }
}
```

### 4. Change Fonts

Edit Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter..." rel="stylesheet">
```

Update `tailwind.config.js`:
```javascript
fontFamily: {
  bebas: ['"Bebas Neue"', 'cursive'],
  inter: ['Inter', 'sans-serif'],
}
```

---

## 🖼️ Replacing Images

Currently using Unsplash placeholder images. To use your own:

1. Create an `assets` folder: `src/assets/images/`
2. Add your images to this folder
3. Import images in components:
```javascript
import gymImage from '../assets/images/gym-hero.jpg';
```
4. Update image URLs throughout the project

---

## 🚨 Troubleshooting

### Error: "Cannot find module"
**Solution:** Run `npm install` again

### Port 3000 already in use
**Solution:** 
- Kill the process using port 3000, or
- Change port in `vite.config.js`:
```javascript
server: {
  port: 3001,  // Change to different port
}
```

### Styling not working
**Solution:** Ensure Tailwind is properly configured:
1. Check `tailwind.config.js` exists
2. Check `postcss.config.js` exists
3. Verify `index.css` has Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Build errors
**Solution:** 
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Run `npm run build`

---

## 📱 Testing on Mobile

### Option 1: Ngrok (Easiest)
1. Install ngrok: https://ngrok.com/
2. Run: `ngrok http 3000`
3. Use the provided URL on mobile

### Option 2: Local Network
1. Find your computer's IP address
2. Update `vite.config.js`:
```javascript
server: {
  host: '0.0.0.0',
  port: 3000,
}
```
3. Access from mobile: `http://YOUR-IP:3000`

---

## 🌐 Deployment Options

### Vercel (Recommended - Easiest)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Deploy (automatic)

### Netlify
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag & drop the `dist` folder

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure server to serve `index.html` for all routes

---

## 📞 Need Help?

If you encounter any issues:

1. **Check the README.md** for detailed documentation
2. **Check the console** for error messages
3. **Verify all dependencies** are installed correctly
4. **Clear browser cache** and try again

---

## ✅ Success Checklist

- [ ] Node.js and npm installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Website accessible at http://localhost:3000
- [ ] All pages working (Home, About, Services, Gallery, Contact)
- [ ] Navigation working
- [ ] Animations smooth
- [ ] WhatsApp button functional
- [ ] Contact form submits
- [ ] Gallery lightbox working
- [ ] BMI calculator functional

---

## 🎉 You're All Set!

Your Boss Fitness website is now ready for customization and deployment.

**Next Steps:**
1. Replace placeholder images with your gym photos
2. Update contact information
3. Customize services, trainers, and pricing
4. Test on different devices
5. Deploy to production

**Built for Boss Fitness - Unleash The Boss Within! 💪**
