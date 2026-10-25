import React from "react";

const visualLabels = {
  projects: "Abstract code structure",
  experience: "Abstract professional path",
  contact: "Abstract contact signal",
};

export default function SectionVisual({ variant }) {
  return (
    <div
      className={`section-visual section-visual--${variant}`}
      role="img"
      aria-label={visualLabels[variant]}
    >
      {variant === "projects" && (
        <svg viewBox="0 0 480 320" aria-hidden="true">
          <path className="visual-line" d="M86 82H48v156h38" />
          <path className="visual-line" d="M394 82h38v156h-38" />
          <rect className="visual-plane" x="116" y="78" width="248" height="164" rx="18" />
          <rect className="visual-accent" x="145" y="112" width="104" height="12" rx="6" />
          <rect className="visual-muted" x="145" y="147" width="190" height="8" rx="4" />
          <rect className="visual-muted" x="145" y="176" width="148" height="8" rx="4" />
          <rect className="visual-muted" x="145" y="205" width="174" height="8" rx="4" />
          <circle className="visual-dot" cx="335" cy="118" r="7" />
        </svg>
      )}

      {variant === "experience" && (
        <svg viewBox="0 0 480 320" aria-hidden="true">
          <path className="visual-path" d="M72 231C128 231 128 91 202 91s74 138 140 138h68" />
          <circle className="visual-node" cx="72" cy="231" r="18" />
          <circle className="visual-node" cx="202" cy="91" r="18" />
          <circle className="visual-node" cx="342" cy="229" r="18" />
          <circle className="visual-dot" cx="410" cy="229" r="8" />
          <path className="visual-tick" d="m64 231 6 6 12-15" />
          <path className="visual-tick" d="m194 91 6 6 12-15" />
          <path className="visual-tick" d="m334 229 6 6 12-15" />
        </svg>
      )}

      {variant === "contact" && (
        <svg viewBox="0 0 480 320" aria-hidden="true">
          <circle className="visual-orbit" cx="240" cy="160" r="112" />
          <circle className="visual-orbit visual-orbit--inner" cx="240" cy="160" r="78" />
          <rect className="visual-plane" x="151" y="105" width="178" height="110" rx="18" />
          <path className="visual-line" d="m164 122 76 62 76-62" />
          <path className="visual-line visual-line--soft" d="m164 200 57-51M316 200l-57-51" />
          <circle className="visual-dot" cx="351" cy="86" r="9" />
        </svg>
      )}
    </div>
  );
}
