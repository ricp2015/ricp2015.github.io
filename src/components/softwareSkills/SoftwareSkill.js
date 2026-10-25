import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    {logo.fontAwesomeClassname && (
                      <span className="software-skill-icon" aria-hidden="true">
                        <span
                          className="iconify"
                          data-icon={logo.fontAwesomeClassname}
                          style={{ color: logo.style && logo.style.color }}
                          data-inline="false"
                        ></span>
                      </span>
                    )}
                    {!logo.fontAwesomeClassname && logo.imageSrc && (
                      <span className="software-skill-icon" aria-hidden="true">
                        <img
                          className="skill-image"
                          style={logo.style}
                          src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                          alt=""
                        />
                      </span>
                    )}
                    <span className="software-skill-name">
                      {logo.skillName}
                    </span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
