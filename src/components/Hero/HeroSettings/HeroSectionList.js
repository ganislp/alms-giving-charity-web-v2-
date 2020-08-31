import React from 'react';
import { connect } from 'react-redux';
 import MaterialTable from 'material-table';
 import {  withTheme } from '@material-ui/core/styles';
import {updateActive,updateInActive,deleteHero} from '../../../actions/api/heroApi';
import {confiDialogOpen} from '../../../actions/uiActions/navigationAcions';
import history from '../../../history';
import SubmitProcess from '../../ui/SubmitProcess';
import ConfimationDialog from '../../model/ConfimationDialog';
import {TableHeaderButton} from '../../ui/Buttons'





class HeroSectionList extends React.Component {



  updateActive = (rowData) => {
    if(!rowData.active){
 const inActiveUid =  (this.props.heroDetails.filter(hero => hero.active === true).map((value, key) => {
  return value.uid
 }));
this.props.updateActive(rowData.uid)
this.props.updateInActive(inActiveUid);
}
}

renderSubmitProcess() {
  if (this.props.isSubmiting) {
    return <SubmitProcess/>
  }
}

deleteHeroSection = (rowData) => {
  this.props.confiDialogOpen(true,rowData.uid);
}

dialogButtonClick = () => {
 this.props.deleteHero(this.props.confirmationUid);
 this.props.confiDialogOpen(false);
}

  renderDataTable(){
      // if (this.props.isLoading ) {
      //   return <LinearProgress color="secondary" />
      // }
      // else{
   return  <MaterialTable 

     columns={[
      { title: 'Heading', field: 'heading',  },
      { title: 'SubHeading', field: 'subHeading' },
      { title: 'Body', field: 'body', },
      { title: 'CreatedAt', field: 'createdAt',  },
    ]}
     data = {this.props.heroDetails}
   options={{actionsColumnIndex: -1,exportButton: true,
    draggable: true,
    headerStyle: {
     backgroundColor:this.props.theme.palette.common.blue,
      color: this.props.theme.palette.common.white,
      '&:hover': {
        color: this.props.theme.palette.common.white,
      }
    },
  }}
     actions={[    
      rowData => ( {
        icon: rowData.active ? 'check' : 'clear',
        tooltip: rowData.active ? 'Active' : 'inActive',
        onClick: (event, rowData) => this.updateActive(rowData),
       disabled: rowData.active 
      }),
      rowData => ( {      
        icon: 'edit',
        tooltip: 'Edit Hero Section',
      onClick: (event, rowData) => history.push(`/hero/edit/${rowData.uid}`)  
      }),
      rowData => ({
        icon: 'deleteForeverIcon',
        tooltip: 'Delete Section',
        onClick: (event, rowData) => this.deleteHeroSection(rowData), 
        disabled: rowData.active 
      }),
      {
        icon: 'add',
        
        onClick: (event, rowData) => {
          history.push('/hero/heroCreate');
        },
        isFreeAction: true,
        tooltip: 'Add Hero Section',
      },
      
    ]}
    title={<TableHeaderButton label="Hero Section Settings"></TableHeaderButton>}/>
 
  }
 // }

render(){

  return(
   <React.Fragment>
      {this.renderSubmitProcess()}
        {this.renderDataTable()}
        {this.renderSubmitProcess()}
        <ConfimationDialog 
        title="Delete Hero Section"
        content="Are you sure you want to delete this Hero Section ?"
        dialogButtonClick={this.dialogButtonClick}/>
   </React.Fragment>
  )
}
}

const mapStateToProps = state => {
  return {
    heroDetails:  Object.values(state.heroSection.heroDetails),
  isLoading: state.heroSection.loading,
  isSubmiting: state.heroSection.onSubmiting,
  confirmationUid: state.dialogOpen.uid,
  };
};
export  default  connect(mapStateToProps,{updateActive,updateInActive,confiDialogOpen,deleteHero})
(withTheme((HeroSectionList)));