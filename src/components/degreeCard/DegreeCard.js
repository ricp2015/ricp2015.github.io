import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={1200}>
            <a
              className="card-img-link"
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${degree.title} website`}
            >
              <div className="card-img">
                <img
                  src={require(`../../assets/images/${degree.logo_path}`)}
                  alt={degree.alt_name}
                />
              </div>
              <span className="logo-link-indicator" aria-hidden="true">
                {"\u2197"}
              </span>
            </a>
          </Flip>
        )}
        <Fade right duration={1200} distance="24px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  <a
                    href={degree.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {degree.title} <span aria-hidden="true">↗</span>
                  </a>
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
                {degree.grade && (
                  <p className="degree-grade" style={{ color: theme.text }}>
                    Final grade - {degree.grade}
                  </p>
                )}
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence, index) => {
                return (
                  <p
                    key={index}
                    className="content-list"
                    style={{ color: theme.text }}
                  >
                    {sentence}
                  </p>
                );
              })}
              {degree.project && (
                <p className="content-list degree-project">
                  <a
                    href={degree.project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {degree.project.title}
                  </a>
                  <span style={{ color: theme.secondaryText }}>
                    {`: ${degree.project.description}`}
                  </span>
                </p>
              )}
              {degree.thesis && (
                <p className="content-list degree-thesis">
                  <a
                    href={degree.thesis.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {degree.thesis.title}
                  </a>
                  <span style={{ color: theme.secondaryText }}>
                    {`: ${degree.thesis.description}`}
                  </span>
                </p>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
