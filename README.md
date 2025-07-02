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

Automated end-to-end tests are implemented using **Selenium**.  
You can find the test suite in [`main_tests.py`](main_tests.py).

**The suite includes the following tests:**

- **Main page load (`test_main_page`):**  
  Verifies that the main page loads successfully.

- **Category filtering (`test_category_filtering`):**  
  Checks that filtering by category (e.g., "Client Error") works and the filter button is displayed and clickable.

- **Search functionality (`test_search`):**  
  Ensures the search bar is visible and that searching for an error code (e.g., "404") works as expected.

- **Show/hide example & back to home (`test_show_example`):**  
  Clicks on a specific error card (e.g., 403), expands and collapses the example section, and tests the "Back to Home" button.

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

[Elor Itzkovitz](https://github.com/Elor-itz)  
[Yuval Ben Shitrit](https://github.com/yuvalbenshitrit)  
[Noa Gedo](https://github.com/noagedo)  
[Hinoy Solomon](https://github.com/hinoyso)  
