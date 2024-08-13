This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Install app

npx create-next-app@latest

## Install dependencies

```bash
npm i @mui/x-data-grid

npm i @mui/x-data-grid @mui/material @emotion/styled lucide-react numeral recharts uuid axios

npm i -D @types/node @types/uuid @types/numeral
```

## change package version

```bash
npm i <package-name>@<version>
```

## Tailwind configuration

```bash
npm i -D tw-colors
```

## Shortcut

tsrafce is available for creating a react functional component with typescript.

## import Navbar from "@/app/(components)/Navbar"

from "@/app/(components)/Navbar": This specifies the path to the module being imported. The @ symbol is often used as an alias for the root directory of the project, making it easier to reference files without using relative paths like ../../.

## Installing Redux / Redux Toolkit

```bash
npm i react-redux @reduxjs/toolkit dotenv
```

## Redux Persist

Redux persist is used to persist the redux store in the local storage.

```bash
npm i redux-persist
```

## Nextjs and Context Providers

[Context Providers](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers) provides a way to pass data through the component tree without having to pass props down manually at every level.

## Sidebar Component Active

```js
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");
```

## API

```typescript
// client/state/api.tsx
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
  }),
});

// tagTypes: ["DashboardMetrics"], // WILL RETURN THIS JSON FILE
    res.json({
      popularProducts,
      salesSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategory,
    });
```

```typescript

// OLD
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// add react to import

// NEW
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const {
  useGetDashboardMetricsQuery,
} = api;
```

## Dashboard Layout

```typescript
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <div className="row-span-3 xl:row-span-6 bg-gray-500" />
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500" />
      <div className="row-span-3 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  );
};
```

## API CALLS

```typescript
// Make sure the API call is only called once on ./dashboard components without having to use Props

const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
```

## React Data Grid

[MUI X Data Grid](https://mui.com/x/react-data-grid/)

## REDUX TOOLKIT REACT QUERY HOOK

[REDUX TOOLKIT REACT HOOKS](https://redux-toolkit.js.org/rtk-query/api/created-api/hooks)

## Create Product Modal

Creating a form state to send to the backend when we handle submit and triggers the mutation call.


## Expenses.tsx

Aggregating the data for the pie chart

```typescript
const aggregatedData: AggregatedDataItem[] = useMemo(() => {
    const filtered: AggregatedData = expenses
      .filter((data: ExpenseByCategorySummary) => {
        const matchesCategory =
          selectedCategory === "All" || data.category === selectedCategory;
        const dataDate = parseDate(data.date);
        const matchesDate =
          !startDate ||
          !endDate ||
          (dataDate >= startDate && dataDate <= endDate);
        return matchesCategory && matchesDate;
      })
      .reduce((acc: AggregatedData, data: ExpenseByCategorySummary) => {
        const amount = parseInt(data.amount);
        if (!acc[data.category]) {
          acc[data.category] = { name: data.category, amount: 0 };
          acc[data.category].color = `#${Math.floor(
            Math.random() * 16777215
          ).toString(16)}`;
          acc[data.category].amount += amount;
        }
        return acc;
      }, {});

    return Object.values(filtered);
  }, [expenses, selectedCategory, startDate, endDate]);
  ```

## AWS Account

- Billing and Cost Management Dashboard
-- Bills, Billing and Payments, Cost Explorer
- Pricing Calculator
- Free Tier
-- EC2, S3, RDS, DynamoDB, Lambda
- Cost monitor
