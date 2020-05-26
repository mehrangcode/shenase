import * as React from 'react';

const FlexBaisBlock = (props: {colsHandler: (value: number) => void}) => {


    return (
        <React.Fragment>
            <div>
                Columns:
                    </div>
            <div className="row">
                <div className="col-2 cols" onClick={() => props.colsHandler(1)}>1 Col</div>
                <div className="col-2 cols" onClick={() => props.colsHandler(2)}>2 Col</div>
                <div className="col-2 cols" onClick={() => props.colsHandler(3)}>3 Col</div>
                <div className="col-2 cols" onClick={() => props.colsHandler(4)}>4 Col</div>
                <div className="col-2 cols" onClick={() => props.colsHandler(5)}>5 Col</div>
                <div className="col-2 cols" onClick={() => props.colsHandler(6)}>6 Col</div>
            </div>
        </React.Fragment>
    )
}

export default FlexBaisBlock