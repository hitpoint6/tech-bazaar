# Tech Bazaar
## An online marketplace to buy and sell tech products.  

<img width="1367" alt="Screenshot 2023-10-02 at 9 22 04 AM" src="https://github.com/hitpoint6/tech-bazaar/assets/62563309/638c6ae7-b716-495f-950c-e838134782ab">


## Features

- Browse products with infinite scrolling 
- Add product with modal form
- Update product
- Create order with the product and quantity
- Browse orders with pagination
- Update order with shipping information

Live demo is up at vercel [Tech Bazaar](https://tech-bazaar-tkbx.vercel.app/)

## Stack

- Using new **Next.js 13**
- Nextjs **App Routes** for the backend
- **MongoDB** Cloud Atlas
- Styled using **Tailwind CSS**
- Written in **TypeScript**

## Analysis
- Scaling of the backend.
  - **Nextjs's App Router as the backend**  
    When building full stack with nextjs compared to nodejs + nextjs,
    many duplicate code can be removed or reused. However for complex use cases, more complex configuration may be needed.
  - **Typescript and Nodejs**  
    Developing the frontend and backend in the same language can reduce context switch of full stack developers jumping between services.
    Nodejs utilize event driven and non-blocking I/O, which is great for web servers and real-time applications.
  - **Database**  
    NoSQL database like mongodb allows for horizontal scaling or products and orders. Cloud Atlas mongodb allows for automatically scaling.
    It does not have schema can be great for initial development as new fields are added to models.
    However it is lack of ACID of SQL database and could potentially lead to duplicate orders.
    SQL databases can be partitioned to store millions of orders and products. However it will be very challenging to ensure ACID properties when partitioned.
  - **Serverless**  
    Cloud service like vercel allows automatically scale up and down by the amount of traffic. But it has cold start times can cause poor user experience.
  - **Optimization**  
    Implement pagination and infinite scroll can make sure the backend returns a manageable amount of items for each query.
    However, it might be overwhelming for users to find a product. Categorization of products and search can be implemented to improve scalability.
  - **Caching**  
    Nextjs and React provides Request Memoization, Data Cache and Full Route Cache to improve low latency and scalability.
  - **Followup Features**  
    - Consider adding security features like authentication, authorization, data validation.
    - Monitoring and Logging
    - Unit testing and end-to-end testings
    - CI/CD
    
     
- Choice of frontend technology. (hosting, caching, language, frameworks, styling)
  - **Typescript**  
    Typescript uses static type checking compared to Javascript, which can help developers identify bugs earlier.
    It improves robustness and it is great for team development. 
  - **Nextjs**  
    Nextjs is a full stack react framework with useful features like server-side rendering (SSR) and file base routing.
    SSR enables faster initial website loading speed and better SEO.
    It also caches server-side components for faster loading without the need to hit the database.
    File base routing is easy to reason about compared to react router dom.
  - **Service-Side Rendering**  
    We can update products and orders components into Server side rendering (SSR) components. The HTML are generated on the server then served on the frontend to provide a better user experience.
    However the server load may be increased.
  - **Tailwind CSS**  
    Tailwind is a popular utility-first CSS framework. It allows rapid development as well as high level of flexibility.
    It supports just-in-time mode to reduce the production build css size. However it might make HTML clunky with a lot of classes.
  - **Vercel**
    Vercel is serverless cloud platform has great integration with Nextjs. It can deploy a nextjs project with a few lines of code.
    It connects github repo and can automatically detect new commits on the repo and redeploy. While simplicity is the advantage, it is lack of configuration options.
    For more complex deployment and specific configurations, AWS of GCP with containerized docker images can be considered.
  - **Followup Features**  
    - Add product categorization and product search.
    - Add User authentication. User should only be able to view and update shipping information for orders of their own products.
    - Add payment like Stripe integration for payment processing.
    - Add real time chat between sellers and buyers.

## Run locally
1. Install dependencies

```bash
npm install
```
2. Copy `.env.example` to `.env.local` and update variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    

## License
