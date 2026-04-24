# Heritage Lux - Execution Guide

This guide provides instructions on how to run the Heritage Lux ecommerce application on your server.

## Prerequisites

- **.NET 10 SDK**: Required to build and run the backend.
- **Node.js (v18+)**: Required to build the frontend.
- **npm**: Package manager for frontend dependencies.

---

## 1. Running the Backend (.NET Web API)

The backend is located in the `backend/HeritageLux.Api/HeritageLux.Api/` directory.

### Development Mode
```bash
cd backend/HeritageLux.Api/HeritageLux.Api/
dotnet run --urls "http://localhost:5000"
```

### Production Deployment
To prepare the backend for production, use the `publish` command:
```bash
cd backend/HeritageLux.Api/HeritageLux.Api/
dotnet publish -c Release -o ./publish
```
Then run the executable from the `publish` folder:
```bash
./publish/HeritageLux.Api --urls "http://0.0.0.0:5000"
```

---

## 2. Running the Frontend (React + Vite)

The frontend is located in the root directory.

### Install Dependencies
```bash
npm install
```

### Configuration
Create a `.env` file in the root directory to point the frontend to your backend API:
```env
VITE_API_BASE_URL=http://your-server-ip:5000/api
```

### Build for Production
```bash
npm run build
```
This will generate a `dist/` folder.

### Serving the Frontend
You can serve the `dist/` folder using any static file server (e.g., Nginx, Apache, or `serve`):

#### Using Nginx (Recommended)
Example Nginx configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/heritage-lux/dist;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000/api/;
    }
}
```

#### Using `serve` (Simple)
```bash
npx serve -s dist -l 4173
```

---

## 3. Verified Endpoints

Once running, you can verify the integration:
- **Frontend**: `http://localhost:4173` (or your configured port)
- **API Health Check**: `curl http://localhost:5000/api/products`
