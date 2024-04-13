import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import LoadingSpinner from "@/components/LoadingSpinner";

const Storage = React.lazy(() => import("@/features/Storage/route/Storage"));
const Compute = React.lazy(() => import("@/features/Compute/Compute"));
const Networks = React.lazy(() => import("@/features/Networks/Networks"));
const Providers = React.lazy(() => import("@/features/Providers/Providers"));
const Summary = React.lazy(() => import("@/features/Summary/Summary"));
const WebbApps = React.lazy(() => import("@/features/Webb-Apps/WebbApps"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/storage" element={<Storage />} />
              <Route path="/compute" element={<Compute />} />
              <Route path="/networks" element={<Networks />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/web-apps" element={<WebbApps />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default AppRoutes;
