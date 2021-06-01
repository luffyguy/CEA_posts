import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
        return (
            <div>
                <Link to="/">home</Link>
                <Link to="/show">allposts</Link>
                <Link to="/liked">likedS</Link>
                <Link to="/disliked">disliked</Link>
            </div>
        )
}
export default Navbar