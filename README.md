# ArunaCore - JavaScript API

## Introduction

ArunaCore is a framework that helps developers to build their own applications.

with it is ease to create and manange a new application created from scratch or to use on top of existing application.

It uses websocket to communicate with your application and it is easy to use.

## The API

### Installing:

To install, just use `npm install arunacore-api`or `yarn add arunacore-api`.

### Creating a client:

```js
import { ArunaClient } from 'arunacore-api';

const client = new ArunaClient('localhost', 3000, '<clientName>');

client.connect();
```

### Receiving a message:

The message is received as a JSON object with parsed informations.

```js
client.on('message', (message) => {
  console.log(message);
});
```

### The full documentation:

Because it is still in beta, we do not have formal and complete documentation. Although it can already be used in production, we recommend waiting until version 1.0.0 is released.
