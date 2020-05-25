import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { IGeneratorState } from '../../actions/Generator/model';
import * as GeneratorActions from '../../actions/Generator';
import { RouteComponentProps } from 'react-router';
import { Blank } from './FakeData'
import FloatBox from '../../Utils/DragBox/Box';


type IProps = IGeneratorState & typeof GeneratorActions & RouteComponentProps<{ sampleId: string }>;

const Generator: React.FC<IProps> = (props: IProps) => {

    const [template, loadtemplate] = React.useState<any>(null)
    const [selectedItem, chooseItem] = React.useState<any>(null)
    const [panelStatus, showPanel] = React.useState(false)
    const [posX, setPosX] = React.useState(0)
    const [posY, setPosY] = React.useState(0)
    React.useEffect(() => {
        // props.getTemplate(props.match.params.sampleId)
        loadtemplate(Blank)
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
        let temp = [];
        if(template) {
            if(template.children){
                temp = template.children;
            }
        }
        if(item) {
            temp = item
        }
        return temp.map((item: any) => {
            switch (item.type) {
                case "div":
                    return elements = <div
                        className={item.className + " el"}
                        key={item.id}
                        style={item.style}>
                        <div className="editorPanel">
                            <button onClick={(e) => {
                                elementSelectHandler(e, item)
                            }}>{item.tooltip}</button>
                        </div>
                        {item.content ? 
                        <div dangerouslySetInnerHTML={{ __html: item.content }} /> : 
                        generateElements(item.children)}
                    </div>
                case "row":
                    return elements = <div
                        className={item.className + " el"}
                        key={item.id}
                        style={item.style}>
                        <div className="editorPanel">
                            <button onClick={(e) => {
                                elementSelectHandler(e, item)
                            }}>{item.tooltip}</button>
                        </div>
                        {item.content ? 
                        <div dangerouslySetInnerHTML={{ __html: item.content }} /> : 
                        generateElements(item.children)}
                    </div>
                case "col":
                    return elements = <div
                        className={item.className + " el"}
                        key={item.id}
                        style={item.style}>
                        <div className="editorPanel">
                            <button onClick={(e) => {
                                elementSelectHandler(e, item)
                            }}>{item.tooltip}</button>
                        </div>
                        {item.content ? 
                        <div dangerouslySetInnerHTML={{ __html: item.content }} /> : 
                        generateElements(item.children)}
                    </div>
                case "contentBox":
                    return elements = <div
                        className={item.className + " el"}
                        key={item.id}
                        style={item.style}>
                        <div className="editorPanel">
                            <button onClick={(e) => {
                                elementSelectHandler(e, item)
                            }}>{item.tooltip}</button>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
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
                {panelStatus && <FloatBox
                posX = {posX > 700 ? posX - 600 : posX}
                posY = {posY < 10 ? posY + 50 : posY}
                 onClose={panelCloseHandler}>
                     <h3> { selectedItem?.type } </h3>
                     </FloatBox>}
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
)(Generator);