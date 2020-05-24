import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { IGeneratorState } from '../../actions/Generator/model';
import * as GeneratorActions from '../../actions/Generator';
import { RouteComponentProps } from 'react-router';
import { fakeData } from './FakeData'
import FloatBox from '../../Utils/DragBox/Box';


type IProps = IGeneratorState & typeof GeneratorActions & RouteComponentProps<{ sampleId: string }>;

const Generator: React.FC<IProps> = (props: IProps) => {

    const [elements, loadElements] = React.useState(null)
    const [objElement, setObjElements] = React.useState(null)
    const [selectedItem, chooseItem] = React.useState(null)
    const [panelStatus, showPanel] = React.useState(false)
    const [posX, setPosX] = React.useState(0)
    const [posY, setPosY] = React.useState(0)
    React.useEffect(() => {
        props.getTemplate(props.match.params.sampleId)
        loadElements(generateElements())
    }, []);
    // e.stopPropagation(); thats stop trackin up for click event

    const elementSelectHandler = (e: any, item: any) => {
        setPosX(e.pageX);
        setPosY(e.pageY);
        chooseItem(item);
        showPanel(true)
    }
    const panelCloseHandler = () => {
        showPanel(false);
        chooseItem(null)
    }
    const generateElements = (item: any = null) => {
        let elements: any = null
        const el = item ? item : fakeData.children
        return el.map((item: any) => {
            switch (item.type) {
                case "div":
                    return elements = <div
                        className={item.className + " el"}
                        key={item.id}
                        style={item.style}>
                        <div className="parentPanel">
                            <button onClick={(e) => {
                                elementSelectHandler(e, item)
                            }}>{item.type}</button>
                        </div>
                        {generateElements(item.children)}
                    </div>
                case "contentBox":
                    return elements = <div
                        className={item.className + " el"}
                        key={item.id}
                        style={item.style}>
                        <div className="childPanel">
                            <button onClick={(e) => {
                                elementSelectHandler(e, item)
                            }}>{item.type}</button>
                        </div>
                        {item.content}
                    </div>
                default:
                    return elements;
            }
        })
    }

    console.log("Elements: ", elements)
    return (
        <div className="generatorPage">
            <h1> Generator</h1>
            <div className="engine">
                {panelStatus && <FloatBox
                posX = {posX > 700 ? posX - 600 : posX}
                posY = {posY < 10 ? posY + 50 : posY}
                 onClose={panelCloseHandler} />}
                <div className="template">
                    {elements}
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
)(Generator);