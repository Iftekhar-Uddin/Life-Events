import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 13,
    margin: '10px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 25px',
  },
  heading: {
    color: 'green',
    fontSize: '25px',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '350px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '150px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  logout:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '78px',
    height: '37px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));