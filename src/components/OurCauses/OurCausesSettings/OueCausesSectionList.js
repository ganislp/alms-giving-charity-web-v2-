import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Avatar} from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import { withTheme, withStyles } from '@material-ui/core/styles';
import { 
  updateOurCausesActive,
  deleteOurCauses } from '../../../actions/api/ourCausesApi';
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


class OurCausesSectionList extends React.Component {
  updateActive = (stauts, uid) => {
    if (!stauts) {
      this.props.updateOurCausesActive(uid)
    }
  }

  renderSubmitProcess() {
    if (this.props.isSubmiting) {
      return <SubmitProcess />
    }
  }

  deleteOurCausesSection = (uid) => {
    this.props.confiDialogOpen({open:true,ourCausesListSeletedUid:uid});
  }

  dialogButtonClick = () => {
    this.props.deleteOurCauses(this.props.confirmationUid);
    this.props.confiDialogOpen({open:false,ourCausesListSeletedUid:{}});
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
        name: 'foundRaised', label: 'Found Raised', options: {
          customBodyRender: value => <TableRowContent value={value} />
        }

      },
      {
        name: 'foundGoal', label: 'Found Goal', options: {
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
          value={value}
           dataIndex={dataIndex.rowData[7]} 
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
            alt={dataIndex.rowData[7]} src={value}  > </Avatar>,
          filter: false,
         empty: false,



        }
      },
      {
        name: 'uid', label: 'Actions', filter: false,
        options: {
          customBodyRender: (value, dataIndex) => <ActionButtonsContent 
          value={value} 
          dataIndex={dataIndex.rowData[5]}          
          edit="/ourCauses/edit/"
          click={this.deleteOurCausesSection}
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
          <CreateButtonContent create="/ourCauses/ourCausesCreate"/>
          <HomeHeaderButton/>
          </React.Fragment>
          
        );
      },
      
    };

    return <MUIDataTable
    title={<TableHeaderButton label="Our Causes Settings"></TableHeaderButton>}
      columns={columns}
      data={this.props.ourCausesDetails}
      options={options}/>
  }

  renderConfimationDialog(){
    if(!_.isEmpty(this.props.confirmationUid)){
return <ConfimationDialog 
          title="Delete Our Causes Section"
          content="Are you sure you want to delete this Our Causes Section ?"
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
    ourCausesDetails: Object.values(state.ourCausesSection.ourCausesDetails),
    isLoading: _.some(_.values(state.pendingStates.GET_OUR_CAUSES)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_GET_OUR_CAUSES)) 
    || _.some(_.values(state.pendingStates.ACTIVE_GET_OUR_CAUSES)) || _.some(_.values(state.pendingStates.INACTIVE_GET_OUR_CAUSES)),
    confirmationUid: state.dialogOpen.ourCausesListSeletedUid,
  };
};
export default connect(mapStateToProps, { 
  updateOurCausesActive, 
  confiDialogOpen,
   deleteOurCauses })
  (withTheme(withStyles(useStyles)(OurCausesSectionList)));