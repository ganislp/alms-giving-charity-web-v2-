import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  deleteCausesStatsImage,
  uploadCausesStatsImages

} from '../../../actions/api/causeStatsApi';
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

class CausesStatsImagesList extends React.Component {

  // componentDidMount() {
  //   this.props.getHeroCausesStatsImages();
  // }



  deleteHeroCausesStatsImage = (uid) => {
    this.props.confiDialogOpen({ open: true, heroImageSeletedUid: uid });
  }

  dialogImgeButtonClick = () => {
    const {fileName} = Object.assign({}, ...Object.values((this.props.heroCausesStatsImages.filter(image => image.uid === this.props.confirmationUid))));
    this.props.deleteCausesStatsImage(this.props.confirmationUid,fileName);
    this.props.confiDialogOpen({ open: false, heroImageSeletedUid: {} });
  }

  uploadImage = (url,filename) => {
    this.props.uploadCausesStatsImages({imageUrl:url,fileName:filename})
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
          customBodyRender: (value, dataIndex) => <Avatar 
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
            dataIndex={ _.some(this.props.causesStatsViewDetails, function(item) {return item.fileName === dataIndex.rowData[0]})}
            click={this.deletecausesStatsImage}
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
        if(!_.isEmpty(this.props.causesStatsImages[dataIndex])){
        const { fileName } = this.props.causesStatsImages[dataIndex];
        const newImagefileName =   _.some(this.props.causesStatsViewDetails, function(card) {return card.fileName === fileName}) 
        if (newImagefileName) return true;
        }
      },
      // customToolbar: () => {
      //   return (
      //     <HomeHeaderButton />
      //   );
      // },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length;
        const cardIndex = Object.values(rowMeta).slice(0, 1);       
       const eventsImage = this.props.causesStatsImages[cardIndex];
       const { heading,body,imageUrl,fileName,location,eventDate }  = Object.assign({}, ...Object.values((this.props.causesStatsDetails.filter(card => card.imageUrl === eventsImage.imageUrl))));
        return (         
          <TableRow >            
            <TableCell colSpan={colSpan} align="center">
             <Grid container justify="center" alignItems="center">
               <Grid item xs={12} sm={12}>
               {/* <CausesStatsBuild            
                  heading={heading}
                  body={body}
                  imageUrl={imageUrl}
                  fileName={fileName} 
                  location={location}
                  eventDate={eventDate}
                  />  */}
                </Grid>
               </Grid>
            </TableCell>
          </TableRow>
     
        );
      },


    };


    return <MUIDataTable
      title={<UploadImages uploadRef="causesStats" upload={this.uploadImage} label="Upload Image"/>}
      columns={columns}
      data={this.props.causesStatsImages}
      options={options}
    />
  }

  renderConfimationDialog() {
    if (!_.isEmpty(this.props.confirmationUid)) {
      return <ConfimationDialog
        title="Delete Causes Stats Image"
        content="Are you sure you want to delete this Causes Stats Image?"
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
    
    causesStatsImages: Object.values(state.causesStatsSection.causesStatsImages),
    causesStatsViewDetails:  Object.values(state.causesStatsSection.causesStatsViewDetails),
    isLoading: _.some(_.values(state.pendingStates.FETCH_CAUSES_STATS_IMAGES)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_CAUSES_STATS_IMAGE)),
    confirmationUid: state.dialogOpen.heroImageSeletedUid,
    previewUid: state.previewOpen.uid,

  };
};

export default connect(
  mapStateToProps, {
    // getCausesStatsImages,
    deleteCausesStatsImage, 
    confiDialogOpen , 
    previewDialogOpen,
    uploadCausesStatsImages
})(withTheme(withStyles(useStyles)(CausesStatsImagesList)))