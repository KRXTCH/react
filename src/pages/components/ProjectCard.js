import React from 'react';
import "../css/ProjectCard.css";

import QrCodeSvg from "../../images/svg/qrcode.svg";

function ProjectCard(props){
  const { number, title, description } = props;

  const illustration = () => {
    if(title === "Fill"){
      return (
        <div className="illustration__Fill">
          <div className="card__image_Fill" />
          <div className="Fill__block" />
          <div className="Fill__block_2" />
        </div>
      )
    }

    if(title === "Imagik"){
      return (
        <div className="illustration__Imagik">
          <div className="card__image_Imagik"/>
          <div className="card__image_Imagik_2"/>
        </div>
      )
    }

    if(title === "QubitsRatz"){
      return (
        <div className="illustration__QubitsRatz">
          <img src={QrCodeSvg} className="card__image_QubitsRatz"/>
        </div>
      )
    }
  }

  return (
    <div className="project_card">
      <div className="card__number">0{number}</div>
      {illustration()}
      <div className="card__title">{title}</div>
      <div className="card__description">{description}</div>
    </div>
  );
}

export default ProjectCard;