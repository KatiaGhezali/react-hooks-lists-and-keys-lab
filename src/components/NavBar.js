import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];


  const nbar = links.map((link) => (
  
        <a key={link} href={"#" + link}>
          {link}
        </a>
    
  ));

  return <nav> {nbar}</nav>;
}

export default NavBar;
