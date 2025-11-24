# Amplified Tech Website

Fast, practical digital capability for SMEs. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

Creates an optimized production build in the `out` directory (static export for AWS Amplify).

## Deployment

This site is configured for AWS Amplify deployment with automatic git sync.

### AWS Amplify Setup

1. Connect your GitHub repository
2. AWS Amplify will automatically detect the `amplify.yml` configuration
3. Build settings are pre-configured for Next.js static export

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: AWS Amplify
- **Font**: Outfit (Google Fonts)

## Design System

The design follows the Amplified Tech brand guidelines with:
- Deep navy background (#0F1B2B)
- Purple primary accent (#8B5CF6)
- Rounded, modern UI components
- Smooth animations and transitions

See `Specs/style-guide.md` for complete design tokens.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles & design tokens
├── components/            # Reusable components
│   ├── Button.tsx
│   └── Container.tsx
├── Specs/                 # Content specifications
└── amplify.yml           # AWS Amplify build configuration
```

## Future Features

- Client login portals
- Collaborative markdown document editing
- Additional pages (Services, About, Pricing, Contact)
- Authentication integration

## Domain

Currently configured for: **adaptivedelivery.co.uk**
