import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/dashboardhomepage">DashboardHomepage</Link>
        </li>
        <li>
          <Link to="/dashboardloginlighttheme">DashboardLoginLightTheme</Link>
        </li>
        <li>
          <Link to="/dashboardtranslater">DashboardTranslater</Link>
        </li>
        <li>
          <Link to="/dashboardchieftranslater">DashboardChiefTranslater</Link>
        </li>
        <li>
          <Link to="/dashboardprojectmanager">DashboardProjectManager</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
