# Shopping Cart [Ahola Awesome Store]

Ahola! This is a demo e-commerce website that uses fake store api to populate the store site. Project aims to apply recently acquired knowledge and industry best practices, including React routing, testing frameworks, type checking, and fetching data from APIs. 
 
⚠️ Work in progress. 🌺

<img width="1296" alt="Screenshot 2024-04-05 at 1 37 02 PM" src="https://github.com/NovaCat35/shopping-cart/assets/54908064/ba9264b8-f4a4-4559-8f3a-61ea03cc431d">

## Features 🚀
- Search tool
- Cart
- Product Sorter
- Pagination
- Category Filter 

## Build With 🛠️

- React + Vite
- TypeScript
- SCSS module and tailwind

## Goal and Challenges 🔥

I went into this project with the goal of mastering essential React concepts, including hooks, contexts, routers, and implementing key functionalities such as filtering, pagination navigation, search capabilities, and other user-friendly tools.

During development, I encountered challenges in integrating the different sorting/filtering functionality as each search query, category selector, filter tool, and pagination called in a certain order to fully bring about a smooth user experience. While leveraging useful hooks like useSearchParams for URL querying and data retrieval, I faced further issues of filtering resets with each search. To overcome this, I established a shared context that facilitated seamless logic integration between components, ensuring a coherent flow and abstracting complexities. I also broke apart the logic behind pagination from the rest of the store page to work with a already filtered list of displayed items.

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
