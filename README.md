# Image Processing Documentation

## Project structure
```
├── README.md
├── assets
├── jest.config.js
├── package.json
├── src
├── tests
├── tsconfig.json
└── yarn.lock
```

## Setup
yarn install

## Build
yarn build
```bash
yarn run v1.22.17
$ rimraf dist && tsc
✨  Done in 2.47s.
```

## Running
yarn start
```bash
yarn run v1.22.17
$ node dist/main.js
building image processing: 3.990s
✨  Done in 4.15s.
```

## Development
yarn main
```bash
yarn run v1.22.17
$ ts-node src/main.ts
building image processing: 2.103s
✨  Done in 3.23s.

```

## Testing
yarn test
```bash
 jest ./tests
 PASS  tests/small.spec.ts
 PASS  tests/medium.spec.ts
 PASS  tests/large.spec.ts (20.457 s)
```

## API
### download
`download(url: string | URL | UrlObject, fileName: string): Promise<string>`

| Parameter | Description |
| --- | ----------- |
| url | image url address |
| fileName | specified download file name |

### flip
`flip(filePath: string, fileName: string)`

| Parameter | Description |
| --- | ----------- |
| filePath | specified download folder |
| fileName | specified download file name |
