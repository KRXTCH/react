import Overlay from "../components/Overlay";
import RouteDesign from "../components/RouteDesign";
import React from "react";
import "../css/ProExp.css";
import ProjectCard from "../components/ProjectCard";

import PlantCatalog from "../../images/neflio/Neflio_catalogue_plante.png";
import Pricing from "../../images/neflio/pricing.png";

export default function ProExp() {
  return (
    <section id="pro_exp">
      <Overlay />
      <RouteDesign route="/portfolio/professionalExperience" />
      <div className="pro_exp__container">
        <div className="pro_exp__title">Experience professionnel</div>
        <p className="pro_exp__p">
          J'ai travaillé en tant qu'alternant développeur Web Full Stack sur le
          projet{" "}
          <a href="https://www.neflio.fr/" target={"_blank"}>
            Neflio
          </a>{" "}
          de la start-up GenerativePlanting au cours de ma 3e année de
          formation. Le projet est développé en C# en utilisant le framework
          .NET ainsi que Blazor.
          <br />
          Ma mission principale à été de développé de nouvelles fonctionnalités
          de l'application Web en respectant les principes qualités tels que
          TDD/BDD ou encore les principes SOLID.
        </p>
        <div className="neflio_image__container">
          <div className="plant__container">
            <p className="pro_exp__p">
              Développement d'un catalogue de plante.
              <br />
              <a
                className="button"
                target={"_blank"}
                href="https://www.neflio.fr/library"
              >
                Voir la page
              </a>
            </p>
            <img
              src={PlantCatalog}
              alt="catalogue_de_plante"
              className="plant_catalog__img"
            ></img>
          </div>
          <div className="pricing__container">
            <img src={Pricing} alt="pricing" className="pricing__img"></img>
            <p className="pro_exp__p">
              Développement d'un abonnement (malheureusement je ne peux pas
              montrer de back-end) en utilisant le prestataire de paiments
              &nbsp;
              <a href="https://www.mollie.com/en" target={"_blank"}>
                Mollie
              </a>.
              <br />
              <a
                className="button"
                target={"_blank"}
                href="https://www.neflio.fr/pricing"
              >
                Voir la page
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
