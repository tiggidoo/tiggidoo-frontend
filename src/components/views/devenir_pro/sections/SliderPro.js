/* This is the sectin 4 of Devenir Pro page. 
   Here we have a slider with some people who become in a professional
*/

import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { withTranslation } from "react-i18next";

import { ChevronRight } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";

import "react-multi-carousel/lib/styles.css";
import "../css/sliderpro.scss";
import CardPro from "./CardPro";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 }, //max: 3000, min: 1024
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  xldesktop: {
    breakpoint: { max: 1599, min: 1024 }, //max: 1024, min: 464
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  lgtablet: {
    breakpoint: { max: 1023, min: 992 }, //max: 1024, min: 464
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mdtablet: {
    breakpoint: { max: 991, min: 768 }, //max: 1024, min: 464
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  smmobile: {
    breakpoint: { max: 767, min: 605 }, //max: 464, min: 0
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  xsmobile: {
    breakpoint: { max: 604, min: 0 }, //max: 464, min: 0
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const profesionals = [
  {
    id: 0,
    firstName: "John",
    lastName: "Clavijo",
    evaluation: "5",
    presentation: "25",
    urlImg: "img1",
  },
  {
    id: 1,
    firstName: "Mark",
    lastName: "Kram",
    evaluation: "5",
    presentation: "25",
    urlImg: "img2",
  },
  {
    id: 2,
    firstName: "Kim",
    lastName: "Humnis",
    evaluation: "5",
    presentation: "25",
    urlImg: "img3",
  },
  /*
  {
    id: 3,
    firstName: "NN",
    lastName: "NN",
    evaluation: "45,2",
    presentation: "25",
    urlImg: "nn",
  },
  */
  {
    id: 4,
    firstName: "Melisa",
    lastName: "Asilem",
    evaluation: "5",
    presentation: "25",
    urlImg: "img4",
  },
  {
    id: 5,
    firstName: "Alice",
    lastName: "Ecila",
    evaluation: "5",
    presentation: "25",
    urlImg: "img5",
  },
  /*
  {
    id: 6,
    firstName: "Thomas",
    lastName: "Samoht",
    evaluation: "6,8",
    presentation: "45",
    urlImg: "nn",
  },
  
  {
    id: 7,
    firstName: "Luis",
    lastName: "Siul",
    evaluation: "3,8",
    presentation: "99",
    urlImg: "nn",
  },
  
  {
    id: 8,
    firstName: "Thomas",
    lastName: "Samoht",
    evaluation: "6,8",
    presentation: "45",
    urlImg: "nn",
  },
  */
];

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  return (
    <div className="custom-button-group">
      <button className="btnPrev" onClick={() => previous()}>
        <ChevronLeft color="#2880FB" />
      </button>
      <button className="btnNext" onClick={() => next()}>
        <ChevronRight color="#2880FB" />
      </button>
    </div>
  );
};

function SliderPro({ t }) {
  return (
    <div className="DPBecomePro">
      <Container>
        <h2 className="DPBecomePro__title mb-0 pb-0 mb-xl-5 pb-xl-5">
          {t("BecomeProfesional.section_4.title")}
        </h2>
        <div className="DPBecomePro__carousel pt-5">
          <Carousel
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<CustomButtonGroup />}
          >
            {profesionals.map((dato) => {
              return (
                <CardPro
                  key={dato.id}
                  firstName={dato.firstName}
                  lastName={dato.lastName}
                  evaluation={dato.evaluation}
                  prestation={dato.presentation}
                  evaluationLabel={t(("BecomeProfesional.section_4.evaluaton"))}
                  serviceLabel={t(("BecomeProfesional.section_4.service"))}
                  urlImg={dato.urlImg}
                />
              );
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}

export default withTranslation()(SliderPro);
