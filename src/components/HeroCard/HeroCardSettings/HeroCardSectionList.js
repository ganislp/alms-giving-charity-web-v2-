import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Avatar,Grid } from '@material-ui/core';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { updateHeroCardActive,updateHeroCardInActive, deleteHeroCard, } from '../../../actions/api/heroCardApi';
import { confiDialogOpen } from '../../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../../model/ConfimationDialog';
import {TableHeaderButton,HomeHeaderButton} from '../../ui/Buttons';
import {TableRowContent,
    ActiveButtonContent,
     ActionButtonsContent,
     CreateButtonContent } from '../../ui/DataTableContentBuild';
import {LoadingProcess,SubmitProcess} from '../../ui/ProgressBars'
import CardBuild from '../CardsBuild';


const useStyles = theme => ({
  large: {
    // width: theme.spacing(3),
    // height: theme.spacing(3),
    backgroundColor:"grey"
  },


});


class HeroCardSectionList extends React.Component {
  updateActive = (stauts, uid) => {
    if (!stauts) {
      // const inActiveUid = (this.props.heroCardDetails.filter(heroCard => heroCard.active === true).map((value, key) => {
      //   return value.uid
      // }));
     this.props.updateHeroCardActive(uid)
     this.props.updateHeroCardInActive();
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
    this.props.deleteHeroCard(this.props.confirmationUid);
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
        name: 'cardImage', label: 'Image',
        options: {
          customBodyRender: (value, dataIndex) => <Avatar 
            alt={dataIndex.rowData[5]} src={value} className={classes.large} > </Avatar>,
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
          edit="/heroCard/edit/"
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
          <CreateButtonContent create="/settings/heroCardCreate"/>
          {/* <HomeHeaderButton/> */}
          </React.Fragment>
          
        );
      },
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length;
        const cardIndex = Object.values(rowMeta).slice(0, 1);
       const { heading,body,cardImage,createdAt } = this.props.heroCardDetails[cardIndex];

  
        return (
          
          <TableRow >
            
            <TableCell colSpan={colSpan} align="center">
             <Grid container justify="center" alignItems="center">
               <Grid item xs={12} sm={4}>
            <CardBuild
                  heading={heading}
                  subTitle={body}
                  image={cardImage}
                  imageName={createdAt}
                />
                </Grid>
               </Grid>
            </TableCell>
          </TableRow>
     
        );
      },
      
    };

    return <MUIDataTable
    title={<TableHeaderButton label="Hero Section Card Settings"></TableHeaderButton>}
      columns={columns}
      data={this.props.heroCardDetails}
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
    heroCardDetails: Object.values(state.heroCardSection.heroCardDetails),
    isLoading: _.some(_.values(state.pendingStates.GET_HERO_CARD)),
    isSubmiting: _.some(_.values(state.pendingStates.DELETE_HERO_CARD)) 
    || _.some(_.values(state.pendingStates.ACTIVE_HERO_CARD)) ,
    confirmationUid: state.dialogOpen.heroListCardSeletedUid,
  };
};
export default connect(mapStateToProps, { updateHeroCardActive, updateHeroCardInActive, confiDialogOpen, deleteHeroCard })
  (withTheme(withStyles(useStyles)(HeroCardSectionList)));