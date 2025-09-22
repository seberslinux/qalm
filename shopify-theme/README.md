# Sensory Shopify Theme

A modern, accessible Shopify theme designed for sensory-friendly clothing brands. This theme was converted from a React/TypeScript application to a fully functional Shopify theme using Liquid templating.

## Features

- **Sensory-Friendly Design**: Clean, minimal design with focus on accessibility
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Showcase**: Featured products section with hover effects
- **Category Navigation**: Visual category browsing
- **Newsletter Integration**: Built-in newsletter signup
- **About Section**: Customizable brand story section
- **Modern Styling**: Custom CSS with utility classes inspired by Tailwind CSS

## Theme Structure

```
shopify-theme/
├── assets/
│   ├── base.css          # Main stylesheet
│   └── global.js         # JavaScript functionality
├── config/
│   └── settings_schema.json  # Theme customization options
├── layout/
│   └── theme.liquid      # Main layout template
├── locales/
│   └── en.default.json   # English translations
├── sections/
│   ├── announcement-bar.liquid
│   ├── categories.liquid
│   ├── featured-products.liquid
│   ├── footer.liquid
│   ├── header.liquid
│   ├── hero.liquid
│   ├── newsletter.liquid
│   └── about.liquid
├── snippets/
│   └── meta-tags.liquid
└── templates/
    ├── index.liquid      # Homepage
    ├── collection.liquid # Collection pages
    └── product.liquid    # Product pages
```

## Installation

### Method 1: Shopify CLI (Recommended)

1. Install Shopify CLI:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. Navigate to the theme directory:
   ```bash
   cd shopify-theme
   ```

3. Connect to your Shopify store:
   ```bash
   shopify theme dev
   ```

4. Follow the prompts to connect to your store and start development.

### Method 2: Manual Upload

1. Zip the entire `shopify-theme` folder
2. Go to your Shopify admin → Online Store → Themes
3. Click "Add theme" → "Upload zip file"
4. Select your zipped theme folder

## Customization

### Theme Settings

The theme includes extensive customization options accessible through:
- Shopify Admin → Online Store → Themes → Customize

Key settings include:
- **Colors**: Text, background, accent colors
- **Typography**: Font selection and scaling
- **Layout**: Page width and spacing
- **Buttons**: Corner radius, borders, shadows
- **Product Cards**: Image padding, text alignment
- **Social Media**: Instagram, Facebook, Pinterest links
- **Logo & Favicon**: Brand assets

### Sections

Each section can be customized individually:

#### Hero Section
- Hero image
- Title and subtitle text
- Button text and URL

#### Categories Section
- Section title
- Add/remove categories
- Category images and links

#### Featured Products Section
- Section title and description
- Select collection to feature
- Number of products to show
- "View All" button customization

#### About Section
- Section title
- Two content paragraphs
- About image
- Button text and URL

#### Newsletter Section
- Section title and description
- Email placeholder text
- Button text
- Privacy policy text

### Adding Products

1. Go to Products → Add product
2. Add product details, images, and variants
3. For sensory-friendly features, use metafields:
   - Go to Settings → Custom data → Products
   - Add metafield: `sensory_features` (List of single line text)
   - Add features like "Tagless design", "Flat seams", "Soft fabric"

### Setting Up Collections

1. Go to Products → Collections
2. Create collections for different categories (Tops, Bottoms, Accessories)
3. Add products to collections
4. The theme will automatically display them in the categories section

### Menu Setup

1. Go to Online Store → Navigation
2. Create a "Main menu" with links to:
   - Shop (collections)
   - About
   - Contact
   - Other pages

3. Create a "Footer" menu with additional links

## Development

### Local Development

1. Install Shopify CLI
2. Run `shopify theme dev` in the theme directory
3. Make changes to files
4. Changes will be reflected in real-time

### File Structure Guidelines

- **Sections**: Reusable page sections (hero, products, etc.)
- **Templates**: Page layouts (index, product, collection)
- **Snippets**: Reusable code fragments
- **Assets**: CSS, JavaScript, images
- **Config**: Theme settings and translations

### CSS Classes

The theme uses utility classes similar to Tailwind CSS:

```html
<!-- Layout -->
<div class="container mx-auto px-4 py-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<!-- Typography -->
<h1 class="text-4xl font-light mb-4">
<p class="text-gray-600 mb-6">

<!-- Colors -->
<div class="bg-white text-black">
<button class="bg-black text-white hover:bg-gray-800">

<!-- Spacing -->
<div class="p-4 mb-8 mt-12">
<div class="px-6 py-3">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The theme is optimized for performance with:
- Lazy loading images
- Minimal JavaScript
- Optimized CSS
- Fast loading times

## Accessibility

Built with accessibility in mind:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast support

## Support

For support and customization requests, please contact your development team or refer to the Shopify theme development documentation.

## License

This theme is proprietary and created for the Sensory brand. All rights reserved.
