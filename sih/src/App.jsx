import React, { createContext, useState } from "react";
import Login from "./pages/Login";

import "./index.css";

import { Routes, useLocation, Route } from "react-router-dom";
import Signup from "./pages/Signup";

import MainRendering from "./components/main_rendering/MainRendering";
import HomePage from "./portals/webinars/components/HomePage/HomePage";
import SocialMedia from "./portals/social_media/SocialMedia";
import ThemeLanguageSwitcher from "./components/theme_language_switcher/ThemeLanguageSwitcher";
import PortalsMenu from "./components/portals_menu/PortalsMenu";
import Webinars from "./portals/webinars/Webinars";
import ResearchWork from "./portals/research_work/ResearchWork";
import Dashboard from "./pages/dashboard/Dashboard";
import UploadedImagesRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedImagesRegular";
import UploadedResearchRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedResearchRegular";
import UploadedVideosRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedVideosRegular";
import RegisteredWebinarsRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/RegisteredWebinarsRegular";
import WebinarsAttendedRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/WebinarsAttendedRegular";
import RegisteredUsers from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisterdUsers";
import ScheduledWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/ScheduledWebinars";
import ActiveWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/ActiveWebinars";
import WebinarsTillNow from "./pages/dashboard/pages/home/CardComponents/Admin/WebinarsTillNow";
import UploadedImages from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedImages";
import UploadedVideos from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedVideos";
import UploadedResearchWork from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedResearchWork";
import DashboardCommunityImages from "./pages/dashboard/pages/community/DashboardCommunityImages";
import DashboardCommunityVideos from "./pages/dashboard/pages/community/DashboardCommunity";
import DashboardResearch from "./pages/dashboard/pages/research/DashboardResearch";
import DashboardWebinar from "./pages/dashboard/pages/webinars/DashboardWebinar";
import DashboardModalImages from "./pages/dashboard/pages/community/DashboardModalImages";
import DashboardHome from "./pages/dashboard/pages/home/DashboardHome";
import RegisteredUserDetails from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserDetails";

export let gData = createContext();

const App = () => {
  const location = useLocation();
  console.log(location);
  let [state, setState] = useState(1);
  let [vvgnli_main_menu_state, set_vvgnli_main_menu_state] = useState("home");
  let [dashboard_main_menu_state, set_dashboard_main_menu_state] =
    useState("home");
  let [vvgnli_about_submenu_state, set_vvgnli_about_submenu_state] =
    useState("about_us");
  let [vvgnli_research_submenu_state, set_vvgnli_research_submenu_state] =
    useState("research");

  const { pathname } = useLocation();

  return (
    <>
      <div className="app">
        <div className="app__container">
          <gData.Provider
            value={{
              state,
              setState,
              vvgnli_main_menu_state,
              set_vvgnli_main_menu_state,
              vvgnli_about_submenu_state,
              set_vvgnli_about_submenu_state,
              vvgnli_research_submenu_state,
              set_vvgnli_research_submenu_state,
              dashboard_main_menu_state,
              set_dashboard_main_menu_state,
            }}
          >
            {pathname !== "/signup" && pathname !== "/login" && (
              <ThemeLanguageSwitcher />
            )}
            {pathname !== "/signup" && pathname !== "/login" && <PortalsMenu />}

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<MainRendering />} />
              <Route path="/vvgnli" element={<MainRendering />} />
              <Route path="/community" element={<SocialMedia />} />
              <Route path="/webinar" element={<Webinars />} />
              <Route path="/research-section" element={<ResearchWork />} />

              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="" element={<DashboardHome />} />
                <Route path="images" element={<DashboardCommunityImages />} />
                <Route path="videos" element={<DashboardCommunityVideos />} />
                <Route path="videos" element={<DashboardCommunityVideos />} />
                <Route path="research" element={<DashboardResearch />} />
                <Route path="webinars" element={<DashboardWebinar />} />
                <Route path="imagesModal" element={<DashboardModalImages />} />
                <Route
                  path="home/uploadedImagesRegular"
                  element={<UploadedImagesRegular />}
                />
                <Route
                  path="home/uploadedVideosRegular"
                  element={<UploadedVideosRegular />}
                />
                <Route
                  path="home/uploadedResearchRegular"
                  element={<UploadedResearchRegular />}
                />
                <Route
                  path="home/webinarsAttendedRegular"
                  element={<WebinarsAttendedRegular />}
                />
                <Route
                  path="home/registeredWebinarsRegular"
                  element={<RegisteredWebinarsRegular />}
                />
                <Route
                  exact
                  path="home/registerdUsers"
                  element={<RegisteredUsers />}
                />
                <Route
                  path="home/registerdUsers/:userId"
                  element={<RegisteredUserDetails />}
                />
                <Route
                  path="home/uploadedImages"
                  element={<UploadedImages />}
                />
                <Route
                  path="home/uploadedVideos"
                  element={<UploadedVideos />}
                />
                <Route
                  path="home/uploadedResearch"
                  element={<UploadedResearchWork />}
                />
                <Route
                  path="home/webinarTillNow"
                  element={<WebinarsTillNow />}
                />
                <Route
                  path="home/activeWebinars"
                  element={<ActiveWebinars />}
                />
                <Route
                  path="home/scheduledWebinars"
                  element={<ScheduledWebinars />}
                />
              </Route>
            </Routes>
          </gData.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
