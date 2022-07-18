import React from 'react';
import Overlay from "../components/Overlay";
import SocialMediaButton from "../components/SocialMediaButton";
import "../css/AboutMe.css";

import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faWpforms} from "@fortawesome/free-brands-svg-icons/faWpforms";
import RouteDesign from '../components/RouteDesign';


export default function AboutMe(){
    return (
      <section id="about_me">
        <Overlay />
        <RouteDesign route="/portfolio/aboutme" />
        <div className="about_me__container">
          <div className="about_me__title">Qui sui-je ?</div>
          <div className="about_me__p">
            Je m'appelle Jelezian Lorys, j'ai 20 ans, et je suis actuellement
            étudiant en Master 1 Informatique à l'école Spohia Ynov Campus, à
            Sophia Antipolis.
            <br />
            <br />
            J'ai découvert le monde de la programmation lors de ma terminale
            grâce à l'option ISN, c'est alors que je me suis trourné vers
            l'informatique comme enseignement superieur après l'obtention de mon
            baccalauréat Scientifique.
            <br />
            <br />
            Ainsi, j'ai intégré l'ancienne école CampusId lors de mes deux
            premières années de bachelor où j'ai pu apprendre les bases de la
            programmation à travers différents langages tels que le C, C++, C#,
            Java, PHP, Html/Css, Js et d'autres.
            <br />
            <br />
            Ma 3e année s'est ensuite déroulée à l'école Sophia Ynov Campus et
            j'ai pu approfondir mes connaissances grâce à mon choix de
            spécialité Ingénieur Logiciel mais également à l'alternance
            disponible à ce niveau d'étude, ce qui m'a permis de découvrir le
            monde du travail et de me faire une première experience
            professionnel.
          </div>
          <div className="social_media__container">
            <SocialMediaButton iconName={faEnvelope} type="mail" />
            <SocialMediaButton iconName={faGithub} type="github"/>
            <SocialMediaButton iconName={faLinkedinIn} type="linkedin"/>
            <SocialMediaButton iconName={faWpforms} type="cv"/>
          </div>
        </div>
      </section>
    );
}