module.exports = {
  'src/**/*.{js,jsx}': [
    (jsFiles) => jsFiles.map((jsFile) => `npm run lint:fix ${jsFile}`),
    'git add',
  ],
  'src/**/*.{scss,css}': [
    (scssFiles) =>
      scssFiles.map((scssFile) => `npm run lint:css:fix ${scssFile}`),
    'git add',
  ],
  'src/**/*.{html,md,json}': [
    (htmlFiles) =>
      htmlFiles.map((htmlFile) => `npm run prettier:fix ${htmlFile}`), // check files
    'git add',
  ],
};
