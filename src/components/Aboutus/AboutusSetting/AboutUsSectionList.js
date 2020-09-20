import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MUIDataTable from "mui-datatables";
import {Avatar,} from '@material-ui/core';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { updateAboutUsActive,updateAboutUsInActive, deleteAboutUs } from '../../../actions/api/aboutUsApi';
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


class AboutUsSectionList extends React.Component {
  updateActive = (stauts, uid) => {
    if (!stauts) {
      const inActiveUid = (this.props.aboutUsDetails.filter(aboutUs => aboutUs.active === true).map((value, key) => {
        return value.uid
      }));
      this.props.updateAboutUsActive(uid)
      this.props.updateAboutUsInActive(inActiveUid);
    }
  }

  renderSubmitProcess() {
    if (this.props.isSubmiting) {
      return <SubmitProcess />
    }
  }

  deleteAboutUsSection = (uid) => {
    this.props.confiDialogOpen({open:true,aboutUsListSeletedUid:uid});
  }

  dialogButtonClick = () => {
    this.props.deleteAboutUs(this.props.confirmationUid);
    this.props.confiDialogOpen({open:false,aboutUsListSeletedUid:{}});
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
        name: 'imageUrl', label: 'Image',
        options: {
          customBodyRender: (value, dataIndex) => <Avatar alt={dataIndex.rowData[5]} src={value} /> ,
           filter: false,
           empty: true,
        }
      },

      {
        name: 'active', label: 'Active', options: {
          customBodyRender: (value, dataIndex) => <ActiveButtonContent 
          value={value}
           dataIndex={dataIndex.rowData[5]} 
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
          dataIndex={dataIndex.rowData[4]}          
          edit="/aboutUs/edit/"
          click={this.deleteAboutUsSection}
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
          <CreateButtonContent create="/aboutus/heroAboutUsCreate"/>
          <HomeHeaderButton/>
          </React.Fragment>
          
        );
      },
      
    };

    return <MUIDataTable
    title={<TableHeaderButton label="About Us Section Settings"></TableHeaderButton>}
      columns={columns}
      data={this.props.aboutUsDetails}
      options={options}/>
  }

  renderConfimationDialog(){
    if(!_.isEmpty(this.props.confirmationUid)){
return <ConfimationDialog 
          title="Delete AboutUs Section"
          content="Are you sure you want to delete this AboutUs Section ?"
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
    aboutUsDetails: Object.values(state.aboutUsSection.aboutUsDetails),
    isLoading: _.some(_.values(state.pendingStates.GET_ABOUT_US)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_GET_ABOUT_US)) 
    || _.some(_.values(state.pendingStates.ACTIVE_GET_ABOUT_US)) || _.some(_.values(state.pendingStates.INACTIVE_GET_ABOUT_US)),
    confirmationUid: state.dialogOpen.aboutUsListSeletedUid,
  };
};
export default connect(mapStateToProps, { 
  updateAboutUsActive, 
  updateAboutUsInActive, 
  confiDialogOpen,
   deleteAboutUs })
  (withTheme(withStyles(useStyles)(AboutUsSectionList)));