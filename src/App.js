import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Loading from "./components/loading/Loading";
import CardExpand from "./components/projects/CardExpand";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) return <Loading />;

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Loading /> */}
        <CardExpand />
      </div>
    </Router>
  );
}

export default App;
