import React from "react";
import Searchbar from "./searchbar";

const Navbar = () => {
  const logoImg =
    "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Marvel-Logo.jpg";
  return (
    <nav>
      <div>
        <img alt="marvel-logo" src={logoImg} className="navbar-img" />
      </div>
      <Searchbar/>
    </nav>
  );
};

export default Navbar;
