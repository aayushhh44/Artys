import React from "react";
import Button from "../../../components/Button";

const Banner = () => {
  return (
    <section className="Banner">
      <h1>Experience Store</h1>
      <article className="BannerBg">
        <div className="BannerWrapper">
          <h2>Visit Our Experienced Store</h2>
          <p>
            Embark on a journey of inspiration at our store, where curated
            collections await to transform your space into something
            extraordinary.
          </p>
          <Button
            btnText="Locate Us"
            destination="/contact"
            variant={{ padding: "16px 60px", border: "1px solid white" }}
          />
        </div>
      </article>{" "}
    </section>
  );
};

export default Banner;
