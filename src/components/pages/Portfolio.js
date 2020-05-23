import React from 'react';

const Portfolio = () => {
  return (
    <section className="section-tours" id="portfolio">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Portfolio</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Ayola Research Website
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>React</li>
                  <li>Material UI</li>
                  <li>Scrolling Text</li>
                  <li>Mobile-First</li>
                  <li>"Living Garden" Theme</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Completed</p>
                  <p className="card__price-value">2020</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Visit now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  The Real Fake Restaurant
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>React</li>
                  <li>Sass</li>
                  <li>Firebase Cloudshare</li>
                  <li>Resy & Google Maps API</li>
                  <li>"Rustic" Theme</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Completed</p>
                  <p className="card__price-value">2020</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Visit now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The Real Fake Band
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Completed</p>
                  <p className="card__price-value">2020</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Visit now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#contact" className="btn btn--green">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
