import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';
import  Autocomplete  from '@mui/material/Autocomplete';
import axios from 'axios';

function ProfileCreation() {
    
 

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
        <div className="container">

            <div className="insideCard">
                
                <h1>Profile Creation</h1>
                <form>
                    <br></br>
                    <label>
                        <TextField sx={{ width: 220 }} id="outlined-basic" value={formData.Email} onChange={(event)=>{setFormData({...formData, Email: event.target.value})}} label="Email" variant="outlined" />
                    </label>
                    <br></br>
                    <label>
                        <TextField sx={{ width: 220 }} id="outlined-basic" value={formData.Username} onChange={(event)=>setFormData({...formData, Username: event.target.value})} label="Username" variant="outlined"/>
                    </label>
                    <br></br>
                    <label>
                        <TextField sx={{ width: 220 }} id="outlined-basic" value={formData.password} onChange={(event)=>setFormData({...formData, password: event.target.value})} label="Password" variant="outlined"/>
                    </label>
                    <br></br> 
                    
                    
                    
                    <label>
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
                        
                    <label>
                    <Button variant="outlined" onClick={createUser}  >Sign Up</Button>
                    </label>


                    <br></br> 
                    
                </form>





            </div> 

        </div>
    );
}

export default ProfileCreation;