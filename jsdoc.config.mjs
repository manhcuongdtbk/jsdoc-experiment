/**
 * JSDoc configuration file for better-docs theme.
 * Uses JSDoc 4 features for enhanced documentation.
 */

/** @type {import('jsdoc').Config} */
export default {
  // Source files to include in documentation generation
  source: {
    include: ["main.js"], // List of files or directories to include
    includePattern: ".+\\.js$", // Regex pattern to match all .js files
    excludePattern: "(node_modules/|docs/)" // Exclude node_modules and docs
  },
  // Plugins to use during documentation generation
  plugins: [
    "plugins/markdown", // Enables Markdown support in doc comments
    "plugins/summarize" // Adds a summary of each module/class/function
  ],
  // Main options for JSDoc
  opts: {
    destination: "./docs/", // Output directory for generated documentation
    recurse: true, // Recursively include subdirectories
    readme: "./README.md", // Use README.md as the main landing page
    template: "node_modules/better-docs", // Use better-docs theme for modern UI and search
    private: true, // Parse and include private members (with @private)
    showPrivate: true, // Show private members in the output
    showProtected: true, // Show protected members in the output
    showInternal: true, // Show internal members (with @internal) in the output
    tutorials: "./tutorials", // Directory containing tutorial files
    package: "./package.json", // Path to package.json for project info
    staticFiles: {
      include: ["./static"] // Include static files in the output
    },
    // Add base URL for GitHub Pages
    baseUrl: '/jsdoc-experiment/'
  },
  // Template-specific options
  templates: {
    cleverLinks: true, // Automatically convert URLs in docs to clickable links
    monospaceLinks: true, // Render links in monospace font
    search: true, // Enable the search bar in the better-docs theme
    default: {
      outputSourceFiles: true, // Include links to source files in the docs
      includeDate: false, // Do not include the generation date in the docs
      staticFiles: {
        include: ["./static"] // Include static files in the output
      }
    },
    betterDocs: {
      name: 'Math Utilities Documentation',
      title: 'Math Utilities Documentation',
      hideGenerator: true,
      navigationLinks: [
        {
          label: 'GitHub',
          href: 'https://github.com/manhcuongdtbk/jsdoc-experiment'
        }
      ]
    }
  }
};
