import React,{Component} from 'react';
import Header from './navigation/header/Header';
import { ThemeProvider} from '@material-ui/core/styles';
import appTheme from '../components/theme/AppTheme';
import SuccessSnackbar from './model/SuccessSnackbar';


class App extends Component{
  render(){
    return(
      <React.Fragment>
     <SuccessSnackbar/>
     {/* <ConfimationDialog/> */}
      <ThemeProvider theme={appTheme}>   
        <Header/>
        </ThemeProvider>
        </React.Fragment>
    )
  }
}

export default App;
