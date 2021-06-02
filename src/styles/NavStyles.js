import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    '& > *': {
      margin: theme.spacing(1),
    },

    width:'100%'
  },
  buttons:{
    backgroundColor:'#fd4d4d',
    textDecoration:'none',
    padding:'1px',
    borderRadius:'4px'
  },
 
}));

export default useStyles;