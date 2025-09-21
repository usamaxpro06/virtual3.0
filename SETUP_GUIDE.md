# COMPLETE WEBSITE SETUP GUIDE

## **QUICK SETUP INSTRUCTIONS**

### **1. Create New React Project**
```bash
# Create project folder
mkdir virtualtech-pro
cd virtualtech-pro

# Initialize with Vite
npm create vite@latest . --template react-ts
```

### **2. Install All Dependencies**
```bash
# Install base dependencies
npm install

# Install all required packages
npm install @hookform/resolvers@^3.10.0 @radix-ui/react-accordion@^1.2.11 @radix-ui/react-alert-dialog@^1.1.14 @radix-ui/react-aspect-ratio@^1.1.7 @radix-ui/react-avatar@^1.1.10 @radix-ui/react-checkbox@^1.3.2 @radix-ui/react-collapsible@^1.1.11 @radix-ui/react-context-menu@^2.2.15 @radix-ui/react-dialog@^1.1.14 @radix-ui/react-dropdown-menu@^2.1.15 @radix-ui/react-hover-card@^1.1.14 @radix-ui/react-label@^2.1.7 @radix-ui/react-menubar@^1.1.15 @radix-ui/react-navigation-menu@^1.2.13 @radix-ui/react-popover@^1.1.14 @radix-ui/react-progress@^1.1.7 @radix-ui/react-radio-group@^1.3.7 @radix-ui/react-scroll-area@^1.2.9 @radix-ui/react-select@^2.2.5 @radix-ui/react-separator@^1.1.7 @radix-ui/react-slider@^1.3.5 @radix-ui/react-slot@^1.2.3 @radix-ui/react-switch@^1.2.5 @radix-ui/react-tabs@^1.1.12 @radix-ui/react-toast@^1.2.14 @radix-ui/react-toggle@^1.1.9 @radix-ui/react-toggle-group@^1.1.10 @radix-ui/react-tooltip@^1.2.7 @tanstack/react-query@^5.83.0 class-variance-authority@^0.7.1 clsx@^2.1.1 cmdk@^1.1.1 date-fns@^3.6.0 embla-carousel-react@^8.6.0 input-otp@^1.4.2 lucide-react@^0.462.0 next-themes@^0.3.0 react-day-picker@^8.10.1 react-hook-form@^7.61.1 react-resizable-panels@^2.1.9 react-router-dom@^6.30.1 recharts@^2.15.4 sonner@^1.7.4 tailwind-merge@^2.6.0 tailwindcss-animate@^1.0.7 vaul@^0.9.9 zod@^3.25.76

# Install dev dependencies  
npm install -D tailwindcss@^3.4.4 autoprefixer@^10.4.19 postcss@^8.4.38
```

### **3. Setup Tailwind CSS**
```bash
npx tailwindcss init -p
```

### **4. Create Folder Structure**
```bash
mkdir -p src/components/ui
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/assets
mkdir -p public
```

### **5. Copy All Files**

**Copy all the code from the markdown files into their respective locations:**

#### **Root Files:**
- `package.json`
- `vite.config.ts` 
- `tailwind.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `postcss.config.js`

#### **Public Files:**
- `public/index.html`
- `public/robots.txt`

#### **Source Files:**
- `src/main.tsx`
- `src/App.tsx`
- `src/index.css`
- `src/lib/utils.ts`

#### **Component Files:**
- `src/components/Header.tsx`
- `src/components/Footer.tsx` 
- `src/components/SearchBar.tsx`

#### **Page Files:**
- `src/pages/Homepage.tsx`
- `src/pages/Services.tsx`
- `src/pages/Pricing.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/NotFound.tsx`

#### **UI Component Files:**
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/toast.tsx`
- `src/components/ui/toaster.tsx`
- `src/components/ui/sonner.tsx`
- `src/components/ui/tooltip.tsx`
- `src/components/ui/aspect-ratio.tsx`

#### **Hook Files:**
- `src/hooks/use-toast.ts`

### **6. Add Hero Image**
Download a professional tech background image and save it as `src/assets/hero-bg.jpg`

### **7. Run the Project**
```bash
npm run dev
```

Your website will be available at `http://localhost:5173`

## **FEATURES INCLUDED**

✅ **Professional Design**: Modern blue-purple corporate theme  
✅ **Fully Responsive**: Works on all devices  
✅ **SEO Optimized**: Meta tags, structured data  
✅ **Fast Loading**: Optimized components and images  
✅ **Accessible**: ARIA labels and semantic HTML  
✅ **Interactive**: Hover effects, animations  
✅ **Contact Forms**: Working form with validation  
✅ **Service Pages**: Complete business website  

## **CUSTOMIZATION**

### **Colors**
Edit `src/index.css` to change the color scheme

### **Content** 
Edit the page files in `src/pages/` to update text and services

### **Images**
Replace `src/assets/hero-bg.jpg` with your own background image

### **Logo**
Update the logo in `src/components/Header.tsx`

## **DEPLOYMENT**

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

The built files will be in the `dist/` folder ready for deployment to any web hosting service.

**Your professional VirtualTech Pro website is now ready to run!**