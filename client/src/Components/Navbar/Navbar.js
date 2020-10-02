import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
const Navbar = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }, []);
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <a href="/" className="brand-logo"><span style={{ color: 'black', marginLeft: '5px' }}>Codemon</span></a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger "><i className="material-icons"><span style={{ color: 'black' }}>menu</span></i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/course"><span style={{ color: 'black' }}>Course</span></Link></li>
                        <li><Link to="/login"><span style={{ color: 'black' }}>Login</span></Link></li>
                        <li><Link to="/register"><span style={{ color: 'black' }}>Register</span></Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;