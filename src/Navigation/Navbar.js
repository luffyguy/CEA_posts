import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/NavStyles';

function Navbar(){
    const classes = useStyles();

        return (
            <div className={classes.bar}>

                <Link className={classes.buttons} to="/">
                    <Button>
                        create
                    </Button>
                </Link>

                <Link className={classes.buttons} to="/show">
                     <Button>Show</Button>
                </Link>
                <Link className={classes.buttons} to="/liked">
                    <Button>liked</Button>
                </Link>
                <Link className={classes.buttons} to="/disliked">
                    <Button>disliked</Button>
                </Link>
 
            </div>
        )
}
export default Navbar