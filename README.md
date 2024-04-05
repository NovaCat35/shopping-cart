# Shopping Cart [Ahola Awesome Store]

Ahola! This is a demo e-commerce website. This project aims to apply recently acquired knowledge and industry best practices, including React routing, testing frameworks, type checking, and fetching data from APIs. 
 
⚠️ Work in progress.

<img width="1103" alt="Screenshot 2024-04-02 at 1 30 49 AM" src="https://github.com/NovaCat35/shopping-cart/assets/54908064/b8514170-920a-4e29-8b10-8b3323204a1a">

## Features
- Search tool
- Filter option
- Customized webpages and info
- Checkout page
- Pagination navigation (to-do)

## Build With 🛠️

- React + Vite
- TypeScript
- SCSS module and tailwind

## Goal and Challenges 🔥

I am going into this project to fully solidify React concepts of using hooks, contexts, routers, and adding key features such as filtering, pagination nav, search, and other easy access tools.

Some issues that came up was connecting the search logic with the shop filter logic. While I had discovered helpful hooks like useSearchParams that will allow me to query the url and retrieve info from it, that also meant my filter would reset each time. Ultimately I was able to connect the two logic with using a context that allows both components to better flow logically and hide abstractions.

...I'll add more to this section as I progress on with this project.

## Libraries 📚

```
   npm install uuidv4
   npm install --save prop-types
   npm install react-router-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install -D sass
   npm install react-paginate
```

> Don't forget to modify tailwind.config

## TESTING Installation Setups ⚙️

```
   npm install vitest --save-dev
   npm install jsdom --save-dev
   npm install @testing-library/react @testing-library/jest-dom --save-dev
   npm install @testing-library/user-event --save-dev
```

> Make sure you config the above in package.json and vite.config respectively

## Image Sources 🌅

- https://www.pexels.com/
- https://unsplash.com/
- https://www.vexels.com/png-svg/preview/188314/aloha-flower-hawaiian-lettering
- https://pixabay.com/vectors/watercolor-background-wallpaper-4117017/
- https://www.svgrepo.com/svg
