import LogoRed from "../assets/logo_red.png";
import "../styles/header.scss";
import CustomLink from "./CustomLink";

function Header() {
  return (
    <div id="header_container">
      <div>
        <img src={LogoRed} alt="logo kasa" className="logo_header" />
      </div>
      <nav id="nav_container">
        <CustomLink to="/" label="Acceuil" />
        <CustomLink to="about" label="A Propos" />
      </nav>
    </div>
  );
}

export default Header;
