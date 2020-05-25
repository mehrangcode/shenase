import * as React from 'react';

interface IProps {
    item: any;
    onConfirm: (updatedElement: any)=> void;
}

export const RowEditor = (props: IProps) => {
    const [objElement, updateElement] = React.useState<any>(JSON.parse(JSON.stringify(props.item)))

    React.useEffect(()=>{
        props.onConfirm(objElement)
    },[objElement]);

    const colsHandler = (colsAmount: number) => {
        const row = {...objElement}
        const newChildren = row.children.map((child: any) => {
            child.className = "col-" + (12 / colsAmount) + " " + child.className.replace(("col-" + 12 / row.cols), "") 
            return child;
        })
        row.children = newChildren
        row.cols = colsAmount;

        updateElement(row)
    }
    return <div className="rowEditor">
        <p>rowEditor</p>
        <div>
            Columns: 
        </div>
        <div className="row">
            <div className="col-2 cols" onClick={()=>colsHandler(1)}>1 Col</div>
            <div className="col-2 cols" onClick={()=>colsHandler(2)}>2 Col</div>
            <div className="col-2 cols" onClick={()=>colsHandler(3)}>3 Col</div>
            <div className="col-2 cols" onClick={()=>colsHandler(4)}>4 Col</div>
            <div className="col-2 cols" onClick={()=>colsHandler(5)}>5 Col</div>
            <div className="col-2 cols" onClick={()=>colsHandler(6)}>6 Col</div>
        </div>

        <button onClick={() => props.onConfirm(objElement)}>
            COnfirm
        </button>
    </div>
}
