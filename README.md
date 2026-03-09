# Carbon Credit Platform Demo

An interactive demo showcasing a blockchain-based carbon credit platform. This demo simulates the entire workflow from project verification to credit issuance, tracking, and retirement.

## Features

### 🌲 Projects Page
- Display multiple carbon reduction projects (forest, solar, wind)
- Show project details: name, location, CO₂ reduction in tons
- Interactive project selection with detailed verification steps

### ✅ Verification Process
- Visual verification steps with icons:
  - **IoT Sensors**: Real-time monitoring
  - **Satellite Monitoring**: Remote verification
  - **Accredited Auditor Review**: Third-party validation
- Checkmarks indicate completed steps
- Status indicators (pending, in-progress, verified)

### ⛓️ Blockchain Ledger
- Immutable record of all carbon credits
- Table view showing:
  - Unique credit IDs
  - Project information
  - CO₂ reduction amounts
  - Verification status
  - Issue dates
  - Current status (active/retired)
  - Retirement information

### 🏢 Company Dashboard
- Browse available verified credits
- Search functionality
- Purchase credits (simulates retirement)
- View total available and retired credits
- Company selector to act as different companies

### 🔍 Credit Verification
- Detailed credit view with full information
- Project details and verification history
- Blockchain hash simulation
- Visual indicators for retired credits (cannot be reused)
- Complete audit trail

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to 


### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Demo Flow

1. **Start at Projects Page**: View all carbon reduction projects and their verification status
2. **Select a Project**: Click on any project to see detailed verification steps
3. **View Blockchain Ledger**: See all issued credits in the immutable ledger
4. **Company Dashboard**: Browse and purchase available credits
5. **Credit Details**: Click any credit to see full verification and blockchain details

## Technology Stack

- React 18 with TypeScript
- Vite for fast development and building
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons

## Project Structure


src/
├── components/       # Reusable components
│   └── VerificationSteps.tsx
├── pages/          # Page components
│   ├── ProjectsPage.tsx
│   ├── LedgerPage.tsx
│   ├── DashboardPage.tsx
│   └── CreditDetailPage.tsx
├── data/           # Mock data
│   └── mockData.ts
├── types.ts        # TypeScript types
├── App.tsx         # Main app with routing
└── main.tsx        # Entry point


