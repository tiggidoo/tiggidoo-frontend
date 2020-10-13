/* This is the sectin 4 of Devenir Pro page. 
   Here we have a slider with some people who become in a professional
*/

import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import { withTranslation } from "react-i18next";


import "react-multi-carousel/lib/styles.css";
import '../../../../css/views/devenir_pro/becomepro.scss';
import CardPro from './CardPro';

const responsive = {
   desktop: {
     breakpoint: { max: 3000, min: 1024 }, //max: 3000, min: 1024
     items: 5,
     slidesToSlide: 3 // optional, default to 1.
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 }, //max: 1024, min: 464
     items: 2,
     slidesToSlide: 2 // optional, default to 1.
   },
   mobile: {
     breakpoint: { max: 464, min: 0 }, //max: 464, min: 0
     items: 1,
     slidesToSlide: 1 // optional, default to 1.
   }

 };

const profesionals = [
   {
      id: 0,
      firstName: 'John',
      lastName: 'Clavijo',
      evaluation: '3,9',
      presentation: '32',
      urlImg: 'img1'
   },
   {
      id: 1,
      firstName: 'Mark',
      lastName: 'Kram',
      evaluation: '4,5',
      presentation: '25',
      urlImg: 'img2'
   },
   {
      id: 2,
      firstName: 'Kim',
      lastName: 'Humnis',
      evaluation: '45,2',
      presentation: '25',
      urlImg: 'img3'
   },
   {
      id: 3,
      firstName: 'NN',
      lastName: 'NN',
      evaluation: '45,2',
      presentation: '25',
      urlImg: 'nn'
   },
   {
      id: 4,
      firstName: 'Melisa',
      lastName: 'Asilem',
      evaluation: '2,5',
      presentation: '14',
      urlImg: 'img4'
   },
   {
      id: 5,
      firstName: 'Alice',
      lastName: 'Ecila',
      evaluation: '1.89',
      presentation: '34',
      urlImg: 'img5'
   },
   {
      id: 6,
      firstName: 'Thomas',
      lastName: 'Samoht',
      evaluation: '6,8',
      presentation: '45',
      urlImg: 'nn'
   },
   {
      id: 7,
      firstName: 'Luis',
      lastName: 'Siul',
      evaluation: '3,8',
      presentation: '99',
      urlImg: 'nn'
   },
   {
      id: 8,
      firstName: 'Thomas',
      lastName: 'Samoht',
      evaluation: '6,8',
      presentation: '45',
      urlImg: 'nn'
   },
];


function BecomePro({ t }){

    return(
       <section className="DPBecomePro">
         <Container>

            <h2 className="DPBecomePro__title mb-0 pb-0 mb-xl-5 pb-xl-5">Devenez un professionnel du ménage avec Tiggidoo</h2>
            {/* <h1>Proposez vos services comme aide de ménage avec Tiggidoo</h1> */}
            <div className="DPBecomePro__carousel pt-5">

            {/* customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />} */}
               <Carousel responsive={responsive} >

                  {profesionals.map(dato => { 
                     return(
                        <CardPro           
                           key = {dato.id}
                           firstName={dato.firstName} 
                           lastName={dato.lastName}
                           evaluation={dato.evaluation}
                           prestation={dato.presentation}
                           urlImg={dato.urlImg}
                        />
                     );

                  })}

               </Carousel>
            </div>
         </Container>
      </section>
   );
}

export default  withTranslation()(BecomePro);