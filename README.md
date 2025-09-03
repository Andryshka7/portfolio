# Portfolio Website

A modern, responsive portfolio website built with Astro, featuring a collection of full-stack web development projects. The website supports multiple languages (English, Russian, Latvian) and includes a dark/light theme toggle.

## 🌟 Features

-   **Multi-language Support**: English, Russian, and Latvian
-   **Responsive Design**: Mobile-first approach with Tailwind CSS
-   **Theme Toggle**: Dark and light mode support
-   **Internationalization**: Complete i18n implementation
-   **Static Site Generation**: Fast loading with Astro
-   **Contact Form**: Email integration with EmailJS
-   **Project Showcase**: Detailed project presentations with image carousels

## 🏗️ Architecture

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About/          # About section component
│   ├── ContactMe/      # Contact form component
│   ├── Experience/     # Experience and projects section
│   ├── Project/        # Individual project display
│   ├── Skills/         # Skills showcase component
│   └── ui/             # Common UI components (Navbar, Footer, etc.)
├── content/            # Content management
│   ├── projects/       # Project data and metadata
│   └── skills/         # Skills data
├── i18n/               # Internationalization
│   └── locales/        # Language files (en.json, ru.json, lv.json)
├── layouts/            # Page layouts
├── pages/              # Route definitions
├── types/              # TypeScript type definitions
└── helpers/            # Utility functions
```

### Key Components

-   **Layout.astro**: Main layout wrapper with theme switching and navigation
-   **Navbar**: Responsive navigation with language and theme selectors
-   **Project Components**: Dynamic project display with image carousels
-   **Skills System**: Categorized skill display with proficiency levels
-   **Contact Form**: Email integration with validation and alerts

## 🛠️ Technologies

### Core Framework

-   **Astro 4.6.3**: Modern static site generator with SSR capabilities
-   **TypeScript 5.4.5**: Type-safe development

### Frontend

-   **Tailwind CSS 3.4.3**: Utility-first CSS framework
-   **Responsive Design**: Mobile-first approach with custom breakpoints

### Backend & Deployment

-   **Netlify**: Hosting and edge functions
-   **Server-side Rendering**: Dynamic content generation

### Development Tools

-   **Prettier**: Code formatting with Astro and Tailwind plugins
-   **ESLint**: Code quality and consistency

## 📱 Projects Index

### 1. Tasker - Task Management System

**Status**: ✅ Completed  
**Type**: Full-stack web application  
**Brief**: A powerful task management system to boost team productivity

**Description**: Tasker is a robust task management system designed to streamline collaboration and enhance productivity within teams. Whether you're working on a small project or managing complex workflows across multiple teams, Tasker empowers you to stay organized, prioritize tasks, and track progress with ease.

**Tech Stack**: Next.js, TypeScript, Nest.js, Zustand, TanStack Query, MySQL, TypeORM, JWT

**Development Process**: The development of Tasker began with in-depth user research. The backend prioritized scalability, security, and performance, integrating robust algorithms. Simultaneously, UI/UX was designed for simplicity and clarity, ensuring cross-device usability. Agile methodologies guided feature refinement based on feedback, with thorough testing ensuring reliability.

**Features**:

-   Task creation and management
-   Team collaboration tools
-   User role management
-   Bug reporting system
-   Advanced task editing

**Links**:

-   [Design (Figma)](https://www.figma.com/file/jJUCyOJwBXnueiz1czMSk5/Tasker?type=design&node-id=18%3A121&mode=design&t=bKv0vA0WGRFTsBX5-1)
-   [Source Code](https://github.com/Andryshka7/tasker)

---

### 2. Lapchess - Online Chess Platform

**Status**: ✅ Completed  
**Type**: Real-time multiplayer web application  
**Brief**: Online chess platform where players can play against each other

**Description**: Lapchess is a comprehensive chess platform designed for both enthusiasts and professionals. Whether you're a beginner looking to learn the basics or a seasoned player looking to master advanced techniques, Lapchess will give you the tools you need to improve your gaming experience.

**Tech Stack**: React, TypeScript, Redux Toolkit, Express.js, JWT, Socket.io, MongoDB

**Development Process**: The development of Lapchess started with market research and user feedback to shape its design. Through iterative prototyping and testing, the focus was on refining gameplay and interface elements. Regular feedback sessions ensured a seamless user experience.

**Features**:

-   Real-time multiplayer chess games
-   Room creation and management
-   User authentication system
-   Game state management
-   Responsive game interface

**Links**:

-   [Design (Figma)](https://www.figma.com/file/V8vyoO4NrKOdXwEfNOzDNh/Lapchess?type=design&node-id=0%3A1&mode=design&t=iRY59wytDXnsHpLS-1)
-   [Source Code](https://github.com/Andryshka7/lapchess)

---

### 3. Carmarket - Car Trading Platform

**Status**: ✅ Completed  
**Type**: E-commerce web application  
**Brief**: User-friendly platform for buying and selling cars effortlessly

**Description**: Discover the ultimate ease of buying and selling cars with Carmarket. Our seamless platform connects buyers and sellers, offering hassle-free browsing and secure transactions. With intuitive search filters and transparent pricing, Carmarket ensures a smooth and efficient experience. Say goodbye to traditional car buying stress with Carmarket.

**Tech Stack**: React, TypeScript, Zustand, Express.js, JWT, MySQL

**Development Process**: Carmarket development process begins with thorough planning and design, followed by backend and frontend development. Integration and testing ensure stable functionality before deployment, with ongoing support and maintenance post-launch, including user feedback incorporation for continuous improvement.

**Features**:

-   Car listing creation and management
-   Advanced search and filtering
-   User authentication and profiles
-   Listing preview and editing
-   Secure transaction system

**Links**:

-   [Design (Figma)](https://www.figma.com/file/o9qvXJxHA9dfUlcrLTvyS1/Car-market?type=design&node-id=0%3A1&mode=design&t=3ZwUYh8p2HO50d1K-1)
-   [Source Code](https://github.com/Andryshka7/carmarket)

## 🚀 Getting Started

### Prerequisites

-   Node.js (version 18 or higher)
-   npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run prettier:write-fix` - Format code with Prettier

## 🌍 Internationalization

The website supports three languages:

-   **English (en)** - Default language
-   **Russian (ru)** - Russian localization
-   **Latvian (lv)** - Latvian localization

Language files are located in `src/i18n/locales/` and follow a nested key structure for easy maintenance.

## 🎨 Styling

-   **Tailwind CSS**: Utility-first CSS framework with custom configuration
-   **Custom Colors**: Extended color palette including custom `midnight` color
-   **Responsive Breakpoints**: Custom breakpoints for optimal mobile experience
-   **Dark Mode**: CSS-based theme switching with localStorage persistence

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:

-   Custom breakpoints (`xs: 475px`, `2xl: 1536px`)
-   Responsive navigation (desktop and mobile variants)
-   Optimized layouts for all screen sizes
-   Touch-friendly interface elements

## 🔧 Configuration

### Astro Configuration

-   **Output**: Server-side rendering with Netlify adapter
-   **Prefetch**: Enabled for better performance
-   **Integrations**: Tailwind CSS and icon system
-   **Edge Middleware**: Netlify edge functions support

### Tailwind Configuration

-   **Content**: Scans all source files for class usage
-   **Dark Mode**: Class-based dark mode toggle
-   **Custom Colors**: Extended color palette
-   **Custom Breakpoints**: Additional responsive breakpoints

## 📄 Content Management

Projects and skills are managed through TypeScript files in the `content/` directory:

-   **Projects**: Centralized project data with metadata
-   **Skills**: Categorized skill definitions with proficiency levels
-   **Type Safety**: Full TypeScript support for content

## 🚀 Deployment

The website is configured for deployment on Netlify with:

-   **Edge Functions**: Server-side rendering capabilities
-   **Static Assets**: Optimized image and icon delivery
-   **CDN**: Global content delivery network
-   **HTTPS**: Secure connections by default

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the build process
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Andrey Lapchik** - Full-stack web developer from Riga, Latvia

-   **Experience**: Since 2021
-   **Specialization**: Full-stack web development
-   **Location**: Riga, Latvia
-   **Contact**: Available through the website's contact form

---

_This portfolio showcases a collection of full-stack web applications built with modern technologies, demonstrating skills in frontend development, backend architecture, database design, and user experience optimization._
