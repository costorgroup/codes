# @costorgroup/codes

`@costorgroup/codes` is a lightweight npm package designed to handle keyboard codes efficiently. It allows you to define specific key code combinations and associate them with custom functions. This package provides simple methods to enable and disable these code handlers dynamically, making it a versatile tool for handling keyboard shortcuts in your web applications.

## Features

- **Easy Setup:** Quickly set up and start using the package with minimal configuration.
- **Custom Handlers:** Define custom functions that execute when specific key code combinations are detected.
- **Dynamic Enabling/Disabling:** Easily enable or disable code handlers using the on and off methods.

## Installation

Run one of the following commands to add **@costorgroup/codes** to your project:

npm

```bash
  npm install @costorgroup/codes
```

yarn

```bash
  yarn add @costorgroup/codes
```

pnpm

```bash
  pnpm install @costorgroup/codes
```

## Usage/Examples

### Setting up provider

You need to set up the CodesProvider in your React application. This provider ensures that the package can manage and listen for keyboard events using React context.

```javascript
import CodesProvider from "@costorgroup/codes";

const App = ({ children }) => {
  return <CodesProvider>{children}</CodesProvider>;
};

export default App;
```

### Creating and removing listeners

Once the provider is set up, you can use the on and off methods, provided by useCodes hook, to manage your code handlers.

```javascript
import { useCodes } from "@costorgroup/codes";

const MyComponent = () => {
  const codes = useCodes();

  useEffect(() => {
    const handler = () => {
      alert("Hello!");
    };

    codes.on("hello", handler);
    return () => {
      codes.off("hello", handler);
    };
  }, []);

  return <div>Type 'hello' to get alert message!</div>;
};

export default MyComponent;
```

## Feedback

If you have any feedback, please reach out to us at costor.dev@gmail.com

## Links

- [Twitter](https://twitter.com/costorgroup)
- [Linkedin](https://www.linkedin.com/company/costorgroup)
- [Instagram](https://www.instagram.com/costorgroup)
