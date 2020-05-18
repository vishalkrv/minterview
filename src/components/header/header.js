import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="mail_header">
      <div className="mail_header_app_launcher">
        <button>
          <span className="box_icon search_icon">
            <i className="material-icons">apps</i>
          </span>
        </button>
      </div>
      <div className="mail_header_logo">
        <h2>Outlook Mail</h2>
      </div>
    </header>
  );
};

export default Header;
