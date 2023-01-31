import React from "react";
import multiLang from "/src/scripts/multiLang.js";

function Header(props) {
  const textTitle = new multiLang('Hello, I\'m An Diaz!', 'Hola, soy An Diaz!');
  const textSubTitle = new multiLang('A Full Stack Web\xA0Developer', 'Full Stack Web\xA0Developer');

  function espTitleStyle() {
    if (props.lang === 'esp') return { lineHeight: 'normal'};
  }

  return (
    <section id='Header'>
      <div className="container-fluid mt-4 pb-2 text-center">
        <div className='header-text d-md-inline-block align-middle'>
          <h1 className='display-1 mb-0' style={espTitleStyle()}>{textTitle[props.lang]}</h1>
          <h1 className="display-6 mt-0">{textSubTitle[props.lang]}</h1>
        </div>
        <img src="./public/images/main-title-img.png" className='header-image' />
      </div>
    </section>
  );
}

export default Header;