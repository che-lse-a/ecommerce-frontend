# Ecommerce Tailwind Frontend

This is a modern Tailwind-based frontend with 20 demo products.
It is preconfigured to use local sample data but will respect VITE_API_URL if you want to fetch from your backend.

## Setup
1. Install dependencies:
```bash
npm install
```

2. (Optional) Build tailwind (postinstall runs it automatically). If not, run:
```bash
npx tailwindcss -i ./src/index.css -o ./src/tailwind.css --minify
```

3. Run dev server:
```bash
npm run dev
```

4. Create `.env.local` if you want to use your backend:
```
VITE_API_URL=https://ecommerce-backend-mj06.onrender.com
```

5. Build for production:
```bash
npm run build
```
6. https://ecommerce-frontend-ydsj.vercel.app/

Deploy to Vercel: push to GitHub and import. Set `VITE_API_URL` in project env if you want to use your actual backend.
