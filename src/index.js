import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './components/error-page/ErrorPage';
import ContactPage from './components/contact-page/ContactPage';

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
    errorElement: <ErrorPage />
  },
  {
    path: "contact/:name",
    element: <ContactPage></ContactPage>,
    children: [
      {
        path: "details",
        element: <div>Show nested router details!</div>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

console.log(root)

