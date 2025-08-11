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
- Automated tests are run on every push and pull request using workflows.

### Automated Deployment

- **Server provisioning** is handled with Ansible (`ansible/deploy_server_app.yml`), which:
  - Provisions and configures an AWS EC2 server from scratch.
  - Installs Docker and Docker Compose.
  - Prepares the environment for deployment.
- **Application deployment** is completed by the GitHub Actions workflow:
  - On every push to the `main` branch, the workflow builds and pushes the latest Docker image to Docker Hub.
  - The server (once provisioned) can then pull and run the latest image using Docker Compose.
  - Secrets for AWS credentials, Docker Hub, and SSH keys are managed via GitHub repository secrets.

**To update the Docker image:**
- Push to the `main` branch to build and publish the latest image to Docker Hub.

## Project Structure

```
src/ 
  App.tsx                    # Main app component
  components/                # Reusable UI components
  data/
    errors.ts                # Error info and list
  styles/                    # App & component styles
main_tests.py                # Selenium end-to-end test suite
Dockerfile                   # Docker build instructions
docker-compose.yml           # Multi-container orchestration
ansible/
  deploy_server_app.yml      # Ansible playbook for server provisioning & deployment
.github/
  workflows/
    main.yml                 # CI/CD workflow for building & deploying   
    test_oopsify_docker.yml  # Docker end-to-end test workflow
README.md                    # Project documentation
```

## Authors

[Elor Itzkovitz](https://github.com/eloritzkovitz)  
[Yuval Ben Shitrit](https://github.com/yuvalbenshitrit)  
[Noa Gedo](https://github.com/noagedo)  
[Hinoy Solomon](https://github.com/hinoyso)  
