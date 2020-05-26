import * as React from 'react';
import SizeAmount from './WidthBlock';


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
            style: null,
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
                <SizeAmount  width={element.width} 
                onChange={(value: number) => boxHandler(value)} />
            </div>
        </div>
    )
}

export default AddElementBlock