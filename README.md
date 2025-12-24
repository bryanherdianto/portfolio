# Bryan Herdianto's Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring dynamic content management through DatoCMS and a sleek design powered by Tailwind CSS.

## Live Site

[https://www.bryanherdianto.site](https://www.bryanherdianto.site)

## Tech Stack

- **Framework**: Next.js 15 (App Router with Turbopack)
- **Language**: JavaScript / React 19
- **Styling**: Tailwind CSS 4
- **CMS**: DatoCMS (GraphQL API)
- **Fonts**: Geist Sans, Geist Mono, Poppins

## Features

- **Hero Section**: Eye-catching introduction with typewriter animation
- **About**: Personal background and introduction
- **Experience**: Education and work history timeline
- **Skills**: Technical skills organized by category with proficiency levels
- **Projects**: Portfolio showcase with detailed project pages
- **Contact**: Get in touch section
- **Responsive Design**: Fully optimized for desktop and mobile devices
- **SEO Optimized**: Includes sitemap, robots.txt, and Open Graph metadata

## Project Structure

```txt
portfolio/
├── app/
│   ├── [slug]/          # Dynamic project detail pages
│   ├── layout.js        # Root layout with metadata
│   ├── page.js          # Home page with data fetching
│   ├── sitemap.js       # Dynamic sitemap generation
│   └── robots.js        # Robots.txt configuration
├── components/
│   ├── Navbar.jsx       # Navigation component
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Experience.jsx   # Experience timeline
│   ├── Skills.jsx       # Skills display
│   ├── Projects.jsx     # Projects grid
│   ├── Contact.jsx      # Contact form/section
│   └── Footer.jsx       # Footer component
└── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bryanherdianto/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory:

   ```env
   DATOCMS_API_KEY=your_datocms_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start development server with Turbopack  |
| `npm run build` | Build for production                     |
| `npm run start` | Start production server                  |
| `npm run lint`  | Run ESLint                               |

## Content Management

This portfolio uses DatoCMS as a headless CMS for managing:

- Experience (Education and Work History)
- Skills and Proficiency Levels
- Projects with detailed descriptions
- CV/Resume file
