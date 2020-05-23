import React, { useEffect } from 'react';
import { Sidebar } from './SideBar';
import { Switch, Route } from 'react-router-dom';
import { IPanelState } from '../../actions/Panel/model';
import * as PanelActions from '../../actions/Panel';
import { IFormProps } from '../../Utils/FormController';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
type IProps = IPanelState & typeof PanelActions & IFormProps;
const PanelPage: React.FC<IProps> = (props: IProps) => {
    
    useEffect(() => {
        props.getPanelData();
    }, []);


    console.log("DATA: ", props.panelData)
    return (
        <div className="container">
           <div className="content">
           <p>Dashboard</p>
           {props.panelData.data && !props.panelData.data.page && <p>INITIAL</p>}
           </div>
           <Sidebar />
        </div>
    )
}

export default connect(
    (state: IApplicationState) => state.panel,
    PanelActions,
)(PanelPage);