# BOS Landing Page

This is a modern, high-performance landing page for BOS (Business Operating System), built with React, Vite, and Tailwind CSS. It features a clean "Professional Polish" design with smooth scroll animations.

## Tech Stack

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS (v4)
*   **Animations:** Framer Motion (`motion/react`)
*   **Icons:** Lucide React

## Getting Started

Follow these steps to run the project locally:

1.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

3.  Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will generate a `dist` folder containing the compiled assets.

## Deployment

This project is configured to be easily deployed to Vercel. A `vercel.json` file is included to handle client-side routing (rewriting all requests to `index.html`).

### Deploying to Vercel

1.  Push your code to a GitHub, GitLab, or Bitbucket repository.
2.  Log in to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3.  Import your repository.
4.  Vercel will automatically detect that it's a Vite project. The default build settings (`npm run build` and `dist` output directory) should work out of the box.
5.  Click **Deploy**.

## What is BOS?

(From the landing page copy)
BOS is the central nervous system for your agency, HR team, or ecommerce brand. One automated logic layer that connects your data, decisions, and people to get you out of the chaos and into the clear.
