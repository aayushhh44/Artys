import React from "react";

const dataArray = [
  {
    name: "Meet a  designer",
    img: "/img/step1.jpg",
  },
  {
    name: "Advance Payment",
    img: "/img/step2.jpg",
  },
  {
    name: "Partial Payment",
    img: "/img/step3.jpg",
  },
  {
    name: "Full Payment",
    img: "/img/step4.jpg",
  },
  {
    name: "Move In and Enjoy",
    img: "/img/step5.webp",
  },
];
const SectionProcess = () => {
  return (
    <div className="Section-Part">
      <h1 className="MarginHeader"> Our Process</h1>

      <div className="ContainerMain">
        {dataArray.map((data, index) => (
          <article className="Block" key={index}>
            <figure className="ImgWrapper">
              <img src={data.img} alt="" />
            </figure>
            <h3 className>{data.name}</h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SectionProcess;
