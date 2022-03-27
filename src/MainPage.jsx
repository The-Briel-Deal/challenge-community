import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';


export default function CenteredTabs() {



  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const routes = ["/Create"];

  return (
    <Box sx={{ width: '100%', bgcolor: 'orange' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Create" value = {routes[0]} />
        <Tab label="View" />
        <Tab label="My" />
      </Tabs>
    </Box>
  );
}

