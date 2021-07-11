import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import hero_image from '../../assets/images/index2.jpg';
import {Link} from 'react-router-dom';
import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
    
})

interface Props{
    title: string;
}

export const Home = ( props:Props ) => {
    
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={`${classes.logo}`}>
                        <Link to='/' className={`${classes.logo_a} ${classes.logo_navigation}`}>Marvel Home</Link>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                            </li>
                            {/* <AuthCheck fallback={ */}
                        <li>
                            <Link to='signin' className={classes.nav_a}>Sign In</Link>
                            </li>
                            {/* }> */}
                        <li>
                            <Link to='dashboard' className={classes.nav_a}>Dashboard</Link>
                            </li>
                            <li>
                            <Link to='signin' className={classes.nav_a}>Sign Out</Link>
                            </li>    
                            {/* </AuthCheck> */}
                    </ul>
                </div>
            </nav>

            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <p>Doin' the Right Thing</p>
                    {/* <Button color="primary" variant="contained">Click Me!</Button> */}
                </div>
            </main>
        </div>
    )
}