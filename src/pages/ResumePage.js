import React from "react";
import * as s from "../styles/component-styles";

import * as pStyle from "../particles/Particles_Params";

const ProjectsPage = () => (
  <s.ParticleBackgroundResume scrolling="no">
    <s.ParticleStyle
      params={pStyle.resumeParticle}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <div className="mdl-grid portfolio-max-width">
      <div className="mdl-card experience-card">
        <s.ResumeFrame src="https://www.corybond.me/resume.pdf" />
      </div>
    </div>
  </s.ParticleBackgroundResume>
);

export default ProjectsPage;
