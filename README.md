# 5 Misconceptions or MF - Module Frontend Mistakes

## 1 Module Federation != Micro-Frontends

## 2 Module Federation Doesn't Manage State (Example: like S3)

## 3 Federated Modules are Deployed Like Assets

## 4 Federated Modules are Not Versioned

-- Problems with contractual changes.
-- Here we use Error Boundaries: https://reactjs.org/docs/error-boundaries.html

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

## BASH cmd - Running idenpendly as Dummy serve app with _SERVOR_

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

```javascript
  ./webpakc.config.js
    ...
    devtool: false,
    ...

  yarn build:dev
```
