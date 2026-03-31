# Google Docs Clone

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Convex](https://img.shields.io/badge/Convex-Backend-orange?style=for-the-badge)
![Liveblocks](https://img.shields.io/badge/Liveblocks-Real--time-blue?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

A high-performance, real-time collaborative document editor inspired by Google Docs. Built with Next.js 15, Tiptap, and Liveblocks, this application supports seamless multi-user editing, comments, and document management.

## 🚀 Key Features

- **Real-time Collaboration:** Powered by Liveblocks and Yjs for conflict-free, multi-user editing.
- **Rich Text Editor:** Fully-featured Tiptap editor with support for tables, images, links, and advanced formatting.
- **Document Management:** Create, rename, delete, and organize documents with ease.
- **Template Gallery:** Kickstart your work with professional templates (Resumes, Proposals, Letters).
- **Presence & Avatars:** See who else is working on a document in real-time.
- **Comments & Threads:** Collaborative feedback loop with integrated comment threads.
- **Search & Filter:** Quickly find documents using Convex's powerful search indexing.
- **Responsive Design:** A polished, mobile-friendly UI built with Tailwind CSS and Shadcn.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Backend/Database:** [Convex](https://www.convex.dev/)
- **Real-time/Sync:** [Liveblocks](https://liveblocks.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Editor:** [Tiptap](https://tiptap.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **State Management:** [Zustand](https://docs.pmnd.rs/zustand/) & [Nuqs](https://nuqs.47ng.com/)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- A Convex account
- A Clerk account
- A Liveblocks account

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sofiane-Bahmed/google-docs-clone.git
   cd google-docs-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root and add your keys:
   ```env
   # Clerk Auth
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Liveblocks
   LIVEBLOCKS_SECRET_KEY=sk_...

   # Convex (Automatically handled by npx convex dev)
   CONVEX_DEPLOYMENT=...
   NEXT_PUBLIC_CONVEX_URL=...
   ```

4. **Set up Convex:**
   ```bash
   npx convex dev
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components (Shadcn UI).
- `src/extensions`: Custom Tiptap extensions (Font Size, Line Height).
- `src/hooks`: Custom React hooks for state and interaction.
- `convex/`: Backend schema and database functions.
- `public/`: Static assets and document templates.

## 🧪 Development

### Running Tests
```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

### Key Scripts
- `npm run dev`: Starts the Next.js dev server.
- `npx convex dev`: Starts the Convex backend sync.
- `npm run build`: Builds the production application.


