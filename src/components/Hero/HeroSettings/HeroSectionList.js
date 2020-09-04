import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MUIDataTable from "mui-datatables";
import { withTheme, withStyles } from '@material-ui/core/styles';
import { updateActive, updateInActive, deleteHero } from '../../../actions/api/heroApi';
import { confiDialogOpen } from '../../../actions/uiActions/navigationAcions';
import SubmitProcess from '../../ui/SubmitProcess';
import ConfimationDialog from '../../model/ConfimationDialog';
import {TableHeaderButton} from '../../ui/Buttons';
import {
   TableRowContent,
    ActiveButtonContent,
     ActionButtonsContent,
     CreateButtonContent } from '../../ui/DataTableContentBuild'


const useStyles = theme => ({



});


class HeroSectionList extends React.Component {



  updateActive = (stauts, uid) => {
    if (!stauts) {
      const inActiveUid = (this.props.heroDetails.filter(hero => hero.active === true).map((value, key) => {
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
    this.props.confiDialogOpen({open:true,heroListSeletedUid:uid});
  }

  dialogButtonClick = () => {
     console.log("dialogButtonClick....", this.props.confirmationUid)
    this.props.deleteHero(this.props.confirmationUid);
    this.props.confiDialogOpen({open:true,heroListSeletedUid:{}});
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
        name: 'subHeading', label: 'SubHeading', options: {
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
          value={value} dataIndex={dataIndex.rowData[5]} 
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
          edit="/hero/edit/"
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
          <CreateButtonContent create="/hero/heroCreate"/>
        );
      }
    };

    return <MUIDataTable
    title={<TableHeaderButton label="Hero Section Settings"></TableHeaderButton>}
      columns={columns}
      data={this.props.heroDetails}
      options={options}/>
  }

  renderConfimationDialog(){
    if(!_.isEmpty(this.props.confirmationUid)){
return <ConfimationDialog 
          title="Delete Hero Section"
          content="Are you sure you want to delete this Hero Section ?"
          dialogButtonClick={this.dialogButtonClick} />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderSubmitProcess()}
        {this.renderDataTableResponsive()}
        {this.renderSubmitProcess()}    
        {this.renderConfimationDialog()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log("state.dialogOpen",state)
  return {
    heroDetails: Object.values(state.heroSection.heroDetails),
    isLoading: state.heroSection.loading,
    isSubmiting: state.heroSection.onSubmiting,
    confirmationUid: state.dialogOpen.heroListSeletedUid,
  };
};
export default connect(mapStateToProps, { updateActive, updateInActive, confiDialogOpen, deleteHero })
  (withTheme(withStyles(useStyles)(HeroSectionList)));