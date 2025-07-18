# Portfolio site

A personal portfolio site built with React to showcase my projects, skills, experience, and contact information.

## Demo

The site is live at [this link](https://josh-mock.com).

## Cloning the site

```bash
git clone https://github.com/josh-mock/portfolio-site

cd portfolio-site

npm install

npm run dev
```

## Tech Stack

**Client:** React 19, React Router, React Hook Form, Yup, Font Awesome, CSS3.

**Build:** Vite, Node.

**Deployment:** Netlify.

## Features

- Light/dark mode toggle.
- Responsive sizing including mobile friendly navigation.
- Button animations.
- Contact form with validation.
- Lazy media loading.
- Downloadable resume.
- Links to live demos and GitHub repositories for each project.
- Accessible design.

## Project structure

```
portfolio-site/
├── public/
│   ├── favicon/         # Favicons for various platforms
│   ├── assets/          # Generic assets 
│   └── projects/        # Project specific assets           
├── src/
│   ├── components/      # Reusable UI components
│   ├── constants/       # Constant values
│   ├── data/            # Project data and metadata
│   ├── pages/           # Route-level components
│   ├── styles/          # Global CSS files and resets
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # App entry point
├── index.html           # HTML entry point (used by Vite)
└── README.md            # Project documentation
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

Design inspired by [Slaying The Dragon](https://www.youtube.com/watch?v=dLDn_k8GmaU&ab_channel=SlayingTheDragon).
