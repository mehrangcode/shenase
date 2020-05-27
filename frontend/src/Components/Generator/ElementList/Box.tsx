import * as React from 'react';
import { ThumboxesList } from "./Elements"

interface IProps {
    onChoose: (value: Object) => void;
}
const Boxes = (props: IProps) => {

    const loadElements = (item: any = null) => {
        let elements: any = null
        let temp = [];
        if(item) {
            temp = item
        }
        return temp.map((item: any) => {
            const className = item.className;
            switch (item.type) {

                default:
                    return elements = <div
                    className= {className}
                    key={item.id}
                    id={item.id}
                    onClick={()=> props.onChoose({...item, id: "id" + new Date().getTime()})}
                    style={item.style}>
                    {item.content ? 
                    <div dangerouslySetInnerHTML={{ __html: item.content }} /> : 
                    item.children ? loadElements(item.children): null}
                </div>;
            }
        })
    }

    return (
        <div className="boxes">
            {loadElements(ThumboxesList)}
        </div>
    )
}

export default Boxes;