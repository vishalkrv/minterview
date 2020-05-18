import React, { useState } from "react";
import "./mailListHeader.css";
import { useStateValue } from "../../store/store";

const MailListHeader = () => {
  const [show, setShow] = useState(false);
  const [{}, dispatch] = useStateValue();

  return (
    <div className="mail_list_header">
      <div className="mail_list_header_tabs">
        <div className="mail_list_header_tab tab_selected">
          <span>Focused</span>
        </div>
        <div className="mail_list_header_tab">
          <span>Other</span>
        </div>
      </div>
      <div className="mail_list_header_actionBtn">
        <span onClick={() => setShow(!show)}>Filter</span>
        <span className="box_icon">
          <i className="material-icons">expand_more</i>
        </span>
        <div
          className="mail_list_header_actionBtn_dropdown"
          style={{ display: show ? "flex" : "none" }}
        >
          <span
            onClick={(evt) => {
              dispatch({
                type: "filterRecords",
                data: false,
              });
            }}
          >
            All
          </span>
          <span
            onClick={(evt) => {
              dispatch({
                type: "filterRecords",
                data: true,
              });
            }}
          >
            Flagged
          </span>
        </div>
      </div>
    </div>
  );
};

export default MailListHeader;
