# CRUK Email Templates

The HTML templates for CRUK emails use the ZURB Foundation for Emails framework. The sources files are written using the framework's Handlebars template engine and custom markup. The build process aggregates the source files into a single HTML file, translating the custom markup into a table-based layout compatible with most modern email clients. The SASS files are also compiled and translated into inline CSS, leaving just the styles using media queries as a `<style>` block.

**Compiled HTML, ready for production, is available from the dist directory on the master branch. You only need the instructions below if you want to create your own custom blocks or contribute to the repo.**

## Installing and compiling

## Dependencies

* [Node.js](https://nodejs.org/en/) via [NVM](https://github.com/creationix/nvm).
* [NPM](https://www.npmjs.com/) for Node.js package management.

## Installation

1. Clone the repository
```bash
git clone git@github.com:CRUKorg/cruk_email_templates.git
```

2. Run the install
```bash
npm install
```

3. Compile source code
```bash
npm run build
```
This will open a browser with Browsersync showing the result. The browser will auto-update when you edit source files.

4. Edit source files in `cruk_email_templates/src/` directory

5. Copy the template files from `cruk_email_templates/dist/` into your MTA.

## Resources

* [Foundation for Emails documentation](http://foundation.zurb.com/emails/docs/)
* [Foundation for Emails GitHub repo](https://github.com/zurb/foundation-emails)

## Package features

It has a Gulp-powered build system with these features:

- Handlebars HTML templates with [Panini](http://github.com/zurb/panini)
- Simplified HTML email syntax with [Inky](http://github.com/zurb/inky)
- Sass compilation
- Image compression
- Built-in BrowserSync server
- Full email inlining process
