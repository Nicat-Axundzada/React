import LogoSvg from "../../../assets/images/logo.svg";
import nav from "../styles/nav.module.css";
export default function Navbar() {
  return (
    <div className={nav.nav}>
      <img src={LogoSvg} alt="Logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">New</a>
        </li>
        <li>
          <a href="">Popular</a>
        </li>
        <li>
          <a href="">Trending</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
      </ul>
    </div>
  );
}
