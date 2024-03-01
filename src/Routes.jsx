import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DashboardProjectManager = React.lazy(
  () => import("pages/DashboardProjectManager"),
);
const DashboardChiefTranslater = React.lazy(
  () => import("pages/DashboardChiefTranslater"),
);
const DashboardTranslater = React.lazy(
  () => import("pages/DashboardTranslater"),
);
const DashboardLoginLightTheme = React.lazy(
  () => import("pages/DashboardLoginLightTheme"),
);
const DashboardHomepage = React.lazy(() => import("pages/DashboardHomepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardHomepage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/login"
            element={<DashboardLoginLightTheme />}
          />
          <Route
            path="/translater"
            element={<DashboardTranslater />}
          />
          <Route
            path="/cheif"
            element={<DashboardChiefTranslater />}
          />
          <Route
            path="/pm"
            element={<DashboardProjectManager />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
