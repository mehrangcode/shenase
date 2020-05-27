import * as React from 'react';
import BorderEditor from '../Blocks/Border';
import FlexBaisBlock from '../Blocks/FlexBaisBlock';
import AddElementBlock from '../Blocks/AddElement';

interface IProps {
    item: any;
    onConfirm: (updatedElement: any) => void;
    onSubmit: (updatedElement: any) => void;
    onClose: () => void;
}

export const RowEditor = (props: IProps) => {
    const [objElement, updateElement] = React.useState<any>(props.item);
    const [oldObj, setOldObj] = React.useState<any>(null);
    const [tabIndex, setTabIndex] = React.useState<number>(1)

    React.useEffect(() => {
        setOldObj(JSON.parse(JSON.stringify(props.item)))
    }, []);

    React.useEffect(()=> {
    const newObj = JSON.parse(JSON.stringify(objElement))
    if(newObj.children) {
        newObj.children = objElement.children.filter((x:any)=> x.id !== "newElement")
    }
    updateElement(newObj)
    },[tabIndex])
    React.useEffect(() => {
        props.onConfirm(objElement)
    }, [objElement]);

    React.useEffect(() => {
        updateElement(props.item)
        if(oldObj && props.item){
            if (oldObj.id !== props.item) {
                setOldObj(JSON.parse(JSON.stringify(props.item)))
            }
        }
    }, [props.item]);
    
    const tabsHandler = (index: number) => {
        setTabIndex(index)
    }
    const colsHandler = (colsAmount: number) => {
        const row = { ...objElement }
        const newChildren = row.children.map((child: any) => {
            child.style = {...child.style, width: (100 / colsAmount) +"%"}
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
    const addingElementHandler = (element: any) => {
        let el = element
        const parrent = {...objElement}
        const newChildren = parrent.children ? parrent.children : [];
        const index = newChildren.findIndex((x: any) => x.id === element.id)
        if(index >= 0){
            newChildren[index] = el
        } else {
            newChildren.push(el)
        }
        updateElement({...parrent, children: newChildren})
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
                <AddElementBlock addElement={(value) => {
                    addingElementHandler(value)}} />
                )}
            {tabIndex === 2 && (
                <React.Fragment>
                    <FlexBaisBlock colsHandler={(value) => colsHandler(value)} />
                    <BorderEditor 
                    border = {objElement.style && objElement.style.border ? objElement.style.border : "" }
                    onChange={(value: string) => styleChanageHandler("border", value)} />
                </React.Fragment>
            )}
        </div>
        <div className="row mt-3">
            <button onClick={()=>{
                props.onSubmit(objElement);
                props.onClose();
            }}>Confirm</button>
            <button onClick={()=>{
                props.onConfirm(oldObj);
                props.onClose();
            }}>Cancel</button>
        </div>
    </div>
}
