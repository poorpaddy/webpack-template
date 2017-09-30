# Webpack Reactjs Template

## Getting Started

### Setting up NPM

### Installing Project Dependencies

Running the below shell script will install all dependencies and build the initial JavaScript files.

```bash
npm install
```

> Note: This should be run **every time you pull changes** from git. The dependencies may change and there is no automatic process in place to update them.

### Starting a Local Development Server

Once dependencies are installed, a development server can be launched with the following shell script. It will watch for changes to files in the `src/` folder.

```bash
npm run dev 
```
In case you got this Error: listen EACCES 127.0.0.1:443, please run under user 'sudo'
```bash
sudo npm run dev
```

Once app started, you will be able to access the app at https://localhost

### Starting a Production Server

```bash
npm run production
```

## Running Tests

```bash
npm run test
```
