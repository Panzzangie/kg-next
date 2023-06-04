## Running the KG website locally

This app is build in React and can be run locally with a node.js server.

Prerequisites:

- Node.js
- npm

These can, and should both be managed through the [Node Version Manager](https://github.com/nvm-sh/nvm)
For Win10, follow instructions in this [tutorial](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/) to get both running.

Once both npm and node.js have been installed, open a terminal window in the root of the project and install all the dependencies by running `npm install`. The website can then be deployed locally by running the `npm run dev` command. Once built, the website will be available on [http://localhost:3000](http://localhost:3000).

## Things to know in editing the website

Current techstack of the website is a relatively straight forward only really using Next.js/React app with TypeScript.

[MUI](https://mui.com) component library based on Material Design is also installed for styled button components etc. Colour theming is to be decided on at a later time. We can also opt to handcraft needed components since so far at least there aren't many, but for now MUI does the job. (Need a button? They've got you covered.)

### Next.js Routing

Using Next.js 13 for routing means the folder structure of the app defines the routing and it means that you'll see many files titled page.tsx. Each folder under `app` creates a route automatically that seeks to render the `page.tsx` directly under it. Nested folders under behave the same way.

Each raid/dungeon/etc. that will use the same template across multiple options will rely on a dynamic route defined with a folder name enclosed in [], such as `[raid]` where the raid name will be dynamically filled into the url and the parameter extracted in the `page.tsx` component to fetch the correct data.

Example:
`kinderguardians.community/raid` will render component under src/app/raids/page.tsx and `kinderguardians.community/raids/lastwish` will render a version of src/app/raids/[raid]/page.tsx with the data for Last Wish injected.

### Folder structure

The main folder structure follows the Next.js routing requirements. Components used in pages live in `src/components`. The components folder has no impact on routing so feel free to use folders and other naming schemes than `page` or `layout` ~~pretty please~~.

Static assets are currently stored in the `src/img` folder. This will likely change later but for now, just dump everything there.

### Styling

Some layouting is done through Next.js layouts, which are defined similarly to the page files as `layout.tsx` under any given route folder, and that layout is shared by any routes under that. See: `src/app/layout.tsx` contains the header and nav components that is shared by all pages of the app.

CSS files are module based. Each `.tsx` file that requires CSS should have an associated `.module.css` file that is imported. CSS modules alow using the same class names in multiple places without a worry of one overriding another.

## Techstack resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)
- [MUI Documentation](https://mui.com)

## TODOs

Open tasks for the base of the website can be found in this issue (FILL IN HERE)

**Key issues**

- Favicon and other meta data
- Data storage - JSON contained in website vs. lightweight database option like [PocketBase](https://pocketbase.io/)
- Design
- Limiting dynamic routes to valid params
- Error pages and handling (at least 404)
- Raid/Dungeon layouting
- Content

**Version 2 tasks**

- Full responsive design
- Accessibility
- Dark/Light theming

ʕ ᵔᴥᵔ ʔ
