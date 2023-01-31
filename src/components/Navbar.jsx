import React, { useState, useEffect } from "react";
import multiLang from "/src/scripts/multiLang.js";

function Navbar(props) {
  const textAbout = new multiLang('About', 'Sobre mi');
  const textExperience = new multiLang('Experience', 'Experiencia');
  const textContact = new multiLang('Contact', 'Contactame');

  return (
    <nav className="navbar navbar-expand-md navbar-dark px-md-5 px-3 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fs-2 text-light" href="#">An Diaz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarToggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#About">{textAbout[props.lang]}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Experience">{textExperience[props.lang]}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">{textContact[props.lang]}</a>
            </li>
            <li className="nav-item dropdown">
              <i className="bi bi-translate nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" />
              <ul className="dropdown-menu dropdown-menu-end">
                <li><h6 className="dropdown-header text-center">
                  {props.lang === 'eng' ? 'Lenguaje' : 'Language'}
                </h6></li>
                <li><a className="dropdown-item text-center active language-item">
                  {props.lang === 'eng' ? 'Ingles' : 'Spanish'}
                </a></li>
                <li><a className="dropdown-item text-center language-item" onClick={props.onClickLang}>
                  {props.lang === 'eng' ? 'Español' : 'English'}
                </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;