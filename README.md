# Team Site

## Installation and Running the Project

- Install `npm` using your preferred method (requires Node version > 14)
- In the terminal, `cd` into the project folder and run the following:

```
npm install
npm run dev
```

This installs all dependencies and runs a hot-reloading web server in your terminal. Go to `localhost:8080` in your browser to see the site.

To run the development server, use just `npm run dev`. To fully build the site into HTML for production, use `npm run build`. To see all project scripts, use `npm run`.

Output from `npm run build` goes into `public/`.

## Project Structure

All our source files live in `src`. Here's the structure of that:

```
src
├── index.html          # main page
├── _includes
│   ├── base.html       # template of main page
│   └── footer.html
├── assets              # images
│   ├── ...
├── css
│   └── style.css       # custom css file
└── pages
    ├── ...             # content of each section of main page
```
