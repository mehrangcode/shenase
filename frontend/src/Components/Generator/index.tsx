import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { IGeneratorState } from '../../actions/Generator/model';
import * as GeneratorActions from '../../actions/Generator';
import { RouteComponentProps } from 'react-router';


type IProps = IGeneratorState & typeof GeneratorActions & RouteComponentProps<{sampleId: string}>;

const Generator: React.FC<IProps> = (props: IProps) => {

    return <h1> Generator</h1>
}



export default connect(
    (state: IApplicationState) => state.generator,
    GeneratorActions,
)(Generator);