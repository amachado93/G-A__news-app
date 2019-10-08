# Get the News
You're going to build an app that, upon launching, sends an axios request to [the news API](https://newsapi.org/) and renders a list of those stories.

## Getting started
- `Fork` and `clone` this repository and `cd` into it.
- Run `npm i` to ensure your copy has all the necessary dependencies
- Run `npm install axios` to ensure you have axios in your project. Make sure to `import axios from 'axios';` at the top of your `src/App.js` file.
- Visit [the news API](https://newsapi.org/) and sign up to get an API key. The endpoint that you'll be hitting is `https://newsapi.org/v2/top-headlines?sources=${YOUR NEWS SOURCE}&apiKey=${YOUR API KEY}`.
- type `code .` to open the app in VS Code. 

## Header and Footer
Header and Footer components have been created for you, but they're currently blank. Add some JSX to the `return()` methods and style the code with CSS.

## API Call
Check out `src/App.js`. This component needs to make an axios call the moment it mounts. A `ComponentDidMount()` lifecycle method has been provided for you. 

Make an axios call to `https://newsapi.org/v2/top-headlines?sources=${YOUR NEWS SOURCE}&apiKey=${YOUR API KEY}` and use `this.setState` to update the `news` in your app's state. Then, in the return function, use props to pass `this.state.news` to your Articles component.

## Rendering the News
Head over to `src/components/Articles.jsx`, and make sure your Articles component is taking in props. Then, in the Articles coomponent's return function, `.map()` through your articles and print out the following:

- title
- url
- urlToImage
- description

## Style your app
Your final design should look something like this:
![](https://res.cloudinary.com/briandanger/image/upload/v1570551819/screencapture-localhost-3000-2019-10-08-12_22_59_anzmex.png)











