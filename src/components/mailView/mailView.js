import React from "react";
import "./mailView.css";
import { useStateValue } from "../../store/store";

const MailView = () => {
  const [{ activeMail }, dispatch] = useStateValue();

  return (
    <div className="mail_view">
      {activeMail && Object.keys(activeMail).length > 0 && (
        <>
          <div className="mail_view_title">{activeMail.subject}</div>
          <div className="mail_view_body">
            <div className="mail_view_header">
              <div className="mail_view_user_img">
                <span>VK</span>
              </div>
              <div className="mail_view_user_details">
                <div className="mail_view_user_email">
                  <span>Outlook Team</span>
                  <span>&lt;no-reply@live.com&gt;</span>
                </div>
                <div className="mail_view_user_email_date">
                  <span>Sat 5/16/2020 5:27PM</span>
                </div>
                <div className="mail_view_user_email_to">
                  <span>To: </span>
                  <span>Kumar Verma, Vishal</span>
                </div>
              </div>
            </div>
            <div className="mail_view_content">{activeMail.content}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MailView;
