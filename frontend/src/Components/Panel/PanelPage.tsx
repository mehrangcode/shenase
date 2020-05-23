import React from 'react';
import { Sidebar } from './SideBar';
import { Switch, Route } from 'react-router-dom';
// type IProps = {
//     panel: IPanelState,
//     auth: IAuthState
// } & typeof PanelActions & IFormProps
const PanelPage: React.FC = () => {
    return (
        <div className="container">
           <div className="content">
           <p>Dashboard</p>
           </div>
           <Sidebar />
        </div>
    )
}
export default PanelPage;
