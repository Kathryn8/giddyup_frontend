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
      color: '#316239'
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#316239',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#316239'
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 400,
      color: '#316239',
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 400,
      color: '#616161'
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: '#616161',
    },
    subtitle2: {
      fontSize: '0.8rem',
      fontWeight: 400,
      color: '#616161'
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
