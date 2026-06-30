# Second Innings House

A premium senior-living website for people above 50. The experience is designed to feel warm, calm, editorial, and easy to explore, with dedicated pages for lifestyle, wellness, experiences, community, gallery, pricing, and contact.

## What’s Included

- Premium hero section with custom imagery and branded typography
- Full-screen intro loader with the "0 to 50" animated concept
- Responsive navbar with desktop dropdowns and mobile menu
- Multi-page routing with dedicated sections for each experience area
- Accessibility controls for larger text and higher contrast
- Soft, nature-inspired visual system with gold and forest accents

## Pages

- `/` - Home
- `/lifestyle` - Dream Board, Memory Lane, Story Studio, Family Tree, Memory Book, Love & Companionship, Grandkids Experience, Legacy Program
- `/wellness` - Health Ecosystem, Emotional Wellness, Brain Wellness, Wellness Center, Pet Therapy, Spiritual, Travel
- `/experiences` - Entertainment, Adventures, Safe Adventure, Bucket List, Around India Club, Celebrity Visits, Night Experiences, Food Festival, Gaming & Workshop, Memory Scanner, Daily Schedule, Nature, Signature Experiences
- `/community` - Family Portal, Family Ecosystem, Technology, Community Events, Hall of Legends, Memory Wall, Creative Studios, Social Impact, Contribution, Sustainability, Rewards, Events Calendar, Testimonials
- `/gallery` - Photo gallery and events calendar
- `/pricing` - Plans, accommodation, dining, FAQ, trial stay CTA
- `/contact` - Contact form and website features

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production Build

```bash
npm run build
```

## Type Check

```bash
npm run typecheck
```

## Notes

- The site starts with a custom intro loader before the homepage appears.
- The homepage hero uses the generated senior-living image stored in `src/assets/hero-senior.png`.
- Navigation and page sections are built to match a premium retirement-resort style rather than a generic brochure layout.

## Project Structure

```text
src/
  components/
  pages/
  assets/
  App.tsx
  main.tsx
  data.ts
  index.css
```

## License

Private project for Second Innings House.
