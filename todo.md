# TODO Checklist

This file provides a comprehensive checklist for building the **Niseko Real Estate Platform** as specified.  
Each **Phase** is broken down into tasks and subtasks. Check them off as you progress.

---

## Phase 1: Core Project Setup

- [ ] **Initialize GitHub Repo**
  - [ ] Create a new repo (e.g., `niseko-real-estate`)
  - [ ] Add a `README.md`
  - [ ] Configure branch protection rules (optional but recommended)
- [ ] **Initialize Next.js + TypeScript**
  - [ ] `npx create-next-app@latest --typescript` (or a preferred template)
  - [ ] Confirm basic folder structure is generated
- [ ] **Add ESLint & Prettier**
  - [ ] Install & configure ESLint (extends `eslint:recommended`, `plugin:@typescript-eslint/recommended`)
  - [ ] Install & configure Prettier
  - [ ] Ensure ESLint and Prettier work together without conflict
- [ ] **Set Up Testing (Jest + React Testing Library)**
  - [ ] Install `jest`, `@testing-library/react`, and types
  - [ ] Add a basic test (e.g., `Home.test.tsx`) to confirm setup
- [ ] **Configure GitHub Actions / CI**
  - [ ] Add a `.github/workflows/ci.yml` file for lint + test on push/PR
  - [ ] Confirm CI runs successfully
- [ ] **Deploy "Hello World" to Vercel**
  - [ ] Connect repo to Vercel
  - [ ] Validate the site is live

---

## Phase 2: Database & Basic APIs

- [ ] **Set Up PostgreSQL**
  - [ ] Decide on local Docker vs. hosted DB
  - [ ] Create a database (e.g., `niseko_db`)
- [ ] **Initialize ORM (e.g., Prisma)**
  - [ ] `npx prisma init`
  - [ ] Configure `DATABASE_URL` in `.env`
- [ ] **Create Basic Models**
  - [ ] `User` (id, email, role, createdAt)
  - [ ] Migrate DB schema (`npx prisma migrate dev`)
- [ ] **Configure tRPC**
  - [ ] Set up minimal tRPC "hello" endpoint in `/api/trpc/[trpc].ts`
  - [ ] Write a unit test to call the endpoint
- [ ] **Add `getUsers` Endpoint**
  - [ ] Implement resolver that returns a list of `User`
  - [ ] Write a unit test ensuring it returns users from DB

---

## Phase 3: Authentication

# Authentication Implementation

## Setup ✅
- [x] Set up Prisma User model with wallet and auth fields
- [x] Configure NextAuth with Google provider
- [x] Set up protected and public tRPC procedures
- [x] Create login page with Google sign-in
- [x] Add error handling for auth failures

## Phantom Wallet Integration 🚧
- [x] Create PhantomButton component
- [x] Add wallet connection logic
- [ ] Test wallet connection flow
- [ ] Add wallet disconnect functionality
- [ ] Add wallet connection status indicator

## Google OAuth ✅
- [x] Configure Google OAuth credentials
- [x] Implement Google sign-in
- [x] Store Google users in database
- [x] Handle OAuth callbacks and errors

## Testing 🚧
- [x] Basic auth router tests
- [ ] Complete Phantom wallet tests
- [ ] Test protected route access
- [ ] Test session persistence
- [ ] Test user creation flow

## Additional Tasks
- [x] Add middleware for protected routes
- [x] Set up error pages
- [ ] Add loading states
- [ ] Add proper error handling for wallet connections
- [ ] Add user profile page

---

## Phase 4: Property Listings & 3D Models

- [ ] **Property Listing Form (Minimal)**
  - [ ] Create a `Property` model (id, title, description, price, imageURLs, createdAt, etc.)
  - [ ] `createProperty` tRPC endpoint (seller must be authenticated)
  - [ ] Unit tests for property creation
- [ ] **Display Properties**
  - [ ] Implement a listing page (grid/list of properties)
  - [ ] Simple filter by price or location on front-end
  - [ ] Integration test to ensure listings are fetched/displayed
- [ ] **3D Model Integration**
  - [ ] Update `Property` model to include a `modelURL` or similar
  - [ ] Set up Three.js in the property detail page
  - [ ] Implement toggle between exterior/interior views (two .glb files or a single model with toggles)
  - [ ] Write tests (mock 3D if needed) to confirm the viewer renders

---

## Phase 5: Map & Search

- [ ] **Deck.gl + Google Maps Integration**
  - [ ] Add lat/long fields to `Property` model
  - [ ] Configure Google Maps API & Deck.gl layers
  - [ ] Render property markers on the map
- [ ] **Search & Filters**
  - [ ] Implement text-based search (e.g., location name)
  - [ ] Add filter controls (price range, bedrooms, etc.)
  - [ ] tRPC endpoint to query filtered results
  - [ ] Integration tests for searching/filtering
- [ ] **Map Performance**
  - [ ] Test with multiple markers (bulk data)
  - [ ] Confirm no major slowdowns or errors

---

## Phase 6: Purchase Flow & Escrow (Solana)

- [ ] **Solana Smart Contract Scaffold**
  - [ ] Create a minimal Rust contract for escrow on local test validator
  - [ ] Write Rust tests verifying deposit/lock logic
- [ ] **Frontend "Buy Now"**
  - [ ] Connect "Buy Now" button to tRPC which calls the Solana contract
  - [ ] Check user's SOL/USDC balance
  - [ ] Handle success/failure states
- [ ] **Escrow State**
  - [ ] Mark property as `IN_ESCROW` in DB
  - [ ] Write integration tests for deposit & escrow status
- [ ] **Error Handling**
  - [ ] Provide user-friendly fallback (transaction fail, insufficient funds)
  - [ ] Tests to ensure errors are handled gracefully

---

## Phase 7: Legal Verification & NFT Mint

- [ ] **Dropbox Sign / E-Sign Integration**
  - [ ] Connect or mock an e-sign API
  - [ ] Generate doc placeholders (user details, property info)
  - [ ] KYC check (mock or real external API)
- [ ] **Legal Workflow**
  - [ ] Upon user's e-sign & successful KYC, finalize escrow
  - [ ] Update property to `SOLD` or `OWNED` status
- [ ] **NFT Minting**
  - [ ] Once verified, mint an NFT on Solana (store property data in metadata)
  - [ ] Upload metadata (incl. legal docs link) to IPFS
  - [ ] Write tests covering deposit → e-sign → minted NFT
- [ ] **Error Handling**
  - [ ] Handle KYC failures or doc signing errors
  - [ ] Display reason & allow retry

---

## Phase 8: Seller Dashboard & Boosting

- [ ] **Seller Dashboard**
  - [ ] Show each property's stats: views, favorites, inquiries
  - [ ] TRPC endpoint to fetch stats for the seller's properties only
  - [ ] Write tests for data visibility (owner vs. non-owner)
- [ ] **Boost Listing**
  - [ ] Add a `boosted` field in the `Property` model
  - [ ] UI control to toggle "Boost" (or a separate paid action)
  - [ ] Show boosted listings in "Trending Properties" or top of search results
- [ ] **Integration Tests**
  - [ ] Seller flow: create → view stats → boost
  - [ ] Confirm stats increment with page views & favorites

---

## Phase 9: Notifications & Social Sharing

- [ ] **Push Notifications / Email**
  - [ ] Integrate a notification service (e.g., Firebase Cloud Messaging or email fallback)
  - [ ] Send notifications on:
    - [ ] Transaction updates
    - [ ] Seller inquiries
    - [ ] Legal doc completion
  - [ ] Write tests (mock or real service) for sending notifications
- [ ] **3D Snapshot & Share**
  - [ ] Implement a button to capture the current 3D viewport
  - [ ] Generate a shareable link (property detail page)
  - [ ] (Optional) Integrate direct sharing to Twitter/Instagram
- [ ] **Tests**
  - [ ] Confirm notifications are triggered at correct events
  - [ ] Validate snapshot and share logic in multiple browsers (where possible)

---

## Phase 10: Final Integration & Security

- [ ] **Rate Limiting & Captchas**
  - [ ] Add rate-limits on critical routes (login, property creation)
  - [ ] (Optional) Integrate captcha for additional spam protection
- [ ] **Performance Tests**
  - [ ] Check 3D model load times in different network conditions
  - [ ] Stress test map rendering with many markers
- [ ] **Staging Deployment**
  - [ ] Deploy to a test environment (Vercel staging + Solana testnet)
  - [ ] Conduct final E2E tests (escrow, NFT mint, notifications)
- [ ] **Production Release**
  - [ ] Set up mainnet configuration for Solana
  - [ ] Update environment variables securely
  - [ ] Final QA & security review
- [ ] **Documentation & Cleanup**
  - [ ] Ensure `README.md` is up to date (setup instructions, usage)
  - [ ] Remove any placeholder code or mock data
  - [ ] Verify no orphaned or unused code remains

---

**Use this checklist to ensure each feature is developed, tested, and integrated fully before moving on.**
Happy building!
