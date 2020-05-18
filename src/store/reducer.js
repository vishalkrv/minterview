const reducer = (state, action) => {
  //Common method to update folder and its count
  const updateMailBox = (state, data, boxType, setToActive, onlyFilter) => {
    const unread = data.filter((item) => item.unread === true);
    const temp = {};
    
    //Filter incase of setFlag
    if (onlyFilter === false) {
      temp[boxType] = data;
    }

    if (setToActive === true) {
      temp["activeBox"] = data;
    }
    state[`${boxType}Count`] = unread.length;
    return {
      ...state,
      ...temp,
    };
  };

  // Based on the action type, different reducers will be fired
  switch (action.type) {
    case "setInbox":
      return updateMailBox(state, action.data, "inbox", true, false);

    case "setSpam":
      return updateMailBox(state, action.data, "spam", false, false);

    case "setDeleted":
      return updateMailBox(state, action.data, "deleted", false, false);

    case "setCustom":
      return updateMailBox(state, action.data, "custom", false, false);

    case "setActiveFolder":
      return {
        ...state,
        activeFolder: action.data,
        activeBox: state[action.data],
      };

    case "setActiveMail":
      return {
        ...state,
        activeMail: action.data,
      };

    case "setAsRead":
      var mails = state[state.activeFolder];
      var mailIndex = mails.findIndex((item) => item.mId === action.data.mId);
      mails[mailIndex].unread = false;
      return updateMailBox(state, mails, state.activeFolder, true, false);

    case "moveToDelete":
      var mails = state[state.activeFolder];
      var mailIndex = mails.findIndex((item) => item.mId === action.data.mId);

      if (mailIndex !== -1) {
        state.deleted.push(mails[mailIndex]);
        state.deletedCount = state.deleted.filter(
          (item) => item.unread === true
        ).length;
        mails.splice(mailIndex, 1);
        return updateMailBox(state, mails, state.activeFolder, false, false);
      } else {
        return {
          ...state,
        };
      }

    case "setFlag":
      var mails = state[state.activeFolder];
      var mailIndex = mails.findIndex((item) => item.mId === action.data.mId);
      mails[mailIndex].flag = true;
      return updateMailBox(state, mails, state.activeFolder, true, false);

    case "filterRecords":
      var mails = state[state.activeFolder];
      if (action.data) {
        mails = mails.filter((item) => item.flag === true);
      } else {
      }
      return updateMailBox(state, mails, state.activeFolder, true, true);

    default:
      return state;
  }
};

export default reducer;
