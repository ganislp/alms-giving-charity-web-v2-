import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import { withTheme, withStyles } from '@material-ui/core/styles';
import {
  uploadFooterImages,
  deleteFooterImage,
  getFooterBgImages,
  updateFooterImageInActive
} from '../../../../actions/api/footerApi';
import UploadImages from '../../../ui/UploadImages';
import { confiDialogOpen, previewDialogOpen } from '../../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../../model/ConfimationDialog';
import MUIDataTable from "mui-datatables";
import { TableRowContent, ActiveButtonContent, ActionButtonsContent, } from '../../../ui/DataTableContentBuild';
import { LoadingProcess, SubmitProcess } from '../../../ui/ProgressBars'
import { Grid } from '@material-ui/core';



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

class footerBgImageList extends React.Component {

  componentDidMount() {
    this.props.getFooterBgImages();
  }



  deleteHeroImage = (uid) => {
    this.props.confiDialogOpen({ open: true, footerBgImageSeletedUid: uid });
  }

  dialogImgeButtonClick = () => {
    const {fileName} = Object.assign({}, ...Object.values((this.props.footerBgImages.filter(image => image.uid === this.props.confirmationUid))));
    this.props.deleteFooterImage(this.props.confirmationUid,fileName);
    this.props.confiDialogOpen({ open: false, footerBgImageSeletedUid: {} });
  }

  updateActive = (stauts, uid) => {
    if (!stauts) {   
 this.props.updateFooterImageInActive(uid)
    }
  }

  clickImagePreviewWithAvatar = () => {
 this.props.previewDialogOpen(true);
  }

  uploadImage = (url,filename) => {
    this.props.uploadFooterImages({imageUrl:url,fileName:filename})
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
          customBodyRender: (value, dataIndex) => <Avatar style={{ cursor: "pointer" }}
            alt={dataIndex.rowData[4]} src={value} > </Avatar>,
          // filter: true,
          // empty: true,



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
            value={value} dataIndex={dataIndex.rowData[4]} disabled={value}
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
            dataIndex={dataIndex.rowData[3]}
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
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      // customToolbar: () => {
      //   return (
      //     <HomeHeaderButton />
      //   );
      // },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        const cardIndex = Object.values(rowMeta).slice(0, 1);
      const { imageUrl, fileName } = this.props.footerBgImages[cardIndex]
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              <Grid container>
              <Grid item>
              <img src={imageUrl} alt={fileName} width="100%" ></img>
              </Grid>
              </Grid>         
            </TableCell>
          </TableRow>

        );
      },


    };


    return <MUIDataTable
      title={<UploadImages uploadRef="footerImages" upload={this.uploadImage} label="Upload Image"/>}
      columns={columns}
      data={this.props.footerBgImages}
      options={options}
    />
  }

  renderConfimationDialog() {
    if (!_.isEmpty(this.props.confirmationUid)) {
      return <ConfimationDialog
        title="Delete Footer Section Image"
        content="Are you sure you want to delete this Footer Section Image?"
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
    footerBgImages: Object.values(state.footerSection.footerBgImages),
 isLoading: _.some(_.values(state.pendingStates.FETCH_FOOTER_BG_IMAGES)),
     isSubmiting: _.some(_.values(state.pendingStates.INACTIVE_FOOTER_BG_IMAGE))
       || _.some(_.values(state.pendingStates.DELETE_FOOTER_BG_IMAGE))
      || _.some(_.values(state.pendingStates.UPLOAD_FOOTER_BG_IMAGES)),
    confirmationUid: state.dialogOpen.footerBgImageSeletedUid,
    previewUid: state.previewOpen.uid,

  };
};

export default connect(
  mapStateToProps, {
    uploadFooterImages,
    deleteFooterImage, 
    confiDialogOpen,
    getFooterBgImages, 
    updateFooterImageInActive, 
     previewDialogOpen
})(withTheme(withStyles(useStyles)(footerBgImageList)))