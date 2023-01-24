import "./nav.css";
import Stats from "../stats/stats.jsx";
import { useEffect } from "react";
export default function Nav() {
  useEffect(() => {
    document.getElementById("logo1").onclick = () => {
      location.href = `https://${location.hostname}/`;
    };
  }, []);
  return (
    <div className="App-Nav">
      <div className="navigation">
        <a id="logo1">Gamine</a>
        <div className="option">
          <p>docs</p>
        </div>
      </div>
      <Stats />
    </div>
  );
}
