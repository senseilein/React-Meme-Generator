import React from "react";
import "../styles/HeaderStyle.css";

export default function Header() {
  return (
    <header id="header">
      <img
        src="./images/troll-face.png "
        alt="a legendary troll face"
        id="header-image"
      />
      <h1 id="header-title">Meme Generator</h1>
      <h2 id="header-project">React Course - Project 3</h2>
    </header>
  );
}
