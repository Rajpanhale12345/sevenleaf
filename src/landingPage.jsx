import React from "react";
import earthyLogo from "../Images/Logo.webp";
import greenLogo from "../Images/background.webp";

const LandingPage = () => {
  return (
    <>
      {/* INLINE CSS */}
      <style>
        {`
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }

          .landing-container {
            display: flex;
            width: 100vw;
            height: 100vh;
          }

          .landing-section {
            flex: 1;
            position: relative;
            background-repeat: no-repeat;
          }

          .landing-section:first-child {
            background-size: contain;
            background-position: center;
            background-color: #E1AE52;
          }

          .landing-section:last-child {
            background-size: cover;
            background-position: center;
          }

          .landing-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.35);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            text-align: center;
            padding: 40px;
          }

          /* Tablet */
          @media (max-width: 1024px) {
            .landing-overlay {
              padding: 30px;
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .landing-container {
              flex-direction: column;
            }

            .landing-section {
              height: 50vh;
            }

            .landing-overlay h1 {
              font-size: 1.4rem !important;
            }
          }
        `}
      </style>

      <div className="landing-container">

        {/* LEFT SECTION */}
        <div
          className="landing-section"
          style={{ backgroundImage: `url(${earthyLogo})` }}
        >
          {/* intentionally empty */}
        </div>

        {/* RIGHT SECTION */}
        <div
          className="landing-section"
          style={{ backgroundImage: `url(${greenLogo})` }}
        >
          <div className="landing-overlay">
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "2.4rem",
                lineHeight: "1.3",
                maxWidth: "700px",
              }}
            >
              Some plants have nourished humanity for centuries. We’re bringing them into modern nutrition today.
            </h1>

            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginTop: "20px",
                fontSize: "1.4rem",
                opacity: 0.9,
              }}
            >
              WE'RE{" "}
              <span style={{ color: "#E1AE52", fontSize: "30px" }}>
                COMING SOON
              </span>
            </h2>
          </div>
        </div>

      </div>
    </>
  );
};

export default LandingPage;
