import React from "react";
import "./myMail.css";
import { useStateValue } from "../../store/store";

const MyMail = (props) => {
  const { details } = props;
  const [{ activeFolder }, dispatch] = useStateValue();
  return (
    <div style={{ position: "relative" }} className="mail_message_wrap">
      <div
        className="mail_message_action_btn"
        style={{ display: activeFolder === "deleted" ? "none" : "" }}
      >
        <span
          className="box_icon"
          onClick={(evt) => {
            dispatch({
              type: "moveToDelete",
              data: {
                mId: details.mId,
              },
            });
          }}
        >
          <i className="material-icons">delete</i>
        </span>
        <span
          className="box_icon"
          onClick={(evt) => {
            dispatch({
              type: "setFlag",
              data: {
                mId: details.mId,
              },
            });
          }}
        >
          <i className="material-icons">outlined_flag</i>
        </span>
      </div>
      <div
        className={`mail_message_container ${
          details && details.unread ? "mail_unread" : ""
        }`}
        onClick={(evt) => {
          dispatch({
            type: "setActiveMail",
            data: details,
          });
          dispatch({
            type: "setAsRead",
            data: {
              mId: details.mId,
            },
          });
        }}
      >
        <div className="mail_title">
          <span>Outlook Team</span>
        </div>
        <div className="mail_subject_details">
          <div className="mail_subject">
            <span>{details.subject}</span>
          </div>
          <div className="mail_time">
            <span>12:56</span>
          </div>
        </div>
        <div className="mail_message_partial">
          <span>{details.content}</span>
        </div>
      </div>
    </div>
  );
};

export default MyMail;
