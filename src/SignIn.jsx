
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';





function SignInForm() { 

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

        //check if user is in the roach

        // move into the next page
    }

    return(



        <div className='container'>
            <div className='insideCard'>
                <h1>Sign In</h1>
                
                <form> 
                    <br></br>
                    <label>
                        <TextField id="outlined-basic" value={formData.Username} onChange={(event)=>{setFormData({...formData, Email: event.target.value})}} label="Username" variant="outlined" > </TextField>
                    </label>
                    <br></br>
                    <label>
                        <TextField id="outlined-basic" value={formData.Username} onChange={(event)=>{setFormData({...formData, password: event.target.value})}} label="password" variant="outlined" > </TextField>
                    </label>
                    <br></br>
                    <label>
                        <Button onClick={LoginUser} variant="outlined"><Link to= "/MainPage">Sign In</Link></Button>
                    </label>
                </form>


            </div>




        </div>



    );



}

export default SignInForm;