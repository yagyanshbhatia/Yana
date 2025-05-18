## How to Deploy to GitHub Pages

To deploy this website to GitHub Pages, follow these steps:

1. First, make sure you have a GitHub account and have created a repository for your project.

2. Add the GitHub Pages deployment script to your package.json:
   ```json
   "homepage": "https://your-username.github.io/repository-name",
   "scripts": {
     ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   # or
   yarn add --dev gh-pages
   ```

4. Deploy the website by running:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

5. Go to your GitHub repository settings, navigate to Pages, and ensure the site is being built from the gh-pages branch.

Your website will be live at `https://your-username.github.io/repository-name`

## Using Your Logo

To use your YANA logo:

1. Place your logo file in the `/public/images/` directory
2. Update the image paths in the following files to point to your logo:
   - `/src/components/Navbar.js`
   - `/src/components/Footer.js`

Change the image path from `/your-logo.png` to `/images/your-logo-filename.png`