import React, { useEffect } from 'react';
import { Sidebar } from './SideBar';
import { IPanelState } from '../../actions/Panel/model';
import * as PanelActions from '../../actions/Panel';
import { IFormProps } from '../../Utils/FormController';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import Spinner from '../../Utils/Spinner';
import { RouteComponentProps } from 'react-router';
type IProps = IPanelState & typeof PanelActions & IFormProps & RouteComponentProps;
const PanelPage: React.FC<IProps> = (props: IProps) => {
    
    useEffect(() => {
        props.getPanelData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    console.log("DATA: ", props.panelData)
    return (
        <div className="container">
           <div className="content">
           <p>Dashboard</p>
           <Spinner loading={props.panelData.loading} />
           {props.panelData.data && props.panelData.data.page === null && <button onClick={() => {
               props.history.push("/Generator/2")
           }}>INITIAL</button>}
           </div>
           <Sidebar />
        </div>
    )
}

export default connect(
    (state: IApplicationState) => state.panel,
    PanelActions,
)(PanelPage);