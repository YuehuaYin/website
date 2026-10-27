import "./Header.css";
import { Link } from "react-router-dom";
import { pages } from "../App";

function Header() {
  return (
    <header>
      <h1 id="title">Yuehua Yin</h1>
      <div className="navitems">
        {pages.map((page) => (
          <Link
            className="navitem"
            key={"link_" + pages.indexOf(page)}
            to={page.route}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
