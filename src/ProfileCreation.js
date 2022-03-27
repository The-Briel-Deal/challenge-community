import './index.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';
import  Autocomplete  from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import { borders } from '@mui/system';
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


function ProfileCreation() {
    
    const classes = useStyles();

    const clearData =
    {
        Email: '',
        Username: '',
        password: '',
        interests: ''
    };
    

    const Possibleinterests =[
        {title: 'Computer Science', ID: 1},
        {title: 'Computer Hardware',ID: 2},
        {title: 'Running',ID: 3},
        {title: 'Strength Training',ID: 4},
        {title: 'Snorkeling',ID: 5}
    ];
    

    const [formData, setFormData] = useState(clearData);    
    let [user, setUser] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(Possibleinterests[0].title);
    const handleChange = (event, value) => setSelectedOptions(value);
    

    const createUser = () =>{
        setUser({...user, ...{
            Email: formData.Email,
            Username: formData.Username,
            password: formData.password,
            interests: selectedOptions.title
        }})
        
        setFormData(clearData);
    }
    
    

    console.log(user)

  
    return(
    
        <div className={classes.root} >

            <div className={classes.insideCard}>
                
                <h1 className={classes.title}>Profile Creation</h1>
                <form>
                    <br></br>
                    <label className={classes.label1}>
                        <TextField sx={{ width: 220 }} id="outlined-basic" value={formData.Email} onChange={(event)=>{setFormData({...formData, Email: event.target.value})}} label="Email" variant="outlined" />
                    </label>
                    <br></br>
                    <label className={classes.label1}>
                        <TextField sx={{ width: 220 }} id="outlined-basic" value={formData.Username} onChange={(event)=>setFormData({...formData, Username: event.target.value})} label="Username" variant="outlined"/>
                    </label>
                    <br></br>
                    <label className={classes.label1}>
                        <TextField sx={{ width: 220 }} id="outlined-basic" value={formData.password} onChange={(event)=>setFormData({...formData, password: event.target.value})} label="Password" variant="outlined"/>
                    </label>
                    <br></br> 
                    
                    
                    
                    <label className={classes.label1}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Possibleinterests}
                        sx={{ width: 220 }}
                        onChange = {handleChange}
                        isOptionEqualToValue={(option, value) => option.title === value.title}
                        getOptionLabel = {option => option.title}
                        renderInput={(params) => <TextField {...params} label="Main Interest" 
                        />}
                        />
                    </label> 
                        
                    <label className={classes.label1}>
                    <Button variant="outlined" onClick={createUser}  >Sign Up</Button>
                    </label>


                    <br></br> 
                    
                </form>





            </div> 

        </div>
        
    );
}

export default ProfileCreation;