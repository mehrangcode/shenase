import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { IGeneratorState } from '../../actions/Generator/model';
import * as GeneratorActions from '../../actions/Generator';
import { RouteComponentProps } from 'react-router';
import { fakeData, CVTemplate } from './FakeData';
import CircleRate from '../Rate/CircleRate';


type IProps = IGeneratorState & typeof GeneratorActions & RouteComponentProps<{ sampleId: string }>;

const CVMaker: React.FC<IProps> = (props: IProps) => {
    const [personalInfo, setPersonalInfo] = React.useState<any>(null)

    React.useEffect(() => {
        props.getTemplate(props.match.params.sampleId)
        setPersonalInfo(CVTemplate.initialData.personalInfo)
    }, []);

    const generateElements = (item: any = null) => {
        let elements: any = null
        const el = item ? item : CVTemplate.children
        return el.map((item: any) => {
            switch (item.type) {
                case "div":
                    return elements = <div
                        className={item.className}
                        key={item.id}
                        style={item.style}>
                        {item.content ?
                         <span dangerouslySetInnerHTML={{ __html: item.content }} /> 
                         : null}
                        {item.contentName ? personalInfo ? personalInfo![item.contentName] : null : null}
                        {item.children ? generateElements(item.children) : null}
                    </div>
                case "contentBox":
                    return elements = <div
                        className={item.className}
                        key={item.id}
                        style={item.style}>
                        {item.content ?
                         <span dangerouslySetInnerHTML={{ __html: item.content }} /> 
                         : null}
                        {item.contentName ? personalInfo ? personalInfo![item.contentName] : null : null}
                    </div>
                case "skills":
                    return elements = <div
                        className={item.className}
                        key={item.id}
                        style={item.style}>
                        {personalInfo && personalInfo.skills.map((skill: any) => {
                            return <div 
                            key={skill.id} 
                            className={"col-" + Math.floor(12 / item.cols)}>
                                <div className="row">
                                    <span className="mr-1" >{skill.title}</span>
                                    {skill.rate && <span > <CircleRate rate={skill.rate} /> </span>}
                                </div>
                            </div>
                        })}
                    </div>
                default:
                    return elements;
            }
        })
    }

    return (
        <div className="generatorPage">
            <h1> Generator</h1>
            <div className="engine">
                <div className="template">
                    {generateElements()}
                </div>
                <div className="generatorSideBar">
                    <h3>Sidebar</h3>
                </div>
            </div>
        </div>
    )
}



export default connect(
    (state: IApplicationState) => state.generator,
    GeneratorActions,
)(CVMaker);