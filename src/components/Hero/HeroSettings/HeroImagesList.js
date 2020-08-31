import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withTheme,withStyles } from '@material-ui/core/styles';
import MaterialTable, { MTableToolbar } from "material-table";


 import {
   getHeroImages,
  deleteHeroImage,
  updateImageActive,
  updateImageInActive
} from '../../../actions/api/heroApi';
import UploadImages from '../../ui/UploadImages';
import SubmitProcess from '../../ui/SubmitProcess';
import {confiDialogOpen} from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import HeroSectionContent from '../HeroSectionContent';



const useStyles = theme => ({
  background: {
    backgroundPosition: "center center",
    backgroundSize: "100% 100%",
    backroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    position: 'absolute',
    overflow: "hidden",
    height: "auto",
    maxWidth:"100%",
    margin: "0"
    // [theme.breakpoints.down("lg")]: {
     
    //  },
  },

  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingRight: "0"
  },

 
});

class HeroImagesList extends React.Component{

  componentDidMount(){
    this.props.getHeroImages();
  }
 

  renderSubmitProcess() {
    const path = 'INACTIVE_HERO_IMAGE.pending'
    const isSubmitting = _.get(this.props.pendingStates, path);
    const uploadHeroImages = 'UPLOAD_HERO_IMAGES.pending'
    const isSubmittingUpload = _.get(this.props.pendingStates, uploadHeroImages);
    const deleteHeroImages = 'DELETE_HERO_IMAGE.pending'
    const isSubmittingDelete = _.get(this.props.pendingStates, deleteHeroImages);
    if (isSubmitting || isSubmittingUpload || isSubmittingDelete) {
      return <SubmitProcess/>
    }
  }

  deleteHeroSection = (rowData) => {
    this.props.confiDialogOpen(true,rowData.uid);
  }

  dialogButtonClick = () => {
    this.props.deleteHeroImage(this.props.confirmationUid);
    this.props.confiDialogOpen(false);
   }

   updateActive = (rowData) => {
    if(!rowData.active){
 const inActiveUid =  (this.props.heroImages.filter(image => image.active === true).map((value, key) => {
  return value.uid
 }));
this.props.updateImageActive(rowData.uid)
this.props.updateImageInActive(inActiveUid);
}
}

  renderDataTable(){
  return  <MaterialTable 
  
   columns={[
    { title: 'Image Name', field: 'fileName',  },
    { title: 'CreatedAt', field: 'createdAt',  },
    { title: 'Image', field: 'imageUrl',  
    render: rowData => <img src={rowData.imageUrl} alt={rowData.imageUrl} style={{width: 50, borderRadius: '50%'}}/> },
  ]}
   data = {this.props.heroImages}
  options={{actionsColumnIndex: -1,exportButton: true,
    paging: false,
  draggable: true,
  emptyRowsWhenPaging:true,
  headerStyle: {
   backgroundColor:this.props.theme.palette.common.blue,
    color: this.props.theme.palette.common.white,
    '&:hover': {
      color: this.props.theme.palette.common.white,
    }
  },
  }}
   actions={[      
      rowData => ( {
        icon: rowData.active ? 'check' : 'clear',
        tooltip: rowData.active ? 'Active' : 'inActive',
        onClick: (event, rowData) => this.updateActive(rowData),
       disabled: rowData.active 
      }),
    rowData => ({
      icon: 'deleteForeverIcon',
      tooltip: 'Delete Section',
      onClick: (event, rowData) => this.deleteHeroSection(rowData), 
      disabled: rowData.active 
    }),
    
  ]}
  
  detailPanel={[
    {
      tooltip: 'Show Preview ',
      render: rowData => {
        return (
          <HeroSectionContent
  imageUrl={rowData.imageUrl} 
  imgname={rowData.fileName}
  />
        )
      },
    },
   
   
  ]}
  components={{

    Toolbar: props => (
      <div style={{padding: 0}} >
         <MTableToolbar {...props}  disableGutters={true}/>
      </div>  
    )
  }}
  title= {<UploadImages uploadRef="hero"/>}
  />
  
  }
 // }
  render(){
    return(
      <React.Fragment>
         {this.renderSubmitProcess()}
      {this.renderDataTable()}
      {this.renderSubmitProcess()}
      <ConfimationDialog 
        title="Delete Hero Section Image"
        content="Are you sure you want to delete this Hero Section Image?"
        dialogButtonClick={this.dialogButtonClick}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    heroImages:  Object.values(state.heroSection.heroImages),
    pendingStates: state.pendingStates,
    confirmationUid: state.dialogOpen.uid,
  };
};

export default connect(
  mapStateToProps,{getHeroImages,
  deleteHeroImage,confiDialogOpen,updateImageActive,updateImageInActive}) (withTheme(withStyles(useStyles)(HeroImagesList)))