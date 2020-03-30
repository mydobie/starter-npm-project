module.exports = {
  'src/**/*.{js,jsx}': [
    (jsFiles) => jsFiles.map((jsFile) => `npm run lint ${jsFile}`), // check files
  ],
  'src/**/*.{scss,css}': [
    (scssFiles) => scssFiles.map((scssFile) => `npm run lint:css ${scssFile}`), // check files
  ],
  'src/**/*.{html,md,json}': [
    (htmlFiles) => htmlFiles.map((htmlFile) => `npm run prettier ${htmlFile}`), // check files
  ],
};
