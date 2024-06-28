## Namaste React Course by Akshay Saini

# Episode 11 - Data is the new oil

## Theory Assignment:

- What is `prop drilling`?
- What is `lifting the state up`?
- What are `Context Provider` and `Context Consumer`?
- If you don't pass a value to the provider does it take the default value?

## Coding Assignment:

- Practice React Context with code examples
Certainly! Let's walk through an example of using React Context to manage a theme preference throughout a component tree. In this example, we'll create a theme context that allows components to read the current theme and toggle between light and dark themes.

### Step-by-Step Example: Theme Context in React

1. **Create the Theme Context**

First, we'll create a new file for our context, `ThemeContext.js`, where we define and export our context:

```jsx
// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context object
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the current theme and toggle function to the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume the theme context
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
```

In this code:

- We import necessary React hooks (`createContext`, `useState`, `useContext`) and create a `ThemeContext` using `createContext()`.
- We define a `ThemeProvider` component that wraps its children with `ThemeContext.Provider`. It uses `useState` to manage the current theme state (`light` or `dark`) and provides a `toggleTheme` function to switch between themes.
- We export a custom hook `useTheme` that simplifies accessing the theme context values (`theme` and `toggleTheme`) from any component.

2. **Using the Theme Context in Components**

Now, let's use the `ThemeProvider` and `useTheme` hook in our application components:

```jsx
// App.js
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Content />
      </div>
    </ThemeProvider>
  );
}

function Content() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Theme Example</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  const { theme } = useTheme();

  return (
    <div>
      <p>Child Component Theme: {theme}</p>
    </div>
  );
}

export default App;
```

In `App.js`:

- We wrap our application with `ThemeProvider` to make the theme context available to all components within its subtree.
- `Content` component uses `useTheme` hook to access `theme` and `toggleTheme` function from the context. It displays the current theme and provides a button to toggle between themes.
- `ChildComponent` demonstrates how any component within the `ThemeProvider` subtree can consume the theme context using `useTheme`.

### Explanation:

- **Provider-Consumer Relationship**: `ThemeProvider` acts as the provider, passing down the theme state (`theme`) and functions (`toggleTheme`) through its context. `useTheme` hook allows consuming components (`Content`, `ChildComponent`) to access and update this shared state without prop drilling.
  
- **Updating Context**: When `toggleTheme` is called, it updates the `theme` state in the provider, causing React to re-render any components that depend on the context, ensuring all components using `useTheme` reflect the current theme.

- **Benefits**: Using context in this manner centralizes the management of theme-related state and behavior, making it easier to maintain and update across the application without passing props manually through multiple levels of the component tree.

This example illustrates how React Context can be used to manage global or shared state efficiently within a React application, improving code organization and reducing complexity. Adjustments and enhancements can be made based on specific application needs, such as adding more context providers or consumers for different types of global data management.


- Try out Nested Contexts

## References:

- [Lifting State Up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
- [React Context](https://react.dev/reference/react/useContext)
