import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <Link to="/"><blockquote class="blockquote text-center">
 	 <h1>Practicely</h1>
 	 </blockquote>
                
            </Link>
        </>
    );
}

export default Header;