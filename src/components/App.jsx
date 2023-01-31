import React, { useState } from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import AboutWindow from "./AboutWindow";
import Experience from "./Experience";
import Contact from "./Contact";
import EndFooter from "./EndFooter";

export default function App() {
  const [curLang, setLang] = useState('eng');
  
  function switchLanguage(e) {
    setLang(curLang === 'eng' ? 'esp' : 'eng');
  }
  
  return (
    <main className="bg-black">
      <Navbar onClickLang={switchLanguage} lang={curLang} />
      <Header lang = {curLang} />
      <AboutWindow lang = {curLang} />
      <Experience lang = {curLang} />
      <Contact lang = {curLang} />
      <EndFooter lang = {curLang} />
    </main>
  )
}
