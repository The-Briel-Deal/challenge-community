import { Grid, TextField, createTheme, ThemeProvider} from '@mui/material'
import { styled } from '@mui/material/styles';
import Headers from '../components/Headers'

function LandingPage() {
  return (
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
          <Headers />
        </Grid>
      </Grid> 
  );
}

export default LandingPage;
