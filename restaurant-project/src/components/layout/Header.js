import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
    // background: '#85a8c7',
    // color: '#fff',
    textAlign: 'center',
    borderLeft: '8px solid #fff599'
    // borderRight: '2px solid #fff599'
    // borderBottom: '2px solid #fff599'
    // borderTop: '2px solid #4d4d4d',
    // borderRight: '2px solid #4d4d4d'
};

const linkStyle = {
    fontFamily: 'Playfair Display, serif',
    color: '#000',
    fontSize: '36px'
};

const lineStyle = {
    fontFamily: 'Playfair Display, serif',
    color: '#444',
    fontSize: '36px'
};

function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <header style={headerStyle} className="rounded p-2 my-5">
                        <Link to="/" style={linkStyle}>
                            Home
                        </Link>
                        <span style={lineStyle}>{' | '}</span>
                        <Link to="/menu" style={linkStyle}>
                            <span style={linkStyle}>Menu</span>
                        </Link>
                        <span style={lineStyle}>{' | '}</span>
                        <Link to="/directions" style={linkStyle}>
                            <span style={linkStyle}>Directions</span>
                        </Link>
                        <span style={lineStyle}>{' | '}</span>
                        <Link to="/reservations" style={linkStyle}>
                            <span style={linkStyle}>Reservaions</span>
                        </Link>
                        <span style={lineStyle}>{' | '}</span>
                        <Link to="/contact" style={linkStyle}>
                            <span style={linkStyle}>Contact</span>
                        </Link>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default Header;
