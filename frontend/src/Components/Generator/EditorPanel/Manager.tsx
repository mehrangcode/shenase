import * as React from 'react';
import {RowEditor} from './Panels/RowEditor'
interface IProps {
    item: any;
    onConfirm: (updatedElement: any) => void;
    onSubmit: (updatedElement: any) => void;
    onClose: () => void;
}

const EditorManager = (props: IProps) => {

    switch (props.item.type) {
        default:
            return <RowEditor {...props} onConfirm={(value) => props.onConfirm(value)} />
    }

}

export default EditorManager