# 5 Misconceptions or MF - Module Frontend Mistakes

## 1 Module Federation != Micro-Frontends

## 2 Module Federation Doesn't Manage State (Example: like S3)

## 3 Federated Modules are Deployed Like Assets

## 4 Federated Modules are Not Versioned

> Problems with contractual changes.
> Here we use Error Boundaries: https://reactjs.org/docs/error-boundaries.html

## 5 Federated Modules Do NOT Have TypeScript Types

## Creating MFE - Micro Frond Ends

### Is an architectural style about sharin conde between applicatinos

```javascript
  npx create-mf-app
      ? Pick the name of your app: host
      ? Project Type: Application
      ? Port number: 3000
      ? Framework: react
      ? Language: typescript
      ? CSS: Tailwind

And

  npx create-mf-applicatin
      ? Pick the name of your app: remote
      ? Project Type: Application
      ? Port number: 3001
      ? Framework: react
      ? Language: typescript
      ? CSS: Tailwind
```

## Deploying as an Assets on S3 if is the case

```
 yarn buid:dev   *As nice files names*

 or
 yarn build      *As chunck files names*
```

## BASH cmd - Running independently as Dummy serve app with _SERVOR_

### For deploying as Assest Store like _S3_

```bash

  cd ./dist

  PORT=3001 npx servor
```

### Servor as package

```npm
 "devDependencies": {
    "servor": "4.0.0"
  },
  "scripts": {
    "start": "servor www index.html 3001 --reload --browse"
  }
```

## Dev tools disabled

> Take a look on src_Counter_tsx.js, is just a javascript file

```javascript
  ./webpakc.config.js
    ...
    devtool: false,
    ...

  yarn build:dev
```

## Defining the @Types for TypeScript

> Create the file index.d.ts

_"./src/@types/remote/index.d.ts"_

```typescript
import React from "react";
const Counter: React.FunctionComponent<{
  name: string;
}>;

export default Counter;
```

### _npm tsc --init_ to create the _tsconfig.json_ file

> Change the "jsx"property

```typescript
  ...
   "jsx": "react",
  ...
   "paths": {                    /* Specify a set of entries that re-map imports to additional lookup locations. */
      "*":["src/@types/*"]
      },
  ...
```

## Creating _Shared Library_ with npm/uyarn _LINK_

```javascript
  npx create-mf-app
      ? Pick the name of your app: mfe-shared
      ? Project Type: Library
```

### Add React and React-Dom

```javascript
  yarn add react react-dom -D

  yarn add @types/react @types/react-dom -D
```

### On _index.ts_ add the declaration types for _Counter_

> "index.ts" with the definitions of the _Counter_ is

```javascript
import React from "react";

export type Counter = React.FunctionComponent<{ name: string }>;

export default true;
```

and build

```javascript
  yarn build
```

## LINKING with _yarn link_

> This going to Allow us to likn both _REMOTE_ and _HOST_

```javascript
  yarn link

  ## results
    yarn link v1.22.19
    success Registered "mfe-shared".
    info You can now run `yarn link "mfe-shared"` in the projects
    where you want to use this package and it will be used instead.
    Done in 0.04s.

```

## Linkinking _REMOTE_ & _HOST_

> REMOTE

```javascript
  cd ./remote

  yarn link mfe-shared

  ## resuts
    yarn link v1.22.19
    success Using linked package for "mfe-shared".
    Done in 0.04s.
```

> HOST

```javascript
  cd ./hots

  yarn link mfe-shared

  ## resuts
    yarn link v1.22.19
    success Using linked package for "mfe-shared".
    Done in 0.04s.
```
