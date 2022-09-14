# Kindle Cloud Reader Discord Rich Presence

An chrome extension that enables rich presence for Kindle Cloud Reader

## Features

- Show your activity when you're reading, browsing library, and viewing notebooks

![RPC Demo](./assets/demo-full.png)

- Dark theme and light theme

![Icon Demo](./assets/demo-icons.png)

## Dependencies

- Extension
  - [plasmo](https://docs.plasmo.com/) (Framework)
  - node.js
  - pnpm or npm

- Client
  - Python 3.8+
  - pypresence

## Development

- Clone this repository

  ```bash
  git clone https://github.com/phusitsom/kindle-cloud-reader-rpc.git
  cd kindle-cloud-reader-rpc
  ```

- Install dependencies

  - using pnpm

    ```bash
    pnpm install
    ```

  - using npm

    ```bash
    npm install
    ```

- Build extension

  - Development

    ```bash
    pnpm dev
    ```

    or `npm run dev`

- Run client

  ```bash
  python client.py
  ```
