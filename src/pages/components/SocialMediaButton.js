import React from "react";
import CV from "../../pdf/CV.pdf";
import "../css/SocialMediaButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaButton(props) {
  const { iconName, type } = props;

  const buttonType = (type) => {
    switch (type) {
      case "mail":
        return (
          <a
            className={`social_media_button__container ${type}_button`}
            href="mailto:lorysjele@gmail.com"
          >
            <FontAwesomeIcon icon={iconName} />
          </a>
        );
      case "github":
        return (
          <a
            className={`social_media_button__container ${type}_button`}
            href="https://github.com/KRXTCH"
            target={"_blank"}
          >
            <FontAwesomeIcon icon={iconName} />
          </a>
        );
      case "linkedin":
        return (
          <a
            className={`social_media_button__container ${type}_button`}
            href="https://www.linkedin.com/in/lorysjelezian/"
            target={"_blank"}
          >
            <FontAwesomeIcon icon={iconName} />
          </a>
        );
      case "cv":
        return (
          <a
            className={`social_media_button__container ${type}_button`}
            href={CV}
            download="Jelezian_Lorys_CV_pdf"
          >
            <FontAwesomeIcon icon={iconName} />
          </a>
        );
      default:
        return <div className="social_media_button__container"></div>;
    }
  };

  return buttonType(type);
}
