# Andrey Lapchik - Portfolio Website

A simple, modern single-page portfolio website built with Astro and Tailwind CSS.

## Features

- **Single Page Design**: Clean, focused presentation of essential information
- **Responsive Layout**: Optimized for all device sizes
- **Dark Theme**: Modern dark-first design with cyan accents
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Ready for Netlify/Vercel

## Project Structure

```
src/
├── components/
│   └── Hero.astro          # Main hero section with personal info
├── layouts/
│   └── Layout.astro        # Base layout with meta tags
├── pages/
│   └── index.astro         # Single page with hero section
└── styles/
    └── global.css          # Tailwind CSS imports
```

## Getting Started

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Start development server**:

    ```bash
    npm run dev
    ```

3. **Build for production**:
    ```bash
    npm run build
    ```

## Customization

### Adding Your Photo

Replace the placeholder image in `src/components/Hero.astro`:

```astro
<!-- Replace the placeholder div with your actual image -->
<img
    src='/path/to/your/photo.jpg'
    alt='Andrey Lapchik'
    class='h-80 w-80 rounded-full object-cover'
/>
```

### Updating Information

Modify the content in `src/components/Hero.astro` to update:

- Name and title
- Description
- Skills
- Contact information
- Social links

### Styling

The design uses Tailwind CSS with a custom color palette:

- Primary: Cyan (#06b6d4)
- Background: Dark grays (#111827, #1f2937)
- Text: Light grays (#f9fafb, #d1d5db)

## Deployment

The site is ready to deploy to:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your GitHub repository
- **Any static hosting**: Upload the built files

## Future Enhancements

This simplified version serves as a foundation. Future additions could include:

- Multiple pages (Work, About, Contact)
- Project showcases
- Interactive elements
- Blog/Notes section
- Contact forms

## License

MIT License - feel free to use this template for your own portfolio.
