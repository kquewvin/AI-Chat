import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChatPage from './routes/chatpage/ChatPage';
import Homepage from './routes/homepage/HomePage';
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardPage from './routes/dashboardpage/DashboardPage';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import { SignIn, SignUp } from '@clerk/clerk-react';
import SignInPage from './routes/signInPage/SignInPage';
import SignUpPage from './routes/signUpPage/SignUpPage';

const router = createBrowserRouter ([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage/>
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage/>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
