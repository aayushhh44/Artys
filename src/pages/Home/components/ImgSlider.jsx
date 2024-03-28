import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

const ImgSlider = () => {
  const loveLetters = [
    {
      name: "Name Here",
      content:
        "merely evening information cattle some sheet easily capital arrow use consonant vapor week calm hall require variety year sang lion crew congress specific guide",
      img: "/img/loveletter",
    },
    {
      name: "Name Here",
      content:
        "alphabet third tower weight topic window cover step hot truck these simple sky driven daughter stems upon positive snow excellent fellow about place divide",
      img: "/img/loveletter",
    },
    {
      name: "Name Here",
      content:
        "air industrial die fewer composition fat gave foot game block atom friend farmer ants principle run thousand sometime colony instance bad thin vegetable equal",
      img: "/img/loveletter",
    },
    {
      name: "Name Here",
      content:
        "down clothes save battle move ten human press hay further chest popular wing doctor leather observe visit independent satellites rhythm bridge weigh apple skin",
      img: "/img/loveletter",
    },
  ];

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button id="Next" onClick={onClick}>
        <GrNext />
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button id="Prev" onClick={onClick}>
        <GrPrevious />
      </button>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="SliderSection">
        <h2 className="SliderHeading">Love Letters</h2>
        <div className="SlideWrapper">
          <Slider {...settings}>
            {loveLetters.map((loveLetter, index) => (
              <article key={index} className="Slide">
                <figure className="ImgWrapper">
                  <img src={`${loveLetter.img}${index + 1}.jpg`} />
                </figure>
                <h3>{loveLetter.name}</h3>
                <p>{loveLetter.content}</p>
              </article>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ImgSlider;
