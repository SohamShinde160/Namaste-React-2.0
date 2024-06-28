## Namaste React Course by Akshay Saini

# Episode 11 - Data is the new oil

## Theory:

## Q: What is `prop drilling`?
Prop drilling refers to the practice of passing down props (short for properties) through multiple layers of components in a React application. In React, components can pass data to their child components through props. When a component needs to pass data to its grandchild or deeply nested descendant components, it has to pass the data through all intermediate components in the hierarchy, even if those intermediate components do not use the data themselves.

This can lead to several issues:

1. **Complexity**: As the application grows, the number of props being passed down can increase significantly, making it harder to understand and maintain the code.

2. **Inefficiency**: Components might receive props that they don't directly need but have to pass them down to their children.

3. **Coupling**: Changes to the data structure or the requirements of the intermediate components can affect the components deeper in the hierarchy, leading to cascading changes.

To mitigate prop drilling, React developers often use techniques such as:

- **Context API**: React provides a Context API that allows you to share data across the component tree without manually passing props through each level.

- **State Management Libraries**: Libraries like Redux, MobX, or Recoil can centralize state management and reduce the need for prop drilling by making state accessible to any component in the application.

- **Component Composition**: Breaking down components into smaller, more focused components can reduce the need for passing large amounts of props.

By using these techniques effectively, developers can avoid excessive prop drilling and make their React applications more maintainable and scalable.

## Q: What is `lifting the state up`?
Lifting state up is a technique in React where you move the state from a lower-level component to a higher-level component in the component tree. This is done to share state between multiple components that need access to the same data or to manage the state in a more centralized and controlled manner.

### Why Lift State Up?

Lifting state up is beneficial for several reasons:

1. **Shared State Management**: By lifting state up to a common ancestor component, you can share the state and its logic among multiple components that need access to it.

2. **Simplification of Child Components**: Children components can become simpler as they no longer need to manage their own state for data that is provided by their parent through props.

3. **Avoiding Prop Drilling**: Instead of passing props down through multiple layers of components (prop drilling), lifting state up allows you to pass down the necessary state and callbacks directly to the components that need them.

### Example Scenario:

Let's say you have a React application where a list of items needs to be displayed, and each item can be expanded or collapsed individually. Each item component might have its own state to manage its expanded/collapsed state. However, if you want to allow for a feature where expanding one item automatically collapses others (like an accordion behavior), you would need to lift the state of which item is currently expanded up to a higher-level component.

Here's how you might implement this:

1. **Initial State in Parent Component**: Define the state that tracks which item is currently expanded in the parent component that renders the list of items.

2. **Pass State and Callbacks as Props**: Pass down the state (which item is expanded) and callbacks (to handle expansion/collapse events) as props to the item components.

3. **Handle State Changes**: Implement the logic to update the state (which item is expanded) in the parent component based on user interactions (e.g., clicking to expand/collapse an item).

By lifting the state up to the parent component, you centralize the management of which item is expanded and ensure consistent behavior across all item components that rely on this state.

### Benefits:

- **Single Source of Truth**: The parent component becomes the single source of truth for the expanded state, reducing potential inconsistencies.
  
- **Easier to Reason About**: With state management centralized, it's easier to debug and understand how data flows through your components.

- **Scalability**: As your application grows, lifting state up helps in maintaining a clean and manageable state management strategy.

In summary, lifting state up is a powerful pattern in React for managing shared state across components efficiently and maintaining a clear and predictable data flow in your application.

## Q: What are `Context Provider` and `Context Consumer`?
In React, `Context Provider` and `Context Consumer` are components provided by the Context API. They are used together to facilitate the sharing of data (state) across the component tree without having to pass props manually at every level. This is particularly useful when multiple components need access to the same data, such as theme preferences, user authentication status, or localization settings.

### Context Provider

- **Purpose**: The `Context Provider` component is used to wrap a part of your React component tree where you want to make certain data available to all components underneath it.
  
- **Usage**: It accepts a `value` prop that contains the data you want to share. This `value` can be any JavaScript data (object, array, string, etc.) or a state managed by a parent component.

- **Example**:
  ```jsx
  // Example of creating a context
  const MyContext = React.createContext();

  // Parent component that provides the context
  function ParentComponent() {
    const sharedData = { theme: 'light', language: 'en' };

    return (
      <MyContext.Provider value={sharedData}>
        <ChildComponent />
      </MyContext.Provider>
    );
  }
  ```

### Context Consumer

- **Purpose**: The `Context Consumer` component allows components to subscribe to context changes. It enables consuming the data provided by the `Context Provider` anywhere in the component tree below the provider.

- **Usage**: Inside a function component or a class component, you can use the `Context Consumer` component or `useContext` hook to access the context data.

- **Example**:
  ```jsx
  // Child component that consumes the context
  function ChildComponent() {
    return (
      <MyContext.Consumer>
        {value => (
          <div>
            <p>Current theme: {value.theme}</p>
            <p>Current language: {value.language}</p>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
  ```

### useContext Hook (Alternative to Context Consumer)

- **Purpose**: Introduced in React 16.8, the `useContext` hook provides a more concise way to consume context within functional components.

- **Usage**:
  ```jsx
  // Child component using useContext hook
  import React, { useContext } from 'react';

  function ChildComponent() {
    const value = useContext(MyContext);

    return (
      <div>
        <p>Current theme: {value.theme}</p>
        <p>Current language: {value.language}</p>
      </div>
    );
  }
  ```

### Key Points:

- **Provider Responsibility**: The `Context Provider` sets up the context and provides the data via its `value` prop.
  
- **Consumer Responsibility**: The `Context Consumer` (or `useContext` hook) accesses and uses the context data provided by the nearest `Context Provider`.

- **Multiple Consumers**: You can have multiple consumers subscribing to the same context provider, and they will all receive updates when the context changes.

Using `Context Provider` and `Context Consumer` (or `useContext` hook) allows you to avoid prop drilling and manage global or shared state in your React application more effectively, improving code maintainability and scalability.


## Q: If you don't pass a value to the provider does it take the default value?
Yes, if you create a context using `React.createContext()` without passing an initial value as an argument, the context provider will take a default value. This default value depends on the type of the context:

1. **Default Value for Context without Provider**:
   - If you create a context like this:
     ```jsx
     const MyContext = React.createContext();
     ```
     and then use `<MyContext.Provider>` without providing a `value` prop, React will use `undefined` as the default value.

2. **Default Value for Context with Provider and no value prop**:
   - If you create a provider without providing a `value` prop:
     ```jsx
     <MyContext.Provider>
       {/* children */}
     </MyContext.Provider>
     ```
     React will use `undefined` as the default value for this provider.

3. **Consuming Context without Provider**:
   - When you consume this context without a provider wrapping the consuming component or using `useContext`, React will use the default value provided during the context creation:
     ```jsx
     const MyContext = React.createContext('default value');
     ```

Therefore, it's important to note that while `undefined` is the default behavior for a context provider without a specified value, it's generally recommended to always provide an explicit value when using context to ensure predictable behavior and to avoid unexpected errors related to accessing `undefined` values in your application.

### Topics Covered:

- Seperation of a React Application into UI-Layer and Data-Layer
- Controlled and Uncontrolled Components
- Prop Driling
- Context API in React
