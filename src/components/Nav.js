import React from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <div className = 'nav'>
            <h1 className='title'>Games market Place</h1>   
            <Link className ="home"to = '/'>Home</Link>

        
        </div>
    );
}

export default Nav;
