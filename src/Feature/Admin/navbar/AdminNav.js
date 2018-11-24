import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Logout from "./../../Auth/Logout/Logout";

function AdminNav() {
  const links = [
    {
      title: "Matches",
      linkTO: "/admin_matches"
    },
    {
      title: "Add Matche",
      linkTO: "/admin_matches/edit_match"
    },
    {
      title: "Players",
      linkTO: "/admin_players"
    },
    {
      title: "Add Player",
      linkTO: "/admin_player/add_player"
    }
  ];
  const style = {
    color: "#ffffff",
    fontWeight: "300",
    borderBottom: "1px solid #353535"
  };

  const renderItems = () =>
    links.map(link => (
      <Link to={link.linkTO} key={link.title}>
        <ListItem style={style}>{link.title}</ListItem>
      </Link>
    ));

  return (
    <div>
      {renderItems()}
      <Logout />{" "}
    </div>
  );
}

export default AdminNav;
