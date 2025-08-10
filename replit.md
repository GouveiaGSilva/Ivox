# Overview

This is a modern marketing agency website built for "Ivox Scale" that showcases digital marketing services through a professional, bilingual web interface. The application is optimized for static deployment on Netlify, using React for the frontend with full client-side functionality. The site features a complete marketing agency presentation with sections for services, testimonials, contact forms, and company information, all optimized for both light and dark themes with Portuguese and English language support.

## Recent Changes (January 2025)

- **Netlify Deploy Configuration**: Configured project for static deployment on Netlify
- **Build Optimization**: Created custom Vite config for Netlify builds (`build.netlify.js`)
- **Import Structure**: Reorganized component imports with centralized index file
- **Static Assets**: Added security headers and caching optimization files
- **SEO Ready**: Maintained all SEO optimizations for production deployment

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side application is built using React with TypeScript and follows a component-based architecture:

- **UI Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements
- **State Management**: React Context API for theme and language preferences
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling

The application supports multiple languages (Portuguese/English) and themes (light/dark) with persistent user preferences stored in localStorage. The component structure follows atomic design principles with reusable UI components in the `/components/ui` directory.

## Backend Architecture

The server-side follows a minimalist Express.js architecture:

- **Framework**: Express.js with TypeScript for API endpoints
- **Development**: Vite integration for hot module replacement in development
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstract storage interface allowing for multiple implementations (currently in-memory, designed for database integration)

The backend is structured to be easily extensible with a clean separation between route handlers, storage layer, and business logic.

## Data Architecture

**Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- Schema definition in `/shared/schema.ts` for code sharing between client and server
- Drizzle configuration supports migrations and database introspection
- User schema with UUID primary keys and unique username constraints
- Zod integration for runtime validation of database operations

**Shared Types**: Common TypeScript interfaces and validation schemas in `/shared` directory, enabling type safety across the full stack.

## Build System

**Development**: Vite handles frontend bundling with React plugin and path aliases
**Production**: Separate build processes for client (Vite) and server (esbuild)
**Configuration**: TypeScript configuration supports path mapping for clean imports
**Styling**: PostCSS with Tailwind CSS and Autoprefixer

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Backend**: Express.js, Node.js runtime
- **Database**: PostgreSQL via Neon serverless driver
- **ORM**: Drizzle ORM with PostgreSQL dialect

## UI and Styling
- **Component Library**: Comprehensive Radix UI primitive components (accordion, dialog, dropdown, etc.)
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Font Awesome for iconography
- **Fonts**: Google Fonts (Poppins) for typography

## Development Tools
- **Build System**: Vite for frontend bundling, esbuild for server bundling
- **Type Safety**: TypeScript with strict configuration
- **Validation**: Zod for runtime type validation
- **Form Handling**: React Hook Form with Hookform Resolvers

## Production Services
- **Database**: Neon PostgreSQL serverless database
- **Hosting**: Configured for Replit deployment with development tooling
- **Session Management**: PostgreSQL session store via connect-pg-simple

## Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Class Management**: clsx and class-variance-authority for conditional styling
- **Routing**: Wouter for lightweight client-side routing
- **Carousel**: Embla Carousel for image/content carousels