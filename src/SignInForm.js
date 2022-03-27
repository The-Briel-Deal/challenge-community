import './index.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((themes)=> ({
    
    container:{
        position: 'absolute',
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
      },
      
      insideCard:{
        margin: '100px',
        boxShadow: '0px 0px 7px 3px grey',
        borderRadius: 50,
        background: 'white',
        
        
        
      },
      
      label1:{
        paddingTop: 10,
        paddingBottom:20,
        display: 'flex',
        justifyContent: 'center',
      
      },
      
      input:{
        display: 'flex',
        justifyContent: 'center',
        marginleft: '10px',
      
      },
      
      title:{
        display: 'flex',
        justifyContent: 'center',
        fontfamily: 'Russo One, sans-serif',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingBottom: '20px',
        background: '#FF6701',
        color: 'white',
        paddingTop: 20, 
      },
      
      CurInt:{
        backgroundcolor: 'lightgrey',
        margin: '20px',
        borderradius: '5px',
        padding: '5px',
      }

}));




function SignInForm() { 

    const classes = useStyles();

    const EmptyData = 
    {
        Username: '',
        password: ''
    }

    const [formData, setFormData] = useState(EmptyData);
    let[user, setUser] = useState([]);

    let LoginUser = () =>{
        setUser({...user, ...{
            Email: formData.Username,
            Password: formData.password
        }})

        
    }

    return(
        <div className={classes.container}>
            <div className={classes.insideCard}>
                <h1 className={classes.title}>Sign In</h1>
                
                <form> 
                    <br></br>
                    <label className={classes.label1}>
                        <TextField id="outlined-basic" value={formData.Username} onChange={(event)=>{setFormData({...formData, Email: event.target.value})}} label="Username" variant="outlined" > </TextField>
                    </label>
                    <br></br>
                    <label className={classes.label1}>
                        <TextField id="outlined-basic" value={formData.Username} onChange={(event)=>{setFormData({...formData, password: event.target.value})}} label="password" variant="outlined" > </TextField>
                    </label>
                    <br></br>
                    <label className={classes.label1}>
                        <Button onClick={LoginUser} variant="outlined">Sign In</Button>
                    </label>
                </form>


            </div>




        </div>



    );



}




export default SignInForm;