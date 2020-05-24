import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import AboutPage from '../AboutPage/AboutPage';
import Home from '../Home/Home';
import { AuthActions } from '../../actions/Auth/action';
import { IAuthState } from '../../actions/Auth/model';
import { IFormProps } from "../../Utils/FormController";
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import PanelPage from '../Panel/PanelPage';
import CalendarPage from '../Calendar/CalendarPage';
import Footer from '../Footer';
// import Generator from '../Generator';
import CVMaker from '../Generator/CVMaker';



type IProps = typeof AuthActions & IAuthState & IFormProps & RouteComponentProps
const LayoutManager: React.FC<IProps> = (props: IProps) => {
    return (
        <React.Fragment>
            <Navbar {...props} />
            <div className="layoutManeger">
            <Switch>
                {props.isAuth ? (
                <Route path="/generator/:sampleId" component={CVMaker} />
                    ) : null}
                {props.isAuth ? (
                <Route path="/calendar" component={CalendarPage} />
                    ) : null}
                {props.isAuth ? (
                <Route path="/about" component={CalendarPage} />
                    ) : <Route path="/about" component={AboutPage} />}
                {props.isAuth ? (
                <Route path="/" component={PanelPage} />
                    ) : <Route path="/" component={Home} />}
            </Switch>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default withRouter(connect(
    (state: IApplicationState) => state.auth,
    AuthActions,
)(LayoutManager));