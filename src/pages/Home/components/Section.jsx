import React from "react";

const dataArray = [
  {
    title: "Overall Projects",
    number: 57,
    body: " The studio visualises and selects candles and art objects.",
  },
  {
    title: "Clients",
    number: 57,
    body: "The studio visualises and selects candles and art objects..",
  },
  {
    title: "Experience",
    number: 8,
    body: "The studio visualises and selects candles and art objects.",
  },
  {
    title: "Current Projects",
    number: 10,
    body: "The studio visualises and selects candles and art objects.",
  },
];

const Section = () => {
  return (
    <section className="MainContainer">
      <h2>Why Rely On Us</h2>
      <p>
        Since its establishment, <strong>Artyss</strong> has executed over 90
        projects spanning across more than 50 brands and partners worldwide.
      </p>
      <div className="DataContainer">
        {dataArray.map((data, index) => (
          <div className="DataItem" key={index}>
            <h4>{data.title}</h4>
            <p className="BigNumber">{data.number}+</p>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
