import React, { Suspense } from "react";
const BlockPost = React.lazy(() => import("../component/BlockPost"));
const Rewies = React.lazy(() => import("../component/Rewies"));
const Footer = React.lazy(() => import("../component/Footer"));
const Body = () => {
  return (
    <>
      <Suspense>
        <Rewies />
      </Suspense>
      <Suspense>
        <BlockPost />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};
export default Body;
