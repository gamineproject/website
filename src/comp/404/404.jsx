import Nav from "../nav/nav.jsx";
import "../../App.css";
import "./404.css";
function NF() {
  return (
    <div className="App">
      <Nav />
      <div className="App-Page">
        <div className="App-JavaScript">
          <div className="errcode">404</div>
          <div id="erradv">How did we get here?</div>
          <div id="errhow">How did you get here though, really...</div>
        </div>
      </div>
    </div>
  );
}

export default NF;
