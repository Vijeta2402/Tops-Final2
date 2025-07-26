import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme=createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },

});


function App() {
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;