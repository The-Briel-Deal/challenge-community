import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box, CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header';
import { blue } from '@material-ui/core/colors';


// const useStyles = makeStyles((themes) => ({
//   root: {
//      minHeight: '100vh',
//     backgroundImage: `url(${process.env.PUBLIC_URL + 'background.jpg'})`,
//     backgroundRepeat:"no-repeat",
//     backgroundSize: 'cover',
//      // background: "rgb(232, 241, 250)",

//   },
// }));

export default function App() {
  // const classes = useStyles();
  return (
    <>
    <body>Hello</body>
    <Grid
        sx={{
          bgcolor: '#FCECDD'
        }}
        container
        color={'#FCECDD'}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
      <Header />
      </Grid>
      </Grid>
      </>
  );

}












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>This is text between</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
