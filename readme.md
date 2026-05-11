# CDN BaseJS

> Simplifying Database Operations Through RESTful API Calls

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/adityarwt1/CDN-Base)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://cdn-base.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Overview](#overview)
- [Project Vision](#project-vision)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Environment Configuration](#environment-configuration)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview

CDN BaseJS is a revolutionary database interaction platform that eliminates the complexity of traditional database operations. By providing a simple, RESTful API interface, developers can perform complete CRUD (Create, Read, Update, Delete) operations through standard HTTP requests without requiring external libraries, SDKs, or complex integrations.

## Project Vision

### The Problem

Modern database operations often require:
- Installing and managing multiple external dependencies
- Learning database-specific query languages
- Handling complex connection pooling and authentication
- Managing different SDKs for different platforms
- Dealing with version compatibility issues

### Our Solution

CDN BaseJS provides a unified API interface where database operations are as simple as making an HTTP request. Whether you're building a web application, mobile app, or IoT device, if it can make HTTP requests, it can interact with your database.

**Core Principle:** Database operations should be accessible through simple URL calls, eliminating the need for external modules while maintaining security, performance, and scalability.

## Key Features

### Simplicity First
- **Zero Installation Required** - No npm packages, no dependencies to manage
- **URL-Based Operations** - Perform database operations with simple HTTP requests
- **Universal Compatibility** - Works with any platform that supports HTTP
- **No External Modules** - Pure API-driven database interactions

### Performance and Scalability
- **CDN Distribution** - Fast, global content delivery
- **MongoDB Backend** - Scalable NoSQL database infrastructure
- **RESTful Architecture** - Industry-standard API design
- **Optimized Queries** - Efficient database operations

### Developer Experience
- **Intuitive API** - Clean, predictable endpoints
- **Comprehensive Documentation** - Clear examples and use cases
- **Standard HTTP Methods** - GET, POST, PUT, DELETE operations
- **JSON Response Format** - Easy to parse and integrate

## Architecture

### System Design

```
┌─────────────────┐
│   Client Apps   │
│  (Any Platform) │
└────────┬────────┘
         │ HTTP/HTTPS
         ▼
┌─────────────────┐
│   CDN BaseJS    │
│   REST API      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    MongoDB      │
│    Database     │
└─────────────────┘
```

### Request Flow

1. Client makes HTTP request to API endpoint
2. API validates request and authentication
3. Database operation is executed on MongoDB
4. Response is formatted as JSON
5. Result is returned to client

## Technology Stack

### Frontend
- **Framework:** Next.js 15 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **UI Components:** Custom component library

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Express Validator
- **Deployment:** Render / Railway / Heroku

### Development Tools
- **Version Control:** Git
- **Code Quality:** ESLint, Prettier
- **Testing:** Jest, Supertest
- **Documentation:** Swagger/OpenAPI

## Project Structure

```
cdn-base/
│
├── client/                     # Frontend Application
│   ├── app/                   # Next.js App Router
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── robots.ts         # SEO robots configuration
│   │   ├── sitemap.ts        # Dynamic sitemap generation
│   │   └── manifest.ts       # PWA manifest
│   │
│   ├── components/           # React components
│   │   └── UnderDevelopment.jsx
│   │
│   ├── public/               # Static assets
│   │   ├── next.svg
│   │   └── favicon.ico
│   │
│   ├── styles/               # Global styles
│   │   └── globals.css
│   │
│   ├── package.json          # Frontend dependencies
│   ├── next.config.js        # Next.js configuration
│   ├── tsconfig.json         # TypeScript configuration
│   └── tailwind.config.js    # Tailwind CSS configuration
│
├── server/                    # Backend Application
│   ├── src/
│   │   ├── config/           # Configuration files
│   │   │   └── database.js   # MongoDB connection
│   │   │
│   │   ├── models/           # Mongoose models
│   │   │   └── Data.js       # Data schema
│   │   │
│   │   ├── routes/           # API routes
│   │   │   └── api.js        # API endpoints
│   │   │
│   │   ├── controllers/      # Request handlers
│   │   │   └── dataController.js
│   │   │
│   │   ├── middleware/       # Custom middleware
│   │   │   ├── auth.js       # Authentication
│   │   │   └── errorHandler.js
│   │   │
│   │   └── utils/            # Utility functions
│   │       └── validator.js
│   │
│   ├── package.json          # Backend dependencies
│   └── server.js             # Application entry point
│
├── docs/                      # Documentation
│   ├── API.md                # API documentation
│   └── DEPLOYMENT.md         # Deployment guides
│
├── vercel.json               # Vercel configuration
├── .gitignore                # Git ignore rules
├── README.md                 # Project documentation
└── LICENSE                   # MIT License
```

## Getting Started

### Prerequisites

- Node.js version 18.0 or higher
- npm or yarn package manager
- MongoDB instance (local or cloud)
- Git for version control

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/adityarwt1/CDN-Base.git
cd CDN-Base
```

#### 2. Frontend Setup

```bash
cd client
npm install
```

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Start development server:

```bash
npm run dev
```

Frontend will be available at: `http://localhost:3000`

#### 3. Backend Setup

```bash
cd ../server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cdnbasejs
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

Start development server:

```bash
npm run dev
```

Backend API will be available at: `http://localhost:5000`

### Database Setup

#### Local MongoDB

```bash
# Install MongoDB locally
# macOS
brew install mongodb-community

# Ubuntu
sudo apt-get install mongodb

# Start MongoDB service
# macOS
brew services start mongodb-community

# Ubuntu
sudo systemctl start mongodb
```

#### MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add database user
4. Whitelist IP address
5. Get connection string
6. Update `MONGODB_URI` in `.env`

## API Documentation

### Base URL

```
Development: http://localhost:5000/api
Production: https://your-api-domain.com/api
```

### Authentication

All protected endpoints require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Health Check

**GET** `/api/health`

Check API status

**Response:**
```json
{
  "status": "success",
  "message": "API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

#### Get All Data

**GET** `/api/data`

Retrieve all data entries

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)
- `limit` (optional): Items per page (default: 10)
- `sort` (optional): Sort field (default: -createdAt)

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "key": "example_key",
      "value": "example_value",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

#### Get Single Data Entry

**GET** `/api/data/:id`

Retrieve specific data entry by ID

**Response:**
```json
{
  "status": "success",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "key": "example_key",
    "value": "example_value",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### Create Data Entry

**POST** `/api/data`

Create a new data entry

**Request Body:**
```json
{
  "key": "example_key",
  "value": "example_value"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Data created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "key": "example_key",
    "value": "example_value",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### Update Data Entry

**PUT** `/api/data/:id`

Update existing data entry

**Request Body:**
```json
{
  "key": "updated_key",
  "value": "updated_value"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Data updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "key": "updated_key",
    "value": "updated_value",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T11:45:00.000Z"
  }
}
```

#### Delete Data Entry

**DELETE** `/api/data/:id`

Delete data entry

**Response:**
```json
{
  "status": "success",
  "message": "Data deleted successfully"
}
```

### Error Responses

All errors follow this format:

```json
{
  "status": "error",
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

**Common Error Codes:**
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

### Example Usage

#### Using cURL

```bash
# Get all data
curl -X GET http://localhost:5000/api/data

# Create new entry
curl -X POST http://localhost:5000/api/data \
  -H "Content-Type: application/json" \
  -d '{"key": "test", "value": "example"}'

# Update entry
curl -X PUT http://localhost:5000/api/data/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"key": "updated", "value": "new_value"}'

# Delete entry
curl -X DELETE http://localhost:5000/api/data/507f1f77bcf86cd799439011
```

#### Using JavaScript (Fetch API)

```javascript
// Get all data
const response = await fetch('http://localhost:5000/api/data');
const data = await response.json();

// Create new entry
const response = await fetch('http://localhost:5000/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key: 'test',
    value: 'example'
  })
});
const result = await response.json();
```

## Deployment

### Frontend Deployment (Vercel)

#### Method 1: Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your GitHub repository
3. Configure project settings:
   - **Root Directory:** `client`
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
4. Add environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-api.com
   ```
5. Deploy

#### Method 2: Vercel CLI

```bash
cd client
npm install -g vercel
vercel login
vercel --prod
```

### Backend Deployment

#### Option 1: Render

1. Create account at [Render](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variables
6. Deploy

#### Option 2: Railway

1. Create account at [Railway](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Configure root directory: `server`
5. Add environment variables
6. Deploy

#### Option 3: Heroku

```bash
cd server
heroku login
heroku create cdn-basejs-api
git subtree push --prefix server heroku main
```

### MongoDB Deployment

#### MongoDB Atlas (Recommended)

1. Create cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user
3. Whitelist IP addresses (0.0.0.0/0 for all)
4. Get connection string
5. Update environment variable:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/cdnbasejs
   ```

## Environment Configuration

### Frontend Environment Variables

**Development (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Production (Vercel Dashboard):**
```env
NEXT_PUBLIC_API_URL=https://your-backend-api.com
NEXT_PUBLIC_APP_URL=https://your-frontend.vercel.app
```

### Backend Environment Variables

**Development (.env):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cdnbasejs
JWT_SECRET=your_jwt_secret_key_development
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

**Production:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cdnbasejs
JWT_SECRET=your_secure_jwt_secret_key_production
NODE_ENV=production
CORS_ORIGIN=https://your-frontend.vercel.app
```

## Development Guidelines

### Code Style

- Follow ESLint and Prettier configurations
- Use TypeScript for type safety in frontend
- Write meaningful commit messages
- Keep functions small and focused
- Add comments for complex logic

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature description"

# Push to remote
git push origin feature/your-feature-name

# Create pull request on GitHub
```

### Commit Message Convention

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

### Testing

#### Frontend Tests

```bash
cd client
npm run test
npm run test:coverage
```

#### Backend Tests

```bash
cd server
npm run test
npm run test:integration
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## Contributing

We welcome contributions from the community. Please follow these guidelines:

### How to Contribute

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write or update tests
5. Ensure all tests pass
6. Submit a pull request

### Pull Request Process

1. Update README.md with details of changes if needed
2. Update API documentation for endpoint changes
3. Ensure code follows project style guidelines
4. Add tests for new features
5. Request review from maintainers

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## Security

### Reporting Vulnerabilities

If you discover a security vulnerability, please email:
- **Security Contact:** security@cdnbasejs.com (if available)
- **Alternative:** Open a private security advisory on GitHub

### Security Best Practices

- Never commit sensitive data (API keys, passwords)
- Use environment variables for configuration
- Keep dependencies updated
- Follow OWASP security guidelines
- Implement rate limiting on API endpoints

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Aditya Rawat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

**Aditya Rawat**

- **LinkedIn:** [Aditya Rawat](https://www.linkedin.com/in/aditya-rawat-3862182b0/)
- **GitHub:** [@adityarwt1](https://github.com/adityarwt1)
- **Repository:** [CDN-Base](https://github.com/adityarwt1/CDN-Base)

## Acknowledgments

- Inspired by the need for simplified database operations
- Built with modern web technologies
- Thanks to the open-source community for tools and libraries
- Special thanks to all contributors

## Roadmap

### Current Status: Under Development

### Planned Features

**Version 1.0 (Q2 2024)**
- Complete CRUD operations via REST API
- MongoDB integration
- Basic authentication system
- API documentation
- Frontend dashboard

**Version 1.5 (Q3 2024)**
- Advanced query capabilities
- Batch operations support
- Webhook notifications
- API rate limiting
- Enhanced security features

**Version 2.0 (Q4 2024)**
- GraphQL support
- Real-time subscriptions
- Multi-database support
- Advanced analytics
- Enterprise features

## Support

For support and questions:

- **Documentation:** [Read the Docs](https://docs.cdnbasejs.com) (coming soon)
- **Issues:** [GitHub Issues](https://github.com/adityarwt1/CDN-Base/issues)
- **Discussions:** [GitHub Discussions](https://github.com/adityarwt1/CDN-Base/discussions)
- **Email:** support@cdnbasejs.com (if available)

## FAQ

**Q: Do I need to install any packages to use CDN BaseJS?**  
A: No, CDN BaseJS is designed to work with simple HTTP requests. No external packages required.

**Q: What databases are supported?**  
A: Currently, we support MongoDB. Support for other databases is planned for future releases.

**Q: Is CDN BaseJS free to use?**  
A: Yes, CDN BaseJS is open-source and free to use under the MIT License.

**Q: Can I use CDN BaseJS in production?**  
A: The project is currently under development. Production-ready release is planned for Q2 2024.

**Q: How do I report bugs?**  
A: Please open an issue on our [GitHub repository](https://github.com/adityarwt1/CDN-Base/issues).

---

**Built with dedication for developers who value simplicity.**

Last Updated: May 2026