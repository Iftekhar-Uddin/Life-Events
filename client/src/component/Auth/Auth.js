import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, Link} from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useStyles from './styles';
import Input from './Input';
import {signin, signup} from '../../actions/auth';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword((PrevShowPassWord)=> !PrevShowPassWord)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const SwitchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    const onSuccess = async (res) => {
        const result = await jwt_decode(res.credential);
        const token = (res.credential);

        try {
            dispatch({type: 'AUTH', data: {result, token}});
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    };

    const onError = (e) => {
        console.log(e);
        console.log("google SignIn Faild. Try again later");
    };


  return (
    <Container component= "main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutLinedIcon/>
            </Avatar>
            <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                { isSignUp && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange } autoFocus half/>
                            <Input name="lastName" label="Last Name" handleChange={handleChange } half/>
                        </>
                    ) 
                }  
                <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            {isSignUp ? null :
            <Button className={classes.google_btn} fullWidth variant="outlined">
            <GoogleOAuthProvider clientId = "881219742989-ngkdnopvdl8cfj6agtggul57cb6pvp59.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onError}
                cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
            </Button>
            }
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button color="primary" className={classes.ternary_button} onClick={SwitchMode}>
                      <Link href="#" variant="body2">
                        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                      </Link>
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth;





// const componentClicked = (req) => {

// };

// const responseFacebook = async (res) => {
//     const result = await res;
//     const token = res.signedRequest;
//     console.log(token)

//     try {
//         dispatch({type: 'AUTH', data: {result, token}});
//         navigate('/');
//     } catch (error) {
//         console.log(error)
//     }
// };


// <Button className={classes.fb_btn} fullWidth variant="outlined">
//     <FacebookLogin
//         appId="620084610162506"
//         autoLoad={false}
//         fields="name,email,picture"
//         onClick={componentClicked}
//         callback={responseFacebook} 
//     />
// </Button>