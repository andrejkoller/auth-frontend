## Short description

A small Next.js 15 authentication app (client + simple API calls) used as the auth micro‑app for a larger project.

## 🛠️ Technologies Used

- Next.js (app router)
- React + TypeScript
- MUI (Material UI)
- Axios for API calls

## 📋 Prerequisites

- Node 18+
- npm / pnpm / yarn

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/andrejkoller/auth-frontend.git
cd auth-frontend
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

The application will be available at http://localhost:3001 (or another port if 3001 is in use).

## 🔌 API Integration

The application communicates with a backend API through the axios instance configured in `src/services/axios-instance.ts`.

Key Features:

- Automatic JWT token injection from token service
- Automatic token refresh on expiration
- Centralized error handling
- Base URL configuration via environment variables

Services:

- `user-service.ts` - User profile management and account operations
- `token-service.ts` - JWT token storage and retrieval

## 🔐 Authentication

The app uses JWT-based authentication with token refresh:

1. User is redirected to auth service for login/signup
2. JWT tokens (access + refresh) are stored in localStorage
3. Tokens are automatically included in API requests
4. Access token is refreshed automatically when expired
5. AuthProvider manages authentication state across the app
6. Protected routes redirect to login if token is missing/invalid

## 🔗 Related

- Backend Repositories: [AuthAPI](https://github.com/andrejkoller/AuthAPI) and [PresenterAPI](https://github.com/andrejkoller/PresenterAPI)
- Frontend Repositories: [landing-frontend](https://github.com/andrejkoller/landing-frontend) and [presenter-frontend](https://github.com/andrejkoller/presenter-frontend)
- C++ Application: [Presenter](https://github.com/andrejkoller/Presenter)

## 📸 Screenshots
