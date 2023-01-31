import React from 'react';
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import multiLang from "/src/scripts/multiLang.js";

function Experience(props) {
  const textTitle = new multiLang('Experience', 'Experiencia');
  const textBody01 = new multiLang('I\'m currently studying at ', 'Actualmente me encuentro estudiando en ');
  const textBody02 = new multiLang('where I\'m able to gain experience, knowledge and work on the skills required to become a professional Full Stack Web\xA0Developer.', 'donde obtengo la experiencia, conocimiento y puedo trabajar en las habilidades necesarias para ser Full Stack Web\xA0Developer.');
  
  return (
    <section id='Experience' className='mt-5 pt-2 mb-5'>
      <MouseParallaxContainer resetOnLeave={true} globalFactorX={-0.05} globalFactorY={-0.2} className='overflow-visible'>
        <div className='text-center position-relative' style={{ zIndex: '1' }}>
          <h1 className='fw-bold mb-2'>{textTitle[props.lang]}</h1>
          <div className='w-50 m-auto fs-5'>
            <p className='d-inline mb-0'>
              {textBody01[props.lang]}
            </p>
            <a href='https://www.soyhenry.com/' target="_blank" className='henry-link text-nowrap'>
            <img src='./public/images/henrylogo.jpg' className='rounded-circle me-1' />
              Henry
            </a>
            <p className='d-inline mb-0'>
              &zwj;, {textBody02[props.lang]}
            </p>
          </div>
        </div>
        <div className='hstack position-absolute top-0 w-100 h-100 user-select-none'>
          <div className='vstack justify-content-evenly'>
            <MouseParallaxChild style={{ marginLeft: '30%' }} factorX={0.8} factorY={0.8}>
              <span className="devicons devicons-html5 fs-1" />
            </MouseParallaxChild>
            <MouseParallaxChild style={{ marginLeft: '15%' }}>
              <span className="devicons devicons-css3 fs-1" />
            </MouseParallaxChild>
            <MouseParallaxChild style={{ marginLeft: '23%' }} factorX={0.6} factorY={0.6}>
              <span className="devicons devicons-javascript fs-1" />
            </MouseParallaxChild>
          </div>
          <div className='vstack justify-content-evenly align-items-end'>
            <MouseParallaxChild style={{ marginRight: '30%' }} factorX={0.8} factorY={0.8}>
              <span className="devicons devicons-react fs-1" />
            </MouseParallaxChild>
            <MouseParallaxChild style={{ marginRight: '15%' }}>
              <span className="devicons devicons-bootstrap fs-1" />
            </MouseParallaxChild>
            <MouseParallaxChild style={{ marginRight: '23%' }} factorX={0.6} factorY={0.6}>
              <span className="devicons devicons-git fs-1" />
            </MouseParallaxChild>
          </div>
        </div>
      </MouseParallaxContainer>
    </section>
  );
}

export default Experience;