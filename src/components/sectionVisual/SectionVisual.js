import React from "react";

const visuals = {
  education: {
    icon: "fa-solid fa-graduation-cap",
    label: "Education",
  },
  experience: {
    icon: "fa-solid fa-briefcase",
    label: "Experience",
  },
  projects: {
    icon: "fa-solid fa-code",
    label: "Projects",
  },
  contact: {
    icon: "fa-solid fa-comments",
    label: "Contact",
  },
};

export default function SectionVisual({ variant }) {
  const visual = visuals[variant];

  if (!visual) return null;

  return (
    <div
      className={`section-visual section-visual--${variant}`}
      role="img"
      aria-label={visual.label}
    >
      <i className={visual.icon} aria-hidden="true"></i>
    </div>
  );
}
