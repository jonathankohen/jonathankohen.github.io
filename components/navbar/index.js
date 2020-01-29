import React, { Component } from "react";
import Link from "next/link"
import "./navbar.scss"

const linkStyle = {
	marginRight: 15
};

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    render() {
        return (
            <nav>
                <div>
				<Link href="/">
					<a title="Home" style={linkStyle}>Home</a>
				</Link>
				<Link title="Menu" href="/menu">
					<a style={linkStyle}>Menu</a>
				</Link>
				<Link href="/reservations">
					<a title="Reservations" style={linkStyle}>Reservations</a>
				</Link>
				<Link href="/directions">
					<a title="Directions" style={linkStyle}>Directions</a>
				</Link>
				<Link href="/contact">
					<a title="Contact" style={linkStyle}>Contact</a>
				</Link>
				<mark className="badge">Heylo!</mark>
			</div>
            </nav>
        )
    }
}

export default Navbar