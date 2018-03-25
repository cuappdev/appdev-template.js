# AppDev JavaScript Backend Template

This is a template for writing AppDev backends in JavaScript. It uses the following technologies

1. Babel - a transpiler from ES6+ modern JavaScript syntax back to ES5 "classic" syntax
2. Flow - a static typing system and type checker developed by Facebook
3. Jest - a testing framework for JavaScript

It includes a simple "hello, world!" router as a base.

## Build

To build, run the following:
```
npm install
```

## Tools

The template provides a few built-in NPM scripts to use during development.

To run the code:
```
npm start
```

To build without running:
```
npm run build
```

To run the Flow server and check for errors:
```
npm run flow
```
And to stop the Flow server:
```
npm run flow-stop
```

To run tests written using Jest:
```
npm test
```