import React from "react";
import Home from "./components/Home";
import Data from "./components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsProvider, { DetailsContext } from "./components/Context";

function App() {
  return (
    <DetailsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos/:data" element={<Data />}></Route>
        </Routes>
      </Router>
    </DetailsProvider>
  );
}

export default App;
