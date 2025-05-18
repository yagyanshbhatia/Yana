# YANA Health Scans & Labs Website

This repository contains the source code for the YANA (You Are Not Alone) Health Scans & Labs website, a radiology center offering ultrasound, X-ray, MRI, and CT scanning services.

## Table of Contents

- [Features](#features)
- [Running Locally](#running-locally)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Customizing Content](#customizing-content)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- Responsive design for mobile, tablet, and desktop views
- Orange-themed warm and friendly UI
- 7 pages: Home, About Us, Services, FAQ, Contact, Book Consultation, and Blog
- Working contact form
- Dummy Calendly integration for appointment scheduling
- Sample staff profiles and testimonials

## Running Locally

To run this website locally:

1. Clone the repository
   ```
   git clone https://github.com/your-username/yana-health-website.git
   cd yana-health-website
   ```

2. Install dependencies
   ```
   cd frontend
   yarn install
   ```

3. Start the development server
   ```
   yarn start
   ```

4. Visit `http://localhost:3000` in your browser

## Deployment to GitHub Pages

To deploy this website to GitHub Pages:

1. Create a GitHub repository for your website

2. Add the GitHub Pages deployment script to `package.json`:
   ```
   "homepage": "https://your-username.github.io/repository-name",
   "scripts": {
     ...
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Install the `gh-pages` package:
   ```
   yarn add --dev gh-pages
   ```

4. Deploy your site:
   ```
   yarn deploy
   ```

5. Set up GitHub Pages in your repository settings:
   - Go to your GitHub repository
   - Click on "Settings"
   - Navigate to "Pages" in the sidebar
   - Under "Source", select the branch where your built website is located (usually `gh-pages`)
   - Click "Save"

6. Your website will be available at `https://your-username.github.io/repository-name`

### Alternative Method (GitHub Actions)

For a more automated approach:

1. Create a `.github/workflows/deploy.yml` file in your repository with the following content:
   ```yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v2

         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '16'

         - name: Install dependencies
           run: |
             cd frontend
             yarn install

         - name: Build
           run: |
             cd frontend
             yarn build

         - name: Deploy
           uses: JamesIves/github-pages-deploy-action@4.1.4
           with:
             branch: gh-pages
             folder: frontend/build
   ```

2. Push changes to your main branch, and GitHub Actions will automatically build and deploy your site

## Customizing Content

### Replacing the Logo

To replace the placeholder logo with your actual YANA logo:

1. Add your logo image to `/frontend/public/images/`
2. Update the image path in the Navbar and Footer components:
   - Edit `/frontend/src/components/Navbar.js`
   - Edit `/frontend/src/components/Footer.js`

### Updating Calendly Link

To replace the dummy Calendly link with your actual scheduling link:

1. Edit `/frontend/src/pages/Book.js`
2. Find the iframe with the dummy URL
3. Replace `https://calendly.com/d/dummy-calendly-link/radiology-consultation` with your actual Calendly URL

### Updating Content

The website is built with React components. To update content:

- Text content can be modified in the respective page components in `/frontend/src/pages/`
- Staff information and testimonials can be updated in `/frontend/src/pages/About.js` and `/frontend/src/pages/Home.js`
- Service details can be modified in `/frontend/src/pages/Services.js`
- FAQs can be edited in `/frontend/src/pages/FAQ.js`
- Contact information can be updated in `/frontend/src/components/Footer.js` and `/frontend/src/pages/Contact.js`

## Project Structure

```
frontend/
├── public/             # Static assets and HTML template
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.js   # Navigation bar component
│   │   ├── Footer.js   # Footer component
│   │   └── ...         # Other components
│   ├── pages/          # Page components
│   │   ├── Home.js     # Homepage
│   │   ├── About.js    # About page
│   │   └── ...         # Other pages
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── ...             # Other files
└── package.json        # Project dependencies and scripts
```

## Technologies Used

- React 19
- React Router for navigation
- Tailwind CSS for styling
- Font Awesome for icons
