import Overlay from "../components/Overlay";
import ProjectCard from "../components/ProjectCard";
import React from 'react';
import "../css/Projects.css";
import RouteDesign from "../components/RouteDesign";

function Projects() {
  const fill_description = "J'ai conçu ce petit jeu lors de ma 1ère année pour m'entraîner au langage C et à l'utilisation d'une interface graphique (IHM). Le principe de ce jeu est de remplir les aires de jeux vides avec la trainée laissé par le personnage. Attention au nombre de déplacement limité !";
  const imagik_description = "Ce programme utilise le principe du machine learning sous Python. Il permet de classifier des images selon leur couleur et de leur attribuer un label. "
  const qubitsRatz_description ="J'ai réalisé ce projet pour la fin de ma 3e année de Bachelor à l'aide de 2 de mes camarades. Le principe est de générer un QRCode par rapport à une phrase. Je me suis occupé de l'algorithme qui génère l'encodage de la phrase."

    return (
      <section id="projects">
        <Overlay />
        <RouteDesign route="/portfolio/projects" />
        <div className="projects__container">
          <div className="projects__title">Mes projets</div>
          <div className="projects__subtitle">
            Voici une petite liste des différents projets que j'ai eu l'occasion de développer au cour de
            ma formation.
          </div>
          <div className="projects__list">
              <ProjectCard number="1" title="Fill" description={fill_description}/>
              <ProjectCard number="2" title="Imagik" description={imagik_description}/>
              <ProjectCard number="3" title="QubitsRatz" description={qubitsRatz_description}/>
          </div>
        </div>
      </section>
    );
}

export default Projects;