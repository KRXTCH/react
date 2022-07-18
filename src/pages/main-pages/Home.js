import React from 'react';
import '../css/Home.css';
import Overlay from '../components/Overlay';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

function Home() {
    return (
      <section id="home" className="home__bg">
        <Overlay />
        <div className="home__container">
          <div className="home__title">
            <p>Jelezian</p>
            <p>Lorys</p>
          </div>
          <div className="home__subtitle">
            Actuelle en Master 1 à l'école Sophia Ynov Campus, je suis à la
            recherche d'une alternance pour ces deux dernières années. Ce
            portfolio contient différents projets que j'ai pu réalisés, ainsi
            qu'une présentation de qui je suis.
          </div>
          <a className="custom_link" href='#about_me'>
            Commencer &nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>
    );
}

export default Home;