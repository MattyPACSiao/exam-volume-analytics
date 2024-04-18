const Chart = require('chart.js/auto');

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
```
Create a class for each shift
create a class for a chart that has a function that sorts by shift
every time a chart instance is created, it is fed exam data
```

// To use CommonJS modules in a web browser, you'll need to employ a module bundler or a tool that can handle CommonJS modules and bundle them into a format that browsers understand, such as JavaScript files that can be loaded via <script> tags.

// Here's a general outline of how you can achieve this:

// Setup Node.js Environment:
// Ensure you have Node.js installed on your system.
// Create Your CommonJS Modules:
// Write your JavaScript code using CommonJS module syntax (require and module.exports).
// Install a Module Bundler:
// Use a module bundler like Browserify or Webpack. These tools can analyze your code, resolve dependencies, and bundle everything into a single JavaScript file.
// Browserify: Browserify allows you to bundle CommonJS modules for the browser.
// bash
// Copy code
// npm install -g browserify
// Webpack: Webpack is a more versatile tool that can handle various module formats, including CommonJS.
// bash
// Copy code
// npm install -g webpack webpack-cli
// Bundle Your Modules:
// Run the bundler on your entry file (the file that imports your CommonJS modules) to create a bundled JavaScript file.
// Browserify:
// bash
// Copy code
// browserify entry.js -o bundle.js
// Webpack:
// Create a webpack configuration file (webpack.config.js) with appropriate settings, and then run:
// bash
// Copy code
// webpack
// Include the Bundle in Your HTML:
// Include the bundled JavaScript file (bundle.js) in your HTML file using a <script> tag.
// Serve Your HTML File:
// You can use a local server (e.g., http-server) to serve your HTML file to avoid CORS issues and ensure that the bundled JavaScript file is loaded correctly.
// Once these steps are complete, your CommonJS modules should be usable in a web browser. The bundler will take care of resolving dependencies and ensuring that the code is packaged in a way that the browser can understand.