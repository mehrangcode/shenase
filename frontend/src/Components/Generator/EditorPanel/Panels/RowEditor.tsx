import * as React from 'react';
import BorderEditor from '../Blocks/Border';

interface IProps {
    item: any;
    onConfirm: (updatedElement: any) => void;
    onClose: () => void;
}

export const RowEditor = (props: IProps) => {
    const [objElement, updateElement] = React.useState<any>(props.item);
    const [oldObj, setOldObj] = React.useState<any>(null);
    const [tabIndex, setTabIndex] = React.useState<number>(1)

    React.useEffect(() => {
        setOldObj(JSON.parse(JSON.stringify(props.item)))
    }, []);

    React.useEffect(() => {
        props.onConfirm(objElement)
    }, [objElement]);

    React.useEffect(() => {
        updateElement(props.item)
    }, [props.item]);
    
    const tabsHandler = (index: number) => {
        setTabIndex(index)
    }
    const colsHandler = (colsAmount: number) => {
        const row = { ...objElement }
        const newChildren = row.children.map((child: any) => {
            child.className = "col-" + (12 / colsAmount) + " " + child.className.replace(("col-" + 12 / row.cols), "")
            return child;
        })
        row.children = newChildren
        row.cols = colsAmount;

        updateElement(row)
    }
    const styleChanageHandler = (name: string, value: string) => {
        const el = {...objElement}
        const newStyle ={...el.style}
        newStyle.border = value
        el.style = newStyle;
        updateElement(el)
    }
    return <div className="rowEditor">
        <div className="row">
            <div onClick={() => tabsHandler(1)}>Content</div>
            <div onClick={() => tabsHandler(2)}>Style</div>
            <div onClick={() => tabsHandler(1)}></div>
            <div onClick={() => tabsHandler(1)}></div>
            <div onClick={() => tabsHandler(1)}></div>
            <div onClick={() => tabsHandler(1)}></div>
        </div>
        <div className="tabs">
            {tabIndex === 1 && (
                
                <React.Fragment>
                    <div>
                        Columns:
                    </div>
                    <div className="row">
                        <div className="col-2 cols" onClick={() => colsHandler(1)}>1 Col</div>
                        <div className="col-2 cols" onClick={() => colsHandler(2)}>2 Col</div>
                        <div className="col-2 cols" onClick={() => colsHandler(3)}>3 Col</div>
                        <div className="col-2 cols" onClick={() => colsHandler(4)}>4 Col</div>
                        <div className="col-2 cols" onClick={() => colsHandler(5)}>5 Col</div>
                        <div className="col-2 cols" onClick={() => colsHandler(6)}>6 Col</div>
                    </div>
                </React.Fragment>
            )}
            {tabIndex === 2 && (
                <React.Fragment>
                    <BorderEditor 
                    border = {objElement.style && objElement.style.border ? objElement.style.border : "" }
                    onChange={(value: string) => styleChanageHandler("border", value)} />
                </React.Fragment>
            )}
        </div>
        <div className="row mt-3">
            <button onClick={()=>{
                props.onClose();
            }}>Confirm</button>
            <button onClick={()=>{
                props.onConfirm(oldObj);
                props.onClose();
            }}>Cancel</button>
        </div>
    </div>
}
