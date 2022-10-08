import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./Slider.css";

const items = [
  {
    src: "https://www.kolabtree.com/blog/wp-content/uploads/2021/08/instructor-assisting-senior-woman-exercising.jpg",
    altText: "Terapia Fisica",
    caption: "Terapia Fisica",
    key: 1,
  },
  {
    src: "https://clinicaangloamericana.pe/wp-content/uploads/2019/05/medicina-fisica-y-rehabilitacion-slider1.jpg",
    altText: "Terapia Respiratoria",
    caption: "Terapia Respiratoria",
    key: 2,
  },
  {
    src: "https://hsjdzaragoza.es/wp-content/uploads/2017/12/sanjuandedios_0673.jpg",
    altText: "Terapia de Rehabilitacion",
    caption: "Terapia de Rehabilitacion",
    key: 3,
  },
];

function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="slider-container"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="img-carousel" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <h2>Servicios</h2>
            <p className="text-white w-100">
              Realizamos una evaluación integral de nuestros pacientes para
              diseñar un programa de rehabilitación personalizado.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              {...args}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
