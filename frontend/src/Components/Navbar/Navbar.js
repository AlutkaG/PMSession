import { HashLink } from "react-router-hash-link";
import logo from "../../Assets/logoPMSession.png";
import { IoIosMenu } from "react-icons/io";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleOpen = () => {
    props.openClickHandler();
  };

  return (
    <div className="top-nav">
      <div className="top-nav-navi">
        <button className="icon-menu" onClick={(e) => handleOpen()}>
          <IoIosMenu size="50px" color="#262626" />
        </button>
        <div>
          <HashLink to="#">
            <img src={logo} alt="Logo" height="100px" />
          </HashLink>
        </div>
        <div className="spacer" />
        <div className="top-nav-links-right">
          <HashLink to={{ pathname: "/firstPage", hash: "#about-conference" }}>
            O konferencji
          </HashLink>
          <HashLink to={{ pathname: "/firstPage", hash: "#statistics" }}>
            Statystyki
          </HashLink>
          <HashLink to={{ pathname: "/firstPage", hash: "#thoughts" }}>
            Opinie
          </HashLink>
          <HashLink to={{ pathname: "/firstPage", hash: "#sponsors" }}>
            Sponsorzy
          </HashLink>
          <HashLink to={{ pathname: "/schedule", hash: "#programme" }}>
            Harmonogram
          </HashLink>
          <HashLink to={{ pathname: "/schedule", hash: "#speakers-section" }}>
            Prelegenci
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
