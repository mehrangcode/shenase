import * as React from 'react';
import SizeAmount from './WidthBlock';
import Boxes from '../../ElementList/Box';


interface IProps {
    
    addElement: (value: any) => void;
}
const AddElementBlock = (props: IProps) => {

    const [element, setElement] = React.useState({name: "", width: 0})
    const boxHandler = (elementWidth: number) => {
        const newEl = {
            id: "newElement",
            tooltip: "Box",
            type: "box",
            content: "Box" + elementWidth,
            children: [],
            style: {
                borderRadius: "10px",
                minHeight: "350px",
                border: "1px solid black",
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "start",
                alignItems: "start"
            },
            className: "col-" + elementWidth
        };
        if(elementWidth < 1){
            props.addElement(null);
        } else {
            props.addElement(newEl);
        }
        setElement({name: "", width: elementWidth})

    }
    return (
        <div className="addElement">
            <div className="addBox">

                <div className="elementName">
                    Box
                </div>
                <Boxes onChoose={(value: Object) => props.addElement(value)} />
                {/* <SizeAmount  width={element.width} 
                onChange={(value: number) => boxHandler(value)} /> */}
            </div>
        </div>
    )
}

export default AddElementBlock