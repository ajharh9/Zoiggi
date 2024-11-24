import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Body from './components/Body';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/home",
        element: <Body/>
      },
      {
        path: "/login",
        element: <Home/>
      }
    ],
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // <React.StrictMode> 
  //     <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
