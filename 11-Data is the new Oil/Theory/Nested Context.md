## Q : Nested Context in React

Nested contexts in React allow you to create a hierarchy of context providers and consumers, where each provider can encapsulate a specific set of data or behavior that is shared among its descendant components. This approach helps in managing complex state and behaviors in a more organized and maintainable way.

Let's explore an example of nested contexts where we manage both a theme and a user authentication context. The theme context will handle the current theme preference, while the user context will manage the authentication state and user information.

### Step-by-Step Example: Nested Contexts in React

1. **Create Theme Context**

Let's start with defining our theme context similar to the previous example:

```jsx
// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
```

2. **Create User Context**

Next, let's create a user context for managing authentication state and user information:

```jsx
// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Simulate login logic, set user in state
    setUser({ username });
  };

  const logout = () => {
    // Simulate logout logic, clear user from state
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export default UserContext;
```

3. **Using Nested Contexts in Components**

Now, let's use both `ThemeProvider` and `UserProvider` in our application components:

```jsx
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider, useUser } from './UserContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="App">
          <Content />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

function Content() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <div>
      <h1>Nested Context Example</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in:</p>
          <button onClick={() => login('exampleuser', 'password')}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
```

### Explanation:

- **Nested Providers**: In `App.js`, we wrap our components with both `ThemeProvider` and `UserProvider`. This establishes a hierarchy where `UserProvider` is nested within `ThemeProvider`, allowing components within `UserProvider` to access both theme and user context.

- **Consuming Multiple Contexts**: `Content` component uses `useTheme` and `useUser` hooks to access theme-related data (`theme`, `toggleTheme`) and user-related data (`user`, `login`, `logout`) respectively. This demonstrates how components can consume multiple contexts independently within the same component tree.

- **Separation of Concerns**: Each context (`ThemeContext`, `UserContext`) encapsulates its own state management and provides appropriate functions (`toggleTheme`, `login`, `logout`) to interact with that state. This separation helps in keeping code modular and focused on specific responsibilities.

- **Scalability**: Nested contexts are scalable and can be extended further by adding more context providers to manage additional global or shared state, such as preferences, localization, or data fetching.

Using nested contexts in React allows for a flexible and organized approach to managing complex state and behaviors across your application, ensuring better code maintainability and scalability as your application grows. Adjustments and additions can be made based on specific application requirements, making it easier to manage and extend functionality as needed.