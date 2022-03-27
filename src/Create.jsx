import { Grid, TextField, createTheme, ThemeProvider} from '@mui/material'
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#FFC288',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FFC288',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FF6701',
    },
    '&:hover fieldset': {
      borderColor: '#FEA82F',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFC288',
    },
  },
});

function CreateChallenge() {
  return (
      <Grid
        sx={{
          bgcolor: '#FCECDD'
        }}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <h1>Create Challenge</h1>
        </Grid>
        <Grid item xs={3}>
        <CssTextField 
          id="outlined-basic" 
          label="Challenge Name" 
          variant="outlined"
          sx={{ m: 2 }}

          />
          <br />
        <CssTextField 
          id="outlined-basic" 
          label="Time Commitment" 
          variant="outlined"
          sx={{ m: 2 }}

          />
          <br />
        <CssTextField 
          id="outlined-basic" 
          label="Number of Users" 
          variant="outlined"
          sx={{ m: 2 }}

          />
          <br />
        <CssTextField 
          id="outlined-basic" 
          label="Description" 
          variant="outlined"
          sx={{ m: 2 }}

          />
          <br />
        <CssTextField 
          id="outlined-basic" 
          label="Challenge Name" 
          variant="outlined"
          sx={{ m: 2 }}

          />
        </Grid>
      </Grid> 
  );
}

export default CreateChallenge;