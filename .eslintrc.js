module.exports =  {
  parser:  'babel-eslint',  // Specifies the ESLint parser
  extends:  [
    'airbnb',
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    'jest'
  ],
  parserOptions:  {
  ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
  sourceType:  'module',  // Allows for the use of imports
  ecmaFeatures:  {
    jsx:  true,  // Allows for the parsing of JSX
  },
  },
  rules:  {
    'no-console': 'error',
    'no-alert': 'error',
    'require-jsdoc': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/static-property-placement': 'off', // Allows PropTypes to be at the top of the file 
    'react/jsx-props-no-spreading': 'off', 
    'react/no-unused-state': 'off', // allows for this.setState({ [key]: value })
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  }
};