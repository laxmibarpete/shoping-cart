import React from 'react';
import { CustomInputComponent } from './customInputComponent';
import * as dashboard from '../store/actions/dashboardActions';
import { ItemListComponent } from './itemListComponent';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

const DashboardComoponent = (props) => {
    debugger
    const { dashboard, dashboardAction } = props;
    const stockData = dashboard.filteredList.length > 0 ? dashboard.filteredList : dashboard.inStockData 

    function handelInputChange(event) {
        debugger;
        dashboardAction.changeCatType(event.target.id)
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <CustomInputComponent type="radio" name="radio" id="gold" label="Gold" className="radio" onChange={handelInputChange}/>
            <CustomInputComponent type="radio" name="radio" id="silver" label="Silver" className="radio" onChange={handelInputChange}/>
            <CustomInputComponent type="radio" name="radio" id="platinum" label="Platinum" className="radio" onChange={handelInputChange}/>
            <CustomInputComponent type="radio" name="radio" id="iron" label="Iron" className="radio" onChange={handelInputChange}/>
            <CustomInputComponent type="radio" name="radio" id="all" label="all" className="radio" onChange={handelInputChange}/>
            <div>
            <ItemListComponent inStockDataList={stockData}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    debugger
    const { dashboard } = state;   
    return { dashboard }
  }
  
  const mapDispatchToProps = dispatch => {
      debugger
    return {
      dashboardAction: bindActionCreators(dashboard, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DashboardComoponent)

