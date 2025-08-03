# Oopsify

Oopsify is a web app for exploring and simulating HTTP error codes, built to demonstrate DevOps automation and modern frontend practices.  
It features a responsive React UI, automated testing with Selenium, containerization with Docker, orchestration with Docker Compose, infrastructure provisioning with Ansible, and CI/CD pipelines using GitHub Actions.
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
- [Python](https://www.python.org/) (v3.9 or newer recommended, for running tests)

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

* You will need to install the requirements with `pip install -r requirements.txt`

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

### Continuous Integration & Delivery

- **GitHub Actions** automatically build and push the Docker image to Docker Hub on every push to the `main` branch.
- See [`.github/workflows/main.yml`](.github/workflows/main.yml) and [`.github/workflows/npm-grunt.yml`](.github/workflows/npm-grunt.yml).

### Automated Deployment

- On every push to the `deployment` branch, GitHub Actions runs [`.github/workflows/deployment.yml`](.github/workflows/deployment.yml):
  - Provisions an AWS EC2 server using Ansible.
  - Installs Docker and Docker Compose.
  - Clones the latest app code.
  - Builds and runs the app using Docker Compose.
  - Uses secrets for AWS credentials and SSH keys.

**To deploy:**
- Push to the `deployment` branch to trigger full server provisioning and deployment.

**To update the Docker image:**
- Push to the `main` branch to build and publish the latest image to Docker Hub.

## Project Structure

```
src/
  App.tsx                # Main app component
  components/            # Reusable UI components
  data/
    errors.ts            # Error info and list
  styles/                # App & component styles
main_tests.py            # Selenium end-to-end test suite
Dockerfile               # Docker build instructions
docker-compose.yml       # Multi-container orchestration
ansible/
  deploy_server_app.yml  # Ansible playbook for server provisioning & deployment
.github/
  workflows/
    main.yml             # CI/CD workflow for building & testing
    npm-grunt.yml        # CI/CD workflow for Docker image build/push
    deployment.yml       # Automated deployment workflow
README.md                # Project documentation
```

## Authors

[Elor Itzkovitz](https://github.com/eloritzkovitz)  
[Yuval Ben Shitrit](https://github.com/yuvalbenshitrit)  
[Noa Gedo](https://github.com/noagedo)  
[Hinoy Solomon](https://github.com/hinoyso)  
