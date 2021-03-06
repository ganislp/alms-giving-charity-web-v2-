import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress , Button, Grid } from '@material-ui/core';
import {storage} from '../../firebase';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import PublishIcon from '@material-ui/icons/CloudUpload';
import SubmitProcess from './SubmitProcess';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {uploadHeroImages,uploadHeroFailed} from '../../actions/api/heroApi';
import {TableHeaderButton} from '../ui/Buttons'


const useStyles = theme => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },

});

class UploadImages extends React.Component{

  state = {
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };

  renderSubmitProcess() {
    if (this.state.isUploading) {
      return <SubmitProcess/>
    }
  }

  handleChangeUsername = event =>
  this.setState({ username: event.target.value });
handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
handleProgress = progress => this.setState({ progress });
handleUploadError = error => {
  this.setState({ isUploading: false });
  
 this.props.uploadHeroFailed();
};
handleUploadSuccess = filename => {
  this.setState({ avatar: filename, progress: 100, isUploading: false });
  storage
    .ref(this.props.uploadRef)
    .child(filename)
    .getDownloadURL()
    .then(url => 
    this.props.upload(url,filename)
      );
  
};

  render(){
    return(  
   <form>
     <Grid container alignItems="center" justify="flex-start">
       <Grid item>
     <TableHeaderButton/>
     </Grid>
     <Grid item>
   <Button variant="contained" component="label"  color="secondary" startIcon={<PublishIcon />}
   disabled={this.state.isUploading} style={{ textTransform: "none",paddingLeft:"0.9em",paddingRight:"0.9em" }}>
    
   {this.state.isUploading ?  <CircularProgress size={30} color="secondary"/> : this.props.label}
    <CustomUploadButton 
      accept={this.props.uploadRef}
      name="avatar"
      storageRef={storage.ref(this.props.uploadRef)}
      onUploadStart={this.handleUploadStart}
      onUploadError={this.handleUploadError}
      onUploadSuccess={this.handleUploadSuccess}
      onProgress={this.handleProgress}
    />
</Button>
</Grid>
</Grid>
  </form>

    )
  }
}
// const mapDispatchToProps = {
//   showFaildSnackbar, // will be wrapped into a dispatch call
//   showSuccessSnackbar, // will be wrapped into a dispatch call
//   };

// // const mapDispatchToProps = dispatch => ({
// //   faildMessage: message => dispatch(showFaildSnackbar(message)),
// //   showSuccessSnackbar: message => dispatch(showSuccessSnackbar(message)),
// //   })

export default connect(null,{uploadHeroImages,uploadHeroFailed}) (withTheme(withStyles(useStyles)(UploadImages)));