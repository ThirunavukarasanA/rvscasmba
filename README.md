# Chicago Booth Website

A Next.js 16 website for the University of Chicago Booth School of Business.

## Project Structure

```
rvscasmba-v2/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── home/              # Homepage-specific components
│   │   ├── HeroSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── GlobalCommunitySection.tsx
│   │   ├── PathToSuccessSection.tsx
│   │   ├── StoriesSection.tsx
│   │   ├── SocialSection.tsx
│   │   ├── FacultyInsightsSection.tsx
│   │   └── FinalCTASection.tsx
│   └── shared/            # Shared components across pages
│       ├── Header.tsx
│       └── Footer.tsx
├── backup/
│   └── benchmark/         # Backup of original benchmark implementation
├── public/
│   └── fonts/             # Custom Trade Gothic fonts
└── fonts/                 # Original font files
```

## Component Organization

Components are organized by page:
- **`components/home/`** - All components specific to the homepage
- **`components/shared/`** - Components used across multiple pages (Header, Footer)

This structure makes it easy to:
- Add new pages with their own component folders
- Maintain clear separation between page-specific and shared components
- Scale the project as more pages are added

## Getting Started

```bash
npm install
npm run dev
```

## Benchmark

The original benchmark implementation is preserved in `backup/benchmark/` for reference.
