import "./SideNavbar.css";
import { HashLink } from "react-router-hash-link";
import { BsChevronCompactUp } from "react-icons/bs";

const SideNavbar = (props) => {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (props.show) {
    return null;
  }

  return (
    <div className="side-nav">
      <HashLink
        to={{ pathname: "/firstPage", hash: "#about-conference" }}
        onClick={onClose}
      >
        O konferencji
      </HashLink>
      <HashLink
        to={{ pathname: "/firstPage", hash: "#statistics" }}
        onClick={onClose}
      >
        Statystyki
      </HashLink>
      <HashLink
        to={{ pathname: "/firstPage", hash: "#thoughts" }}
        onClick={onClose}
      >
        Opinie
      </HashLink>
      <HashLink
        to={{ pathname: "/firstPage", hash: "#sponsors" }}
        onClick={onClose}
      >
        Sponsorzy
      </HashLink>
      <HashLink
        to={{ pathname: "/schedule", hash: "#programme" }}
        onClick={onClose}
      >
        Harmonogram
      </HashLink>
      <HashLink
        to={{ pathname: "/schedule", hash: "#speakers-section" }}
        onClick={onClose}
      >
        Prelegenci
      </HashLink>
      <button className="side-close-btn" onClick={onClose}>
        <BsChevronCompactUp size="20px" />
      </button>
    </div>
  );
};

export default SideNavbar;
