import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import Users from './views/Users.jsx';
import Notfound from './views/Notfound.jsx';
import DefoultLayout from './components/DefaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import Dashboard from './views/dashboard.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <DefoultLayout />,
        children: [
        {
            path: '/',
            element:<Navigate to = "/users" />
        },    
        {
            path: '/dashboard',
            element: <Dashboard />
        },    
        {
            path: '/users',
            element: <Users />
        }]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <Notfound />
    }



])
export default router