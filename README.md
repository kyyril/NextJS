This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 💰 List of Content 💰

- **Routing**  
  Basics of routing in Next.js, including creating pages and navigation.  
  *Example:* Create routes by adding files to the `pages` directory, e.g., `about.js` becomes `/about`.

- **Dynamic Routes**  
  Creating dynamic routes that respond to different URL parameters.  
  *Example:* Use brackets to define dynamic routes, like `[id].js` to capture different IDs.

- **Catch All Segments**  
  Handling routes that can capture multiple segments in the URL.  
  *Example:* Create a `[...slug].js` file to handle `/post/a/b/c` paths.

- **Not Found Page**  
  Setting up a custom 404 page for non-existent routes.  
  *Example:* Create a `404.js` file in the `pages` directory for a custom error page.

- **Private Folder**  
  Understanding how to use the `private` folder for files that should not be publicly accessible.  
  *Example:* Place files in the `private` directory to keep them out of the public build.

- **Route Groups**  
  Grouping routes together to manage related pages more effectively.  
  *Example:* Use folders in the `pages` directory to group routes like `blog/post1.js`.

- **Layout**  
  Creating reusable layout components for consistent UI across pages.  
  *Example:* Wrap your pages with a `Layout` component to apply a consistent header and footer.

- **Metadata**  
  Managing metadata like titles and descriptions for better SEO.  
  *Example:* Use the `Head` component to set page titles and meta tags.

- **Client & Server Components**  
  Differentiating between client-side and server-side components in Next.js.  
  *Example:* Fetch data on the server with `getServerSideProps` and render it on the client.

- **Navigation**  
  Implementing navigation between pages and components.  
  *Example:* Use the `Link` component for client-side navigation.

- **Template**  
  Using templates to standardize page structures.  
  *Example:* Create a `Template` component that serves as a base for multiple pages.

- **Loading**  
  Handling loading states for asynchronous data fetching.  
  *Example:* Show a loading spinner while data is being fetched.

- **Error Handling**  
  Setting up error boundaries and custom error pages.  
  *Example:* Create a custom `_error.js` to handle and display error messages.

- **Parallel Routes**  
  Managing multiple routes that can be loaded in parallel.  
  *Example:* Use parallel routes to load content from multiple sources simultaneously.

- **Intercepting Routes**  
  Capturing and modifying routes before they are processed.  
  *Example:* Use middleware to intercept requests and modify them before they reach the route handler.

Happy learning! 🚀
