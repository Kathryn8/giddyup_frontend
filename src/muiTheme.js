import { createTheme } from "@mui/material";

const muiTheme = createTheme({
    typography: {
    fontSize: 16,

    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: 'grey',
    },
    subtitle2: {
      fontSize: '0.8rem',
      fontWeight: 400,
      color: 'grey'
    },
  },
  palette: {
    primary: {
      main: '#63C573',
    },
    secondary: {
      main: '#ACCE42',
    },
  },
})

export default muiTheme;
