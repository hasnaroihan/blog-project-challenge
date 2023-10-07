# Simple Blog Next.js App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Data resource fetched from https://gorest.co.in

## Development Server Setup

Commands for setting up the development repository:

```bash
npm i
# then
npm prepare
# then
npx husky add .husky/pre-commit "npm run lint --max-warnings=0"
```

Create `.env.local` file at the root folder, add `API_URL` and `API_TOKEN` value.

`API_TOKEN` can be obtained from https://gorest.co.in/my-account/access-tokens

.env.local file:

```bash
API_URL=https://gorest.co.in/public/v2
API_TOKEN="Bearer YOUR-ACCESS-TOKEN"
```

Use this command to run the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Deployed site of this project at https://martabak-project-123.vercel.app**
