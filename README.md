# Commodities Management Frontend

A modern Next.js application for managing commodities with role-based access control.

## Features

- ✅ Authentication (Login with email-based role assignment)
- ✅ Role-based access control (Manager & Store Keeper)
- ✅ Dashboard (Manager only) with product statistics
- ✅ Products management (View, Add, Edit, Delete)
- ✅ Light/Dark mode support
- ✅ Mock API endpoints
- ✅ Zustand state management
- ✅ Responsive design
- ✅ Route protection with middleware

## Tech Stack

- **Framework**: Next.js 
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN UI
- **State Management**: Zustand
- **Theme**: next-themes
- **Charts**: Recharts

## Project Structure

\`\`\`
/app
  /login/page.tsx          # Login page
  /dashboard/page.tsx      # Dashboard (Manager only)
  /products/page.tsx       # Products list
  /products/add/page.tsx   # Add product form
  /products/[id]/page.tsx  # Edit product form
  /api/
    /auth/login/route.ts   # Login API
    /products/route.ts     # Products CRUD API
  /providers/              # Theme & Auth providers
  middleware.ts            # Route protection

/components
  navbar.tsx               # Top navigation
  sidebar.tsx              # Side navigation
  product-form.tsx         # Product form component
  theme-toggle.tsx         # Dark mode toggle
  providers/               # Provider components

/lib
  auth-store.ts            # Zustand auth store
  products.ts              # Mock product data
  utils.ts                 # Utility functions
\`\`\`

## Installation

1. **Extract the project**
   ```bash
    unzip commodity-project.zip
    cd commodity

2. **Install dependencies**
   ```bash
   npm install

3. **Run development server**
   ```bash
   npm run dev

4. **Open browser**
   - Navigate to `http://localhost:3000`

## Test Credentials

Use these credentials to test the application:

| Role | Email | Password |
|------|-------|----------|
| Manager | `manager@test.com` | Any password |
| Store Keeper | `store@test.com` | Any password |

## Features by Role

### Manager
- ✅ Login
- ✅ Access Dashboard with statistics
- ✅ View all products
- ✅ Add new products
- ✅ Edit products
- ✅ Delete products

### Store Keeper
- ✅ Login
- ✅ View all products
- ✅ Add products
- ✅ Edit products
- ✅ Delete products
- ❌ Cannot access Dashboard

## API Endpoints

All endpoints are mock and use in-memory storage:

- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

## Environment Variables

No external environment variables required. All APIs are mocked.

## Route Protection

- `/dashboard` - Manager only (redirects to /products for others)
- `/products` - Both roles (redirects to /login if not authenticated)
- `/login` - Public

## Dark Mode

Click the moon/sun icon in the navbar to toggle between light and dark modes. Your preference is saved in localStorage.

## Building for Production

  ```bash
  npm run build
  npm start

## Development

  Watch mode for changes:
  ```bash
  npm run dev

## Notes

- This is a frontend-only application with mock APIs
- All data is stored in memory and will reset on server restart
- Authentication is simulated based on email input (contains "manager" → manager role)
- No external API calls or database required

