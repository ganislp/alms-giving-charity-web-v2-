import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import { withTheme, withStyles } from '@material-ui/core/styles';
import {
  getHeroCardImages,
  deleteHeroCardImage,
  uploadHeroCardImages

} from '../../../actions/api/heroCardApi';
import UploadImages from '../../ui/UploadImages';
import { confiDialogOpen, previewDialogOpen } from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import MUIDataTable from "mui-datatables";
import { TableRowContent, ActionButtonsContent, } from '../../ui/DataTableContentBuild';
import { HomeHeaderButton } from '../../ui/Buttons';
import { LoadingProcess, SubmitProcess } from '../../ui/ProgressBars'




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

class HeroCardImagesList extends React.Component {

  componentDidMount() {
    this.props.getHeroCardImages();
  }



  deleteHeroCardImage = (uid) => {
    this.props.confiDialogOpen({ open: true, heroImageSeletedUid: uid });
  }

  dialogImgeButtonClick = () => {
    const {fileName} = Object.assign({}, ...Object.values((this.props.heroCardImages.filter(image => image.uid === this.props.confirmationUid))));
    this.props.deleteHeroCardImage(this.props.confirmationUid,fileName);
    this.props.confiDialogOpen({ open: false, heroImageSeletedUid: {} });
  }

  uploadImage = (url,filename) => {
    this.props.uploadHeroCardImages({imageUrl:url,fileName:filename})
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
        name: 'uid', label: 'Actions', filter: false,
        options: {
          customBodyRender: (value, dataIndex) => <ActionButtonsContent
            value={value}
            dataIndex={false}
            click={this.deleteHeroCardImage}
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
        // const { imageUrl, fileName } = this.props.heroImages[cardIndex]
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              {/* <HeroSectionContent
                imageUrl={imageUrl}
                imgname={fileName}
              /> */}
            </TableCell>
          </TableRow>

        );
      },


    };


    return <MUIDataTable
      title={<UploadImages uploadRef="heroCard" upload={this.uploadImage}/>}
      columns={columns}
      data={this.props.heroCardImages}
      options={options}
    />
  }

  renderConfimationDialog() {
    if (!_.isEmpty(this.props.confirmationUid)) {
      return <ConfimationDialog
        title="Delete Hero Card Image"
        content="Are you sure you want to delete this Hero Card Image?"
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
    heroCardImages: Object.values(state.heroCardSection.heroCardImages),
    isLoading: _.some(_.values(state.pendingStates.FETCH_HERO_CARD_IMAGES)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_HERO_CARD_IMAGE)),
    confirmationUid: state.dialogOpen.heroImageSeletedUid,
    previewUid: state.previewOpen.uid,

  };
};

export default connect(
  mapStateToProps, {
    getHeroCardImages,
    deleteHeroCardImage, confiDialogOpen , previewDialogOpen,uploadHeroCardImages
})(withTheme(withStyles(useStyles)(HeroCardImagesList)))