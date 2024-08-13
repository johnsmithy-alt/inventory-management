# Local Database database Installations

## Make server directory

```bash
mkdir server
```

## npm install for server

This will create a package.json file with default values.

```bash
npm init -y
```

## set up prisma

```bash
 npm i prisma @prisma/client
 cd server
 npm init -y
 npm i prisma @prisma/client
 npx prisma init
```

get assets files
get seedData json files
get seed.ts file

## configure typescript

```bash
npx tsc --init
npm i -D ts-node typescript @types/node
```

modify tsconfig.json

```json
"module": "nodenext",
"moduleResolution": "nodenext",
"resolveJsonModule": true,
"outDir": "./dist",
```

## Backend and Package Installations

```bash
npx prisma generate
npx prisma migrate dev --name init
npx run seed
npm i express body-parser cors dotenv helmet morgan concurrently
npm i -D nodemon @types/cors @types/express @types/morgan
npm i rimraf
```

npm i rimraf - run a package to build our typescript file

## Test Port Running

```bash
curl http://localhost:8000
```

Alternative to curl

postman.com -  test api calls

## Error Handling Section

- FIXED Expense Summary

## StatCard.tsx Reusable

```tsx
<StatCard
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        details={[
          { title: "Sales",
            amount: "1000.00",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          { title: "Discount",
            amount: "200.00",
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
        ]}
      />
```

## productController and productRoutes

handles request and response for product.

## Mutation and Query

- Mutation: Create, Update, Delete
- Query: Read

```typescript
getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {},
      }),
      providesTags: ["Products"],
    }),
```

```typescript
createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct
      }),
      invalidatesTags: ["Products"]
    }),
```
