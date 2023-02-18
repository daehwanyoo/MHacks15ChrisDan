import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <Link to="/">
                <h1>Practicely</h1>
            </Link>
        </>
    );
}

export default Header;