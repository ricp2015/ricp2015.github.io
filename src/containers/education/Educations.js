import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import SectionVisual from "../../components/sectionVisual/SectionVisual";
import { degrees, educationHeader } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="educations-header-div">
        <Fade bottom duration={1500} distance="20px">
          <div className="education-heading-div">
            <div className="education-heading-img-div">
              <SectionVisual variant="education" />
            </div>
            <div className="education-heading-text-div">
              <h1 className="educations-header" style={{ color: theme.text }}>
                {educationHeader.title}
              </h1>
              <p
                className="education-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {educationHeader.description}
              </p>
            </div>
          </div>
        </Fade>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return (
              <DegreeCard
                key={`${degree.title}-${degree.duration}`}
                degree={degree}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
