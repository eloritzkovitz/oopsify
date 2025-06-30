# Oopsify

Oopsify is a simple, interactive React app for simulating and learning about common HTTP error messages.  
This project was developed as a DevOps final project and demonstrates modern DevOps practices alongside frontend development.  
Built with React, TypeScript, and Vite.

## Features

- Browse a grid of common HTTP error codes (e.g., 404, 500, 401, etc.)
- Filter errors by category (Client Error, Server Error, Other)
- Search errors by code or title
- Click any error to view a simulated error page with code, title, and description
- Expandable section with realistic HTTP request/response examples
- Clean, modern, responsive, and accessible UI

## Deployment

The production deployment will run on an AWS EC2 server, provisioned and configured using various DevOps tools:
- **Ansible** for automated provisioning and configuration
- **Docker Compose** for multi-container orchestration and **Docker Hub** for image hosting
- **Selenium** for end-to-end testing
- **GitHub Actions** for CI/CD automation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
git clone https://github.com/Elor-Itz/oopsify.git
cd oopsify
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Testing

Will be added in the future.

## Deployment & CI/CD

Will be added in the future.

## Project Structure

```
src/
  App.tsx                # Main app component
  components/
    CategoryFilter.tsx   # Category filter buttons
    ErrorGrid.tsx        # Error grid display
    ErrorCard.tsx        # Single error card
    ErrorPage.tsx        # Error details page
    SearchBar.tsx        # Search input    
  data/
    errors.ts            # Error info and list
  styles/                # App & component styles    
  ...
```

## Authors

Elor Itzkovitz  
Yuval Ben Shitrit  
Noa Gedo  
Hinoy Solomon  
