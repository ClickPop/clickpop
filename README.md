# Handlebars Bootstrap
A bootstrap project for a simple handlebars site.

## Project Setup
### Dependencies
* [Node and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start)

### Getting it Working
All you should have to do is install your NPM stuff (this is going to install Gulp, the Gulp CLI and a bunch of other stuff).

```
$ npm install
```

## Developing
First, to build your project and start watching for changes all you have to do is run the Gulp default task.

```
$ gulp
```

### Project Structure
```
handlbars_bootstrap
├── src
|   ├── img
|   |   └── Put your images here, they'll be copied to dist
|   ├── js
|   |   └── Put your javascript here, it'll be copied to dist
|   ├── pages
|   |   └── These are your page templates. Each file will compiled to dist/*.html
|   ├── partials
|   |   ├── includes
|   |   |   └── Put partials you want to include in templates here, like the nav and footer.
|   |   └── layouts
|   |       └── Put base templates you want pages to use here.
|   └── sass
|       └── This gets compiled into dist/css/*.css
└── dist
    └── These are the files that you should publish as your website!
```

### Adding a new page
The easiest way to add a new page is to copy `src/pages/index.hbs` and make your changes. That template uses the base layout in `src/partials/layouts/base.hbs` which includes:

* Bootstrap CDN links.
* jQuery CDN links.
* A Google Tag Manager placeholder.
* A Google Analytics placeholder.
* Options to set page meta including title, description, and [Open Graph](https://ogp.me/) information.
* I'm sure it has other stuff as well.

