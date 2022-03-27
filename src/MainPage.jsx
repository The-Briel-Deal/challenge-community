import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AboutUs from "./AboutUs";
import View from "./View";
import DataCards from "./DataCards";
import Create from "./Create";


export default function CenteredTabs() {
  const [value, setValue] = React.useState(<AboutUs/>);
  const handleChange = (event, newValue) => {
    console.log(newValue)
    if (newValue ===  1){
      console.log("two")
      setValue(<DataCards/>)
    } else if (newValue ===  2){
      setValue(<Create/>)
    }else{
      setValue(<Create/>)
    }
  };

  return (
    <div>

      <Box sx={{ width: '100%', bgcolor: '#white' }}>
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Create" />
      <Tab label="View" />
      <Tab label="My" />
    </Tabs>
  </Box>

  <div className='box-container'>
    <div>{value}</div>

    </div>

  </div>
  );
}