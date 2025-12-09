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

<img width="1920" height="1080" alt="Screenshot 1" src="https://github.com/user-attachments/assets/e0a288c5-5015-4b8d-9a3f-073524b277a3" />
<img width="1920" height="1080" alt="Screenshot 2" src="https://github.com/user-attachments/assets/89b5545a-8613-47ef-9c5c-d4ece6bd756d" />
<img width="1920" height="1080" alt="Screenshot 3" src="https://github.com/user-attachments/assets/79f3e4be-5944-474d-b651-8cec9bcf098b" />
<img width="1920" height="1080" alt="Screenshot 4" src="https://github.com/user-attachments/assets/bec30b7a-b563-47c5-96bc-ebbe2e4d3efb" />
<img width="1920" height="1080" alt="Screenshot 5" src="https://github.com/user-attachments/assets/b1d5e882-c376-4e1a-8013-c5b94d9ca6fd" />
<img width="1920" height="1080" alt="Screenshot 6" src="https://github.com/user-attachments/assets/b40a4409-63b4-4af8-856e-e8b3bf860035" />
