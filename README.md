# musixverse-client

## Using Next.js

### Environment Variables-

```
Note: .env, .env.development, and .env.production files should be included in your repository as they define defaults. .env*.local should be added to .gitignore, as those files are intended to be ignored. .env.local is where secrets can be stored.


Set defaults in .env (all environments), .env.development (development environment), and .env.production (production environment).


Environment Variable Load Order-
https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order
```

Change env variables on vercel from CLI- https://vercel.com/docs/cli/env

To turn on dev server-
```sh
npm run dev
```

### Using Docker

Build a docker container- 
```sh
docker-compose up -d --build
```

To turn off dev server-
```sh
docker-compose down
```

Turn on dev server-
```sh
docker-compose up
```