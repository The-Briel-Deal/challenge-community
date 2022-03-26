import './index.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

function ProfileCreation() {
    
 

    const clearData =
    {
        Email: '',
        Username: '',
        password: '',
        interests: ''
    };
    

    
    const [formData, setFormData] = useState(clearData);    
    let [user, setUser] = useState([]);

    const createUser = () =>{
        setUser({...user, ...{
            Email: formData.Email,
            Username: formData.Username,
            password: formData.password,
            interests: formData.interests
        }})
        
        setFormData(clearData);
    }
    console.log(user)

  
    return(
        <div>

            <div className="insideCard">
                
                <h1 >Profile Creation</h1>
                <form>
                    <br></br>
                    <label>
                        <TextField id="outlined-basic" value={formData.Email} onChange={(event)=>{setFormData({...formData, Email: event.target.value})}} label="Email" variant="outlined" />
                    </label>
                    <br></br>
                    <label>
                        <TextField id="outlined-basic" value={formData.Username} onChange={(event)=>setFormData({...formData, Username: event.target.value})} label="Username" variant="outlined"/>
                    </label>
                    <br></br>
                    <label>
                        <TextField id="outlined-basic" value={formData.password} onChange={(event)=>setFormData({...formData, password: event.target.value})} label="Password" variant="outlined"/>
                    </label>
                    <br></br> 
                    <label>
                        <TextField id="outlined-basic" value={formData.interests} onChange={(event)=>setFormData({...formData, interests: event.target.value})} label="interests" variant="outlined"/>
                    </label> 
                    <container>
                        
                    </container>
                    <label>
                    <Button variant="outlined" onClick={createUser} >Sign Up</Button>
                    </label>
                    <br></br> 
                    
                </form>





            </div> 

        </div>
    );
}

export default ProfileCreation;