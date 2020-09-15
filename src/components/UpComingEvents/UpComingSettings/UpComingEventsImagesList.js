import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  getUpComingEventsImages,
  deleteUpComingEventsImage,
  uploadUpComingEventsImages

} from '../../../actions/api/upComingEventsApi';
import UploadImages from '../../ui/UploadImages';
import { confiDialogOpen, previewDialogOpen } from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import MUIDataTable from "mui-datatables";
import { TableRowContent, ActionButtonsContent,ActiveButtonContent } from '../../ui/DataTableContentBuild';
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

class UpComingEventsImagesList extends React.Component {

  // componentDidMount() {
  //   this.props.getHeroUpComingEventsImages();
  // }



  deleteHeroUpComingEventsImage = (uid) => {
    this.props.confiDialogOpen({ open: true, heroImageSeletedUid: uid });
  }

  dialogImgeButtonClick = () => {
    const {fileName} = Object.assign({}, ...Object.values((this.props.heroUpComingEventsImages.filter(image => image.uid === this.props.confirmationUid))));
    this.props.deleteUpComingEventsImage(this.props.confirmationUid,fileName);
    this.props.confiDialogOpen({ open: false, heroImageSeletedUid: {} });
  }

  uploadImage = (url,filename) => {
    this.props.uploadUpComingEventsImages({imageUrl:url,fileName:filename})
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
          customBodyRender: (value, dataIndex) => <Avatar style={{  backgroundColor:"grey" }}
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
            dataIndex={ _.some(this.props.upComingEventsDetails, function(item) {return item.fileName === dataIndex.rowData[0]})}
            click={this.deleteupComingEventsImage}
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
      isRowExpandable: (dataIndex, expandedRows) => {
        if(!_.isEmpty(this.props.upComingEventsImages[dataIndex])){
        const { fileName } = this.props.upComingEventsImages[dataIndex];
        const newImagefileName =   _.some(this.props.upComingEventsDetails, function(card) {return card.fileName === fileName}) 
        if (newImagefileName) return true;
        }
      },
      customToolbar: () => {
        return (
          <HomeHeaderButton />
        );
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length;
        const cardIndex = Object.values(rowMeta).slice(0, 1);       
       const { imageUrl } = this.props.upComingEventsImages[cardIndex];
       const { heading,body,cardImage,createdAt } = Object.assign({}, ...Object.values((this.props.upComingEventsDetails.filter(card => card.imageUrl === imageUrl))));
        return (         
          <TableRow >            
            <TableCell colSpan={colSpan} align="center">
             <Grid container justify="center" alignItems="center">
               <Grid item xs={12} sm={4}>
            {/* <CardBuild
                  heading={heading}
                  subTitle={body}
                  image={cardImage}
                  imageName={createdAt}

                /> */}
                </Grid>
               </Grid>
            </TableCell>
          </TableRow>
     
        );
      },


    };


    return <MUIDataTable
      title={<UploadImages uploadRef="upComingEvents" upload={this.uploadImage} label="Upload Image"/>}
      columns={columns}
      data={this.props.upComingEventsImages}
      options={options}
    />
  }

  renderConfimationDialog() {
    if (!_.isEmpty(this.props.confirmationUid)) {
      return <ConfimationDialog
        title="Delete UpComing Event Image"
        content="Are you sure you want to delete this UpComing Event Image?"
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
  console.log("state",state);
  return {
    
    upComingEventsImages: Object.values(state.upComingEventsSection.upComingEventsImages),
    upComingEventsDetails: Object.values(state.upComingEventsSection.upComingEventsDetails),
    isLoading: _.some(_.values(state.pendingStates.FETCH_UP_COMING_EVENTS_IMAGES)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_UP_COMING_EVENTS_IMAGE)),
    confirmationUid: state.dialogOpen.heroImageSeletedUid,
    previewUid: state.previewOpen.uid,

  };
};

export default connect(
  mapStateToProps, {
    // getUpComingEventsImages,
    deleteUpComingEventsImage, 
    confiDialogOpen , 
    previewDialogOpen,
    uploadUpComingEventsImages
})(withTheme(withStyles(useStyles)(UpComingEventsImagesList)))