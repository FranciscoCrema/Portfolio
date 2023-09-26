import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import "../responsive.scss";

function Footer() {
  return (
    <footer>
      <div className="user-info__footer">
        <Link
          to={"https://www.linkedin.com/in/franciscocrema/"}
          target="_blank"
        >
          &copy; 2024 Francisco Crema
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
