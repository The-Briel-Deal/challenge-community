import './index.css'
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ReactComponent as Stock } from './stock.svg';
import DataCards from "./DataCards"

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
      },

      images:{
          display: 'inline-block',
          width: 300,
          height: 300,
          verticalAlign: -100,
          margin: 20
      },

      hclass:{
          display: 'inline-block',
          verticalAlign: -75,
        
           
      },
      cardSpace:{
        padding: 50,
      },

}));



function My(){

    const classes = useStyles();



    return(
      <>
      <div className={classes.images}>
        <Stock className={classes.images} />
      </div>
      <div className={classes.hclass}>
      <h1 >Email: JohnSmith@gmail.com</h1>
      
      <h1 >UserName: JohnSmitty10</h1>
      
      <h1>Main Interest: Snorkeling</h1>
      </div>


      <br></br>
      <div>
        <h1>My Challenges</h1>
          <br></br> 
          <DataCards className={classes.cardSpace}/>
      </div>
      </>
    );
}
export default My;