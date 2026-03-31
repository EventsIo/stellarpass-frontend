# StellarPass Frontend

Next.js 14 frontend for the StellarPass event ticketing dApp on Stellar. Supports organizer dashboards, event creation, attendee ticket purchasing, and QR-based entry verification.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Wallet | Freighter Wallet SDK |
| Stellar SDK | `@stellar/stellar-sdk` |
| State | Zustand |
| Forms | React Hook Form + Zod |
| QR Codes | `qrcode.react` |
| HTTP Client | Axios |

## Prerequisites

- Node.js >= 20
- [Freighter Wallet](https://freighter.app) browser extension
- StellarPass backend running locally or deployed

## Project Structure

```
stellarpass-frontend/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Landing page
│   │   ├── layout.tsx              # Root layout
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Organizer dashboard
│   │   ├── events/
│   │   │   ├── create/
│   │   │   │   └── page.tsx        # Create event form
│   │   │   └── [id]/
│   │   │       ├── page.tsx        # Public event page
│   │   │       └── register/
│   │   │           └── page.tsx    # Ticket purchase / registration
│   │   └── tickets/
│   │       └── page.tsx            # Attendee ticket wallet
│   ├── components/
│   │   ├── ui/                     # Reusable UI components (Button, Input, Modal)
│   │   ├── events/                 # Event-specific components (EventCard, EventForm)
│   │   ├── tickets/                # Ticket components (TicketCard, QRDisplay)
│   │   └── layout/                 # Navbar, Footer, Sidebar
│   ├── hooks/                      # Custom React hooks
│   ├── lib/
│   │   ├── stellar/                # Freighter wallet + Soroban contract helpers
│   │   └── api/                    # Axios API client
│   ├── store/                      # Zustand global state
│   ├── types/                      # TypeScript interfaces
│   └── utils/                      # Helper functions
├── public/                         # Static assets
├── docs/
│   └── components.md               # Component documentation
├── .github/
│   └── workflows/
│       └── ci.yml
├── .env.example
├── package.json
└── README.md
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-org/stellarpass-frontend.git
cd stellarpass-frontend

# Install dependencies
npm install

# Copy env file and fill in values
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description | Auth Required |
|---|---|---|
| `/` | Landing page | No |
| `/dashboard` | Organizer dashboard | Organizer |
| `/events/create` | Create event form | Organizer (Pro) |
| `/events/[id]` | Public event detail page | No |
| `/events/[id]/register` | Ticket purchase / registration | Wallet |
| `/tickets` | Attendee ticket wallet | Wallet |

## Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript type check
```

## Environment Variables

See `.env.example` for all required variables.

## Contributing

See [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## License

MIT
