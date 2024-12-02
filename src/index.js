import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext.jsx';
import { TodoContextProvider } from './context/TodoContext.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/*", // Ensure all routes are matched
      element: <App />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <TodoContextProvider>
        <RouterProvider router={router} />
      </TodoContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
