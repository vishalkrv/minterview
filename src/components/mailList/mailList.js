import React from "react";
import { MyMail } from "../../components";
import { useStateValue } from "../../store/store";

const MailList = () => {
  const [{ activeBox }] = useStateValue();
  return (
    <div className="mail_list_body_tab1">
      {activeBox &&
        activeBox.length > 0 &&
        activeBox.map((item, index) => (
          <MyMail
            key={index}
            details={item}
          ></MyMail>
        ))}
    </div>
  );
};

export default MailList;
