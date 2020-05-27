import * as React from 'react';
import BorderEditor from '../Blocks/Border';
import FlexBaisBlock from '../Blocks/FlexBaisBlock';
import AddElementBlock from '../Blocks/AddElement';
import ColorBox from '../Blocks/ColorBox';
import MarginBox from '../Blocks/Margin';
import PaddingBox from '../Blocks/PaddingBox';

interface IProps {
    item: any;
    onConfirm: (updatedElement: any) => void;
    onSubmit: (updatedElement: any) => void;
    onClose: () => void;
}

export const RowEditor = (props: IProps) => {
    const [sliders, setSliders] = React.useState<any>({ width: 0, height: 0, margin: 0, padding: 0 });
    const [objElement, updateElement] = React.useState<any>(props.item);
    const [oldObj, setOldObj] = React.useState<any>(null);
    const [tabIndex, setTabIndex] = React.useState<number>(1)

    React.useEffect(() => {
        setOldObj(JSON.parse(JSON.stringify(props.item)))
        let w = props.item.style && props.item.style.width ?
            Math.round(props.item.style.width.replace(/(%|px)/, "")) : "5";
        let h = props.item.style && props.item.style.height ?
            props.item.style.height.replace(/(%|px)/, "") : "5";
        let m = props.item.style && props.item.style.margin ?
            props.item.style.margin.replace(/(%|px)/, "") : "5";
        let p = props.item.style && props.item.style.padding ?
            props.item.style.padding.replace(/(%|px)/, "") : "5";
        setSliders({
            width: w,
            height: h,
            margin: m,
            padding: p,
        })
    }, []);


    React.useEffect(() => {
        const newObj = JSON.parse(JSON.stringify(objElement))
        if (newObj.children) {
            newObj.children = objElement.children.filter((x: any) => x.id !== "newElement")
        }
        updateElement(newObj)
    }, [tabIndex])
    React.useEffect(() => {
        props.onConfirm(objElement)
    }, [objElement]);

    React.useEffect(() => {
        updateElement(props.item)
        if (oldObj && props.item) {
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
            child.style = { ...child.style, width: (100 / colsAmount) + "%", minWidth: (100 / colsAmount) + "%" }
            return child;
        })
        row.children = newChildren
        row.style = {
            ...row.style,
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "start",
            alignItems: "start"
        }
        row.cols = colsAmount;

        updateElement(row)
    }
    const styleChanageHandler = (name: string, value: string) => {
        const el = { ...objElement }
        const newStyle = { ...el.style }
        newStyle.border = value
        el.style = newStyle;
        updateElement(el)
    }
    const bgColorHandler = (value: string) => {
        const el = { ...objElement }
        const newStyle = { ...el.style }
        newStyle.backgroundColor = value
        el.style = newStyle;
        updateElement(el)

    }
    const addingElementHandler = (element: any) => {
        let el = element
        const parrent = { ...objElement }
        const newChildren = parrent.children ? parrent.children : [];
        const index = newChildren.findIndex((x: any) => x.id === element.id)
        if (index >= 0) {
            newChildren[index] = el
        } else {
            newChildren.push(el)
        }
        updateElement({ ...parrent, children: newChildren })
    }
    const slidersHandler = (e: any, sizeType: string) => {
        const updatedElement = JSON.parse(JSON.stringify(objElement))
        updatedElement.style = { ...objElement.style, [e.target.name]: e.target.value + sizeType }
        updateElement(updatedElement)

        setSliders({
            ...sliders,
            [e.target.name]: e.target.value
        })

    }
    console.log("Sliders:", sliders)
    return <div className="rowEditor">
        <div className="row">
            <div onClick={() => tabsHandler(2)}>Content</div>
            <div onClick={() => tabsHandler(1)}>Style</div>
            <div onClick={() => tabsHandler(1)}></div>
            <div onClick={() => tabsHandler(1)}></div>
            <div onClick={() => tabsHandler(1)}></div>
            <div onClick={() => tabsHandler(1)}></div>
        </div>
        <div className="tabs">
            {tabIndex === 2 && (
                <AddElementBlock addElement={(value) => {
                    addingElementHandler(value)
                }} />
            )}
            {tabIndex === 1 && (
                <React.Fragment>
                    <div className="elSize">
                        <div className="row">
                            <div className="col-2">
                                Width:
                            </div>
                            <div className="col-1">
                            <input type="text" name="width" 
                            value={sliders.width} onChange={(e)=> slidersHandler(e, "%")} />    
                            </div>
                            <div className="col-9">
                                <input type="range" name="width" id="height" min="1" max="100"
                                    defaultValue={sliders.width}
                                    value={sliders.width}
                                    onChange={(e) => {
                                        slidersHandler(e, "%");
                                    }} />
                            </div>
                            <div className="col-2">
                                Height:
                            </div>
                            <div className="col-1">
                                <input type="text" name="height" 
                                value={sliders.height} onChange={(e)=> slidersHandler(e, "px")} />  
                            </div>
                            <div className="col-9">
                                <input type="range" name="height" id="height" min="1" max="1000"
                                    defaultValue={sliders.height}
                                    value={sliders.height}
                                    onChange={(e) => {
                                        slidersHandler(e, "px");
                                    }} />
                            </div>
                        </div>
                        <div className="row">
                            <MarginBox margin={sliders.margin} onChange={(event) => slidersHandler(event, "px")} />
                            <PaddingBox padding={sliders.padding} onChange={(event) => slidersHandler(event, "px")} />
                        </div>
                    </div>
                    <FlexBaisBlock colsHandler={(value) => colsHandler(value)} />
                    <BorderEditor
                        border={objElement.style && objElement.style.border ? objElement.style.border : ""}
                        onChange={(value: string) => styleChanageHandler("border", value)} />
                    Color: <br />
                    <ColorBox
                        color={objElement.style ? objElement.backgroundColor : "#0aa"}
                        boxType="sketch"
                        onChange={(value) => {
                            bgColorHandler(value)
                        }} />
                </React.Fragment>
            )}
        </div>
        <div className="row mt-3">
            <button onClick={() => {
                props.onSubmit(objElement);
                props.onClose();
            }}>Confirm</button>
            <button onClick={() => {
                props.onConfirm(oldObj);
                props.onClose();
            }}>Cancel</button>
        </div>
    </div>
}
