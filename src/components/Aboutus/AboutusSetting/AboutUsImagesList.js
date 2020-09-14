import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withTheme, withStyles } from '@material-ui/core/styles';
import { Grid ,Avatar,Checkbox } from '@material-ui/core';
import {
 
  deleteAboutUsImage,
  uploadAboutUsImages,
  updateImageActive,
  updateImageInActive

} from '../../../actions/api/aboutUsApi';
import UploadImages from '../../ui/UploadImages';
import { confiDialogOpen, previewDialogOpen } from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import MUIDataTable from "mui-datatables";
import { TableRowContent, ActionButtonsContent,ActiveButtonContent } from '../../ui/DataTableContentBuild';
import { HomeHeaderButton } from '../../ui/Buttons';
import { LoadingProcess, SubmitProcess } from '../../ui/ProgressBars'
import AboutUsSectionPreview from './AboutUsSectionPreview'



const useStyles = theme => ({
  background: {
    backgroundPosition: "center center",
    backgroundSize: "100% 100%",
    backroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    position: 'absolute',
    overflow: "hidden",
    height: "auto",
    maxWidth: "100%",
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

class AboutUsImagesList extends React.Component {



addImageConfirmDialog = () => {
  this.props.confiDialogOpen({ open: true });
}

updateActive = (stauts, uid) => {
  if (!stauts) {  
    const {backround} = Object.assign({}, ...Object.values((this.props.aboutUsImages.filter(image => image.uid === uid)))); 
    this.props.updateImageInActive(backround,uid);
  }
}


  deleteAboutUsImage = (uid) => {
    this.props.confiDialogOpen({ open: true, heroImageSeletedUid: uid });
  }

  dialogImgeButtonClick = () => {
    const {fileName} = Object.assign({}, ...Object.values((this.props.aboutUsImages.filter(image => image.uid === this.props.confirmationUid))));
    this.props.deleteAboutUsImage(this.props.confirmationUid,fileName);
    this.props.confiDialogOpen({ open: false, heroImageSeletedUid: {} });
  }

  uploadImage = (url,filename) => {
    this.props.uploadAboutUsImages({imageUrl:url,fileName:filename,backround:false})
  }

  uploadBackroundImage = (url,filename) => {
    this.props.uploadAboutUsImages({imageUrl:url,fileName:filename,backround:true})
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
        name: 'imageUrl', label: 'Image',
        options: {
          customBodyRender: (value, dataIndex) => <Avatar alt={dataIndex.rowData[0]} src={value} /> ,
           filter: false,
           empty: true,
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
            value={value} 
            dataIndex={dataIndex.rowData[5]} 
            disabled={value}
            click={this.updateActive} />,
          filter: true,
          empty: true,

          // display: 'excluded',
        }
      },
      {
        name: 'backround', label: 'isBackround',
        options: {
          customBodyRender: (value, dataIndex) => <Checkbox checked={value} disabled color="secondary"/> ,
           filter: false,
           empty: true,
        }
      },
     
      {
        name: 'uid', label: 'Actions', filter: false,
        options: {
          customBodyRender: (value, dataIndex) => <ActionButtonsContent
            value={value}
            dataIndex={dataIndex.rowData[3]}
            click={this.deleteAboutUsImage}
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
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      customToolbar: () => {
        return (
          <HomeHeaderButton />
        );
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length;
        const cardIndex = Object.values(rowMeta).slice(0, 1);
        let aboutUsBackround = null;
        let aboutUsImage = null;
       
       const aboutUsSeleted = _.pick(this.props.aboutUsImages[cardIndex],'imageUrl','fileName','backround');
       const aboutUsDetails =  _.pick(...Object.values(this.props.aboutUsDetails).filter(item => item.active === true),'heading','body');
       if(aboutUsSeleted.backround){
        aboutUsBackround = _.pick(this.props.aboutUsImages[cardIndex],'imageUrl','fileName');
        aboutUsImage = _.pick(...Object.values(this.props.aboutUsImages).filter(item => item.active === true && item.backround === false),'imageUrl','fileName');
       }
       else{
        aboutUsBackround =  _.pick(...Object.values(this.props.aboutUsImages.filter(item => item.active === true && item.backround === true )),'imageUrl','fileName');
        aboutUsImage = _.pick(this.props.aboutUsImages[cardIndex],'imageUrl','fileName');
       }

        return (
          
          <TableRow >
            
            <TableCell colSpan={colSpan} align="center">
             {/* <Grid container justify="center" alignItems="center">
               <Grid item xs={12} sm={4}> */}
         <AboutUsSectionPreview
                  aboutUsBackround={aboutUsBackround}
                  aboutUsImage={aboutUsImage}
                  aboutUsDetails={aboutUsDetails}
 
                />
                {/* </Grid>
               </Grid> */}
            </TableCell>
          </TableRow>
     
        );
      },


    };


    return <MUIDataTable
      title={
      <Grid container spacing={2}>
        <Grid item>
      <UploadImages uploadRef="aboutUs" upload={this.uploadBackroundImage}  label="Upload Backround" />
      </Grid>
      <Grid item>
      <UploadImages uploadRef="aboutUs" upload={this.uploadImage}  label="Upload" />
      </Grid>
      </Grid>
    
    }
      columns={columns}
      data={this.props.aboutUsImages}
      options={options}
    />
  }

  renderConfimationDialog() {
    if (!_.isEmpty(this.props.confirmationUid)) {
      return <ConfimationDialog
        title="Delete About Image"
        content="Are you sure you want to delete this About us Image?"
        dialogButtonClick={this.dialogImgeButtonClick} />
    }
  }



  render() {
    return (
      <React.Fragment>
        <LoadingProcess isLoading={this.props.isLoading} />
        <SubmitProcess isSubmiting={this.props.isSubmiting} />
        {this.renderDataTableResponsive()}
        <SubmitProcess isSubmiting={this.props.isSubmiting} />
        {this.renderConfimationDialog()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    aboutUsImages: Object.values(state.aboutUsSection.aboutUsImages),
    aboutUsDetails: Object.values(state.aboutUsSection.aboutUsDetails),
    isLoading: _.some(_.values(state.pendingStates.FETCH_ABOUT_US_IMAGES)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_ABOUT_US_IMAGE) 
    ||  _.some(_.values(state.pendingStates.INACTIVE_ABOUT_US_IMAGE))),
    confirmationUid: state.dialogOpen.heroImageSeletedUid,
    previewUid: state.previewOpen.uid,

  };
};

export default connect(
  mapStateToProps, {
    deleteAboutUsImage, 
    confiDialogOpen , 
    previewDialogOpen,
    uploadAboutUsImages,
    updateImageActive,
    updateImageInActive

})(withTheme(withStyles(useStyles)(AboutUsImagesList)))