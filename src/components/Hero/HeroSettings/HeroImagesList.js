import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import { withTheme, withStyles } from '@material-ui/core/styles';
import {
  getHeroImages,
  deleteHeroImage,
  updateImageActive,
  updateImageInActive
} from '../../../actions/api/heroApi';
import UploadImages from '../../ui/UploadImages';
//import SubmitProcess from '../../ui/SubmitProcess';
import { confiDialogOpen, previewDialogOpen } from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import MUIDataTable from "mui-datatables";
import { TableRowContent, ActiveButtonContent, ActionButtonsContent, } from '../../ui/DataTableContentBuild';
import { HomeHeaderButton } from '../../ui/Buttons';
import { LoadingProcess, SubmitProcess } from '../../ui/ProgressBars'
import PreviewDialog from '../../model/PreviewDialog';
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

class HeroImagesList extends React.Component {

  componentDidMount() {
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
    this.props.confiDialogOpen({ open: true, heroImageSeletedUid: uid });
  }

  dialogImgeButtonClick = () => {
    this.props.deleteHeroImage(this.props.confirmationUid);
    this.props.confiDialogOpen({ open: false, heroImageSeletedUid: {} });
  }

  updateActive = (stauts, uid) => {
    if (!stauts) {   
   this.props.updateImageActive(uid)
   this.props.updateImageInActive();
    }
  }

  clickImagePreviewWithAvatar = () => {
    // this.props.previewDialogOpen(true);
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
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      customToolbar: () => {
        return (
          <HomeHeaderButton />
        );
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        const cardIndex = Object.values(rowMeta).slice(0, 1);
        const { imageUrl, fileName } = this.props.heroImages[cardIndex]
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              <HeroSectionContent
                imageUrl={imageUrl}
                imgname={fileName}
              />
            </TableCell>
          </TableRow>

        );
      },


    };


    return <MUIDataTable
      title={<UploadImages uploadRef="hero" />}
      columns={columns}
      data={this.props.heroImages}
      options={options}
    />
  }

  renderConfimationDialog() {
    if (!_.isEmpty(this.props.confirmationUid)) {
      return <ConfimationDialog
        title="Delete Hero Section Image"
        content="Are you sure you want to delete this Hero Section Image?"
        dialogButtonClick={this.dialogImgeButtonClick} />
    }
  }

  renderPreviewDialog() {
    if (!_.isEmpty(this.props.previewUid)) {
      const seletedHeroImage = Object.assign({}, ...Object.values((this.props.heroImages.filter(image => image.uid === this.props.previewUid))));
      return <PreviewDialog>
        <HeroSectionContent imageUrl={seletedHeroImage.imageUrl}
          imgname={seletedHeroImage.fileName} />
      </PreviewDialog>
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
        {this.renderPreviewDialog()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {

  return {
    heroImages: Object.values(state.heroSection.heroImages),
    isLoading: _.some(_.values(state.pendingStates.FETCH_HERO_IMAGES)),
    isSubmiting: _.some(_.values(state.pendingStates.INACTIVE_HERO_IMAGE))
      || _.some(_.values(state.pendingStates.DELETE_HERO_IMAGE))
      || _.some(_.values(state.pendingStates.UPLOAD_HERO_IMAGES)),
    confirmationUid: state.dialogOpen.heroImageSeletedUid,
    previewUid: state.previewOpen.uid,

  };
};

export default connect(
  mapStateToProps, {
    getHeroImages,
  deleteHeroImage, confiDialogOpen, updateImageActive, updateImageInActive, previewDialogOpen
})(withTheme(withStyles(useStyles)(HeroImagesList)))