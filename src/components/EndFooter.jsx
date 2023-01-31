import React from 'react';
import multiLang from '/src/scripts/multiLang.js';

function EndFooter(props) {
  const textMadeWith = new multiLang('Made with', 'Hecho con');
  const textBy = new multiLang('by', 'por');
  const textIllustrationBy = new multiLang('Illustrations by:', 'Ilustraciones hechas por:');
  const textFrom = new multiLang(' from ', ' de ');
  const textAnd = new multiLang(' and ', ' y ');
  const textHenryLogo = new multiLang(' Henry\'s logo.', ' su logo.');
  
  return (
    <section id='EndFooter' className='mt-4 mb-0'>
      <footer>
        <p className='text-center mb-0 fs-5 made-bar'>
          {textMadeWith[props.lang]} <span className='text-red'>❤</span> {textBy[props.lang]} An Diaz!
        </p>
        <p className='mb-0 p-2 fs-6'>
          {textIllustrationBy[props.lang]}
        </p>
        <ul className='mb-0'>
          <li>
            <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" target="_blank">Icons 8</a>
            {textFrom[props.lang]}
            <a href="https://icons8.com/illustrations" target="_blank">Ouch!</a>.
          </li>
          <li>
            <a href="https://emojipedia.org/microsoft-teams/" target="_blank">Microsoft Teams</a>,
            {' '}<a href="https://emojipedia.org/twitter-emoji-stickers/" target="_blank">Twitter Emoji Stickers</a>
            {textAnd[props.lang]}<a href="https://emojipedia.org/whatsapp/" target="_blank">WhatsApp</a>
            {textFrom[props.lang]}
            <a href="https://emojipedia.org/" target="_blank">Emojipedia</a>.
          </li>
          <li>
            <a href="https://www.soyhenry.com/" target="_blank">Henry</a>
            {textFrom[props.lang] + textHenryLogo[props.lang]}
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default EndFooter;