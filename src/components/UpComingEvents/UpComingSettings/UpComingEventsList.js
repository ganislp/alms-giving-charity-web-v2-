import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Avatar,Grid } from '@material-ui/core';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { updateUpComingEventsActive,
  updateUpComingEventsInActive, 
  deleteUpComingEvents,
  updateFeaturedCauseActive 
} from '../../../actions/api/upComingEventsApi';
import { confiDialogOpen } from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import {TableHeaderButton,HomeHeaderButton} from '../../ui/Buttons';
import {TableRowContent,
    ActiveButtonContent,
     ActionButtonsContent,
     CreateButtonContent } from '../../ui/DataTableContentBuild';
import {LoadingProcess,SubmitProcess} from '../../ui/ProgressBars'
import UpComingEventsBuild from '../UpComingEventsBuild';


const useStyles = theme => ({
  large: {
    // width: theme.spacing(3),
    // height: theme.spacing(3),
    backgroundColor:"grey"
  },


});


class UpComingEventsList extends React.Component {

  updateFeaturedCauseActive = (stauts, uid) => {
    if (!stauts) {
    this.props.updateFeaturedCauseActive(uid)
    }
  }

  updateActive = (stauts, uid) => {
    if (!stauts) {
      // const inActiveUid = (this.props.upComingEventsDetails.filter(upComingEvents => upComingEvents.active === true).map((value, key) => {
      //   return value.uid
      // }));
    this.props.updateUpComingEventsActive(uid)
    this.props.updateUpComingEventsInActive();
    }
  }

  renderSubmitProcess() {
    if (this.props.isSubmiting) {
      return <SubmitProcess />
    }
  }

  deleteHeroSection = (uid) => {
    this.props.confiDialogOpen({open:true,heroListCardSeletedUid:uid});
  }

  dialogButtonClick = () => {
    this.props.deleteUpComingEvents(this.props.confirmationUid);
    this.props.confiDialogOpen({open:false,heroListCardSeletedUid:{}});
  }

  renderDataTableResponsive() {
    const { classes } = this.props;
    const columns = [
      {
        name: 'heading', label: 'Heading',
        options: {
          customBodyRender: value => <TableRowContent value={value} />
        }
      },
      {
        name: 'body', label: 'Body', options: {
          customBodyRender: value => <TableRowContent value={value} />
        }

      },
      {
        name: 'location', label: 'Event Location', options: {
          customBodyRender: value => <TableRowContent value={value} />
        }

      },
      {
        name: 'eventDate', label: 'Event Date', options: {
          customBodyRender: value => <TableRowContent value={value} />
        }

      },
      {
        name: 'imageUrl', label: 'Image',
        options: {
          customBodyRender: (value, dataIndex) => <Avatar 
            alt={dataIndex.rowData[8]} src={value} className={classes.large} > </Avatar>,
          filter: false,
         empty: false,



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
          dataIndex={dataIndex.rowData[8]} 
          disabled={value}
          click={this.updateActive} />,
          filter: true,
          empty: true,
          // display: 'excluded',
        }
      },
      {
        name: 'isFeaturedCause', label: 'Featured Cause', options: {
          customBodyRender: (value, dataIndex) => <ActiveButtonContent 
          value={value} 
          dataIndex={dataIndex.rowData[8]} 
          disabled={value}
          click={this.updateFeaturedCauseActive} />,
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
          dataIndex={dataIndex.rowData[7]}          
          edit="/upComingEvents/edit/"
          click={this.deleteHeroSection}
          hiddendEdit={false}
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
         <React.Fragment>
          <CreateButtonContent create="/upComingEvents/upComingEventsCreate"/>
          <HomeHeaderButton/>
          </React.Fragment>
          
        );
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length;
        const cardIndex = Object.values(rowMeta).slice(0, 1);
       const { heading,body,imageUrl,fileName,location,eventDate } = this.props.upComingEventsDetails[cardIndex];

  
        return (
          
          <TableRow >
            
            <TableCell colSpan={colSpan} align="center">
             <Grid container justify="center" alignItems="center">
               <Grid item xs={12} sm={12}>
               <UpComingEventsBuild            
                  heading={heading}
                  body={body}
                  imageUrl={imageUrl}
                  fileName={fileName} 
                  location={location}
                  eventDate={eventDate}
                  />          
                </Grid>
               </Grid>
            </TableCell>
          </TableRow>
     
        );
      },
      
    };

    return <MUIDataTable
    title={<TableHeaderButton label="Upcoming and Featured Cause Settings"></TableHeaderButton>}
      columns={columns}
      data={this.props.upComingEventsDetails}
      options={options}/>
  }

  renderConfimationDialog(){
    if(!_.isEmpty(this.props.confirmationUid)){
return <ConfimationDialog 
          title="Delete Hero Card Section"
          content="Are you sure you want to delete this Hero Card Section ?"
          dialogButtonClick={this.dialogButtonClick} />
    }
  }

  render() {
    return (
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
    upComingEventsDetails: Object.values(state.upComingEventsSection.upComingEventsDetails),
    isLoading: _.some(_.values(state.pendingStates.GET_UP_COMING_EVENTS)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_UP_COMING_EVENTS)) 
    || _.some(_.values(state.pendingStates.ACTIVE_UP_COMING_EVENTS) ) 
    || _.some(_.values(state.pendingStates.ACTIVE_FEATURED_CAUSE) ),
    confirmationUid: state.dialogOpen.heroListCardSeletedUid,
  };
};
export default connect(mapStateToProps, { 
  updateUpComingEventsActive,
   updateUpComingEventsInActive, 
   updateFeaturedCauseActive,
   confiDialogOpen, 
   deleteUpComingEvents })
  (withTheme(withStyles(useStyles)(UpComingEventsList)));