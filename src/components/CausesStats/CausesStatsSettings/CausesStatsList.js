import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MUIDataTable from "mui-datatables";
import { withTheme, withStyles } from '@material-ui/core/styles';
import { updateCausesStatsActive,updateCausesStatsInActive,deleteCausesStats} from '../../../actions/api/causeStatsApi';
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


class CausesStatsList extends React.Component {
  updateActive = (stauts, uid) => {
    if (!stauts) {
      const inActiveUid = (this.props.causesStatsDetails.filter(causesStats => causesStats.active === true).map((value, key) => {
        return value.uid
      }));
      this.props.updateActive(uid)
      this.props.updateInActive(inActiveUid);
    }
  }

  renderSubmitProcess() {
    if (this.props.isSubmiting) {
      return <SubmitProcess />
    }
  }

  deleteHeroSection = (uid) => {
    this.props.confiDialogOpen({open:true,causesStatsListSeletedUid:uid});
  }

  dialogButtonClick = () => {
    this.props.deleteCausesStats(this.props.confirmationUid);
    this.props.confiDialogOpen({open:false,causesStatsListSeletedUid:{}});
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
        name: 'body', label: 'Body', options: {
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
          value={value} dataIndex={dataIndex.rowData[4]} 
          disabled={value}
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
          edit="/causesStats/edit/"
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
          <CreateButtonContent create="/causesStats/causesStatsCreate"/>
          <HomeHeaderButton/>
          </React.Fragment>
          
        );
      },
      
    };

    return <MUIDataTable
    title={<TableHeaderButton label="Causes Stats Settings"></TableHeaderButton>}
      columns={columns}
      data={this.props.causesStatsDetails}
      options={options}/>
  }

  renderConfimationDialog(){
    if(!_.isEmpty(this.props.confirmationUid)){
return <ConfimationDialog 
          title="Delete Causes Stats"
          content="Are you sure you want to delete this Causes Stats ?"
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
    causesStatsDetails: Object.values(state.causesStatsSection.causesStatsDetails),
    isLoading: _.some(_.values(state.pendingStates.GET_CAUSES_STATS)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_CAUSES_STATS)) 
    || _.some(_.values(state.pendingStates.ACTIVE_CAUSES_STATS)) || _.some(_.values(state.pendingStates.INACTIVE_CAUSES_STATS)),
    confirmationUid: state.dialogOpen.causesStatsListSeletedUid,
  };
};
export default connect(mapStateToProps, { updateCausesStatsActive, updateCausesStatsInActive, confiDialogOpen, deleteCausesStats})
  (withTheme(withStyles(useStyles)(CausesStatsList)));