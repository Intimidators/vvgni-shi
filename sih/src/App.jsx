import React, { createContext, useState } from "react";
import Login from "./pages/Login";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import MainRendering from './components/main_rendering/MainRendering';

export let gData = createContext()

const App = () => {


  let [state,setState] =useState(1)
  let [vvgnli_main_menu_state, set_vvgnli_main_menu_state] = useState("home")
  let [vvgnli_about_submenu_state, set_vvgnli_about_submenu_state] = useState("about_us")
  
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
            }}
          >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<MainRendering />} />
          </Routes>
          </gData.Provider>
        </div>
      </div>
    </>
  );
};

export default App;