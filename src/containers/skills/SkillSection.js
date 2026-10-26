import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        {skills.data.map((section, index) => (
          <div className="skills-main-div" key={section.title}>
            <div className="skills-text-div">
              <Fade
                right={index % 2 === 0}
                left={index % 2 !== 0}
                duration={1000}
              >
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {section.title}
                </h1>
              </Fade>
              {section.softwareSkills.length > 0 && (
                <Fade
                  right={index % 2 === 0}
                  left={index % 2 !== 0}
                  duration={1500}
                >
                  <SoftwareSkill logos={section.softwareSkills} />
                </Fade>
              )}
              <Fade
                right={index % 2 === 0}
                left={index % 2 !== 0}
                duration={2000}
              >
                <div>
                  {section.skills.map((skillSentence) => (
                    <p
                      key={skillSentence}
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillSection;
