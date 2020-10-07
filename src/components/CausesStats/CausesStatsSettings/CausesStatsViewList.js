import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MUIDataTable from "mui-datatables";
import Avatar from '@material-ui/core/Avatar';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { updateCausesStatsViewActive,updateCausesStatsViewInActive,deleteCausesStatsView} from '../../../actions/api/causeStatsViewApi';
import { confiDialogOpen } from '../../../actions/uiActions/navigationAcions';
// import SubmitProcess from '../../ui/SubmitProcess';
import ConfimationDialog from '../../model/ConfimationDialog';
import {TableHeaderButton,HomeHeaderButton} from '../../ui/Buttons';
import {TableRowContent,
    ActiveButtonContent,
     ActionButtonsContent,
     CreateButtonContent } from '../../ui/DataTableContentBuild';
import {LoadingProcess,SubmitProcess} from '../../ui/ProgressBars'



const useStyles = theme => ({



});


class CausesStatsViewList extends React.Component {
  updateActive = (stauts, uid) => {
    if (!stauts) {
    this.props.updateCausesStatsViewActive(uid)
    }
  }

  renderSubmitProcess() {
    if (this.props.isSubmiting) {
      return <SubmitProcess />
    }
  }

  deleteHeroSection = (uid) => {
    this.props.confiDialogOpen({open:true,causesStatsViewListSeletedUid:uid});
  }

  dialogButtonClick = () => {
    this.props.deleteCausesStatsView(this.props.confirmationUid);
    this.props.confiDialogOpen({open:false,causesStatsViewListSeletedUid:{}});
  }

  renderDataTableResponsive() {
    const columns = [
      {
        name: 'heading', label: 'Heading',
        options: {
          customBodyRender: value => <TableRowContent value={value} />
        }
      },
      {
        name: 'stats', label: 'Status', options: {
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
          value={value} dataIndex={dataIndex.rowData[5]} 
          disabled={value}
          click={this.updateActive} />,
          filter: true,
          empty: true,
          // display: 'excluded',
        }
      },

      {
        name: 'imageUrl', label: 'Image',
        options: {
          customBodyRender: (value, dataIndex) => <Avatar 
            alt={dataIndex.rowData[5]} src={value} > </Avatar>,
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
          edit="/causesStats/viewEdit/"
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
      customToolbar: () => {
        return (
         <React.Fragment>
          <CreateButtonContent create="/causesStats/causesStatsViewCreate"/>
          <HomeHeaderButton/>
          </React.Fragment>
          
        );
      },
      
    };

    return <MUIDataTable
    title={<TableHeaderButton label="Causes StatsView Settings"></TableHeaderButton>}
      columns={columns}
      data={this.props.causesStatsViewDetails}
      options={options}/>
  }

  renderConfimationDialog(){
    if(!_.isEmpty(this.props.confirmationUid)){
return <ConfimationDialog 
          title="Delete Causes StatsView"
          content="Are you sure you want to delete this Causes StatsView ?"
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
    causesStatsViewDetails: Object.values(state.causesStatsSection.causesStatsViewDetails),
    isLoading: _.some(_.values(state.pendingStates.GET_CAUSES_STATS_VIEW)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_CAUSES_STATS_VIEW)) 
    || _.some(_.values(state.pendingStates.ACTIVE_CAUSES_STATS_VIEW)) || _.some(_.values(state.pendingStates.INACTIVE_CAUSES_STATS_VIEW)),
    confirmationUid: state.dialogOpen.causesStatsViewListSeletedUid,
  };
};
export default connect(mapStateToProps, { updateCausesStatsViewActive, updateCausesStatsViewInActive, confiDialogOpen, deleteCausesStatsView})
  (withTheme(withStyles(useStyles)(CausesStatsViewList)));