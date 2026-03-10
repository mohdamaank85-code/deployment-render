# Node.js Backend — Auto Deploy on Render

A basic Node.js + Express backend with full CI/CD pipeline.  
Push to `main` → GitHub Actions runs tests → Render auto-deploys. ✅

---

## 🗂 Project Structure

```
node-app/
├── src/
│   ├── app.js          # Express app & routes
│   └── server.js       # Entry point
├── .github/
│   └── workflows/
│       └── ci.yml      # GitHub Actions CI pipeline
├── render.yaml         # Render deploy config
├── package.json
└── .gitignore
```

---

## 🚀 Local Setup

```bash
# Install dependencies
npm install

# Run in dev mode (auto-restarts on file change)
npm run dev

# Run in production mode
npm start
```

API available at: `http://localhost:3000`

---

## 🔁 CI/CD Pipeline Flow

```
You push to GitHub (main branch)
        ↓
GitHub Actions runs (ci.yml)
  → Installs dependencies
  → Runs tests
  → Verifies /health endpoint
        ↓
If all pass → Render detects push
        ↓
Render auto-deploys your app
  → npm install
  → npm start
  → Pings /health to confirm live
        ↓
✅ Your app is live!
```

---

## ☁️ Deploy to Render (One-Time Setup)

1. Push this project to a GitHub repo
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub account & select this repo
4. Render will auto-detect `render.yaml` and configure everything
5. Click **Deploy** — done!

> Every future push to `main` will trigger an automatic re-deploy.

---

## 📡 API Endpoints

| Method | Route         | Description         |
|--------|---------------|---------------------|
| GET    | `/`           | Welcome message     |
| GET    | `/health`     | Health check        |
| GET    | `/api/hello`  | Example API route   |

---

## 🔐 Environment Variables

Set these in Render dashboard under **Environment**:

| Key        | Value        |
|------------|--------------|
| `NODE_ENV` | `production` |
| `PORT`     | `3000`       |
# deployment-render
