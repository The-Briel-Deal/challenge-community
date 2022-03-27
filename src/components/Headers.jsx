import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Collapse, MenuList } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((themes) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
    appbar:{
      background: 'none',
      fontFamily: "Nunito",
  },
  menuicon:{
      color:"black", 
      fontSize: '2rem',
  },
  appbarTitle:{
    color: 'black',
    flexGrow: "1",
  },
  appbarWrapper:{
    width: '80%',
    margin: '0 auto',
  },
  colorText:{
    color: "#FF6701",
  },
  title:{
      color: "black",
      fontSize: "3rem",
      fontFamily: "Nunito",
  },
  goDown:{
    color: "white",
  },
  container:{
    textAlign: 'center',
  },
  menustyle:{
    padding: "0px",
    margin: "0px",
  },
  buttonstyle:{
    padding: "0px",
    margin: "0px",
    
  },
}));

export default function Header() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [checked, setChecked] = useState(false);
  useEffect(() =>{
    setChecked(true);
  },[])
  


  
  return( 
    <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}> Challenge<span className={classes.colorText}>Community</span></h1> 
                <Button
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <IconButton className={classes.buttonstyle}>
                        <MenuIcon className={classes.menuicon}>
                            <MenuList></MenuList>
                            <MenuList></MenuList>
                            <MenuList></MenuList>
                        </MenuIcon>
                    </IconButton> 
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    "aria-labelledby": "basic-button"
                    }}
                >
                <Link to= "/AboutUs">About Us</Link>
                <br></br>
                <Link to= "/SignUp">Sign Up</Link>
                <br></br>
                <Link to= "/SignIn">Sign In</Link>
                <br></br>
                </Menu>
            </Toolbar>
        </AppBar>
        <Collapse 
            in={checked}
            {...(checked ? { timeout: 1500} : {} )}
            collapseHeight ={50}
        
        >
        
        <div>  
            <h1 className={classes.title}>Welcome to <br /> the 
                <span className={classes.colorText}> Challenge </span>Community
            </h1> 
            <IconButton>
                    <ExpandMoreIcon className = {classes.goDown} />
            </IconButton> 

        </div>

        </Collapse>

    </div>

  );
}