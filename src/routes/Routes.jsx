import { createBrowserRouter } from "react-router";
import Root from "../components/layouts/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Courses from "../pages/Courses";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import Faq from "../pages/Faq";
import Error from "../pages/Error";
import Universities from "../pages/Universities";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "courses", Component: Courses },
      { path: "destinations", Component: Destinations },
      { path: "destinations/:slug", Component: DestinationDetails },
      { path: "universities", Component: Universities },
      { path: "blogs", Component: Blog },
      { path: "blogs/:slug", Component: BlogDetails },
      { path: "faq", Component: Faq },
      { path: "contact", Component: Contact },
      { path: "*", Component: Error },
    ],
  },
]);

export default Routes;
