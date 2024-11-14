import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    const items = [
        {id: 1, name: "Login", href: "#"},
        {id: 2, name: "SignUp", href: "#"},
        {id: 3, name: "About", href: "#about"}
    ];

    const renderNav = () => {
        const navItems = items.map((each) => {
            const listItems = <li className="nav-item" key={each.id}>
                <a className="nav-link" href={each.href}>{each.name}</a>
            </li>
            return listItems;
        });
        return navItems;
    };

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="img-class" src="./img/MarketplaceIcon.jpg" alt="MarketplaceIcon" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {renderNav()}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;