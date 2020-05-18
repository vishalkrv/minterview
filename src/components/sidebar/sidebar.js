import React from "react";
import "./sidebar.css";
import { useStateValue } from "../../store/store";

const Sidebar = () => {
  const [
    { inbox, inboxCount, spamCount, deletedCount, customCount },
    dispatch,
  ] = useStateValue();

  return (
    <nav className="mail_sidebar mail_sidebar_expanded">
      <div className="mail_sidebar_search">
        <input type="text" placeholder="Search Mail and People" />
        <span className="box_icon">
          <i className="material-icons">search</i>
        </span>
      </div>
      <div className="mail_sidebar_tree">
        <div className="sidebar_tree_level_1">
          <div className="sidebar_tree_action">
            <span className="box_icon">
              <i className="material-icons">expand_less</i>
            </span>
            <span>Folders</span>
          </div>
          <div className="sidebar_tree_level_2">
            <div
              className="sidebar_tree_menu"
              onClick={() =>
                dispatch({
                  type: "setActiveFolder",
                  data: "inbox",
                })
              }
            >
              <span>Inbox</span>
              <span>{inboxCount !== 0 ? inboxCount : ""}</span>
            </div>
            <div
              className="sidebar_tree_menu"
              onClick={() =>
                dispatch({
                  type: "setActiveFolder",
                  data: "spam",
                })
              }
            >
              <span>Spam</span>
              <span>{spamCount !== 0 ? spamCount : ""}</span>
            </div>
            <div
              className="sidebar_tree_menu"
              onClick={() =>
                dispatch({
                  type: "setActiveFolder",
                  data: "deleted",
                })
              }
            >
              <span>Deleted Items</span>
              <span>{deletedCount !== 0 ? deletedCount : ""}</span>
            </div>
            <div
              className="sidebar_tree_menu"
              onClick={() =>
                dispatch({
                  type: "setActiveFolder",
                  data: "custom",
                })
              }
            >
              <span>Custom Folder</span>
              <span>{customCount !== 0 ? customCount : ""}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
