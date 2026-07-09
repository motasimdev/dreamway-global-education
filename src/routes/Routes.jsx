import { createBrowserRouter } from "react-router";
import Root from "../components/layouts/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Destinations from "../pages/Destinations";
import Faq from "../pages/Faq";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "courses", Component: Courses },
      { path: "destinations", Component: Destinations },
      { path: "blogs", Component: Blog },
      { path: "faq", Component: Faq },
      { path: "contact", Component: Contact },
    ],
  },
]);

export default Routes;
