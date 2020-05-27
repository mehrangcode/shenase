import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { IGeneratorState } from '../../actions/Generator/model';
import * as GeneratorActions from '../../actions/Generator';
import { RouteComponentProps } from 'react-router';
import { Blank } from './FakeData'
import FloatBox from '../../Utils/DragBox/Box';
import EditorManager from './EditorPanel/Manager';


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

    const deleteExtraElement = (source: any, itemId: string) => {
        const root = source ? source : template;
        root.children = root.children.filter((x: any) => x.id !== itemId)
        const newRoot = root.children.map((child: any) => {
            if(child.children){
                child = deleteExtraElement(child, itemId)
            }
            return child
        })
        root.children = newRoot;
        return root
    }

    const deleteElementHandler = (item: any) => {
        const xx = JSON.parse(JSON.stringify(deleteExtraElement(null, item.id)));
        console.log(xx)
        if(xx.children.length <= 0){
            xx.children= [
                {
                    id: "Root",
                    type:"box",
                    tooltip: "Main",
                    style: null,
                    children:[],
                    className: "rootElement isParrent",
                    placeHolder: "Create Yor own site"
                }
            ]
        }
        loadtemplate(xx);
        panelCloseHandler()
    }
    const elementSelectHandler = (e: any, item: any) => {
        setPosX(e.pageX);
        setPosY(e.pageY);
        chooseItem(item);
        const xx = deleteExtraElement(null, "newElement")
        loadtemplate(xx)
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
            const className = item.className + (item.children && item.children.length > 0 ? " isParrent" : " isChild")
            switch (item.type) {

                default:
                    return elements = <div
                    className= {className}
                    key={item.id}
                    id={item.id}
                    style={item.children && item.children.length <= 0 ?{...item.style, minHeight:"60px"} : item.style}>
                    {!panelStatus && <div className="editorPanel">
                        <button onClick={(e) => {
                            elementSelectHandler(e, item)
                        }}>{item.tooltip}</button>
                        <button onClick={() => deleteElementHandler(item)}>X</button>
                    </div>}
                    {item.content ? 
                    <div dangerouslySetInnerHTML={{ __html: item.content }} /> : 
                    item.children  && item.children.length > 0  ? generateElements(item.children) :
                    <div className="placeHolder"> {item.placeHolder} </div>}
                </div>;
            }
        })
    }

    const updateElements = (source: any, item: any) => {
        const root = JSON.parse(JSON.stringify(source ? source : template));
        const newRoot = root.children.map((child: any) => {
            if(child.children){
                child = updateElements(child, item)
            }
            if(child.id === item.id){
                child = {...item}
            }
            return child
        })
        root.children = newRoot;
        return root
    }
    const elementsUpdateHandler= (item: any) => {
        const newTemp = updateElements(null, item);
        console.log("TEMP: ", newTemp, item)
        // loadtemplate(null)
        loadtemplate(newTemp)
    }
    const onModalSubmit= (item: any) => {
        const itemX = item;
        if(item.children){
            itemX.children = item.children.map((x:any) => {
                if(x.id === "newElement"){
                    x.id = "id" + new Date().getTime();
                }
                return x;
            })
        }
        const newTemp = updateElements(null, itemX);
        // loadtemplate(null)
        loadtemplate(newTemp)
    }
    console.log("State: ", template)
    return (
        <div className="generatorPage">
            <h1> Generator</h1>
            <div className="engine">
                {panelStatus && <FloatBox
                posX = {posX > 700 ? posX - 600 : posX}
                posY = {posY < 10 ? posY + 50 : posY}
                     title = {selectedItem?.tooltip}>
                     <EditorManager 
                     item={selectedItem} 
                     onClose={panelCloseHandler}
                     onSubmit = {(updatedElement: any) => {
                        onModalSubmit(updatedElement)
                     }}
                     onConfirm= {(updatedElement) => {
                        elementsUpdateHandler(updatedElement)
                     }} />
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