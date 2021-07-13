# Udacity Image Precessing Api
Udacity fullstack nanodegree


## Setup project
 - Clone the repository and install npm dependencies 
 - `npm install` to install dependencies 
 - `npm run test` to run the jasmin tests
 - `npm run lint` - script runs eslint with prettier plugin
 - `npm run build` - script compiles typescript files from ./src to js in ./dist
 - `npm run start-dev` - script runs nodemon on src/index.ts file for development
 - `npm run start` - script runs node using ./dist/index.js file
## Set up a project structure that promotes scalability

- Source code is in ./src folder, compiled code is in ./dist folder
- Tests are in ./src/tests
- Separated modules `getCache` and `createThumbImage` created for image processing and caching

## How to use it

after running `npm run start:dev` to start a local server in  your computer, then you can open a browser and navigate to:
 - `http://localhost:3000/` root of the api
 - `http://localhost:3000/api/image/?name=palmtunnel.jpg&width=300&height=400`
 - `http://localhost:3000/api/image/?name=fjord.jpg&width=500&height=500`

## Available Image name options
encenadaport
fjord
icelandwaterfall
palmtunnel
santamonica

##  Using Express endpoints
* '/' route respond with a text to confirm express is running correctly
* '/api/image' route with url query strings for name, width, and height will process the image. Eg. '/api/images?name=fjord.jpg&width=500&height=500'

### Middleware
- used multiple custom middleware - validCheck to check for valid filename and query parameters, imgSharp to process image.
- validCheck middleware returns errors if query parameters are missing or the filename is invalid

### Automated Test with Jasmine and Supertest
 Tests for `getCache` and `createThumbImage` helpers + test for API endpoint

## Functionality
- User can query endpoint using various params and queries to retrive an image with a specified `name`, `height` and `width`.
- The default `height` and `width` is set to `200px`.
- The images requested will be saved on the server disk.
- There is a cache layer. If a user requests an image size that has already been requested, then the previously resized image will be returned.