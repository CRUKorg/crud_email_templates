# CRUK Email Templates

The HTML templates for CRUK emails use the ZURB Foundation for Emails framework. The source files are written using the framework's Handlebars template engine and custom markup. The build process aggregates the source files into a single HTML file, translating the custom markup into a table-based layout compatible with most modern email clients. The SASS files are also compiled and translated into inline CSS, leaving just the styles using media queries as a `<style>` block.

**The latest versions of the templates are published to Litmus.**

### MCMP Templates

* [CRUK Campaign](https://litmus.com/builder/6114cbd)
* [CRUK In-Series](https://litmus.com/builder/6b0d08b)
* [CRUK Transactional](https://litmus.com/builder/64fdbc7)
* [CRUK RFL Campaign](https://litmus.com/builder/0de4926)
* [CRUK RFL In-Series](https://litmus.com/builder/8016ed0)
* [CRUK RFL Transactional](https://litmus.com/builder/6392e82)
* [CRUK RFL Transactional - Event registration confirmation](https://litmus.com/builder/8222198)
* [CRUK RFL Schools Campaign](https://litmus.com/builder/6d01e2f)
* [CRUK RFL Schools In-Series](https://litmus.com/builder/db6e565)
* [CRUK RFL Schools Transactional](https://litmus.com/builder/941c1fc)
* [CRUK Bobby Moore Fund Campaign](https://litmus.com/builder/c7394f7)
* [CRUK Bobby Moore Fund Transactional](https://litmus.com/builder/9d98586)
* [SU2C Campaign](https://litmus.com/builder/890ec44)
* [SU2C Transactional](https://litmus.com/builder/2e8de51)

### CCMP Templates

* [CRUK Campaign](https://litmus.com/builder/677040f)
* [CRUK Transactional](https://litmus.com/builder/8581508)
* [CRUK RFL Campaign](https://litmus.com/builder/48d90c0)
* [CRUK RFL Transactional](https://litmus.com/builder/01b415a)
* [CRUK RFL Schools Campaign](https://litmus.com/builder/a83d8e1)
* [CRUK Bobby Moore Fund Campaign](https://litmus.com/builder/6894176)
* [CRUK Bobby Moore Fund Transactional](https://litmus.com/builder/65061df)
* [SU2C Campaign](https://litmus.com/builder/26e7f07)
* [SU2C Transactional](https://litmus.com/builder/8c53026)

**If you want to create your own custom blocks or contribute to the repo, please follow these instructions.**

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

3. Create a feature branch for your changes.

4. Run the following command to compile code and watch for changes.
```bash
npm start
```
This will open a browser with Browsersync showing the result. The browser will auto-update when you edit source files. Assets will be sourced from the local directory `dist/assets/img`.

5. Edit source files in `src/` directory.

6. Commit your changes and push your feature branch to remote. On GitHub create a pull request against the develop branch.

7. When you are ready to publish your changes; upload the images to the mail transfer agent (MTA) and compile source code by running the build command.
```bash
npm run build
```
This will compile image URLs using the baseURL variable to point to images uploaded to the MTA.

8. Copy the HTML from the template files in `dist/` into your MTA.

## Deployment

The templates created by this template builder are designed to be published to [Litmus](https://litmus.com).

Everything particular to your MTA such as resource URL, mirror page link, unsubscribe link and so on are stored as [partials](https://litmus.com/blog/create-and-manage-dynamic-code-blocks-easily-with-partials) in Litmus. You can then enter the Litmus replacement tags as variables in the front matter of your page templates.

Final HTML can then be uploaded to Litmus and published for teams to access.

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
