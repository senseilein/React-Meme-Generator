import React from "react";
import "../styles/HeaderStyle.css";

// Images
import troll from "../images/troll-face.png";

export default function Header() {
  return (
    <header id="header">
      <img src={troll} alt="a legendary troll face" id="header-image" />
      <h1 id="header-title">Meme Generator</h1>
      <h2 id="header-project">React Course - Project 3</h2>
    </header>
  );
}
