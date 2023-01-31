import React, { useState, useEffect } from 'react';
import multiLang from "/src/scripts/multiLang.js";

function Contact(props) {
  const textTitle = new multiLang('Let\'s work together!', 'Trabajemos juntos!');
  const textSubTitle = new multiLang('Please feel free to contact\xA0me:', 'Contactame:');
  const textPopoverTitle01 = new multiLang('Phone number:', 'Telefono:');
  const textPopoverTitle02 = new multiLang('Email:', 'Correo:');

  const [popoverList, setPopoverList] = useState();
  
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    setPopoverList( [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl)) );
  }, []);

  function handlePopoverClick(e) {
    e.target.blur();
  }

  function setPopoverTitles() {
    if (popoverList) popoverList.forEach((popover, i) => {
      if (i !== 2) {
        const text = eval('textPopoverTitle0' + (i + 1));
        popover._config.title = text[props.lang];
      }
    });
  }
  
  return (
    <section id='Contact'>
      <div className='rounded bg-white w-75 mx-auto pb-1 text-black text-center'>
        <div className='contact-title-background rounded-top'>
          <h1 className='display-5 contact-title fw-bold py-3'>{textTitle[props.lang]}</h1>
        </div>
        <p className='fs-5'>{textSubTitle[props.lang]}</p>
        <address className='hstack justify-content-center gap-2'>
          {setPopoverTitles()}
          <a type="button" className="btn btn-contact" data-bs-toggle="popover" data-bs-placement="top" data-bs-custom-class="contact-popover" data-bs-content="(+57) 315 786 2936" data-bs-trigger='hover focus' href='https://wa.me/+573157862936' target="_blank" onClick={handlePopoverClick}>
            <i className="bi bi-whatsapp" /> | <i className="bi bi-telephone-fill" />
          </a>
          <a type="button" className="btn btn-contact" data-bs-toggle="popover" data-bs-placement="top" data-bs-custom-class="contact-popover" data-bs-content="Meganar7777@gmail.com" data-bs-trigger='hover focus' href='mailto:meganar7777@gmail.com' target='_blank' onClick={handlePopoverClick}>
            <i className="bi bi-envelope-at-fill" />
          </a>
          <a type="button" className="btn btn-contact" data-bs-toggle="popover" data-bs-placement="top" data-bs-custom-class="contact-popover" data-bs-title="LinkedIn:" data-bs-content="Andrés Díaz" data-bs-trigger='hover focus' href='https://www.linkedin.com/in/andr%C3%A9s-felipe-d%C3%ADaz-sanabria-855522232?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWPnqXQsPRCKjZP71BgcJrQ%3D%3D' target='_blank' onClick={handlePopoverClick}>
            <i className="bi bi-linkedin" />
          </a>
        </address>
      </div>
    </section>
  );
}

export default Contact;