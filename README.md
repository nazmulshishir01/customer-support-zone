# Customer Support Zone

## Q&A

**What is JSX, and why is it used?**

- JSX is JavaScript XML that lets us write HTML-like syntax inside JavaScript, making UI code expressive and colocated with logic.

**What is the difference between State and Props?**

- Props are read-only inputs from parent to child. State is mutable data owned by a component; updating state re-renders the UI.

**What is the useState hook, and how does it work?**

- `useState(initial)` returns `[value, setValue]`. Call `setValue(newVal)` to update state and trigger a re-render.

**How can you share state between components in React?**

- Lift state up to a common parent and pass via props. For wider trees, use React Context or a state library.

**How is event handling done in React?**

- Use camelCase props like `onClick`, `onChange` and pass callback functions. Handlers can access component state/props to update UI.
