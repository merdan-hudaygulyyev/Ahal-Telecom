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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
        <Login />
    ),
  },
  {
    path: "/register",
    element: (
        <Register />
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
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
      <Layout>
        <NavPage />
      </Layout>
    ),
  },
  {
    path: "/navs/:id",
    element: (
      <Layout>
        <NavPage_2 />
      </Layout>
    ),
  },
  {
    path: "/navigate/:id",
    element: (
      <Layout>
        <NavPage_3 />
      </Layout>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
