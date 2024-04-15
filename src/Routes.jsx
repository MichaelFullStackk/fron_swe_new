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
const DashboardOwn = React.lazy(
  () => import("pages/DashboardOwn"),
);
const DashboardLoginLightTheme = React.lazy(
  () => import("pages/DashboardLoginLightTheme"),
);
const DashboardRegisterLightTheme = React.lazy(
  () => import("pages/DashboardRegisterLightTheme"),
);
const DashboardMainHomepage = React.lazy(
  () => import("pages/DashboardMainHomepage"),
);
const DashboardAboutpage = React.lazy(
  () => import("pages/DashboardAboutpage"),
);
const DashboardContactpage = React.lazy(
  () => import("pages/DashboardContactpage"),
);
const DashboardHomepage = React.lazy(() => import("pages/DashboardHomepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardHomepage />} />
          <Route path="/main" element={<DashboardMainHomepage />} />
          <Route path="/about" element={<DashboardAboutpage />} />
          <Route path="/contact" element={<DashboardContactpage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/login"
            element={<DashboardLoginLightTheme />}
          />
          <Route
            path="/register"
            element={<DashboardRegisterLightTheme />}
          />
          <Route
            path="/translater"
            element={<DashboardTranslater />}
          />
          <Route
            path="/own"
            element={<DashboardOwn />}
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
