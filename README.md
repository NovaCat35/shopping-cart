### Project: Shopping Cart

# ALOHA! AWESOME STORE

Aloha and welcome to this mockup of an e-commerce website! Our website utilizes the [fake store API](https://fakestoreapi.com/) to showcase a wide range of products. The main goal of this project was to solidify the utilization of tools and components like React Router, type checking, API fetching, and the testing of UI elements using the React Testing Library and Vitest.

**Demo:** [aloha-awesome-store.pages.dev](https://aloha-awesome-store.pages.dev/) 🌺

<img width="1245" alt="Screenshot 2024-04-30 at 4 49 42 PM" src="https://github.com/NovaCat35/shopping-cart/assets/54908064/7a0edc6c-7b76-49f5-9486-306663408849">

## Features 🎯

- Search tool
- Shopping Cart
- Product Sorting Filter
- Pagination Navigation
- Category Selection

## Build With 🛠️

- React + Vite
- TypeScript
- SCSS module and tailwind
- Unit Testing: vitest

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

## Unit Test Installation Setups ⚙️

```
   npm install vitest --save-dev
   npm install jsdom --save-dev
   npm install @testing-library/react @testing-library/jest-dom --save-dev
   npm install @testing-library/user-event --save-dev
```

> Make sure you config the above in package.json and vite.config respectively
> 
> TESTING: npm test FileName.test.tsx

## Image Sources 🌅

- https://www.pexels.com/
- https://unsplash.com/
- https://www.vexels.com/png-svg/preview/188314/aloha-flower-hawaiian-lettering
- https://pixabay.com/vectors/watercolor-background-wallpaper-4117017/
- https://www.svgrepo.com/svg
