# Tech Bazaar
A online marketplace to buy and sell tech products.
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
  - The backend APIs are implemented in Nextjs's App Router. When building full stack with nextjs compared to nodejs + nextjs,
    many duplicate code can be removed or reused.
  - Typescript. Developing the frontend and backend in the same language can reduce context switch of full stack developers jumping between services.
    It utilize event driven and non-blocking I/O, which is great for web servers and real-time applications.
  - NoSQL database like mongodb allows for horizontal scaling or products and orders. Cloud Atlas mongodb allows for automatically scaling.
    It does not have schema can be great for initial development as new fields are added to models.
    However it is lack of ACID of SQL database and could potentially lead to duplicate orders. SQL databases should be partitioned when dealing
    with the oders of millions of products. It will become harder to ensure ACID properties when partitioned.
  - Serverless web servers like vercel allows automatically scale up and down by the amount of traffic.
  - Implement pagination and infinite scroll can make sure the backend returns a manageable amount of items for each query.
    However, it might be overwhelming for users to find a product. Categorization of products and search can be implemented to improve scalability.
    <br>
- Choice of frontend technology. (hosting, caching, language, frameworks, styling)
  - Typescript allows static type checking compared to Javascript, which can help developers identify bugs earlier.
    It improves robustness and it is great for team development. 
  - Nextjs is a react framework with server-side rendering (SSR) and file base routing. SSR enables faster initial website loading speed and better SEO.
    It also caches server-side components for faster loading without needing to hit the database.
    File base routing is easy to reason about than react router dom. It is also a full stack framework that allows you to build the front end backend in the same framework.
  - Tailwind CSS is a popular utility-first CSS framework. It allows rapid development as well as high level of flexibility.
    However it might make HTML clunky with a lot of classes.
  - Vercel. Vercel is serverless cloud platform has great integration with Nextjs. It can deploy a nextjs project with a few lines of code.
    It connects github repo and can automatically detect new commits on the repo and redeploy. While simplicity is the advantage, it is lack of configuration options.
    For more complex deployment, AWS of GCP can be considered.

## Followup
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
