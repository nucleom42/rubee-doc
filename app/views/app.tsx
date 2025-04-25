import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./../../css/app.css";

import Layout from "./components/layout";
import Home from "./pages/home";

const NotFound = () => <h2>404 Not Found</h2>;

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

