import React from 'react';
import {Link} from 'react-router-dom';


function HeaderComp() {
    return (
        <header>
            <nabvar>
                <ul style={{textAlign: "start"}}>
                    <li><Link to='/home'>home</Link></li>    
                    <li><Link to='/about'>about</Link></li>                  
                </ul>
            </nabvar>
        </header>
    )
}
export default HeaderComp;