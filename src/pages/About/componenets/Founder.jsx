import React from "react";

export default function Founder() {
  return (
    <div className="Founder">
      <h1 className="Heading">Our Founder's Voice</h1>
      <div className="Wrapper">
        <figure className="ImgWrapper Block">
          <img src="/img/founder.jpg" />
        </figure>
        <div className="BgImg Block">
          <div className="TextWrapper">
            <h4 className="Title">How We Started</h4>
            <p className="Content">
              "Driven by a passion for crafting Beautiful leaving spaces, we
              founded our Home Interior Designing agency with creativity and
              dedication , we've grown into a trusted name, turning client
              dreams into reality with personalized and Innovative Designs."
            </p>
            <div className="TextFooter">
              <h5>- Founder and CEO</h5>
              <p>Founder Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
