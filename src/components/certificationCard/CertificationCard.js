import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    const isCambridge =
      certificate.logo_path === "cambridge_english_logo.svg";
    const isCyberChallenge =
      certificate.logo_path === "cyberchallenge_logo.svg";
    const isCyberX = certificate.logo_path === "Cyber40_logo.png";
    const isWase = certificate.logo_path === "wase_logo.png";
    const isFin = certificate.logo_path === "fin_logo.png";
    return (
      <Fade bottom duration={1200} distance="20px">
        <a
          className="cert-card"
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${certificate.title} certificate`}
        >
          <div
            className={`cert-header${isCyberX ? " cert-header--dark" : ""}`}
            style={{ backgroundColor: certificate.color_code }}
          >
            {certificate.logo_path ? (
              <img
                className={`logo_img${
                  isCambridge ? " logo_img--cambridge" : ""
                }${
                  isCyberChallenge ? " logo_img--cyberchallenge" : ""
                }${isCyberX ? " logo_img--cyberx" : ""}${
                  isWase ? " logo_img--wase" : ""
                }${isFin ? " logo_img--fin" : ""}`}
                src={require(`../../assets/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            ) : (
              <i
                className={`${certificate.icon_class} cert-icon`}
                aria-label={certificate.alt_name}
              />
            )}
            <span className="cert-card-link" aria-hidden="true">
              Certificate ↗
            </span>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </a>
      </Fade>
    );
  }
}

export default CertificationCard;
