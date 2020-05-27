import * as React from 'react';
import SizeAmount from './WidthBlock';
import Boxes from '../../ElementList/Box';


interface IProps {
    
    addElement: (value: any) => void;
}
const AddElementBlock = (props: IProps) => {

    const [element, setElement] = React.useState({name: "", width: 0});
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