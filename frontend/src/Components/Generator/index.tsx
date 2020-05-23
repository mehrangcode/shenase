import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { IGeneratorState } from '../../actions/Generator/model';
import * as GeneratorActions from '../../actions/Generator';
import { RouteComponentProps } from 'react-router';
import { fakeData } from './FakeData'


type IProps = IGeneratorState & typeof GeneratorActions & RouteComponentProps<{sampleId: string}>;

const Generator: React.FC<IProps> = (props: IProps) => {

    const [elements, loadElements] = React.useState()
    React.useEffect(()=>{
        props.getTemplate(props.match.params.sampleId)
        loadElements(generateElements())
    },[])
    const generateElements = (item: any = null) => {
        let elements: any = null
        const el = item ? item : fakeData.children
        return el.map((item: any) => {
            switch (item.type) {
                case "div":
                    return elements = <div key={item.id
                    } style={item.style}
                    onClick={() => console.log("ID: ", item.id)}
                     className={item.className}>
                        {generateElements(item.children)}
                    </div>
                case "contentBox":
                    return elements = <div key={item.id} 
                    style={item.style} 
                    onClick={() => console.log("ID: ", item.id)}
                    className={item.className}>
                        {item.content}
                    </div>
                default:
                    return elements;
            }
        })
    }

    console.log("Elements: ", elements)
    return (
    <div>
        <h1> Generator</h1>
        <div className="template">
            {elements}
        </div>
    </div>
    )
}



export default connect(
    (state: IApplicationState) => state.generator,
    GeneratorActions,
)(Generator);