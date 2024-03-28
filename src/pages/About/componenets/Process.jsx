import React from "react";

export default function Process() {
  return (
    <div className="SectionProcess">
      <h1 className="Heading">Our Process</h1>
      <div className="Body">
        <figure className="ImgWrapper">
          <img src="/img/step5.webp" />
        </figure>
        <div className="Dream Block">
          <h2>Dream</h2>
          <p>
            We Carefully Listen and List Down Your Requirements For Your Dream
            Space.
          </p>
        </div>

        <div className="Design Block">
          <h2>Design</h2>
          <p>We Design The Narrative Through Drawings And Illustrations.</p>
        </div>
        <div className="Execute Block">
          <h2>Execute</h2>
          <p>
            We Organise Procurement And Working Processes Along With Site
            Supervision.
          </p>
        </div>

        <div className="Deliver Block">
          <h2>Deliver</h2>
          <p>
            We Carry Out Final Snagging To Ensure That We Deliver The Best
            Result.
          </p>
        </div>
      </div>
    </div>
  );
}
