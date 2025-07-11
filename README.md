# FinXpert - Financial Expert Application

A modern React + TypeScript + Vite application for financial insights and analysis.

## 🚀 Features

- Modern React 19 with TypeScript
- Vite for fast development and building
- TailwindCSS for styling
- Financial dashboard with interactive charts
- User authentication and survey system
- Responsive design with mobile support

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Docker (for containerization)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker Deployment

### Building and Running with Docker

```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run
```

The application will be available at `http://localhost:3000`

### Using Docker Compose

```bash
# Start with docker-compose
npm run docker:compose

# Stop containers
npm run docker:compose:down
```

### Push to Docker Hub

1. **Login to Docker Hub:**
   ```bash
   docker login
   ```

2. **Use the deployment script:**
   ```bash
   ./deploy.sh [tag]
   ```

3. **Or manually:**
   ```bash
   # Build image
   docker build -t finxpert-app .
   
   # Tag for Docker Hub (replace 'yourusername' with your Docker Hub username)
   docker tag finxpert-app yourusername/finxpert-app:latest
   
   # Push to Docker Hub
   docker push yourusername/finxpert-app:latest
   ```

### Pull and Run from Docker Hub

```bash
# Pull from Docker Hub
docker pull yourusername/finxpert-app:latest

# Run the container
docker run -p 3000:80 yourusername/finxpert-app:latest
```

## 📁 Project Structure

```
fin-expert/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Application pages
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Page layouts
│   ├── store/         # State management
│   └── assets/        # Static assets
├── public/            # Public assets
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose configuration
└── deploy.sh         # Deployment script
```

## 🔧 Configuration Files

- `Dockerfile` - Multi-stage Docker build configuration
- `nginx.conf` - Nginx configuration for production
- `.dockerignore` - Files to ignore in Docker builds
- `docker-compose.yml` - Local development with Docker
- `deploy.sh` - Automated deployment script

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
