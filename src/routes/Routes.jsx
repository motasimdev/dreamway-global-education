import { createBrowserRouter } from "react-router";
import Root from "../components/layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root, //import Root.jsx
    children: [
      { index: true, Component: Home }, //import Home.jsx
      { path: "about-my-work", Component: About },// import About.jsx
    ],
  },
]);

export default Routes;
