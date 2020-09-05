import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withTheme,withStyles } from '@material-ui/core/styles';
 import {
   getHeroImages,
  deleteHeroImage,
  updateImageActive,
  updateImageInActive
} from '../../../actions/api/heroApi';
import UploadImages from '../../ui/UploadImages';
//import SubmitProcess from '../../ui/SubmitProcess';
import {confiDialogOpen} from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import MUIDataTable from "mui-datatables";
import {TableRowContent,ActiveButtonContent,ActionButtonsContent,} from '../../ui/DataTableContentBuild';
import {HomeHeaderButton} from '../../ui/Buttons';
import {LoadingProcess,SubmitProcess} from '../../ui/ProgressBars'


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
 

  // renderSubmitProcess() {
  //   const path = 'INACTIVE_HERO_IMAGE.pending'
  //   const isSubmitting = _.get(this.props.pendingStates, path);
  //   const uploadHeroImages = 'UPLOAD_HERO_IMAGES.pending'
  //   const isSubmittingUpload = _.get(this.props.pendingStates, uploadHeroImages);
  //   const deleteHeroImages = 'DELETE_HERO_IMAGE.pending'
  //   const isSubmittingDelete = _.get(this.props.pendingStates, deleteHeroImages);
  //   if (isSubmitting || isSubmittingUpload || isSubmittingDelete) {
  //     return <SubmitProcess/>
  //   }
  // }

  deleteHeroImage = (uid) => {
    this.props.confiDialogOpen({open:true,heroImageSeletedUid:uid});
  }

  dialogImgeButtonClick = () => {
    this.props.deleteHeroImage(this.props.confirmationUid);
    this.props.confiDialogOpen({open:false,heroImageSeletedUid:{}});
   }

   updateActive = (stauts, uid) => {
    if(!stauts){
 const inActiveUid =  (this.props.heroImages.filter(image => image.active === true).map((value, key) => {
  return value.uid
 }));
this.props.updateImageActive(uid)
this.props.updateImageInActive(inActiveUid);
}
}

renderDataTableResponsive() {
  const columns = [
    {
      name: 'fileName', label: 'Image Name',
      options: {
        customBodyRender: value => <TableRowContent value={value} />
      }
    },
   
    {
      name: 'createdAt', label: 'CreatedAt', options: {
        customBodyRender: value => <TableRowContent value={value} />
      }
    },

    {
      name: 'active', label: 'Active', options: {
        customBodyRender: (value, dataIndex) => <ActiveButtonContent 
        value={value} dataIndex={dataIndex.rowData[3]}  disabled={false}
        click={this.updateActive} />,
        filter: true,
        empty: true,
       
        // display: 'excluded',
      }
    },
    {
      name: 'uid', label: 'Actions', filter: false,
      options: {
        customBodyRender: (value, dataIndex) => <ActionButtonsContent 
        value={value} 
        dataIndex={dataIndex.rowData[2]} 
        edit="/hero/edit/"
        click={this.deleteHeroImage}
        hiddendEdit={true}
        />,
        filter: false, sort: false,// empty: true,
      },
    }
  ]

  const options = {
    //resizableColumns: true,
    filter: true,
    filterType: 'dropdown',
    rowsPerPage: 5,
    pagination: false,
    selectableRows: "none",
    responsive: 'vertical',
    customToolbar: () => {
      return (
        <HomeHeaderButton/>    
      );
    },
  };

  return <MUIDataTable
    title={ <UploadImages  uploadRef="hero"/>}
    columns={columns}
    data={this.props.heroImages}
    options={options}/>
}

renderConfimationDialog(){
  if(!_.isEmpty(this.props.confirmationUid)){
return <ConfimationDialog 
       title="Delete Hero Section Image"
        content="Are you sure you want to delete this Hero Section Image?"
        dialogButtonClick={this.dialogImgeButtonClick} />
  }
}

  render(){
    return(
      <React.Fragment>
      <LoadingProcess isLoading={this.props.isLoading}/>
      <SubmitProcess  isSubmiting={this.props.isSubmiting}/>
      {this.renderDataTableResponsive()}
      <SubmitProcess  isSubmiting={this.props.isSubmiting}/>
      {this.renderConfimationDialog()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  
  return {
    heroImages:  Object.values(state.heroSection.heroImages),
    isLoading: _.some(_.values(state.pendingStates.FETCH_HERO_IMAGES)),
    isSubmiting: _.some(_.values(state.pendingStates.INACTIVE_HERO_IMAGE)) 
    || _.some(_.values(state.pendingStates.DELETE_HERO_IMAGE ))
      || _.some(_.values(state.pendingStates.UPLOAD_HERO_IMAGES)),
    confirmationUid: state.dialogOpen.heroImageSeletedUid,
  };
};

export default connect(
  mapStateToProps,{getHeroImages,
  deleteHeroImage,confiDialogOpen,updateImageActive,updateImageInActive}) (withTheme(withStyles(useStyles)(HeroImagesList)))