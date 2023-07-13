# Team Site

## Installation and Running the Project

- Install `npm` using your preferred method (requires Node version > 14)
- In the terminal, `cd` into the project folder and run the following:

```
npm install
npm run serve
```

This installs all dependencies and runs a hot-reloading web server in your terminal. Go to `localhost:8080` in your browser to see the site.

To run the development server, use just `npm run serve`. To fully build the site into HTML for production, use `npm run build`. To see all project scripts, use `npm run`.

`npm run serve` also runs the TailwindCSS CLI in watch mode, which means Tailwind classes work properly in development. You'll see Tailwind updating the built CSS as you work, since Tailwind only injects the classes we use and leaves out the rest.

## Project Structure

All our source files live in `src`. Here's the structure of that:

```
src
├── _includes
│   ├── base.html               # base template for all pages
│   └── footer.html
├── assets                      # images go in this folder
│   └── prairie-igem-logo.png
├── css
│   ├── style.css
│   └── tailwind.css
├── index.md                    # main landing page
└── pages                       # all other pages go in this folder
    ├── About.md
    ├── Contact.md
    ├── Resources.md
    └── pages.json

5 directories, 10 files

```

Output from `npm run build` goes into `public/`.
