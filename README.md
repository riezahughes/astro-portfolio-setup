# New Astro Project

Originally supposed to be a portfolio site, i've decided to use this as a bigger project to show my abilities at problem solving, thinking outside the box and practical capabilities.

A few key features this website will have:

- The ability to deploy using a headerless CMS.
- Entire site's html and css will be under 1MB in size (to show an "edge" example.)
- The entire frontend Will be generated using Astro and React Components.
- This entire site will lead to a seperate repo for the actual application.
- The ability to quickly scaffold files and folders as needed
- Full Story capabilities so if needed you can look over each individual component
- and lots, lots more.

A few key features of this repo:

- Husky Pre commits
- ts-jest configuration
- github action runners for all tests
- eslint and prettier support
- [vitebook](https://vitebook.dev/) added to the project to try out something that's lighter/different than storybook.
- Astro (a given)
- Template Generator (Ironically, templated atm)
- PM2 capabilities for running both vitebook and the astro project in a single command. (To be done)


I'm hoping to push this into a genuine legitimate looking project page, so i can focus on the application itself.

--------------astro default garbage i'll be keeping here for now.

# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
