This is the source code for my personal site. It's made with HTML, JS, and SCSS

## Credits
- Boilerplate: [static-html-webpack-boilerplate](https://github.com/erickzhao/static-html-webpack-boilerplate) by @ericzhao
- Design Inspiration: [@dhruvkb](https://github.com/dhruvkb) and [@cassidoo](https://github.com/cassidoo)'s personal sites
- Colors: [solarized](https://ethanschoonover.com/solarized/)

## Usage
- Available commands:
  - `npm run start:dev`: Run webpack-dev-server at `localhost:9000`. Includes live reloading on any Javascript/SCSS/HTML changes.
  - `npm run build`: Build files to the `docs` folder. Transpiles down to ES5 and bundles all JS into `app.bundle.js`. Transpiles SCSS to CSS and adds prefixing into `style.bundle.css`. Copies static assets and HTML over, and bundled CSS and JS gets added to HTML file.
  - `npm start`. Builds files and runs a local production server on `localhost:8080` with http-server.
