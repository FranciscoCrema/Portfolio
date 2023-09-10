import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="user-info__footer">
        <Link to={"https://www.linkedin.com/in/franciscocrema/"}>
          &copy; 2024 Francisco Crema
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
