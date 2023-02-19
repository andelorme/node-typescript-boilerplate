# node-typescript-boilerplate

#### Install typescript:
```
npm install typescript --save-dev

npm install @types/node --save-dev

npx tsc --init --rootDir src --outDir dist \
    --esModuleInterop --resolveJsonModule --lib es6 \
    --module commonjs --allowJs true --noImplicitAny true

npm install --save-dev rimraf
```
#### Install eslint + prettier:

```
npm install --save-dev eslint

npm install --save-dev --save-exact prettier

npm install --save-dev prettier-eslint

npm init @eslint/config
```
#### Install babel + jest:
```
npm install --save-dev jest

npm install --save-dev babel-jest @babel/core @babel/preset-env

npm install --save-dev @babel/preset-typescript

npm install --save-dev @jest/globals

```
#### Install nodemon:
```
npm install --save-dev ts-node nodemon
```