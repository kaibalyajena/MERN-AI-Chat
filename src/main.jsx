import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Homepage from './pages/homepage/homepage'
import Dashboard from './pages/dashboard/dashboard'
import Chatpage from './pages/chatpage/chatpage'
import SigninPage from './pages/signinPage/signinPage'
import SignupPage from './pages/signupPage/signupPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [{
      path: '/dashboard/chats/:id',
      element: <Chatpage/>
    }]
  },
  {
    path: '/signin',
    element: <SigninPage/>
  },
  {
    path: '/signup',
    element: <SignupPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
