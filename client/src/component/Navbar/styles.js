import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 13,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
  },
  heading: {
    color: 'green',
    fontSize: '35px',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '300px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
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