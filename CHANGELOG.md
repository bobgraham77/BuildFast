# Changelog

## [October 5, 2025]

### Bug Fixes

- **About Section Video Player**
  - Loaded `react-player` with a client-only dynamic import in `src/components/About.tsx`
  - Resolved the Next.js hydration mismatch caused by server-side rendering the video player

## [May 4, 2025]

### Bug Fixes

- **Navbar "Get Started" Button**
  - Fixed Next.js hydration error
  - Button now correctly triggers Stripe Checkout
  - Removed dynamic Stripe hook calls from handlers
  - Using a single Stripe hook instance at the Header component level

- **Pricing Section**
  - Aligned features and price above the button
  - Increased text size (price, features) for better visual consistency
  - Changed price color from pink to white
  - Left-aligned features instead of centered

- **Link Configuration**
  - Updated "Get Started" links to use Stripe instead of external links
  - Configured Stripe prices in configuration files

### Improvements

- **Visual Consistency**
  - Standardized text sizes throughout the application
  - Better color and design consistency

- **User Experience**
  - Smoother payment process
  - Improved readability of pricing information
