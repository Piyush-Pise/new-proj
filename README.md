# Frete - Custom Apparel Brand Application

A modern Angular application for Frete, a custom apparel ordering platform where "Fretors" visit customers in person to showcase fabric and print quality.

## Features

- **Modern UI Design**: Navy blue and cyan color scheme with smooth animations
- **Hero Section**: Eye-catching landing section with call-to-action buttons
- **Features Showcase**: Highlights key features (In-person quality check, Fast setup, Custom styles)
- **How It Works**: Step-by-step process visualization
- **Booking Form**: Complete booking form with validation
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Smooth Animations**: Engaging hover effects and transitions

## Tech Stack

- Angular 20.3.9
- TypeScript
- CSS3 with custom properties
- Reactive Forms
- Standalone Components

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── footer/          # Site footer
│   │   ├── home/            # Home page container
│   │   ├── hero/            # Hero section
│   │   ├── features/        # Features showcase
│   │   ├── how-it-works/    # Process steps
│   │   └── booking/         # Booking form
│   ├── services/
│   │   └── booking.service.ts
│   ├── app.component.ts
│   └── app.routes.ts
├── styles.css               # Global styles and theme
└── index.html
```

## Color Theme

- **Navy Dark**: `#0a192f`
- **Navy Medium**: `#112240`
- **Cyan Primary**: `#00d9ff`
- **Cyan Secondary**: `#64ffda`

## Development

This project uses Angular standalone components and modern Angular features. All components are self-contained and can be easily modified or extended.

## License

This project is proprietary software.

