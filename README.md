# Pmsox site - the premiere destination for SOX Testing

You might need to run these commands to ensure compatibility:

1- npm update postcss postcss-safe-parser

2- Set the Node.js Environment Variable
One quick fix is to set an environment variable that tells Node.js to use a legacy provider for cryptographic operations. This can resolve the issue without needing to change Node.js versions. You can set this environment variable directly in your terminal:
export NODE_OPTIONS=--openssl-legacy-provider

3- Then run : npm run start

## Built with

- React
- Material-UI
- theFront UI kit

## Folder Structure

Description of the project files and directories.

```bash
├── public/                    # Where production app builds
├── src/                       # All app source files
│   ├── assets                 # Some css and images
│   ├── components             # Custom components on top of material-ui
│   │   ├── Atoms              # Standalone small components
│   │   ├── Molecules          # Components that rely on other components
│   │   ├── Organisms          # Big components with multiple smaller ones
│   ├── layouts                # The layouts
│   │   ├── Main               # The main layout
│   ├── theme                  # Color palette for light and dark themes
│   ├── views                  # All the pages in the template
│   ├── App.js                 # Main App.js file
│   ├── index.js               # Main index.js
│   ├── Routes.js              # Uses react router to set all routes for app
│   ├── serviceWorker.js       # Optional file for service workers
│   ├── WithLayout.js          # Theme and layout toggler
├── .env                       # Defines any env variables
├── .gitignore                 # Files ignored by git
├── .prettierrc                # Prettier configuration
├── package.json               # Dependencies and additional information
├── package-lock.json          # Package lockfile (ignore)
├── README.md
```
