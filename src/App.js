import React, { useEffect } from "react";
import "./App.css";
import {
  Header,
  Sidebar,
  HeaderActionButton,
  MailList,
  MailListHeader,
  MailView,
} from "./components";
import { useStateValue } from "./store/store";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    fetch("./data/inbox.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "setInbox",
          data: data,
        })
      );
    fetch("./data/spam.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "setSpam",
          data: data,
        })
      );
    fetch("./data/custom.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "setCustom",
          data: data,
        })
      );
    fetch("./data/delete.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "setDeleted",
          data: data,
        })
      );
  }, []);

  return (
    <div className="mail_wrapper">
      <Header></Header>
      <div className="mail_body">
        <Sidebar></Sidebar>
        <div className="mail_container">
          <HeaderActionButton></HeaderActionButton>
          <div className="mail_content">
            <div className="mail_list">
              <MailListHeader></MailListHeader>
              <MailList></MailList>
              <div
                className="mail_list_body_tab2"
                style={{ display: "none" }}
              ></div>
            </div>
            <MailView></MailView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
