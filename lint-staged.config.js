module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.(ts|tsx)?(x)': () => 'yarn check-types',

  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|tsx|js)?(x)': (filenames) => [
    `yarn check-lint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
