import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              <span>01</span>About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#services" className="navigation__link">
              <span>02</span>Services
            </a>
          </li>
          <li className="navigation__item">
            <a href="#portfolio" className="navigation__link">
              <span>03</span>Portfolio
            </a>
          </li>
          <li className="navigation__item">
            <a href="#skills" className="navigation__link">
              <span>04</span>Skills
            </a>
          </li>
          <li className="navigation__item">
            <a href="#contact" className="navigation__link">
              <span>05</span>Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
