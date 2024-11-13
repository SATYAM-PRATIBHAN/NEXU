# Project Management Application

A modern project management application built with Next.js, featuring sprint management, issue tracking, and team collaboration capabilities.

## 🚀 Features

- **User Authentication** - Secure authentication powered by Clerk
- **Project Management** - Create and manage multiple projects
- **Sprint Planning** - Organize work into sprints with the Sprint Manager
- **Issue Tracking** - Detailed issue management with issue details dialog
- **User Profiles** - Personalized user experiences with avatars and user menus
- **Responsive Design** - Full mobile and desktop support

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Database**: Prisma ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **State Management**: React Hooks

## 📦 Installation

1. Clone the repository: 
    ```bash
    git clone https://github.com/SATYAM-PRATIBHAN/NEXU.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```
