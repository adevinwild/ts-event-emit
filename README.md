<p align="center" test>
  <a href="https://www.npmjs.com/package/ts-event-emit">
    <img alt="ts-event-emit" src="./.r/logo.png" width="192" />
  </a>
</p>
<h1 align="center">
  ts-event-emit
</h1>
<br />
<p align="center" style="max-width:50%;margin:0 auto;">
  <code>ts-event-emit</code> A simple, lightweight, and type-safe event emitter for TypeScript.
</p>
<br />

## Features 🎉

- Strongly typed events and event listeners
- Easy to use and understand API
- Lightweight and fast
- Works seamlessly with TypeScript

## Usage 📖

Install the package using your favorite package manager:

```bash
npm install ts-event-emit
```

or

```bash
yarn add ts-event-emit
```

---

Then, import the `EventEmitter` class and use it to create an event emitter:

```ts
import { EventEmitter } from "ts-event-emit";

type Events = "foo" | "bar";

const emitter = new EventEmitter<Events>();

emitter.on("foo", () => {
  console.log("foo");
});

emitter.emit("bar"); // "foo"
```

That's it!
You can now use ts-event-emit to easily add type-safe events and event listeners to your TypeScript projects.
