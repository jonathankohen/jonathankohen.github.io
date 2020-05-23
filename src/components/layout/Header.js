import React from 'react';

import logo from '../../img/logo-initials.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hi, I'm Jon!</span>
          <span className="heading-primary--sub">I'm a Web Developer.</span>
        </h1>
        <a href="#services" className="btn btn--white btn--animated">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
