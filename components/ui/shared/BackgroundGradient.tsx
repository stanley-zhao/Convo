import React from "react";

const BackgroundGradient = () => (
  <div
    aria-hidden
    className="fixed inset-0 -z-10 w-full h-full overflow-hidden"
    style={{ pointerEvents: "none" }}
  >
    <div className="absolute w-[120vw] h-[120vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="80%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#a5b4fc">
              <animate
                attributeName="stop-color"
                values="#a5b4fc;#f472b6;#34d399;#a5b4fc"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.2">
              <animate
                attributeName="stop-color"
                values="#f472b6;#34d399;#a5b4fc;#f472b6"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </radialGradient>
        </defs>
        <ellipse
          cx="600"
          cy="450"
          rx="700"
          ry="400"
          fill="url(#grad1)"
          filter="url(#blur)"
        />
        <filter id="blur">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </svg>
    </div>
  </div>
);

export default BackgroundGradient;
