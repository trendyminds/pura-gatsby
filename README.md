# 💧 Pura Gatsby
A Gatsby starter kit inspired by [Pura](https://github.com/trendyminds/pura)

## ⭐️ Requirements
Node 12.11.0 (use [nvm](https://github.com/creationix/nvm) to manage your Node versions!)

## 📊 Browser support
This project supports the following browsers: Chrome, Firefox, Safari and Edge

## 🛠 Setting up
1. Clone/download to your machine
2. Run `npm i` to install dependencies

## ⚛️ Why Gatsby?
Gatsby is an "open source framework based on React that helps developers build blazing fast websites and apps". The Gatsby platform provides a number of benefits that [Pura](https://github.com/trendyminds/pura) is unable to offer:

- Maintained by a large community of developers. When Gatsby improves, so will Pura.
- [Automatic JS polyfills](https://www.gatsbyjs.org/docs/browser-support/#polyfills) when you use something like `[].includes` Gatsby is smart enough to include those polyfills for you.
- [Critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) is automatically generated for you
- [CSS Modules](https://www.gatsbyjs.org/docs/css-modules/) are available out-of-the box. This allows your CSS to be automatically scoped for your components
- [Sophisticated code splitting](https://www.gatsbyjs.org/docs/how-code-splitting-works/) Not using a particular component or JS library on a page? Gatsby will only deliver the CSS and JS you're using
- Your site has [PWA support](https://www.gatsbyjs.org/docs/progressive-web-app/) without any complex configurations
- A built-in templating language in React. Because Gatsby uses React you have the ability to use a templating system without reaching for something like Twig, Pug, HAML or another library.
- Built-in routing without needing to reach for a service like Express.js
- A [GraphQL data layer](https://www.gatsbyjs.org/docs/graphql-concepts/) when you want to introduce data into your website. You can pull in data from a [REST API](https://www.gatsbyjs.org/docs/sourcing-from-private-apis/), [Markdown files](https://www.gatsbyjs.com/guides/markdown/), [another GraphQL service](https://www.gatsbyjs.org/packages/gatsby-source-graphql/), [Wordpress](https://www.gatsbyjs.org/docs/sourcing-from-wordpress/), [Contentful](https://www.gatsbyjs.org/docs/sourcing-from-contentful/), [JSON/YAML](https://www.gatsbyjs.org/docs/sourcing-content-from-json-or-yaml/) and much more

## 📦 Deploying
To deploy your site, simply run `gatsby build` and deploy the `public/` folder to your web server.

## ✅ Tasks
| Task              | Description                                      |
|:------------------|:-------------------------------------------------|
| `gatsby develop`  | Runs a local setup for your project              |
| `gatsby build`    | Builds your site into the `public/` directory    |
| `gatsby serve`    | Serves your site out of the `public/` directory  |
