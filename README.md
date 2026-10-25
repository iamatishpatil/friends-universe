# Friends Universe Private Limited — Corporate Website

Official corporate website and product portal for **Friends Universe Private Limited**, an independent software company based in Bengaluru, Karnataka, India.

This portal showcases our company, our digital engineering capabilities, and our upcoming flagship mobile platform, **inbbl**. It also serves as our official support and compliance portal for Apple App Store and Google Play Store verification.

---

## 🚀 Key Features & Highlights

- **Corporate IT Presentation**: Clean, executive "bookend" design system (deep obsidian `#0B0F19` framing, cobalt blue accents, and readable corporate light canvas).
- **Featured Product Showcase — inbbl**: Comprehensive overview of our upcoming voice and casual connection mobile application for iOS and Android.
- **Store & Legal Compliance**:
  - **Support URL** (`/support`): Searchable knowledge base and direct inquiry form.
  - **Privacy Policy** (`/privacy-policy`): Human-written, transparent policy naming `inbbl` and `Friends Universe Private Limited`.
  - **Terms of Service** (`/terms`): Community guidelines, intellectual property, and Bengaluru jurisdiction.
  - **Account & Data Deletion** (`/delete-account`): Meets Apple Guideline 5.1.1(v) & Google Play Store requirements with in-app deletion walkthrough and web deletion request.
- **Client-Side SPA Routing & Free Hosting Ready**: Pre-configured with `_redirects` (Netlify, Cloudflare Pages) and `vercel.json` (Vercel) to ensure direct route visits (`/about`, `/support`, etc.) resolve cleanly with zero 404s.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with structured design tokens and zero heavy UI framework overhead
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Inter*)

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iamatishpatil/friends-universe.git
   cd friends-universe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled bundle will be generated in `dist/`.

---

## 🌐 Deployment to Free Hosting Platforms

- **Vercel**: Import the GitHub repository; Vercel automatically detects Vite and uses [`vercel.json`](./vercel.json) for client-side routing.
- **Netlify**: Connect repository and set build command to `npm run build` and publish directory to `dist`. Uses [`public/_redirects`](./public/_redirects).
- **Cloudflare Pages**: Connect repository, framework preset: `Vite`, build command: `npm run build`, output: `dist`.

---

## 📄 License & Ownership

© 2026 Friends Universe Private Limited. All rights reserved. Registered in Bengaluru, Karnataka, India.
