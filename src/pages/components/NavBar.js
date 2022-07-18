import "../css/NavBar.css";
import React from 'react';

export default function NavBar(){
    return (
      <section id="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">JelezianLorys</div>
          <a href="#home" className="navbar__btn">Acceuil</a>
          <a href="#about_me" className="navbar__btn">À propos</a>
          <a href="#projects" className="navbar__btn">Projets</a>
        </div>
      </section>
    );
}