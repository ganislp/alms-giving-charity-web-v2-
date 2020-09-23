import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withTheme, withStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Checkbox } from '@material-ui/core';
import {

  deleteOurCausesImage,
  uploadOurCausesImages,
  updateImageActive,
  updateImageInActive

} from '../../../actions/api/ourCausesApi';
import UploadImages from '../../ui/UploadImages';
import { confiDialogOpen, previewDialogOpen } from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import MUIDataTable from "mui-datatables";
import { TableRowContent, ActionButtonsContent, ActiveButtonContent } from '../../ui/DataTableContentBuild';
import { HomeHeaderButton } from '../../ui/Buttons';
import { LoadingProcess, SubmitProcess } from '../../ui/ProgressBars'
import OueCausesCardView from '../OueCausesCardView'



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

class OurCausesImagesList extends React.Component {

  addImageConfirmDialog = () => {
    this.props.confiDialogOpen({ open: true });
  }

  updateActive = (stauts, uid) => {
    if (!stauts) {
      const { backround } = Object.assign({}, ...Object.values((this.props.ourCausesImages.filter(image => image.uid === uid))));
      this.props.updateImageInActive(backround, uid);
    }
  }


  deleteOurCausesImage = (uid) => {
    this.props.confiDialogOpen({ open: true, ourCausesSeletedUid: uid });
  }

  dialogImgeButtonClick = () => {
    const { fileName } = Object.assign({}, ...Object.values((this.props.ourCausesImages.filter(image => image.uid === this.props.confirmationUid))));
    this.props.deleteOurCausesImage(this.props.confirmationUid, fileName);
    this.props.confiDialogOpen({ open: false, ourCausesSeletedUid: {} });
  }

  uploadImage = (url, filename) => {
    this.props.uploadOurCausesImages({ imageUrl: url, fileName: filename, backround: false })
  }

  uploadBackroundImage = (url, filename) => {
    this.props.uploadOurCausesImages({ imageUrl: url, fileName: filename, backround: true })
  }

  disableImage(isBackround, isActive, imageName) {
    if (isBackround && isActive) {
      return true;
    }
    else {
      return _.some(this.props.ourCausesDetails, function (item) { return item.fileName === imageName })
    }

  }

  renderExpandable(ourCausesSeleted,ourCausesDetails,colSpan){
if(ourCausesSeleted.backround){
  return <TableRow >   
  <TableCell colSpan={colSpan} align="center">
  <Grid container >
    <Grid item xs={12}>
  <img src={ourCausesSeleted.imageUrl} alt={ourCausesSeleted.fileName} width="100%"></img>
  </Grid>
  </Grid>
  </TableCell>
</TableRow>
}
 else{
return <TableRow >
<TableCell colSpan={colSpan} >
  <Grid container justify="center" alignItems="center">
    <Grid item xs={12} sm={4}>
      <OueCausesCardView
        imageUrl={ourCausesDetails.imageUrl}
        imgname={ourCausesDetails.fileName}
        heading={ourCausesDetails.heading}
        body={ourCausesDetails.body}
        foundGoal={ourCausesDetails.foundGoal}
        foundRaised={ourCausesDetails.foundRaised}
      />
    </Grid>
  </Grid>
</TableCell>
</TableRow>
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
        name: 'imageUrl', label: 'Image',
        options: {
          customBodyRender: (value, dataIndex) => <Avatar alt={dataIndex.rowData[0]} src={value} />,
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
          customBodyRender: (value, dataIndex) => dataIndex.rowData[4] ? <ActiveButtonContent
            value={value}
            dataIndex={dataIndex.rowData[5]}
            disabled={dataIndex.rowData[3]}
            click={this.updateActive} /> : null,
          filter: true,
          empty: true,

          // display: 'excluded',
        }
      },
      {
        name: 'backround', label: 'isBackround',
        options: {
          customBodyRender: (value, dataIndex) => <Checkbox checked={value} disabled color="secondary" />,
          filter: false,
          empty: true,
        }
      },

      {
        name: 'uid', label: 'Actions', filter: false,
        options: {
          customBodyRender: (value, dataIndex) => <ActionButtonsContent
            value={value}
            dataIndex={this.disableImage(dataIndex.rowData[4], value, dataIndex.rowData[0])}
            click={this.deleteOurCausesImage}
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
        let ourCausesDetails = null;
        const ourCausesSeleted = _.pick(this.props.ourCausesImages[cardIndex], 'imageUrl', 'fileName', 'backround');
      ourCausesDetails = _.pick(...Object.values(this.props.ourCausesDetails).filter(item => item.fileName === ourCausesSeleted.fileName), 'heading', 'body', 'imageUrl', 'fileName', 'foundGoal', 'foundRaised');
       if(_.isEmpty(ourCausesDetails)){
      ourCausesDetails = _.pick(...Object.values(this.props.ourCausesDetails).filter(item => item.active === true), 'heading', 'body', 'imageUrl', 'fileName', 'foundGoal', 'foundRaised');
      ourCausesDetails = {...ourCausesDetails,imageUrl:ourCausesSeleted.imageUrl,fileName:ourCausesSeleted.fileName}
    }
      
        return (
this.renderExpandable(ourCausesSeleted,ourCausesDetails,colSpan)
        );
      },


    };


    return <MUIDataTable
      title={
        <Grid container spacing={2}>
          <Grid item>
            <UploadImages uploadRef="ourCauses" upload={this.uploadBackroundImage} label="Upload Backround" />
          </Grid>
          <Grid item>
            <UploadImages uploadRef="ourCauses" upload={this.uploadImage} label="Upload" />
          </Grid>
        </Grid>

      }
      columns={columns}
      data={this.props.ourCausesImages}
      options={options}
    />
  }

  renderConfimationDialog() {
    if (!_.isEmpty(this.props.confirmationUid)) {
      return <ConfimationDialog
        title="Delete Our Causes Image"
        content="Are you sure you want to delete this Our Causes Image ?"
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
    ourCausesImages: Object.values(state.ourCausesSection.ourCausesImages),
    ourCausesDetails: Object.values(state.ourCausesSection.ourCausesDetails),
    isLoading: _.some(_.values(state.pendingStates.FETCH_OUR_CAUSES_IMAGES)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_OUR_CAUSES_IMAGE)
      || _.some(_.values(state.pendingStates.INACTIVE_OUR_CAUSES_IMAGE))),
    confirmationUid: state.dialogOpen.ourCausesSeletedUid,
    previewUid: state.previewOpen.uid,

  };
};

export default connect(
  mapStateToProps, {
  deleteOurCausesImage,
  confiDialogOpen,
  previewDialogOpen,
  uploadOurCausesImages,
  updateImageActive,
  updateImageInActive

})(withTheme(withStyles(useStyles)(OurCausesImagesList)))