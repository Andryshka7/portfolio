# Andrey Lapchik - Portfolio Website

A modern, comprehensive portfolio website built with Astro and Tailwind CSS, showcasing full-stack development expertise and professional experience.

## Features

- **Multi-Section Design**: Comprehensive presentation including Hero, Experience, Education, Tech Stack, Achievements, Testimonials, and Contact
- **Responsive Layout**: Optimized for all device sizes with mobile-first approach
- **Dark Theme**: Modern dark-first design with cyan and blue accents
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Functional contact form with Telegram integration
- **Interactive Elements**: Smooth scrolling, hover effects, and animations

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide Astro
- **Deployment**: Vercel-ready with custom configuration
- **Contact**: Telegram Bot API integration

## Project Structure

```
src/
├── components/
│   ├── Achievements/       # Professional achievements and certifications
│   ├── Contact/           # Contact form and information
│   ├── Education/         # Educational background
│   ├── Experience/        # Work experience timeline
│   ├── Footer/           # Site footer
│   ├── Header/           # Navigation header
│   ├── Hero/             # Main hero section with personal info
│   ├── TechStack/        # Technology skills showcase
│   └── Testimonials/     # Client testimonials
├── helpers/
│   ├── formatTelegramMessage/  # Telegram message formatting
│   └── sendTelegramMessage/    # Telegram API integration
├── layouts/
│   └── index.astro       # Base layout with meta tags
├── pages/
│   ├── api/
│   │   └── contact.ts    # Contact form API endpoint
│   └── index.astro       # Main portfolio page
├── styles/
│   ├── index.css         # Global styles and custom scrollbar
│   ├── navbar.css        # Navigation-specific styles
│   └── tailwind.css      # Tailwind CSS imports
└── types/
    └── index.ts          # TypeScript type definitions
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

Replace the image in `public/me.png` with your own photo. The image is used in:

- `src/components/Hero/index.astro` - Main hero section

### Updating Personal Information

Modify the content in the respective component files:

- **Hero Section** (`src/components/Hero/index.astro`):
    - Name and title
    - Description
    - Core technologies
    - Contact information

- **Experience** (`src/components/Experience/index.astro`):
    - Work history
    - Job descriptions
    - Company information

- **Education** (`src/components/Education/index.astro`):
    - Educational background
    - Certifications

- **Tech Stack** (`src/components/TechStack/index.astro`):
    - Technology skills
    - Proficiency levels

- **Achievements** (`src/components/Achievements/index.astro`):
    - Professional achievements
    - Awards and recognitions

- **Testimonials** (`src/components/Testimonials/index.astro`):
    - Client testimonials
    - Recommendations

### Contact Form Setup

To enable the contact form functionality:

1. Create a Telegram bot via [@BotFather](https://t.me/botfather)
2. Get your bot token and chat ID
3. Add environment variables to your deployment platform:
    - `TELEGRAM_BOT_TOKEN`
    - `TELEGRAM_CHAT_ID`

### Styling

The design uses Tailwind CSS with a custom color palette:

- **Primary**: Cyan (#06b6d4)
- **Secondary**: Blue (#3b82f6)
- **Background**: Dark grays (#111827, #1f2937, #000000)
- **Text**: Light grays (#f9fafb, #d1d5db, #9ca3af)
- **Accents**: Purple (#8b5cf6), Green (#10b981)

## Deployment

The site is configured for deployment on **Vercel** with the included `vercel.json` configuration file.

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
    - `TELEGRAM_BOT_TOKEN`: Your Telegram bot token
    - `TELEGRAM_CHAT_ID`: Your Telegram chat ID
3. Deploy automatically on every push to main branch

### Other Platforms

The site can also be deployed to:

- **Netlify**: Upload the `dist/` folder
- **GitHub Pages**: Use GitHub Actions
- **Any static hosting**: Upload the built files

## Environment Variables

Required for contact form functionality:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

### Code Structure

- **Components**: Modular Astro components in `/src/components/`
- **API Routes**: Server-side functionality in `/src/pages/api/`
- **Helpers**: Utility functions in `/src/helpers/`
- **Types**: TypeScript definitions in `/src/types/`

## License

MIT License - feel free to use this template for your own portfolio.
