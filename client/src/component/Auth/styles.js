// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
  },
  ternary_button: {
    marginBottom: theme.spacing(-1),
    marginTop: theme.spacing(1),
    padding: '20px 0px 2px',
    textTransform: 'none',

  },
  button: {
    backgroundColor: 'white',
    padding: 2,
    textTransform: 'none',
    marginTop: theme.spacing(2),
  },
  google_btn:{
    color: 'white',
    background: 'white',
    marginTop: theme.spacing(0),
    padding: '0px',
    textTransform: 'none',
    display: 'flex',
    
  },

  fb_btn:{
    background: 'yellow',
    padding: '0px',
    marginTop: theme.spacing(2),
  }

}));