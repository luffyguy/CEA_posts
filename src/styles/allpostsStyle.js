import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    postContainer:{
        marginTop:'20px',
        padding:'25px',
        color:'white'
    },
    paper:{
        padding:'10px',
        marginBottom:'10px',
        background:'#212332',
        color: '#dee3ea',
        '&:hover':{
            transform: 'scale(1.01)' 
        }
    },
    btn1:{
        marginLeft:'8px',
        backgroundColor:'#FA862E',
        textDecoration:'none',
        padding:'4px',
        color:'white'
    },
    likebtn:{
        marginLeft:'8px',
        backgroundColor:'#875cff',
        textDecoration:'none',
        padding:'4px',
        color:'white'
    },
    dislikebtn:{
        marginLeft:'8px',
        backgroundColor:'#875cff',
        textDecoration:'none',
        padding:'4px',
        color:'white'
    },
    id:{
        fontWeight:'bold'
    }

}));

export default useStyles;