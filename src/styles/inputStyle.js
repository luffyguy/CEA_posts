import {makeStyles} from '@material-ui/core/styles'

const useStyles =makeStyles(()=>({
    Form:{
        marginTop: '20%',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center'
    },
    Input:{
        width:'70%',
        padding:'10px',
        borderColor:'#f2f2f2',
        backgroundColor:'#f2f2f2',
        fontSize:'16px',
        border:'none',
        borderRadius:'5px'
    },
    Textarea:{
        width:'70%',
        padding:'10px',
        marginTop: '10px',
        resize: 'none',
        borderColor:'#f2f2f2',
        backgroundColor:'#f2f2f2',
        fontSize:'16px',
        border:'none',
        borderRadius:'5px'
    },
    Btn:{
        width:'50%',
        padding:'10px',
        marginTop:'10px',
        background:'crimson',
        color:'white',
        fontWeight: 'bold',
        border:'none',
        borderRadius:'5px'
    },
    alert:{
        color:'#6bff08'
    }
}))

export default useStyles;