import React from "react";

//components
import Header from "../../Feature/Header/HeaderDashboard";
import Footer from "../../Feature/Footer/Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
