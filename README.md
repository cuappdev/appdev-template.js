# AppDev JavaScript Backend Template

This is a template for writing AppDev backends in JavaScript. We use ES6+ syntax and Flow to take advantage of modern JavaScript abstractions and strong typing. It includes a simple API with a "hello, world!" endpoint.

We use Babel and Webpack to bundle our code from ES6+ and Flow syntax to ES5. We also use Flow to typecheck our code.

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