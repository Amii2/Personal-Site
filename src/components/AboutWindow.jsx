import React from 'react';
import multiLang from "/src/scripts/multiLang.js";

function AboutWindow(props) {
  const textWindowTitle = new multiLang('About', 'Sobre mi');
  const textAbout01 = new multiLang('I\'m 22 years old and I live in Bogota, Colombia.', 'Tengo 22 años y vivo en Bogota, Colombia.');
  const textAbout02 = new multiLang('I like to travel, play tennis and share with my family in my free\xA0time!', 'Me gusta viajar, jugar tennis y compartir con mi familia en mi tiempo\xA0libre!');
  const textAbout03 = new multiLang('I started coding when I was 14 years old, I learned to code because I wanted to make my own video game and after seeing all the things that could be done with it, I started to make and design my own apps and tools that helped my with different tasks and sometimes just for\xA0fun.', 'Comenze a programar cuando tenia 14 años porque queria crear mi propio videojuego y despues de ver todas las cosas que podia hacer con esta habilidad, empeze a hacer mis propias aplicaciones y herramientas que me ayudaban con diferentes tareas y algunas veces solo por\xA0hobby.');
  
  return (
    <section id="About">
      <div className='mx-auto mt-5 about-window rounded'>
        <div className='rounded-top position-relative about-top-bar'>
          <div className='user-select-none button-container me-md-5'>
            <span className='window-button d-inline-block rounded-circle'>o</span>
            <span className='window-button d-inline-block rounded-circle ms-2'>o</span>
            <span className='window-button d-inline-block rounded-circle ms-2'>o</span>
          </div>
          <div className='text-center user-select-none py-1'>
            <span className='fw-bold fs-5 window-title'>{textWindowTitle[props.lang]}</span>
          </div>
        </div>
        <div className='text-center user-select-none about-bottom-bar'>
          <span className='d-block fst-italic'>www.webdipedia.org/andiaz</span>
        </div>
        <div className='rounded-bottom about-main p-sm-4 p-3'>
          <div className='about-content mx-auto rounded p-2 ps-3'>
            <img src='./public/images/emoji01.png' className='float-start about-image me-md-3' />
            <p className='text-black mb-0'>
              {textAbout01[props.lang]}
              <span className='text-nowrap'>
                &nbsp;
                <img src='./public/images/emoji02.png' className='small-emoji' />
              </span>
            </p>
            <p className='text-black mb-0'>
              {textAbout02[props.lang]}
            </p>
            <hr className='about-hr my-3' />
            <p className='text-black mb-0'>
              {textAbout03[props.lang]}
              <span className='text-nowrap'>
                &nbsp;
                <img src='./public/images/emoji03.png' className='small-emoji'/>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutWindow;