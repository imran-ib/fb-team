import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { firebase } from "../../../config/firebase";

function Logout(props) {
  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("success");
      })
      .catch(err => console.log(err));
  };
  return (
    <ListItem
      onClick={() => logoutHandler()}
      style={{
        color: "#ffffff",
        fontWeight: "300",
        borderBottom: "1px solid #353535",
        cursor: "pointer"
      }}
    >
      Logout
    </ListItem>
  );
}

export default Logout;
