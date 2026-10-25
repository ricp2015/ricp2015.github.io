import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div className="experience-list-item">
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <a
              className="experience-logo-link"
              href={experience["company_url"]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${experience["company"]} website`}
            >
              <img
                className="experience-card-logo"
                src={require(`../../assets/images/${experience["logo_path"]}`)}
                alt={`${experience["company"]} logo`}
              />
              <span className="logo-link-indicator" aria-hidden="true">
                {"\u2197"}
              </span>
            </a>
          </div>
        </Fade>
        <Fade right duration={2000} distance="40px">
          <div className="experience-card-shell">
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                }}
              >
                <div className="repo-description" />
                {experience["description"]}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
