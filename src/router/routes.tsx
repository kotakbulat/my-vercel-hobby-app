import type { ReactNode } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Test from "../pages/test";

export type AppRoute = {
  path: string;
  name: string;
  element: ReactNode;
};

export const routes: AppRoute[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
  {
    path: "/test",
    name: "Test",
    element: <Test />,
  },
];