import React from "react";
import { Fade } from "react-reveal";
import { interests } from "../../portfolio";
import "./Interests.css";

export default function Interests(props) {
  const theme = props.theme;

  return (
    <section className="main interests-section" id="interests">
      <Fade bottom duration={1200} distance="20px">
        <div className="interests-layout">
          <div className="interests-header">
            <h1 className="interests-title" style={{ color: theme.text }}>
              Hobbies and interests
            </h1>
          </div>
          <p
            className="interests-summary"
            style={{ color: theme.secondaryText }}
          >
            {interests.description}
          </p>
        </div>
      </Fade>
    </section>
  );
}
