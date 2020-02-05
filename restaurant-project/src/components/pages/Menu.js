import React, { Component } from 'react';
import Header from '../../components/layout/Header';
import menu from '../../images/menu.jpg';

const hrStyle = {
    border: '1px solid #4d4d4d'
};

const topImage = {
    border: '1rem double #1f4261'
};

const whateverTheHeck = [
    {
        value: 'whatever'
    },
    {
        value: 'whatever2'
    }
];

const menuItems = [
    {
        menuItem: 'Kkrabby Ppatty',
        price: '$1.25'
    },
    {
        menuItem: 'Krabby Mmeal',
        price: '3.50'
    },
    { menuItems: 'Kkrabby Patty w/ Ssea Cheese', price: '$1.50' }
];

export class Menu extends Component {
    render() {
        return (
            <React-Fragment>
                <Header />
                <div className="row mb-5">
                    {whateverTheHeck.map(heck => {
                        return <React-Fragment>{heck.value}</React-Fragment>;
                    })}
                    <div className="col text-center">
                        <h1>Gallery Grub</h1>
                    </div>
                </div>
                <div className="row mb-5">
                    <img
                        style={topImage}
                        className="img-fluid rounded-circle w-75 mx-auto d-block p-2"
                        src={menu}
                        alt="The Krusty Krab"
                    />
                </div>

                <div className="row">
                    <div className="col">
                        <table class="table">
                            <tbody>
                                {menuItems.map(heck => {
                                    return (
                                        <React-Fragment>
                                            <tr>
                                                <td>{heck.menuItem}</td>
                                                <td>{heck.price}</td>
                                            </tr>
                                        </React-Fragment>
                                    );
                                })}
                                {/* <tr>
                                    <td>
                                        &emsp;&emsp;
                                        <i>
                                            <i>w/sea cheese</i>
                                        </i>
                                    </td>
                                    <td>$1.50</td>
                                    <td>Double Krabby Me</td>
                                    <td>$4.00</td>
                                </tr>
                                <tr>
                                    <td>Double Krabby Patty</td>
                                    <td>$2.00</td>
                                    <td>Triple Krabby Me</td>
                                    <td>$4.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        &emsp;&emsp;<i>w/sea cheese</i>
                                    </td>
                                    <td>$2.25</td>
                                    <td>Salty Sea Dog</td>
                                    <td>$1.25</td>
                                </tr>
                                <tr>
                                    <td>Triple Krabby Patty</td>
                                    <td>$3.00</td>
                                    <td>Footlong</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        &emsp;&emsp;<i>w/sea cheese</i>
                                    </td>
                                    <td>$3.25</td>
                                    <td>Sailor's Surprise</td>
                                    <td>$3.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Golden Loaf</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>&emsp;&emsp;w/sauce</td>
                                    <td>$2.50</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <hr style={hrStyle} />
                <br />
                <br />
                <div className="row">
                    <div className="col">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td colspan="2">Coral Bits</td>
                                    <td>Kelp Shake</td>
                                    <td>$2.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        &emsp;&emsp;<i>Small</i>
                                    </td>
                                    <td>$1.00</td>
                                    <td colspan="2">Seafoam Soda</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        &emsp;&emsp;<i>Medium</i>
                                    </td>
                                    <td>$1.25</td>
                                    <td>
                                        &emsp;&emsp;<i>Small</i>
                                    </td>
                                    <td>$1.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        &emsp;&emsp;<i>Large</i>
                                    </td>
                                    <td>$1.50</td>
                                    <td>
                                        &emsp;&emsp;<i>Medium</i>
                                    </td>
                                    <td>$1.25</td>
                                </tr>
                                <tr>
                                    <td>Kelp Rings</td>
                                    <td>$1.50</td>
                                    <td>
                                        &emsp;&emsp;<i>Large</i>
                                    </td>
                                    <td>$1.50</td>
                                </tr>
                                <tr>
                                    <td>
                                        &emsp;&emsp;<i>w/salty sauce</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React-Fragment>
        );
    }
}

export default Menu;
