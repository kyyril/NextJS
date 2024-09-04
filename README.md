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

- **Route Handler**  
  Customizing the way routes are handled in your application.  
  *Example:* Define custom route handlers in the `api` directory for server-side logic.

- **Handling GET Request**  
  Managing GET requests to retrieve data from the server.  
  *Example:* Use `getServerSideProps` to fetch data on the server during page load.

- **Handling POST Request**  
  Handling POST requests for submitting data to the server.  
  *Example:* Create an API route that processes form submissions.

- **NextResponse & NextRequest**  
  Working with the `NextResponse` and `NextRequest` objects for more control over responses.  
  *Example:* Use `NextRequest` to access request data and `NextResponse` to customize the response.

- **Handling GET Detail**  
  Fetching detailed data based on specific query parameters.  
  *Example:* Use `getServerSideProps` to fetch details based on a dynamic route parameter.

- **Handling URL Query Params**  
  Working with URL query parameters to filter and retrieve data.  
  *Example:* Access query parameters using `context.query` in `getServerSideProps`.

- **Handling PUT & PATCH Request**  
  Managing PUT and PATCH requests for updating resources.  
  *Example:* Create an API route to update a resource using `PUT` or `PATCH` methods.

- **Handling DELETE Request**  
  Handling DELETE requests to remove resources from the server.  
  *Example:* Set up an API route that deletes a resource based on an ID.

- **Headers**  
  Manipulating HTTP headers for requests and responses.  
  *Example:* Set custom headers in the response using `res.setHeader`.

- **Cookie**  
  Managing cookies for session handling and state management.  
  *Example:* Use the `cookie` library to set and retrieve cookies in API routes.

- **Caching di Routes Handler**  
  Implementing caching strategies to optimize route handling performance.  
  *Example:* Use server-side caching to improve response times for frequently requested data.

- **Fetch Data di Server**  
  Techniques for fetching data on the server-side for SSR and SSG.  
  *Example:* Use `getStaticProps` or `getServerSideProps` to fetch and pre-render data.

- **Project: YouTube Clone**  
  Building a YouTube-like application to apply what you've learned.  
  *Example:* Implement video listing and playback features using Next.js.

- **Project: Fullstack Blog**  
  Developing a full-stack blog application as a capstone project.  
  *Example:* Create a blog with features like user authentication, content creation, and commenting.

- **Fetch Data di Client**  
  Fetching data on the client-side and integrating it into your Next.js application.  
  *Example:* Use `useEffect` and `fetch` to retrieve data after the component has mounted.


Happy learning! 🚀
