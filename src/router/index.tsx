import { AdminLayout } from "layouts/AdminLayout";
import React from "react";
import { RouteObject } from "react-router-dom";
// import { AccountPage } from "views/AccountPage/AccountPage";
import { DetailBox } from "views/DetailBox/DetailBox";
import { DetailHero } from "views/DetailHero/DetailHero";
import { Market } from "views/Market/Market";
import { MarketPlace } from "views/MarketPlace/MarketPlace";

interface Route extends RouteObject {
  title?: string;
  children?: Route[];
  icon?: React.ReactNode;
  breadcrumb?: string;
  isHide?: boolean;
}

export const adminRoutes: Route[] = [
  {
    title: "Dashboard",
    path: "/",
    element: <MarketPlace />,
    index: true,
  },
  // {
  //   path: "/my-account",
  //   title: "My accounts",
  //   breadcrumb: "My accounts",
  //   element: <AccountPage />,
  // },
  {
    path: "/detail/:nft",
    title: "Detail box",
    breadcrumb: "Detail box",
    element: <DetailBox />,
  },
  {
    path: "/detail-hero/:heroId/:nftId",
    title: "Detail hero",
    breadcrumb: "Detail hero",
    element: <DetailHero />,
  },
];

const routes: Route[] = [
  {
    element: <AdminLayout />,
    children: adminRoutes,
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];

export { routes };
