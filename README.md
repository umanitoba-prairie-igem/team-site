# Team Site

## Installation and Running the Project

- Install `npm` using your preferred method.
- In the terminal, `cd` into the project folder and run the following:

```
npm install
npm run serve
```

This runs a hot-reloading web server in your terminal. Go to `localhost:8080` in your browser to see the site.

To fully build the site into HTML for production, use `npm run build`.

## Project Structure

All our source files live in `src`. Here's the structure of that:

```
src/
├── _includes
│   ├── base.html           # The template for every page, written in HTML and LiquidJS
│   ├── footer.html
│   └── navbar.html         # Top of every page, navigation links
├── css
│   ├── style.css           # Right now our only css file
├── index.html              # Landing page, written in HTML and LiquidJS
└── pages                   # Pages listed on landing page
    ├── About.md
    ├── Contact.md
    ├── Resources.md
    └── pages.json          # Adds properties to all pages, used for listing all pages
```

Output from `npm run build` goes into `public/`.
