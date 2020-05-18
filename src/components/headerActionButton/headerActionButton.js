import React from "react";
import "./headerActionButton.css";

const HeaderActionButton = () => {
  return (
    <div className="mail_actions">
      <div className="mail_action_btn">
        <span className="box_icon">
          <i className="material-icons">add_circle_outline</i>
        </span>
        <span>New</span>
      </div>
      <div className="mail_action_btn">
        <span>Mark all as read</span>
      </div>
    </div>
  );
};

export default HeaderActionButton;
