import * as React from 'react';
import {RowEditor} from './RowEditor'
interface IProps {
    item: any;
    onConfirm: (updatedElement: any) => void;
}

const EditorManager = (props: IProps) => {

    switch (props.item.type) {
        case "row":
            return <RowEditor {...props} onConfirm={(value) => props.onConfirm(value)} />
    
        default:
            return null
    }

}

export default EditorManager