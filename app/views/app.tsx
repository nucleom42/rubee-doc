import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./../../css/app.css";

import Layout from "./components/layout";

// Importing all the pages
import Home from "./pages/home";
import GettingStarted from "./pages/getting_started";
import Routing from "./pages/routing";
import Generation from "./pages/generation";
import Views from "./pages/views";
import JsCssImages from "./pages/js_css_images";
import Testing from "./pages/testing";
import BuildingAHiveOfYourOwn from "./pages/building_a_hive_of_your_own";

const NotFound = () => <h2>404 Not Found</h2>;

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/routing" element={<Routing />} />
          <Route path="/generation" element={<Generation />} />
          <Route path="/views" element={<Views />} />
          <Route path="/js-css-images" element={<JsCssImages />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/builing-a-hive-of-your-own" element={<BuildingAHiveOfYourOwn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

