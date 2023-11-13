import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import {AppBar, Typography, styled, Toolbar, Avatar, Button, CssBaseline} from "@material-ui/core";
import DiaryImage from '../../images/user memory for navbar.jpg';
import useStyles from './styles';

const Navbar = () => {
    const classes =useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
      dispatch({type: 'LOGOUT'})
      navigate('/');
      setUser(null);
      window.location.reload();
    }

    useEffect(() =>{
      if(user){
        const token = user.token;
      
        if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <CssBaseline />
    <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Diary</Typography>
    <img className={classes.image} src={DiaryImage} alt="memories" height="60"/>
    </div>

    <Toolbar className={classes.toolbar}>
      {user? (
        <div className={classes.profile}>
        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
        {/* <Typography className={classes.userName} variant="h6">{user.result.name}</Typography> */}
        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
      )}

    </Toolbar>
    </AppBar>
  );
}

export default Navbar;



// useEffect(() =>{
//   if(user === null){


//   } else{
//     const token = user.token;
  
//     if(token){
//       const decodedToken = decode(token)
//       if(decodedToken.exp * 1000 < new Date().getTime()) logout();
//     }
//   }
//   setUser(JSON.parse(localStorage.getItem('profile')));
// }, [location]);