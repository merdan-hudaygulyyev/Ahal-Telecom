import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import Layout from "./components/layout/Layout";
import NavPage from "./pages/navPages/NavPage";
import NavPage_2 from "./pages/navPages/NavPage_2";
import NotFound from "./pages/404/NotFound";
import Contact from "./pages/Contact/Contact";
import NavPage_3 from "./pages/navPages/NavPage_3";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  { 
    path: "/register",
    element: (
        <Register />
    ),
  },
  {
    path: "/login",
    element: (
        <Login />
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <Home />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/contact",
    element: (
      <ProtectedRoute>
        <Layout>
          <Contact />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: (
        <NotFound />
    ),
  },
  {
    path: "/nav/:id",
    element: (
      <ProtectedRoute>
        <Layout>
          <NavPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/navs/:id",
    element: (
      <ProtectedRoute>
        <Layout>
          <NavPage_2 />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/navigate/:id",
    element: (
      <ProtectedRoute>
        <Layout>
          <NavPage_3 />
        </Layout>
      </ProtectedRoute>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
